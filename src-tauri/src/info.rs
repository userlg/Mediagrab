use crate::i18n::tr;
use serde::{Deserialize, Serialize};
use std::sync::Mutex;
use tauri::{AppHandle, State};
use tauri_plugin_shell::process::CommandEvent;
use tauri_plugin_shell::ShellExt;

#[derive(Default)]
pub struct InfoState(Mutex<Option<tauri_plugin_shell::process::CommandChild>>);

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct VideoInfo {
    pub title: String,
    pub thumbnail: Option<String>,
    pub duration: Option<f64>,
    pub video_qualities: Vec<u32>,
    pub audio_bitrates: Vec<u32>,
}

fn read_quality(format: &serde_json::Value) -> (Option<u32>, Option<u32>) {
    let has_video = format
        .get("vcodec")
        .and_then(|v| v.as_str())
        .map(|c| c != "none")
        .unwrap_or(false);
    let has_audio = format
        .get("acodec")
        .and_then(|v| v.as_str())
        .map(|c| c != "none")
        .unwrap_or(false);

    if has_video {
        let height = format.get("height").and_then(|v| v.as_u64()).map(|h| h as u32);
        (height, None)
    } else if has_audio {
        let abr = format
            .get("abr")
            .and_then(|v| v.as_f64())
            .map(|a| a.round() as u32)
            .filter(|a| *a > 0);
        (None, abr)
    } else {
        (None, None)
    }
}

#[tauri::command]
pub async fn fetch_info(
    app: AppHandle,
    state: State<'_, InfoState>,
    url: String,
    lang: String,
) -> Result<VideoInfo, String> {
    let (mut rx, child) = app
        .shell()
        .sidecar("yt-dlp")
        .map_err(|e| e.to_string())?
        .args(["-J", "--no-playlist", "--no-warnings", &url])
        .spawn()
        .map_err(|e| e.to_string())?;

    // Si el usuario ya cambió de link, el análisis anterior queda obsoleto:
    // se corta para no seguir gastando red/CPU en una respuesta que nadie va a leer.
    if let Some(previous) = state.0.lock().unwrap().take() {
        let _ = previous.kill();
    }
    *state.0.lock().unwrap() = Some(child);

    let mut stdout = String::new();
    let mut stderr = String::new();
    let mut exit_ok = false;

    while let Some(event) = rx.recv().await {
        match event {
            CommandEvent::Stdout(bytes) => stdout.push_str(&String::from_utf8_lossy(&bytes)),
            CommandEvent::Stderr(bytes) => stderr.push_str(&String::from_utf8_lossy(&bytes)),
            CommandEvent::Terminated(payload) => exit_ok = payload.code == Some(0),
            _ => {}
        }
    }
    state.0.lock().unwrap().take();

    if !exit_ok {
        let prefix = tr(&lang, "Couldn't analyze the link", "No se pudo analizar el link");
        return Err(format!("{prefix}: {}", stderr.trim()));
    }

    let json: serde_json::Value = serde_json::from_str(&stdout).map_err(|e| e.to_string())?;

    let title = json
        .get("title")
        .and_then(|v| v.as_str())
        .unwrap_or(&tr(&lang, "Untitled", "Sin título"))
        .to_string();
    let thumbnail = json
        .get("thumbnail")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());
    let duration = json.get("duration").and_then(|v| v.as_f64());

    let mut video_qualities: Vec<u32> = Vec::new();
    let mut audio_bitrates: Vec<u32> = Vec::new();

    match json.get("formats").and_then(|v| v.as_array()) {
        Some(formats) => {
            for format in formats {
                let (height, abr) = read_quality(format);
                if let Some(height) = height {
                    if !video_qualities.contains(&height) {
                        video_qualities.push(height);
                    }
                }
                if let Some(abr) = abr {
                    if !audio_bitrates.contains(&abr) {
                        audio_bitrates.push(abr);
                    }
                }
            }
        }
        // Algunos extractores (enlaces directos a un archivo) no listan
        // "formats": describen el único formato disponible en el nivel raíz.
        None => {
            let (height, abr) = read_quality(&json);
            video_qualities.extend(height);
            audio_bitrates.extend(abr);
        }
    }

    video_qualities.sort_unstable_by(|a, b| b.cmp(a));
    audio_bitrates.sort_unstable_by(|a, b| b.cmp(a));

    Ok(VideoInfo {
        title,
        thumbnail,
        duration,
        video_qualities,
        audio_bitrates,
    })
}
