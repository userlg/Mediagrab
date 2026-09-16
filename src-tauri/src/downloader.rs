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

fn build_args(url: &str, mode: &str, format: &str, quality: &str, dest_dir: &str, ffmpeg_dir: Option<&Path>) -> Vec<String> {
    let output_template = Path::new(dest_dir)
        .join("%(title)s.%(ext)s")
        .to_string_lossy()
        .to_string();

    let mut args: Vec<String> = vec!["--newline".into(), "-o".into(), output_template];

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

    let progress_re = Regex::new(
        r"(?i)\[download\]\s+(\d+(?:\.\d+)?)%(?:\s+of\s+\S+)?(?:\s+at\s+([\d.]+\w+/s|Unknown speed))?(?:\s+ETA\s+(\S+))?",
    )
    .unwrap();
    let dest_path = dest_dir;

    tauri::async_runtime::spawn(async move {
        use tauri::Manager;
        let mut stderr_tail = String::new();

        while let Some(event) = rx.recv().await {
            match &event {
                CommandEvent::Stdout(bytes) => {
                    let line = String::from_utf8_lossy(bytes);
                    if let Some(caps) = progress_re.captures(&line) {
                        let percent: f32 = caps
                            .get(1)
                            .and_then(|m| m.as_str().parse().ok())
                            .unwrap_or(0.0);
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
                        // Cancelación pedida por el usuario: no es un error.
                    } else if payload.code == Some(0) {
                        let _ = app.emit(
                            "download-complete",
                            CompletePayload { path: dest_path.clone() },
                        );
                    } else {
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
