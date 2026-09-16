use regex::Regex;
use serde::{Deserialize, Serialize};
use std::path::Path;
use std::sync::Mutex;
use tauri::{AppHandle, Emitter, State};
use tauri_plugin_shell::process::{CommandChild, CommandEvent};
use tauri_plugin_shell::ShellExt;

#[derive(Default)]
pub struct DownloadState {
    child: Mutex<Option<CommandChild>>,
    cancelled: Mutex<bool>,
}

impl DownloadState {
    /// Corta cualquier descarga activa. Se usa al cerrar la ventana para no
    /// dejar un yt-dlp huérfano corriendo (y escribiendo fragmentos) en
    /// segundo plano una vez que la app ya no está.
    pub fn kill_active(&self) {
        if let Some(child) = self.child.lock().unwrap().take() {
            let _ = child.kill();
        }
    }
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ProgressPayload {
    pub percent: f32,
    pub speed: String,
    pub eta: String,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct CompletePayload {
    pub path: String,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ErrorPayload {
    pub message: String,
}

// yt-dlp descarga cada fragmento HLS a su propio archivo temporal
// ("<salida>.part-FragN.part") y arma el archivo final ("<salida>.part")
// a partir de ellos; también deja un ".ytdl" con metadata de reanudación.
// Si la descarga se cancela o falla a mitad de camino, esos archivos
// quedan sueltos en la carpeta — como esta app no ofrece "reanudar",
// se limpian para que solo quede un resultado limpio (o ninguno).
fn cleanup_partial_files(dest_dir: &str) {
    let Ok(entries) = std::fs::read_dir(dest_dir) else {
        return;
    };
    for entry in entries.flatten() {
        let name = entry.file_name();
        let name = name.to_string_lossy();
        if name.contains(".part") || name.ends_with(".ytdl") {
            let _ = std::fs::remove_file(entry.path());
        }
    }
}

fn build_args(url: &str, mode: &str, format: &str, quality: &str, dest_dir: &str, ffmpeg_dir: Option<&Path>) -> Vec<String> {
    let output_template = Path::new(dest_dir)
        .join("%(title)s.%(ext)s")
        .to_string_lossy()
        .to_string();

    let mut args: Vec<String> = vec![
        "--newline".into(),
        "--no-playlist".into(),
        // YouTube sirve el video como HLS fragmentado (cientos/miles de
        // fragmentos). Por defecto yt-dlp los baja de a uno, en una sola
        // conexión, lo que deja la velocidad muy por debajo del ancho de
        // banda real del usuario. Bajar varios fragmentos en paralelo es
        // lo que de verdad la acelera.
        "--concurrent-fragments".into(),
        "16".into(),
        "-o".into(),
        output_template,
    ];

    if let Some(dir) = ffmpeg_dir {
        args.push("--ffmpeg-location".into());
        args.push(dir.to_string_lossy().to_string());
    }

    if mode == "audio" {
        args.extend([
            "-f".into(),
            "bestaudio".into(),
            "-x".into(),
            "--audio-format".into(),
            format.to_string(),
            "--audio-quality".into(),
            format!("{quality}K"),
        ]);
    } else {
        args.extend([
            "-f".into(),
            format!("bestvideo[height<={quality}]+bestaudio/best[height<={quality}]"),
            "--merge-output-format".into(),
            format.to_string(),
        ]);
    }

    args.push(url.to_string());
    args
}

#[tauri::command]
pub async fn start_download(
    app: AppHandle,
    state: State<'_, DownloadState>,
    url: String,
    mode: String,
    format: String,
    quality: String,
    dest_dir: String,
) -> Result<(), String> {
    // Los binarios sidecar (yt-dlp, ffmpeg) quedan siempre junto al ejecutable
    // de la app, tanto en dev como en el bundle final.
    let ffmpeg_dir = std::env::current_exe()
        .ok()
        .and_then(|p| p.parent().map(|p| p.to_path_buf()));

    let args = build_args(&url, &mode, &format, &quality, &dest_dir, ffmpeg_dir.as_deref());

    let (mut rx, child) = app
        .shell()
        .sidecar("yt-dlp")
        .map_err(|e| e.to_string())?
        .args(args)
        .spawn()
        .map_err(|e| e.to_string())?;

    // Si ya había una descarga en curso, se corta antes de reemplazarla —
    // de lo contrario quedaría corriendo sin que nada pueda cancelarla.
    if let Some(previous) = state.child.lock().unwrap().take() {
        let _ = previous.kill();
    }
    *state.child.lock().unwrap() = Some(child);
    *state.cancelled.lock().unwrap() = false;

    // Nota sobre el "~": yt-dlp antepone una virgulilla al tamaño cuando es
    // una ESTIMACIÓN (típico en descargas HLS fragmentadas, como el video de
    // YouTube), y la separa del número con espacios de alineación
    // ("of ~   6.42MiB"). Sin el `(?:~\s*)?` ahí, `\S+` solo capturaba el
    // "~" suelto y rompía la coincidencia de "at <velocidad>" y "ETA" que
    // le siguen.
    let progress_re = Regex::new(
        r"(?i)\[download\]\s+(\d+(?:\.\d+)?)%(?:\s+of\s+(?:~\s*)?\S+)?(?:\s+at\s+([\d.]+\w+/s|Unknown speed))?(?:\s+ETA\s+(\S+))?(?:\s+\(frag\s+(\d+)/(\d+)\))?",
    )
    .unwrap();
    let dest_path = dest_dir;
    // Video = 2 streams por descargar (video + audio, luego se fusionan);
    // audio = 1 solo stream. Se usa para que el % general avance parejo en
    // vez de saltar de vuelta a 0 cuando arranca el segundo stream.
    let total_phases: f32 = if mode == "audio" { 1.0 } else { 2.0 };
    let mut phase: f32 = 1.0;

    tauri::async_runtime::spawn(async move {
        use tauri::Manager;
        let mut stderr_tail = String::new();

        while let Some(event) = rx.recv().await {
            match &event {
                CommandEvent::Stdout(bytes) => {
                    let line = String::from_utf8_lossy(bytes);

                    if line.contains("[download] Destination:") && phase < total_phases {
                        phase += 1.0;
                    }

                    if let Some(caps) = progress_re.captures(&line) {
                        // Con fragmentos disponibles, "fragmento actual / total"
                        // es un indicador mucho más estable que el % relativo
                        // a un tamaño estimado que se recalcula todo el tiempo.
                        let phase_percent: f32 = match (caps.get(4), caps.get(5)) {
                            (Some(idx), Some(total)) => {
                                let idx: f32 = idx.as_str().parse().unwrap_or(0.0);
                                let total = total.as_str().parse::<f32>().unwrap_or(1.0).max(1.0);
                                (idx / total * 100.0).min(100.0)
                            }
                            _ => caps
                                .get(1)
                                .and_then(|m| m.as_str().parse().ok())
                                .unwrap_or(0.0),
                        };
                        let percent =
                            (((phase - 1.0) * 100.0 + phase_percent) / total_phases).min(100.0);
                        let speed = caps
                            .get(2)
                            .map(|m| m.as_str().to_string())
                            .unwrap_or_else(|| "—".into());
                        let eta = caps
                            .get(3)
                            .map(|m| m.as_str().to_string())
                            .unwrap_or_else(|| "—".into());
                        let _ = app.emit(
                            "download-progress",
                            ProgressPayload { percent, speed, eta },
                        );
                    }
                }
                CommandEvent::Stderr(bytes) => {
                    stderr_tail = String::from_utf8_lossy(bytes).trim().to_string();
                }
                CommandEvent::Terminated(payload) => {
                    let state = app.state::<DownloadState>();
                    let was_cancelled = {
                        let mut cancelled = state.cancelled.lock().unwrap();
                        std::mem::replace(&mut *cancelled, false)
                    };
                    state.child.lock().unwrap().take();

                    if was_cancelled {
                        // Cancelación pedida por el usuario: no es un error,
                        // pero sí hay que barrer los .part/.ytdl que haya
                        // dejado a medias.
                        cleanup_partial_files(&dest_path);
                    } else if payload.code == Some(0) {
                        let _ = app.emit(
                            "download-complete",
                            CompletePayload { path: dest_path.clone() },
                        );
                    } else {
                        cleanup_partial_files(&dest_path);
                        let message = if stderr_tail.is_empty() {
                            "yt-dlp terminó con un error. Revisa el link e inténtalo de nuevo.".to_string()
                        } else {
                            stderr_tail.clone()
                        };
                        let _ = app.emit("download-error", ErrorPayload { message });
                    }
                }
                _ => {}
            }
        }
    });

    Ok(())
}

#[tauri::command]
pub fn cancel_download(state: State<'_, DownloadState>) -> Result<(), String> {
    *state.cancelled.lock().unwrap() = true;
    if let Some(child) = state.child.lock().unwrap().take() {
        child.kill().map_err(|e| e.to_string())?;
    }
    Ok(())
}
