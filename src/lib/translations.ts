export type Lang = "en" | "es";

export const translations = {
  tabDownload: { en: "Download", es: "Descargar" },
  tabPlatforms: { en: "Platforms", es: "Plataformas" },

  urlPlaceholder: { en: "Paste the video or audio link…", es: "Pega el link del video o audio…" },
  clearLink: { en: "Clear link", es: "Borrar link" },
  paste: { en: "Paste", es: "Pegar" },
  download: { en: "Download", es: "Descargar" },

  modeVideo: { en: "Video", es: "Video" },
  modeAudio: { en: "Audio", es: "Audio" },
  notAvailable: { en: "Not available", es: "No disponible" },
  cancel: { en: "Cancel", es: "Cancelar" },
  close: { en: "Close", es: "Cerrar" },
  ok: { en: "OK", es: "Aceptar" },

  downloadComplete: { en: "Download complete!", es: "¡Descarga completa!" },
  fileSavedSuccess: {
    en: "Your file was saved successfully.",
    es: "Tu archivo se guardó con éxito.",
  },
  savedTo: { en: "Saved to", es: "Guardado en" },

  couldNotStartDownload: {
    en: "Couldn't start the download.",
    es: "No se pudo iniciar la descarga.",
  },
  couldNotAnalyzeLink: { en: "Couldn't analyze the link.", es: "No se pudo analizar el link." },

  platformsIntro: {
    en: "Sites already tested and working. More will be added over time.",
    es: "Sitios ya probados y funcionando. Se irán sumando más con el tiempo.",
  },
  platformVideos: { en: "Videos", es: "Videos" },
  platformShortVertical: { en: "Vertical short video", es: "Video corto vertical" },
  platformReelsPosts: { en: "Reels and posts", es: "Reels y publicaciones" },
  platformVideosPosts: { en: "Videos and posts", es: "Videos y publicaciones" },

  madeWith: { en: "made with", es: "hecho con" },
  using: { en: "using", es: "sobre" },
} as const;

export type TranslationKey = keyof typeof translations;
