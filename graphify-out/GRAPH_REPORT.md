# Graph Report - Mediagrab  (2026-09-16)

## Corpus Check
- 43 files · ~11,986 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 4, .woff2 3, .icns 1)

## Summary
- 287 nodes · 442 edges · 24 communities (18 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dda04d8e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useLanguage
- package.json
- downloader.rs
- useLanguage.tsx
- tauri.conf.json
- compilerOptions
- App.tsx
- fetch_info
- dependencies
- UrlBar.tsx
- compilerOptions
- default.json
- pick_folder
- mediagrab
- Mediagrab
- [2026-09-16] - Refactorización de Arquitectura, Modularización, i18n y Graphify
- devDependencies
- .prettierrc.json
- PROJECT_CONTEXT.md - Mediagrab
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 23 edges
2. `compilerOptions` - 16 edges
3. `useDownload()` - 12 edges
4. `Mediagrab` - 12 edges
5. `start_download()` - 10 edges
6. `t()` - 10 edges
7. `react` - 9 edges
8. `fetch_info()` - 9 edges
9. `App()` - 9 edges
10. `VideoInfo` - 8 edges

## Surprising Connections (you probably didn't know these)
- `start_download()` --calls--> `tr()`  [INFERRED]
  src-tauri/src/downloader.rs → src-tauri/src/i18n.rs
- `fetch_info()` --calls--> `tr()`  [INFERRED]
  src-tauri/src/info.rs → src-tauri/src/i18n.rs
- `App()` --calls--> `qualityOptions()`  [EXTRACTED]
  src/App.tsx → src/lib/formatOptions.ts
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.tsx → src/hooks/useLanguage.tsx
- `LanguageSelector()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageSelector.tsx → src/hooks/useLanguage.tsx

## Import Cycles
- None detected.

## Communities (24 total, 6 thin omitted)

### Community 0 - "useLanguage"
Cohesion: 0.16
Nodes (22): App(), handleDownload(), handleSuccessClose(), ProgressBar(), ProgressBarProps, useDownload(), cancel(), reset() (+14 more)

### Community 1 - "package.json"
Cohesion: 0.08
Nodes (26): license, name, private, scripts, build, dev, format, format:check (+18 more)

### Community 2 - "downloader.rs"
Cohesion: 0.17
Nodes (19): Path, Regex, build_args(), cancel_download(), cleanup_partial_files(), CompletePayload, DownloadState, ErrorPayload (+11 more)

### Community 3 - "useLanguage.tsx"
Cohesion: 0.18
Nodes (14): react, AppHeader(), LanguageSelector(), OPTIONS, PlatformConfig, PLATFORMS, LanguageContext, LanguageContextValue (+6 more)

### Community 4 - "tauri.conf.json"
Cohesion: 0.11
Nodes (18): app, security, windows, build, beforeBuildCommand, beforeDevCommand, devUrl, frontendDist (+10 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+10 more)

### Community 6 - "App.tsx"
Cohesion: 0.12
Nodes (23): BackgroundEffects, CardGlowEffects, Footer(), Modal(), ModalProps, NavigationTabs(), NavigationTabsProps, ViewTab (+15 more)

### Community 7 - "fetch_info"
Cohesion: 0.17
Nodes (15): String, tr(), fetch_info(), InfoState, read_quality(), AppHandle, CommandChild, Mutex (+7 more)

### Community 8 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @heroicons/react, react, react-dom, tailwindcss, @tailwindcss/vite, @tauri-apps/api, @tauri-apps/plugin-clipboard-manager (+2 more)

### Community 9 - "UrlBar.tsx"
Cohesion: 0.31
Nodes (7): @tauri-apps/plugin-clipboard-manager, Tooltip(), clearTimer(), hide(), show(), TooltipProps, UrlBarProps

### Community 10 - "compilerOptions"
Cohesion: 0.25
Nodes (7): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 11 - "default.json"
Cohesion: 0.33
Nodes (5): description, identifier, permissions, $schema, windows

### Community 12 - "pick_folder"
Cohesion: 0.33
Nodes (4): pick_folder(), AppHandle, Option, String

### Community 17 - "Mediagrab"
Cohesion: 0.12
Nodes (16): 1. Instalar dependencias, 2. Descargar los binarios de yt-dlp y ffmpeg, 3. Levantar la app en desarrollo, Arquitectura, Características, Cómo compilarlo, Cómo correrlo, Estructura del proyecto (+8 more)

### Community 18 - "[2026-09-16] - Refactorización de Arquitectura, Modularización, i18n y Graphify"
Cohesion: 0.17
Nodes (11): 1. Diagnóstico Inicial, 1. Motivación y Configuración, [2026-09-16] - Integración de Prettier para Calidad de Código y Sintaxis, [2026-09-16] - Refactorización de Arquitectura, Modularización, i18n y Graphify, 2. Acciones Ejecutadas, 2. Resultados, 3. Resultados de Verificación, A. Frontend y UI Modular (+3 more)

### Community 19 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, prettier, @tauri-apps/cli, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 20 - ".prettierrc.json"
Cohesion: 0.25
Nodes (7): arrowParens, endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 21 - "PROJECT_CONTEXT.md - Mediagrab"
Cohesion: 0.25
Nodes (7): 1. Visión General del Proyecto, 2. Arquitectura del Código, 3. Estado de Calidad y Verificación, Backend Rust (`src-tauri/src/`), Frontend (`src/`), PROJECT_CONTEXT.md - Mediagrab, Stack Tecnológico

## Knowledge Gaps
- **124 isolated node(s):** `semi`, `singleQuote`, `tabWidth`, `trailingComma`, `printWidth` (+119 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 152 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `useLanguage.tsx` to `useLanguage`, `package.json`, `App.tsx`, `UrlBar.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `useDownload()` (e.g. with `cancel()` and `reset()`) actually correct?**
  _`useDownload()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `semi`, `singleQuote`, `tabWidth` to the rest of the system?**
  _124 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07671957671957672 - nodes in this community are weakly interconnected._
- **Should `tauri.conf.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._