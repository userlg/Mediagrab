mod downloader;
mod info;

use downloader::DownloadState;
use info::InfoState;
use tauri_plugin_dialog::DialogExt;

#[tauri::command]
async fn pick_folder(app: tauri::AppHandle) -> Option<String> {
    tauri::async_runtime::spawn_blocking(move || app.dialog().file().blocking_pick_folder())
        .await
        .ok()
        .flatten()
        .map(|p| p.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .manage(DownloadState::default())
        .manage(InfoState::default())
        .invoke_handler(tauri::generate_handler![
            info::fetch_info,
            downloader::start_download,
            downloader::cancel_download,
            pick_folder,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
