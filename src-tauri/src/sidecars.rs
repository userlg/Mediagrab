//! Solo tiene efecto en un build "portable" (`cargo`/`tauri build --features
//! portable`): en ese modo, yt-dlp y ffmpeg viajan embebidos dentro del
//! propio `mediagrab.exe` y se escriben junto a él la primera vez que corre
//! — el mismo lugar donde el mecanismo de sidecars de Tauri ya los busca,
//! así que no hace falta tocar permisos ni la forma en que se invocan.
//! Resultado: un único `mediagrab.exe` que se puede copiar a cualquier
//! carpeta y funciona solo (a costa de pesar ~180 MB, porque ffmpeg va
//! adentro). En un build normal esta función no hace nada: los binarios
//! siguen viajando como sidecars sueltos, como siempre.

#[cfg(feature = "portable")]
mod embedded {
    pub const YT_DLP: &[u8] = include_bytes!("../binaries/yt-dlp-x86_64-pc-windows-msvc.exe");
    pub const FFMPEG: &[u8] = include_bytes!("../binaries/ffmpeg-x86_64-pc-windows-msvc.exe");
}

pub fn ensure_extracted() {
    #[cfg(feature = "portable")]
    {
        let Some(dir) = std::env::current_exe()
            .ok()
            .and_then(|p| p.parent().map(|p| p.to_path_buf()))
        else {
            return;
        };
        write_if_stale(&dir.join("yt-dlp.exe"), embedded::YT_DLP);
        write_if_stale(&dir.join("ffmpeg.exe"), embedded::FFMPEG);
    }
}

#[cfg(feature = "portable")]
fn write_if_stale(path: &std::path::Path, bytes: &[u8]) {
    // Compara tamaño para no reescribir ~180 MB en cada arranque una vez
    // que ya se extrajo una vez; no es una verificación criptográfica,
    // pero alcanza para este caso.
    let up_to_date = std::fs::metadata(path)
        .map(|m| m.len() as usize == bytes.len())
        .unwrap_or(false);
    if up_to_date {
        return;
    }
    let _ = std::fs::write(path, bytes);
}
