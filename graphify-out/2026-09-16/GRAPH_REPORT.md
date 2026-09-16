# Graph Report - Mediagrab  (2026-09-16)

## Corpus Check
- Corpus is ~10,772 words - fits in a single context window. You may not need a graph.

## Summary
- 234 nodes · 395 edges · 17 communities (13 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Download Flow and Orchestration
- Vite and Frontend Tooling
- Rust Sidecar Downloader
- Header and Platform Catalog
- Tauri Desktop Configuration
- TypeScript Client Configuration
- UI Components and Navigation
- Rust Metadata Extractor and i18n
- Frontend NPM Dependencies
- URL Input and Tooltip Components
- TypeScript Node Configuration
- Tauri Security Capabilities
- Tauri App Lifecycle and Dialogs
- Cargo Package Manifest

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 23 edges
2. `compilerOptions` - 16 edges
3. `useDownload()` - 12 edges
4. `start_download()` - 10 edges
5. `t()` - 10 edges
6. `react` - 9 edges
7. `fetch_info()` - 9 edges
8. `App()` - 9 edges
9. `VideoInfo` - 8 edges
10. `DownloadState` - 7 edges

## Surprising Connections (you probably didn't know these)
- `start_download()` --calls--> `tr()`  [INFERRED]
  src-tauri/src/downloader.rs → src-tauri/src/i18n.rs
- `fetch_info()` --calls--> `tr()`  [INFERRED]
  src-tauri/src/info.rs → src-tauri/src/i18n.rs
- `LanguageSelector()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageSelector.tsx → src/hooks/useLanguage.tsx
- `OptionsPanel()` --calls--> `t()`  [EXTRACTED]
  src/components/OptionsPanel.tsx → src/hooks/useLanguage.tsx
- `OptionsPanel()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/OptionsPanel.tsx → src/hooks/useLanguage.tsx

## Import Cycles
- None detected.

## Communities (17 total, 4 thin omitted)

### Community 0 - "Download Flow and Orchestration"
Cohesion: 0.12
Nodes (31): App(), handleDownload(), handleSuccessClose(), BackgroundEffects, CardGlowEffects, Modal(), ModalProps, OptionsPanel() (+23 more)

### Community 1 - "Vite and Frontend Tooling"
Cohesion: 0.07
Nodes (30): devDependencies, @tauri-apps/cli, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react, license (+22 more)

### Community 2 - "Rust Sidecar Downloader"
Cohesion: 0.17
Nodes (19): Path, Regex, build_args(), cancel_download(), cleanup_partial_files(), CompletePayload, DownloadState, ErrorPayload (+11 more)

### Community 3 - "Header and Platform Catalog"
Cohesion: 0.17
Nodes (15): react, AppHeader(), LanguageSelector(), OPTIONS, PlatformConfig, PLATFORMS, PlatformsPanel(), LanguageContext (+7 more)

### Community 4 - "Tauri Desktop Configuration"
Cohesion: 0.11
Nodes (18): app, security, windows, build, beforeBuildCommand, beforeDevCommand, devUrl, frontendDist (+10 more)

### Community 5 - "TypeScript Client Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+10 more)

### Community 6 - "UI Components and Navigation"
Cohesion: 0.18
Nodes (13): Footer(), NavigationTabs(), NavigationTabsProps, ViewTab, ProgressBar(), ProgressBarProps, StatusBanner(), StatusBannerProps (+5 more)

### Community 7 - "Rust Metadata Extractor and i18n"
Cohesion: 0.17
Nodes (15): String, tr(), fetch_info(), InfoState, read_quality(), AppHandle, CommandChild, Mutex (+7 more)

### Community 8 - "Frontend NPM Dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @heroicons/react, react, react-dom, tailwindcss, @tailwindcss/vite, @tauri-apps/api, @tauri-apps/plugin-clipboard-manager (+2 more)

### Community 9 - "URL Input and Tooltip Components"
Cohesion: 0.31
Nodes (7): @tauri-apps/plugin-clipboard-manager, Tooltip(), clearTimer(), hide(), show(), TooltipProps, UrlBarProps

### Community 10 - "TypeScript Node Configuration"
Cohesion: 0.25
Nodes (7): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 11 - "Tauri Security Capabilities"
Cohesion: 0.33
Nodes (5): description, identifier, permissions, $schema, windows

### Community 12 - "Tauri App Lifecycle and Dialogs"
Cohesion: 0.33
Nodes (4): pick_folder(), AppHandle, Option, String

## Knowledge Gaps
- **86 isolated node(s):** `name`, `private`, `version`, `license`, `type` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 109 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Header and Platform Catalog` to `Download Flow and Orchestration`, `Vite and Frontend Tooling`, `URL Input and Tooltip Components`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Frontend NPM Dependencies` to `Vite and Frontend Tooling`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `useDownload()` (e.g. with `cancel()` and `reset()`) actually correct?**
  _`useDownload()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _86 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Download Flow and Orchestration` be split into smaller, more focused modules?**
  _Cohesion score 0.11962833914053426 - nodes in this community are weakly interconnected._
- **Should `Vite and Frontend Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.06653225806451613 - nodes in this community are weakly interconnected._
- **Should `Tauri Desktop Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._