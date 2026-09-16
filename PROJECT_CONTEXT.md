# PROJECT_CONTEXT.md - Mediagrab

**Última actualización:** 2026-09-16
**Estado del Proyecto:** Activo, compilación 100% verificada, arquitectura modularizada, grafo de conocimiento graphify generado.

---

## 1. Visión General del Proyecto

**Mediagrab** es una aplicación de escritorio nativa, moderna, ultraligera y de alto rendimiento diseñada para descargar video y audio de plataformas populares (YouTube, YouTube Shorts, Instagram Reels/Posts, Facebook Videos, TikTok).

### Stack Tecnológico

- **Frontend Core:** React 19, TypeScript 5, Vite 8.
- **Estilos y Diseño:** Tailwind CSS v4, Glassmorphism moderno con soporte dark mode, tipografías variables (`Geist`, `Geist Mono`, `Space Grotesk`).
- **Backend / Host:** Tauri v2, Rust 2021 edition.
- **Sidecars Multimedia:** `yt-dlp` (descarga paralela multfragmentos) y `ffmpeg` (fusión de streams de video y audio / transcodificación).
- **Plugins Tauri:** `dialog` (selector nativo de carpetas), `clipboard-manager` (pegar links con un click), `opener`, `shell`.
- **Calidad de Código y Sintaxis:** Prettier 3 (`.prettierrc.json`, scripts `format` y `format:check`).
- **Knowledge Graph:** Graphify (knowledge graph con detección de comunidades, clustering y reporte de arquitectura).
- **Design Intelligence & Skills:** UI/UX Pro Max (`ui-ux-pro-max`), Superdesign (`superdesign`), Canvas Design (`canvas-design`).

---

## 2. Arquitectura del Código

### Frontend (`src/`)

- `src/App.tsx`: Orquestador principal compacto (~120 líneas), declarativo y desacoplado.
- `src/components/`:
  - `BackgroundEffects.tsx`: Capas ambientales de gradientes radiales flotantes, textura de hexágonos y filtro de grano SVG sin impacto en rendimiento.
  - `AppHeader.tsx`: Cabecera unificada con isotipo de la app, tipografía display y selector de idiomas.
  - `NavigationTabs.tsx`: Navegación accesible por pestañas (`Descargar` / `Plataformas`) con roles ARIA y feedback háptico.
  - `Button.tsx`: Botón polimórfico reutilizable (`primary`, `secondary`, `danger`, `ghost`) con físicas táctiles `active:scale-[0.98]`.
  - `VideoCard.tsx`: Previsualización unificada y compacta de miniaturas, títulos y duraciones.
  - `Select.tsx`: Desplegable accesible con estilo oscuro y flecha chevron SVG.
  - `UrlBar.tsx`: Input con botón de borrado rápido, botón de pegado directo desde el portapapeles y botón de acción con estados deshabilitados reactivos.
  - `OptionsPanel.tsx`: Panel desplegable de formato (MP4, MKV / MP3, M4A) y calidad extraída dinámicamente con selectores oscuros pulidos.
  - `PlatformsPanel.tsx`: Malla informativa de plataformas soportadas con sus distintivos oficiales, 100% traducida y micro-hover sutil.
  - `ProgressBar.tsx`: Barra de progreso animada con brillo dinámico, métricas en tiempo real (porcentaje, velocidad de descarga, ETA) y botón de cancelación.
  - `StatusBanner.tsx`: Alerta de estados de error con botón de descarte accesible.
  - `SuccessModal.tsx`: Diálogo modal de confirmación con thumbnail del contenido, duración formateada y cierre rápido.
  - `LanguageSelector.tsx`: Selector bilingüe (Inglés / Español) persistente en localStorage.
  - `Tooltip.tsx`: Tooltip flotante reactivo con delay óptimo (300ms).
  - `Footer.tsx`: Pie de página discreto con créditos y licencia MIT.
- `src/hooks/`:
  - `useLanguage.tsx`: Contexto reactivo de internacionalización con persistencia local.
  - `useVideoAnalysis.ts`: Análisis con debounce (500ms) de URLs pegadas para extraer metadatos sin saturar el sistema.
  - `useDownload.ts`: Orquestación del ciclo de vida de descarga, control de eventos en tiempo real y limpieza de estados.
- `src/lib/`:
  - `tauriApi.ts`: Contrato de interfaz tipada para llamadas `invoke` y `listen` a Tauri v2.
  - `formatOptions.ts`: Mapeo de formatos y cálculo de resoluciones y bitrates.
  - `translations.ts`: Diccionario bilingüe (EN/ES) centralizado.

### Backend Rust (`src-tauri/src/`)

- `main.rs`: Punto de entrada del ejecutable.
- `lib.rs`: Inicializador de plugins Tauri, estado global `DownloadState` e `InfoState`, comandos registrados y controlador de cierre seguro de ventana (`kill_active`).
- `downloader.rs`:
  - Extracción de fragmentos HLS concurrentes (`--concurrent-fragments 16`).
  - Regex pre-compilado de forma thread-safe con `std::sync::OnceLock`.
  - Limpieza automática de archivos temporales `.part` y `.ytdl` ante cancelaciones o fallas.
  - Detección precisa de dos fases (video + audio) para reporte fluido de progreso.
- `info.rs`:
  - Extracción de metadatos vía `yt-dlp -J` con cancelación de peticiones obsoletas si el usuario cambia de enlace.
  - Extracción y ordenamiento descensional de calidades de video y bitrates de audio.
- `i18n.rs`: Helper de traducción backend para mensajes directos al usuario.

---

## 3. Estado de Calidad y Verificación

- TypeScript (`tsc --noEmit`): **PASÓ** (0 errores, 0 variables sin uso).
- Rust (`cargo check`): **PASÓ** (0 warnings, compilación limpia).
- Vite Build (`yarn build`): **PASÓ** (dist generado correctamente en 2.37s).
- Graphify: Grafo generado en `graphify-out/`.

---

## 4. Ecosistema de Skills de Diseño y Animación (`.agents/skills/`)

- **Diseño y Sistemas de UI**:
  - `ui-ux-pro-max`: Catálogo completo de estilos UI, 192 paletas razonadas, tipografías y reglas de stacks (React/Tailwind).
  - `superdesign`: Juicio estético anti-slop, jerarquía visual de alto impacto y composición de layouts.
  - `canvas-design`: Filosofía visual artesanal, asimetría orgánica y equilibrio dinámico.
  - `brand`, `design-system`, `ui-styling`: Identidad corporativa, tokens semánticos y componentes de UI accesibles.
- **Micro-interacciones y Animación (Emil Kowalski Suite)**:
  - `animate`: Construcción de animaciones fluidas con física natural, duración y curvas intencionales.
  - `emil-design-eng`: Principios de ingeniería de diseño con acabado de alta gama.
  - `find-animation-opportunities`: Identificación de puntos de contacto para deleite visual sutil.
  - `improve-animations` & `review-animations`: Diagnóstico y optimización de transiciones y estados interactivos.
  - `apple-design`: Estándares de interacción y fidelidad estética pulida.
  - `ask-sonner`: Patrones reactivos para notificaciones toast.
