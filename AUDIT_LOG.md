# AUDIT_LOG.md - Bitácora Universal de Decisiones y Cambios

## [2026-09-16] - Refactorización de Arquitectura, Modularización, i18n y Graphify

### 1. Diagnóstico Inicial

- **Error Crítico de Compilación TypeScript**:
  - `src/components/SuccessModal.tsx(14,9)`: `error TS6133: 't' is declared but its value is never read.` Bloqueaba el chequeo de tipos estricto.
- **Inconsistencias de Internacionalización (i18n)**:
  - `PlatformsPanel.tsx`, `Footer.tsx`, `StatusBanner.tsx`, `OptionsPanel.tsx` y `SuccessModal.tsx` mantenían textos fijos en español sin consumir el diccionario unificado de `translations.ts`.
- **Acoplamiento en `App.tsx`**:
  - `App.tsx` superaba 204 líneas acumulando estilos ambientales, animaciones de blobs, efectos SVG, cabecera de la marca, navegación de pestañas y orquestación de descargas.
- **UX Lag en Tooltips**:
  - `Tooltip.tsx` tenía configurado un retardo de activación de 3000ms (3 segundos), lo que producía la sensación de que los tooltips no funcionaban.
- **Rendimiento en Rust**:
  - `downloader.rs` instanciaba y compilaba el regex de progreso en cada llamada a `start_download`.

---

### 2. Acciones Ejecutadas

#### A. Frontend y UI Modular

1. **Desacoplamiento de Componentes en Archivos Cortos**:
   - Creado `src/components/BackgroundEffects.tsx`: maneja blobs flotantes con animación `drift-a/b/c`, malla hexagonal y filtro de ruido SVG de forma memoizada.
   - Creado `src/components/AppHeader.tsx`: aisla el isotipo de la app, el título con `Space Grotesk` y el `LanguageSelector`.
   - Creado `src/components/NavigationTabs.tsx`: implementa selector de vistas accesible con roles WAI-ARIA (`tablist`, `tab`, `aria-selected`, `aria-controls`).
   - Refactorizado `src/App.tsx`: reducido a un orquestador conciso, declarativo y limpio (~120 líneas).
2. **Corrección de TypeScript y Traducciones**:
   - Actualizado `src/lib/translations.ts` con claves adicionales: `modeVideo`, `modeAudio`, `close`, `ok`.
   - Corregido `src/components/SuccessModal.tsx`: consume `t("downloadComplete")`, `t("fileSavedSuccess")` y `t("ok")`. Error TS6133 eliminado.
   - Corregido `src/components/PlatformsPanel.tsx`: 100% bilingüe con claves tipadas para cada plataforma.
   - Corregido `src/components/Footer.tsx`: traducido con `t("madeWith")` y `t("using")`.
   - Corregido `src/components/StatusBanner.tsx`: botón de cierre traducido con `t("close")` y role `alert`.
   - Corregido `src/components/OptionsPanel.tsx`: selector de modo Video/Audio traducido.
3. **Optimización de UX**:
   - En `src/components/Tooltip.tsx`, `HOVER_DELAY_MS` reducido de 3000ms a 300ms, logrando interacción inmediata y feedback claro.
   - En `src/components/OptionsPanel.tsx`, mejora de contraste y estilos en los desplegables `<select>`.

#### B. Backend Rust

1. **Optimización de Compilación de Regex**:
   - En `src-tauri/src/downloader.rs`, implementado `progress_regex()` con `std::sync::OnceLock<Regex>` para evitar recompilaciones innecesarias del patrón de progreso en cada descarga.

#### C. Knowledge Graph (Graphify)

1. **Generación del Grafo**:
   - Ejecutado el pipeline completo de `graphify`:
     - Detección de archivos del repositorio.
     - Extracción AST de código fuente (TypeScript, React, Rust, configuraciones).
     - Construcción del grafo, clustering y detección de comunidades.
     - Exportación de visualización interactiva en `graphify-out/graph.html`.
     - Generación del informe de auditoría arquitectónica en `graphify-out/GRAPH_REPORT.md` (234 nodos, 395 aristas, 17 comunidades detectadas).

---

### 3. Resultados de Verificación

- `yarn tsc --noEmit`: 0 errores.
- `cargo check`: 0 warnings, compilación exitosa en Rust.
- `yarn build`: Paquete de producción generado correctamente en 2.37 segundos.

---

## [2026-09-16] - Integración de Prettier para Calidad de Código y Sintaxis

### 1. Motivación y Configuración
- Instalado Prettier (`prettier@3.9.7`) como dependencia de desarrollo con Yarn (`yarn add -D prettier`).
- Creado `.prettierrc.json` con estándares modernos de TypeScript/React:
  - `printWidth: 100`
  - `tabWidth: 2`
  - `singleQuote: false`
  - `trailingComma: "all"`
  - `semi: true`
- Creado `.prettierignore` para omitir artefactos compilados, sidecars binarios de Tauri, y grafos (`dist`, `src-tauri/target`, `src-tauri/binaries`, `graphify-out`).
- Agregados comandos de formateo a `package.json`:
  - `"format": "prettier --write ."`
  - `"format:check": "prettier --check ."`

### 2. Resultados
- Ejecutado `yarn format` formateando limpiamente todos los archivos de frontend, configuración y markdown.
- Verificado con `yarn tsc --noEmit` (0 errores).
