mod downloader;
mod i18n;
mod info;

use downloader::DownloadState;
use info::InfoState;
use tauri::Manager;
use tauri_plugin_dialog::DialogExt;

#[tauri::command]
async fn pick_folder(app: tauri::AppHandle) -> Option<String> {
    // La API bloqueante debe invocarse fuera del hilo principal, pero el
    // diálogo en sí (`pick_folder` con callback) hay que abrirlo desde el
    // contexto en el que Tauri ejecuta el comando; moverlo entero a
    // spawn_blocking hace que el diálogo nativo no aparezca en Windows.
    let (tx, rx) = std::sync::mpsc::channel();
    app.dialog().file().pick_folder(move |path| {
        let _ = tx.send(path);
    });
    tauri::async_runtime::spawn_blocking(move || rx.recv().ok().flatten())
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
        .on_window_event(|window, event| {
            // Si se cierra la ventana con una descarga en curso, el yt-dlp
            // hijo no se mata solo en Windows — quedaría corriendo (y
            // escribiendo fragmentos) sin que nadie pueda verlo ni pararlo.
            if let tauri::WindowEvent::CloseRequested { .. } = event {
                window.state::<DownloadState>().kill_active();
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
