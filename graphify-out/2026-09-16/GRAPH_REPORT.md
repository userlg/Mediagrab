# Graph Report - Mediagrab  (2026-09-16)

## Corpus Check
- 219 files · ~321,083 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 67 file(s) not represented in the graph (top: .csv 53, (none) 6, .woff2 3)

## Summary
- 3150 nodes · 4008 edges · 220 communities (183 shown, 37 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 42 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d13ecbf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- validate_data.py
- package.json
- downloader.rs
- cip/core.py
- tauri.conf.json
- compilerOptions
- devDependencies
- gray
- color
- card
- compilerOptions
- default.json
- pick_folder
- mediagrab
- Mediagrab
- AUDIT_LOG.md - Bitácora Universal de Decisiones y Cambios
- slide_search_core.py
- .prettierrc.json
- PROJECT_CONTEXT.md - Mediagrab
- rules/graphify.md
- workflows/graphify.md
- Tailwind CSS Utility Reference
- Brand Guidelines v1.0
- Design
- Canvas Design System
- test_data_contracts.py
- Prerequisites
- spacing
- search_stack
- design_system.py
- Form & Input Components
- Tailwind CSS Responsive Design
- Typography Specifications
- 2) Designing X (feature/page/flow)
- Logo Usage Rules
- Component Specifications
- html-token-validator.py
- shadcn/ui Accessibility Patterns
- TestTailwindConfigGenerator
- search
- logo/core.py
- scripts/core.py
- BM25
- Asset Approval Checklist
- Logo AI Prompt Engineering
- Color Palette Management
- CIP Deliverable Guide
- States and Variants
- UI Styling Skill
- Workflow
- Design System
- Tailwind CSS Customization
- _select_palette_for_mode
- TailwindConfigGenerator
- generate-slide.py
- TestShadcnInstaller
- DesignSystemGenerator
- Routing by Task Type
- shadcn/ui Theming & Customization
- Asset Organization Guide
- Primary Color Meanings
- Core Logo Types
- fetch-background.py
- references/SUPERDESIGN.md
- Brand Consistency Checklist
- CIP Mockup Prompt Engineering
- Color Semantics
- superdesign/SKILL.md
- TestThresholdGate
- icon/generate.py
- CatalogRefreshTest
- Design Principles
- Design Principles
- fontSize
- CIP Design Reference
- Icon Design Reference
- Copywriting Formulas
- Copywriting Formulas
- ShadcnInstaller
- detect_domain
- components.test.tsx
- Banner Design - Multi-Format Creative Banner System
- Messaging Framework
- Brand Voice Framework
- extract-colors.cjs
- validate-asset.cjs
- Layout Patterns
- Tailwind Integration
- primitive
- Layout Patterns
- plugin.json
- superdesign/package.json
- Analysis Steps
- test_tailwind_config_gen.py
- parse_decision_rules
- update.md
- Logo Design Reference
- Token Architecture
- Graphic Generation Workflow (posters, covers, social & marketing assets)
- Primitive Tokens
- validate-tokens.cjs
- index.js
- .check_shadcn_config
- .generate_config_string
- test_design_system_mode.py
- Core Visual Elements
- inject-brand-context.cjs
- CIP Design Style Guide
- logo/generate.py
- embed-tokens.cjs
- patch
- PETITE-VUE TEMPLATE SPEC
- test_text_layout_resilience.py
- Brand
- Slide Strategies
- Component Tokens
- generate-tokens.cjs
- Slide Strategies
- Resume an Existing Design
- ._base_config
- .generate
- sync-brand-to-tokens.cjs
- _run
- Changelog
- marketplace.json
- radius
- Image & Video Asset Generation
- _row_identities
- Slides Reference
- HTML Slide Template
- HTML Slide Template
- Project agent memory
- Superdesign — one-paste setup (for AI coding agents)
- Presentation workflow
- shadow
- Slides
- Brand Guidelines Template
- lg
- Canvas Design & Visual Philosophy
- slide-token-validator.py
- Expo Animation Recipes
- md
- none
- WEBSITE.md
- generate_design_system
- test_sync_brand_to_tokens.py
- Superdesign CLI (MUST use before any command)
- .__init__
- slides-create.md
- create.md
- superdesign/INIT.md
- superdesign/SUPERDESIGN.md
- .test_add_components_dry_run
- .test_add_all_components_dry_run
- .test_init_custom_project_root
- .test_check_shadcn_config_exists
- .test_get_installed_components_empty
- .test_add_components_no_components
- .test_add_color_palette
- .test_add_spacing
- .test_add_plugins_no_duplicates
- .test_recommend_plugins_nextjs
- .test_init_default_typescript
- .test_generate_config_with_colors
- .test_generate_config_with_plugins
- .test_write_config
- .test_write_config_creates_content
- .test_full_configuration_typescript
- .test_init_framework
- .test_default_output_path_typescript
- .test_default_output_path_javascript
- .test_base_config_structure
- .test_default_content_paths_react
- .test_default_content_paths_nextjs
- Animation Recipes
- Animation Standards Reference
- Animation Audit Playbook
- Write Swift
- Apple Design
- The Fixes
- Prototyping Variants
- Glossary
- Finding Animation Opportunities
- Working With Sonner
- design-tokens-starter.json
- The list
- button
- Design Engineering
- input
- Component Building Principles
- The Animation Decision Framework
- clip-path for Animation
- Performance Rules
- Gesture and Drag Interactions
- $type
- radius
- CSS Transform Mastery
- The Sonner Principles (Building Loved Components)
- Spring Animations
- padding-y
- xl
- Core Philosophy
- Debugging Animations
- destructive
- destructive-foreground
- muted
- primary-foreground
- ring
- secondary-foreground
- scripts
- _normalize
- _palette_is_dark
- test_style_taxonomy.py
- dependencies
- eslint.config.js
- @vitejs/plugin-react

## God Nodes (most connected - your core abstractions)
1. `TailwindConfigGenerator` - 58 edges
2. `search()` - 43 edges
3. `TestTailwindConfigGenerator` - 35 edges
4. `search_stack()` - 35 edges
5. `DesignSystemGenerator` - 35 edges
6. `ShadcnInstaller` - 34 edges
7. `TestShadcnInstaller` - 26 edges
8. `useLanguage()` - 24 edges
9. `Apple Design` - 21 edges
10. `Write Swift` - 19 edges

## Surprising Connections (you probably didn't know these)
- `TestBm25CoreBehavior` --uses--> `BM25`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_core.py → .agents/skills/design/scripts/cip/core.py
- `TestTokenizer` --uses--> `BM25`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_core.py → .agents/skills/design/scripts/cip/core.py
- `TestShadcnInstaller` --uses--> `ShadcnInstaller`  [INFERRED]
  .agents/skills/ui-styling/scripts/tests/test_shadcn_add.py → .agents/skills/ui-styling/scripts/shadcn_add.py
- `TestGeneratedConfigIsValidJs` --uses--> `TailwindConfigGenerator`  [INFERRED]
  .agents/skills/ui-styling/scripts/tests/test_tailwind_config_gen.py → .agents/skills/ui-styling/scripts/tailwind_config_gen.py
- `TestTailwindConfigGenerator` --uses--> `TailwindConfigGenerator`  [INFERRED]
  .agents/skills/ui-styling/scripts/tests/test_tailwind_config_gen.py → .agents/skills/ui-styling/scripts/tailwind_config_gen.py

## Import Cycles
- None detected.

## Communities (220 total, 37 thin omitted)

### Community 0 - "validate_data.py"
Cohesion: 0.07
Nodes (48): Semantic quality contracts for the core UI/UX datasets., read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors, _catalog_date(), _check_app_interface_contract() (+40 more)

### Community 1 - "package.json"
Cohesion: 0.09
Nodes (21): license, name, private, type, version, eslint, happy-dom, @heroicons/react (+13 more)

### Community 2 - "downloader.rs"
Cohesion: 0.09
Nodes (34): Regex, build_args(), cancel_download(), cleanup_partial_files(), CompletePayload, DownloadState, ErrorPayload, progress_regex() (+26 more)

### Community 3 - "cip/core.py"
Cohesion: 0.06
Nodes (46): BM25, detect_domain(), get_cip_brief(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection (+38 more)

### Community 4 - "tauri.conf.json"
Cohesion: 0.11
Nodes (18): app, security, windows, build, beforeBuildCommand, beforeDevCommand, devUrl, frontendDist (+10 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+10 more)

### Community 6 - "devDependencies"
Cohesion: 0.11
Nodes (19): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, happy-dom, prettier, @tauri-apps/cli (+11 more)

### Community 7 - "gray"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 8 - "color"
Cohesion: 0.11
Nodes (19): $type, $value, background, foreground, muted-foreground, primary, primary-hover, secondary (+11 more)

### Community 9 - "card"
Cohesion: 0.20
Nodes (12): $type, $value, bg, bg, padding, shadow, card, bg (+4 more)

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
Nodes (15): 1. Instalar dependencias, 2. Descargar los binarios sidecar (yt-dlp y ffmpeg), 3. Levantar la aplicación en desarrollo, Arquitectura, Características, Componentes y Patrones de Diseño, Cómo Compilar el Instalador, Cómo Correrlo (+7 more)

### Community 18 - "AUDIT_LOG.md - Bitácora Universal de Decisiones y Cambios"
Cohesion: 0.06
Nodes (31): 1. Diagnóstico Inicial, 1. Diagnóstico y Problemas Identificados, 1. Instalación de Skills de Diseño y Creatividad, 1. Limpieza de Activos, 1. Motivación y Configuración, 1. Motivación y Criterio, 1. Motivación y Origen, 1. Tag Anotado Creado y Publicado (+23 more)

### Community 19 - "slide_search_core.py"
Cohesion: 0.08
Nodes (38): format_context(), format_result(), main(), Format a single search result for display, Slide Search CLI - Search slide design databases for strategies, layouts, copy,…, Format contextual recommendations for display., BM25, calculate_pattern_break() (+30 more)

### Community 20 - ".prettierrc.json"
Cohesion: 0.25
Nodes (7): arrowParens, endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 21 - "PROJECT_CONTEXT.md - Mediagrab"
Cohesion: 0.22
Nodes (8): 1. Visión General del Proyecto, 2. Arquitectura del Código, 3. Estado de Calidad y Verificación, 4. Ecosistema de Skills de Diseño y Animación (`.agents/skills/`), Backend Rust (`src-tauri/src/`), Frontend (`src/`), PROJECT_CONTEXT.md - Mediagrab, Stack Tecnológico

### Community 24 - "Tailwind CSS Utility Reference"
Cohesion: 0.05
Nodes (43): Arbitrary Values, Aspect Ratio, Background Colors, Border Color, Border Radius, Border Style, Border Width, Borders (+35 more)

### Community 25 - "Brand Guidelines v1.0"
Cohesion: 0.05
Nodes (37): 1. Color Palette, 2. Typography, 3. Logo Usage, 4. Voice & Tone, 5. Imagery Guidelines, 6. Design Components, Accessibility, AI Image Generation (+29 more)

### Community 26 - "Design"
Cohesion: 0.06
Nodes (35): Banner Design (Built-in), Banner: Design Rules, Banner: Quick Size Reference, Banner: Top Art Styles, Banner: Workflow, CIP Design (Built-in), CIP: Generate Brief, CIP: Generate Mockups (+27 more)

### Community 27 - "Canvas Design System"
Cohesion: 0.06
Nodes (35): 1. Visual Communication First, 2. Minimal Text Integration, 3. Expert Craftsmanship, 4. Systematic Patterns, Analog Meditation, Approach, Canvas Boundaries, Canvas Design System (+27 more)

### Community 28 - "test_data_contracts.py"
Cohesion: 0.14
Nodes (7): Cross-file semantic contracts for curated design data., read_rows(), split_values(), style_identities(), TestGeneratedCatalogContract, TestLandingAndStackContract, TestStyleIdentityContract

### Community 29 - "Prerequisites"
Cohesion: 0.06
Nodes (34): Accessibility, Available Domains, Available Stacks, Common Rules for Professional UI, Common Sticking Points, Example Workflow, How to Use This Skill, Icons & Visual Elements (+26 more)

### Community 30 - "spacing"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 31 - "search_stack"
Cohesion: 0.10
Nodes (8): Search stack-specific guidelines, search_stack(), Freshness and migration contracts for native, desktop, and 3D stacks., _rows(), TestNativeDesktopStackFreshness, Freshness and generation-isolation contracts for web stack guidance., _rows(), TestWebStackFreshness

### Community 32 - "design_system.py"
Cohesion: 0.10
Nodes (26): ansi_ljust(), _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), _generate_intelligent_overrides(), hex_to_ansi() (+18 more)

### Community 33 - "Form & Input Components"
Cohesion: 0.06
Nodes (32): Accordion, Alert, Alert Dialog, Avatar, Badge, Button, Card, Checkbox (+24 more)

### Community 34 - "Tailwind CSS Responsive Design"
Cohesion: 0.06
Nodes (32): 1. Mobile-First Design, 2. Consistent Breakpoint Usage, 3. Test at Breakpoint Boundaries, 4. Use Container for Content Width, 5. Progressive Enhancement, 6. Avoid Too Many Breakpoints, Best Practices, Breakpoint System (+24 more)

### Community 35 - "Typography Specifications"
Cohesion: 0.06
Nodes (30): Accessibility, Base System, Best Practices, Clean & Modern, Common Font Pairings, Contrast Requirements, CSS Implementation, Editorial (+22 more)

### Community 36 - "2) Designing X (feature/page/flow)"
Cohesion: 0.06
Nodes (29): DESIGN.md — a design system file for AI coding agents, How Superdesign uses it, What goes in it, Why it matters, 1) Design System Setup, 2) Designing X (feature/page/flow), A) Extract from codebase, A) Inspiration & Style Tools (generic, always available) (+21 more)

### Community 37 - "Logo Usage Rules"
Cohesion: 0.07
Nodes (28): Absolute Don'ts, Approved Backgrounds, Before Using Logo, Clear Space, Co-branding, Color Rules, Color Usage, Color Variants (+20 more)

### Community 38 - "Component Specifications"
Cohesion: 0.07
Nodes (28): Alert, Anatomy, Anatomy, Anatomy, Anatomy, Anatomy, Badge, Button (+20 more)

### Community 39 - "html-token-validator.py"
Cohesion: 0.12
Nodes (25): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+17 more)

### Community 40 - "shadcn/ui Accessibility Patterns"
Cohesion: 0.07
Nodes (28): Accordion, Alert, ARIA Labels, Checkbox and Radio, Color Contrast, Command Palette Navigation, Component-Specific Patterns, Dialog/Modal Navigation (+20 more)

### Community 41 - "TestTailwindConfigGenerator"
Cohesion: 0.07
Nodes (15): Test adding custom fonts., Test adding custom breakpoints., Test TailwindConfigGenerator class., Test plugin recommendations., Test generating TypeScript configuration., Test generating JavaScript configuration., Test validating valid configuration., Test validating config with no content paths. (+7 more)

### Community 42 - "search"
Cohesion: 0.13
Nodes (6): Resolve a deprecated in-domain alias, or expose a cross-domain redirect., Main search function with auto-domain detection, search(), _style_search_destination(), TestSearchDomains, TestStyleTaxonomy

### Community 43 - "logo/core.py"
Cohesion: 0.10
Nodes (21): BM25, detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search across all domains and combine results (+13 more)

### Community 44 - "scripts/core.py"
Cohesion: 0.11
Nodes (28): _contains_phrase(), _domain_keywords(), _exact_stack_identifier(), _file_signature(), _get_bm25(), _load_csv(), _load_csv_snapshot(), _load_product_keywords() (+20 more)

### Community 45 - "BM25"
Cohesion: 0.10
Nodes (10): BM25, BM25 ranking algorithm for text search, Lowercase, normalize synonyms, split, remove punctuation, filter stopwords, Build BM25 index from documents, Score all documents against query, All indexed terms, for suggestion/typo-recovery purposes., Stdlib-only regression tests for core.py / design_system.py (unittest, not…, TestBm25CoreBehavior (+2 more)

### Community 46 - "Asset Approval Checklist"
Cohesion: 0.08
Nodes (25): Accessibility, Archival, Asset Approval Checklist, Automation Support, Color Compliance, Common Issues & Fixes, Content Accessibility, Content Quality (+17 more)

### Community 47 - "Logo AI Prompt Engineering"
Cohesion: 0.08
Nodes (25): Common Pitfalls, Core Prompt Structure, Detailed Brief, Eco/Sustainable, Effective Keywords by Style, Fashion Brand, Healthcare, Industry-Specific Prompts (+17 more)

### Community 48 - "Color Palette Management"
Cohesion: 0.08
Nodes (24): Accessibility Requirements, Brand Compliance Validation, Checking Contrast, Color Documentation Format, Color Extraction, Color Palette Examples, Color Palette Management, Color System Structure (+16 more)

### Community 49 - "CIP Deliverable Guide"
Cohesion: 0.08
Nodes (24): Apparel, Business Card, Car/Sedan, CIP Deliverable Guide, Core Identity, Digital Assets, Email Signature, Envelope (+16 more)

### Community 50 - "States and Variants"
Cohesion: 0.08
Nodes (24): Accessibility, Accessibility Requirements, ARIA States, Color Contrast, Color Variants, Disabled States, Error Messages, Error States (+16 more)

### Community 51 - "UI Styling Skill"
Cohesion: 0.08
Nodes (24): Accessibility Patterns, Alternative: Tailwind-Only Setup, Best Practices, Common Patterns, Component Layer: shadcn/ui, Component Library Guide, Component + Styling Setup, Core Stack (+16 more)

### Community 52 - "Workflow"
Cohesion: 0.08
Nodes (23): Art Direction Styles (Reuse from Banner), Color & Contrast, Design Best Practices, HTML Design Rules, HTML Template Structure, Option A: Chrome Headless CLI (Recommended — zero dependencies), Option B: chrome-devtools skill, Option C: Playwright script (+15 more)

### Community 53 - "Design System"
Cohesion: 0.09
Nodes (22): Best Practices, Chart.js Integration, Command, Component Spec Pattern, Contextual Decision Flow, Decision System CSVs, Design System, Integration (+14 more)

### Community 54 - "Tailwind CSS Customization"
Cohesion: 0.09
Nodes (22): @apply Directive, Best Practices, Color Customization, Complete Tailwind Config, Configuration Examples, Content Configuration, Custom Color Palette, Custom Font Sizes (+14 more)

### Community 55 - "_select_palette_for_mode"
Cohesion: 0.22
Nodes (7): _contrast_ratio(), _derive_dark_palette(), WCAG contrast ratio for two hex colors, or None if either is invalid., Keep product brand tokens while deriving accessible dark surfaces., Pick the highest-ranked palette matching the resolved mode. Only the dark case…, _select_palette_for_mode(), TestPaletteSelection

### Community 56 - "TailwindConfigGenerator"
Cohesion: 0.09
Nodes (12): Add custom font families. Args: fonts: Dict of font_type: [font_names] e.g.,…, Add custom spacing values. Args: spacing: Dict of name: value e.g., {'18':…, Add custom breakpoints. Args: breakpoints: Dict of name: width e.g., {'3xl':…, Add plugin requirements. Args: plugins: List of plugin names e.g.,…, Get plugin recommendations based on configuration. Returns: List of recommended…, Generate Tailwind CSS configuration files., Validate configuration. Returns: Tuple of (valid, message), Add custom colors to theme. Args: colors: Dict of color_name: color_value Value… (+4 more)

### Community 57 - "generate-slide.py"
Cohesion: 0.14
Nodes (20): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+12 more)

### Community 58 - "TestShadcnInstaller"
Cohesion: 0.10
Nodes (12): Test adding components without shadcn config., Test adding components that are already installed., Test adding components with overwrite flag., Test ShadcnInstaller class., Test adding all components without config., Create temporary project structure., Test listing installed components when they exist., Test initialization with default project root. (+4 more)

### Community 59 - "DesignSystemGenerator"
Cohesion: 0.16
Nodes (5): DesignSystemGenerator, Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., TestReasoningMatch, TestReasoningContract

### Community 60 - "Routing by Task Type"
Cohesion: 0.10
Nodes (19): Banner Design Tasks, Brand Identity Tasks, Component Creation, Corporate Identity Program Tasks, Design Routing Guide, Design System Migration, Icon Design Tasks, Implementation Tasks (+11 more)

### Community 61 - "shadcn/ui Theming & Customization"
Cohesion: 0.10
Nodes (19): Base Color Presets, Best Practices, Color Customization, Color Format, Component Customization, CSS Variable System, Customize Styles, Customize Variants (+11 more)

### Community 62 - "Asset Organization Guide"
Cohesion: 0.11
Nodes (18): Asset Entry (manifest.json), Asset Organization Guide, By Campaign, By Status, By Type, Cleanup Workflow, Components, Directory Structure (+10 more)

### Community 63 - "Primary Color Meanings"
Cohesion: 0.11
Nodes (18): Accessibility Considerations, Analogous, Black, Blue, Color Combinations by Industry, Color Harmony Types, Complementary, Green (+10 more)

### Community 64 - "Core Logo Types"
Cohesion: 0.11
Nodes (18): 1. Wordmark (Logotype), 2. Lettermark (Monogram), 3. Pictorial Mark (Brand Mark), 4. Abstract Mark, 5. Mascot, 6. Emblem, 7. Combination Mark, Aesthetic Styles (+10 more)

### Community 65 - "fetch-background.py"
Cohesion: 0.16
Nodes (18): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+10 more)

### Community 66 - "references/SUPERDESIGN.md"
Cohesion: 0.11
Nodes (18): ASSET PURPOSE ROUTING (before every upload), COMMAND CONTRACT (read `--help`, never guess), COMPONENT TEMPLATE SPEC, CONTEXT FILE LINE RANGES — CANONICAL TRIMMING RULE, CORRECTION METHOD ROUTING, DESIGN SYSTEM SETUP, EXECUTE FLOW RULE, EXTRACT-WEBSITE (+10 more)

### Community 67 - "Brand Consistency Checklist"
Cohesion: 0.11
Nodes (17): Audit Frequency, Brand Consistency Checklist, Channel Audit, Collateral, Colors, Common Issues, Email, Imagery (+9 more)

### Community 68 - "CIP Mockup Prompt Engineering"
Cohesion: 0.11
Nodes (17): Apparel (Polo/T-Shirt), Base Prompt Structure, Business Card, CIP Mockup Prompt Engineering, Context Modifiers, Corporate Minimal, Deliverable-Specific Modifiers, Letterhead (+9 more)

### Community 69 - "Color Semantics"
Cohesion: 0.11
Nodes (17): Accent, Applying Semantic Tokens, Background & Foreground, Border & Ring, Color Semantics, Dark Mode Overrides, Destructive, Interactive States (+9 more)

### Community 70 - "superdesign/SKILL.md"
Cohesion: 0.14
Nodes (12): Design with your model, After generating: offer to go further, Browser Choice, Core scenarios (what this skill handles), How it works, Images and local assets, Init Files (cold/stale context path), Init: Repo Analysis (real-codebase path) (+4 more)

### Community 71 - "TestThresholdGate"
Cohesion: 0.12
Nodes (4): Unit tests for metric math and relevance fixture validation., TestFixtureValidation, TestMetricMath, TestThresholdGate

### Community 72 - "icon/generate.py"
Cohesion: 0.18
Nodes (16): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main() (+8 more)

### Community 74 - "Design Principles"
Cohesion: 0.12
Nodes (15): 22 Art Direction Styles, Banner Sizes & Art Direction Styles Reference, Complete Banner Sizes, CTA Rules, Design Principles, Pinterest Research Queries, Print, Print Specs (+7 more)

### Community 75 - "Design Principles"
Cohesion: 0.12
Nodes (15): 22 Art Direction Styles, Banner Sizes & Art Direction Styles Reference, Complete Banner Sizes, CTA Rules, Design Principles, Pinterest Research Queries, Print, Print Specs (+7 more)

### Community 76 - "fontSize"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 77 - "CIP Design Reference"
Cohesion: 0.13
Nodes (14): CIP Brief (Start Here), CIP Design Reference, Commands, Deliverable Categories, Design Styles, Detailed References, Generate Mockups, HTML Presentation Features (+6 more)

### Community 78 - "Icon Design Reference"
Cohesion: 0.13
Nodes (14): Available Styles, CLI Options, Commands, Generate Batch Variations, Generate Multiple Sizes, Generate Single Icon, Icon Categories, Icon Design Reference (+6 more)

### Community 79 - "Copywriting Formulas"
Cohesion: 0.13
Nodes (14): AIDA (Attention-Interest-Desire-Action), Before-After-Bridge, Contrast Patterns, Copywriting Formulas, Core Formulas, Cost of Inaction, FAB (Features-Advantages-Benefits), Formula-to-Slide Mapping (+6 more)

### Community 80 - "Copywriting Formulas"
Cohesion: 0.13
Nodes (14): AIDA (Attention-Interest-Desire-Action), Before-After-Bridge, Contrast Patterns, Copywriting Formulas, Core Formulas, Cost of Inaction, FAB (Features-Advantages-Benefits), Formula-to-Slide Mapping (+6 more)

### Community 81 - "ShadcnInstaller"
Cohesion: 0.15
Nodes (9): main(), Handle shadcn/ui component installation., shadcn/ui Component Installer Add shadcn/ui components to project with…, ShadcnInstaller, Tests for shadcn_add.py, Test listing installed components without config., Test listing installed components when none exist., Test initialization with dry run mode. (+1 more)

### Community 82 - "detect_domain"
Cohesion: 0.23
Nodes (3): detect_domain(), Auto-detect the most relevant domain from query. Matches are weighted by…, TestDomainDetection

### Community 83 - "components.test.tsx"
Cohesion: 0.05
Nodes (80): react, @tauri-apps/plugin-clipboard-manager, @testing-library/react, vitest, App(), handleDownload(), handleModeChange(), handleSuccessClose() (+72 more)

### Community 84 - "Banner Design - Multi-Format Creative Banner System"
Cohesion: 0.14
Nodes (13): Art Direction Styles (Top 10), Banner Design - Multi-Format Creative Banner System, Banner Size Quick Reference, Design Rules, Prerequisites, Security, Step 1: Gather Requirements (AskUserQuestion), Step 2: Research & Art Direction (+5 more)

### Community 85 - "Messaging Framework"
Cohesion: 0.14
Nodes (13): Core Statements, Elevator Pitches, Framework Structure, Message Architecture, Message by Audience, Message Testing, Messaging Framework, Mission Statement (+5 more)

### Community 86 - "Brand Voice Framework"
Cohesion: 0.14
Nodes (13): Brand Voice Framework, Character Spectrum, Emotion Spectrum, Language Spectrum, Step 1: Define Personality Traits, Step 2: Create Voice Chart, Step 3: Context Adaptation, Tone Spectrum (+5 more)

### Community 87 - "extract-colors.cjs"
Cohesion: 0.22
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 88 - "validate-asset.cjs"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 89 - "Layout Patterns"
Cohesion: 0.14
Nodes (13): Card Styles, Component Variants, CSS Structures, Feature Grid (3 columns), Layout Decision Flow, Layout Patterns, Layout Selection by Use Case, Metric Styles (+5 more)

### Community 90 - "Tailwind Integration"
Cohesion: 0.14
Nodes (13): Animation Tokens, Base Layer, Button Example, Component Classes, CSS Variables Setup, Dark Mode Toggle, HSL Format Benefits, shadcn/ui Alignment (+5 more)

### Community 91 - "primitive"
Cohesion: 0.18
Nodes (11): fast, normal, slow, $type, $value, $type, $value, primitive (+3 more)

### Community 92 - "Layout Patterns"
Cohesion: 0.14
Nodes (13): Card Styles, Component Variants, CSS Structures, Feature Grid (3 columns), Layout Decision Flow, Layout Patterns, Layout Selection by Use Case, Metric Styles (+5 more)

### Community 93 - "plugin.json"
Cohesion: 0.14
Nodes (13): author, email, name, url, description, displayName, homepage, keywords (+5 more)

### Community 94 - "superdesign/package.json"
Cohesion: 0.14
Nodes (13): author, description, files, homepage, keywords, license, main, name (+5 more)

### Community 95 - "Analysis Steps"
Cohesion: 0.14
Nodes (13): 1. Detect Framework & Component Library, 2. Write `components.md`, 3. Write `layouts.md`, 4. Write `routes.md`, 5. Write `theme.md`, 6. Write `pages.md`, 7. Write `extractable-components.md`, Analysis Steps (+5 more)

### Community 96 - "test_tailwind_config_gen.py"
Cohesion: 0.16
Nodes (10): main(), Tailwind CSS Configuration Generator Generate tailwind.config.js/ts with custom…, Tests for tailwind_config_gen.py, Reduce a generated TS/JS config to a bare assignable object so it can be handed…, Regression guard for the missing-comma bug between the ``theme`` block and…, The property preceding ``plugins`` must end with a comma (pure-Python check, so…, The emitted config parses as valid JS via ``node --check``., _strip_to_object() (+2 more)

### Community 97 - "parse_decision_rules"
Cohesion: 0.24
Nodes (7): apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), Return deterministic mutations and an audit trail; never execute data., Closed, non-executable grammar for design-system decision rules., Parse the canonical condition -> action-array representation., _validate_action()

### Community 98 - "update.md"
Cohesion: 0.15
Nodes (12): Color Presets, Examples, Files Modified, Important, Overview, Skills Used, Step 1: Gather Brand Input, Step 2: Update Brand Guidelines (+4 more)

### Community 99 - "Logo Design Reference"
Cohesion: 0.15
Nodes (12): Available Styles, Color Psychology, Commands, Design Brief (Start Here), Detailed References, Generate Logo, Industry Defaults, Logo Design Reference (+4 more)

### Community 100 - "Token Architecture"
Cohesion: 0.15
Nodes (12): Categories, Dark Mode, File Organization, Layer 1: Primitive Tokens, Layer 2: Semantic Tokens, Layer 3: Component Tokens, Layer Overview, Migration from Flat Tokens (+4 more)

### Community 101 - "Graphic Generation Workflow (posters, covers, social & marketing assets)"
Cohesion: 0.15
Nodes (13): Canvas presets, Deliver, Graphic Generation Workflow (posters, covers, social & marketing assets), Layout menu (pick exactly one), Overview, Platform-specific marketing assets, Series (multiple graphics), Step 1 — Confirm the brief (one round, not three) (+5 more)

### Community 102 - "Primitive Tokens"
Cohesion: 0.17
Nodes (11): Border Radius, Color Scales, Gray Scale, Motion / Duration, Primary Colors (Blue), Primitive Tokens, Shadows, Spacing Scale (+3 more)

### Community 103 - "validate-tokens.cjs"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 104 - "index.js"
Cohesion: 0.18
Nodes (9): inject, INVOCATION, loadSkill(), name, provider, readDescription(), RESOURCE_BASE, SKILL_BODY_URL (+1 more)

### Community 105 - ".check_shadcn_config"
Cohesion: 0.21
Nodes (6): Add all available shadcn/ui components. Args: overwrite: If True, overwrite…, List installed components. Returns: Tuple of (success, message with component…, Check if shadcn is initialized in project. Returns: True if components.json…, Get list of already installed components. Returns: List of installed component…, Read shadcn version from project package.json; fall back to a pinned default., Add shadcn/ui components. Args: components: List of component names to add…

### Community 106 - ".generate_config_string"
Cohesion: 0.20
Nodes (6): Generate configuration file content. Returns: Configuration file as string, Generate TypeScript configuration., Generate JavaScript configuration., Format plugins array for config. Validates each plugin name against a strict…, Add indentation to JSON string., Write configuration to file. Returns: Tuple of (success, message)

### Community 107 - "test_design_system_mode.py"
Cohesion: 0.14
Nodes (11): _filter_anti_patterns_for_mode(), _query_wants_dark(), True when a styles.csv row describes itself as dark-first., True when the query explicitly asks for a dark theme., Resolve the mode the rest of the output has to agree with., Drop "avoid dark mode" advice once dark mode is the resolved answer., _resolve_color_mode(), _style_is_dark_primary() (+3 more)

### Community 108 - "Core Visual Elements"
Cohesion: 0.18
Nodes (10): Color Palette, Colors, Core Visual Elements, Logo, Logo, Quick Checks, Typography, Typography (+2 more)

### Community 109 - "inject-brand-context.cjs"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 110 - "CIP Design Style Guide"
Cohesion: 0.18
Nodes (10): Bold Dynamic, CIP Design Style Guide, Classic Traditional, Color Psychology, Corporate Minimal, Fresh Modern, Luxury Premium, Modern Tech (+2 more)

### Community 111 - "logo/generate.py"
Cohesion: 0.25
Nodes (10): enhance_prompt(), generate_batch(), generate_logo(), load_env(), main(), Enhance the logo prompt with style and industry modifiers, Generate a logo using Gemini models with image generation Args: aspect_ratio:…, Generate multiple logo variants with different styles (+2 more)

### Community 112 - "embed-tokens.cjs"
Cohesion: 0.18
Nodes (8): args, fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath, wrapStyle

### Community 113 - "patch"
Cohesion: 0.18
Nodes (7): patch, dsh, bundle, Test successful component addition., Test component addition with subprocess error., Test component addition when npx is not found., Test successful addition of all components.

### Community 114 - "PETITE-VUE TEMPLATE SPEC"
Cohesion: 0.18
Nodes (10): Allowed Petite-Vue syntax:, BRAND LOGO INVARIANT, Component Extraction Reference (create-component / update-component), Every prop MUST have a non-empty `defaultValue`., Example conversion:, NOT allowed:, Output requirements:, PETITE-VUE TEMPLATE SPEC (+2 more)

### Community 115 - "test_text_layout_resilience.py"
Cohesion: 0.20
Nodes (4): Canonical regression contracts for resilient UI text layouts., read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval

### Community 116 - "Brand"
Cohesion: 0.20
Nodes (9): Brand, Brand Sync Workflow, Quick Start, References, Routing, Scripts, Subcommands, Templates (+1 more)

### Community 117 - "Slide Strategies"
Cohesion: 0.20
Nodes (9): Common Structures, Duarte Sparkline Pattern, Matching Strategy to Context, Product Demo (6 slides), Sales Pitch (9 slides), Search Commands, Slide Strategies, Strategy Selection (+1 more)

### Community 118 - "Component Tokens"
Cohesion: 0.20
Nodes (9): Alert Tokens, Badge Tokens, Button Tokens, Card Tokens, Component Tokens, Dialog/Modal Tokens, Input Tokens, Table Tokens (+1 more)

### Community 119 - "generate-tokens.cjs"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 120 - "Slide Strategies"
Cohesion: 0.20
Nodes (9): Common Structures, Duarte Sparkline Pattern, Matching Strategy to Context, Product Demo (6 slides), Sales Pitch (9 slides), Search Commands, Slide Strategies, Strategy Selection (+1 more)

### Community 121 - "Resume an Existing Design"
Cohesion: 0.20
Nodes (10): Draft selection priority, Durable state, Flow-page persistence, Incremental refresh, Resume an Existing Design, Resume eligibility and freshness routing, Targeted context expansion, Trust boundary and target validation (+2 more)

### Community 122 - "._base_config"
Cohesion: 0.22
Nodes (6): Path, Initialize generator. Args: typescript: If True, generate .ts config, else .js…, Determine default output path., Create base configuration structure., Get default content paths for framework., Any

### Community 123 - ".generate"
Cohesion: 0.14
Nodes (8): Execute searches across multiple domains., Find matching reasoning rule for a category., Apply reasoning rules to search results., Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation. variance/motion/density are…, Bucket a 1-10 dial value into its tier config. Returns None if value is None., _resolve_dial()

### Community 124 - "sync-brand-to-tokens.cjs"
Cohesion: 0.33
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 125 - "_run"
Cohesion: 0.28
Nodes (8): Path, Regression tests for validate-tokens.cjs. The validator used to skip any line…, A hardcoded hex on the same line as a var() token is still a violation., A line that references only tokens produces no false positives., _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation(), CompletedProcess

### Community 126 - "Changelog"
Cohesion: 0.22
Nodes (8): 0.4.1 and earlier, 0.4.2, 0.4.3, 0.4.4, 0.5.0, 0.5.1, 0.6.0, Changelog

### Community 127 - "marketplace.json"
Cohesion: 0.22
Nodes (8): description, name, owner, email, name, url, plugins, $schema

### Community 128 - "radius"
Cohesion: 0.29
Nodes (8): $type, $value, $type, $value, radius, default, full, default

### Community 129 - "Image & Video Asset Generation"
Cohesion: 0.25
Nodes (8): Choose the generation path, Decide whether to generate, Image: prefer the host's native generator, Image: use Superdesign for a deliberate reason, Image & Video Asset Generation, Put the result into the design, Quote and confirm, Video: use Superdesign

### Community 130 - "_row_identities"
Cohesion: 0.25
Nodes (8): _exact_row_identity(), Suggest complete public identities so a retry can bypass score thresholds., Return non-empty public identities from ordinary and alias fields., Resolve an explicit style identity without opening generic variant ranking., Return one row whose stable public identity exactly matches the query., _row_identities(), _style_identity(), _suggest_identities()

### Community 131 - "Slides Reference"
Cohesion: 0.29
Nodes (6): Key Features, Knowledge Base, Slides Reference, Usage, When to Use, Workflow

### Community 132 - "HTML Slide Template"
Cohesion: 0.29
Nodes (6): Animation Classes, Background Images, Base Structure, Chart.js Integration, CSS Variables Reference, HTML Slide Template

### Community 133 - "HTML Slide Template"
Cohesion: 0.29
Nodes (6): Animation Classes, Background Images, Base Structure, Chart.js Integration, CSS Variables Reference, HTML Slide Template

### Community 134 - "Project agent memory"
Cohesion: 0.29
Nodes (6): Ground truth for CLI behavior, Maintaining this file, Plugin packaging & release, Project agent memory, Skill flow invariant: two entry paths, What this repo is

### Community 135 - "Superdesign — one-paste setup (for AI coding agents)"
Cohesion: 0.29
Nodes (6): Step 1 — Install the Superdesign skill into yourself, Step 2 — Auth, Step 3 — Run `init` (the repo design-system extraction), Step 4 — Ask the user what they want to design, Step 5 — Design, Superdesign — one-paste setup (for AI coding agents)

### Community 136 - "Presentation workflow"
Cohesion: 0.29
Nodes (7): 1. Resolve the brief and presentation preferences, 2. Prepare the project and assets, 3. Approve the complete plan in chat, 4. Generate the presentation, 5. Iterate safely, 6. Export an editable PPTX, Presentation workflow

### Community 137 - "shadow"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 138 - "Slides"
Cohesion: 0.33
Nodes (5): References (Knowledge Base), Routing, Slides, Subcommands, When to Use

### Community 139 - "Brand Guidelines Template"
Cohesion: 0.40
Nodes (4): Brand Guidelines Template, Document Structure, Extractable Fields, Usage

### Community 140 - "lg"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 141 - "Canvas Design & Visual Philosophy"
Cohesion: 0.50
Nodes (3): Canvas Design & Visual Philosophy, DESIGN PHILOSOPHY & CRAFTSMANSHIP, Principles:

### Community 142 - "slide-token-validator.py"
Cohesion: 0.50
Nodes (3): main(), Slide Token Validator (Legacy Wrapper) Now delegates to html-token-validator.py…, Delegate to unified html-token-validator.py with --type slides.

### Community 143 - "Expo Animation Recipes"
Cohesion: 0.06
Nodes (33): Bottom sheet you can drag to dismiss, Collapsing header on scroll, Expo Animation Recipes, Firing something once at a threshold, Keyboard-synced UI, List entrances, Press feedback, Screen transitions (Expo Router) (+25 more)

### Community 144 - "md"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 145 - "none"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 146 - "WEBSITE.md"
Cohesion: 0.50
Nodes (3): EXTRACT-WEBSITE — RECIPES & SCOPE, URL ROUTING, Website Extraction Workflow (design from a live site / reference URL)

### Community 147 - "generate_design_system"
Cohesion: 0.22
Nodes (6): generate_design_system(), Main entry point for design system generation. Args: query: Search query (e.g.,…, format_output(), UI/UX Pro Max Search - BM25 search engine for UI/UX style guides Usage: python…, Format results for Claude consumption (token-optimized), TestPersistence

### Community 149 - "Superdesign CLI (MUST use before any command)"
Cohesion: 0.67
Nodes (3): Command examples, Superdesign CLI (MUST use before any command), When a command fails

### Community 178 - "Animation Recipes"
Cohesion: 0.06
Nodes (31): Accordion / collapse, Animation Recipes, Button press, Drag to dismiss, Drawer / sheet, Dropdown, popover, menu, select, Hold to confirm, Masking a crossfade that won't settle (+23 more)

### Community 179 - "Animation Standards Reference"
Cohesion: 0.07
Nodes (26): Aggressive Escalation Triggers, Guidelines, Initial Response, Operating Posture, Part 1 — Findings table (REQUIRED), Part 2 — Verdict (REQUIRED), Remedial Preference Hierarchy, Required Output Format (+18 more)

### Community 180 - "Animation Audit Playbook"
Cohesion: 0.08
Nodes (22): 1. Purpose & frequency, 2. Easing & duration, 3. Physicality & origin, 4. Interruptibility, 5. Performance, 6. Accessibility, 7. Cohesion & tokens, 8. Missed opportunities (+14 more)

### Community 181 - "Write Swift"
Cohesion: 0.09
Nodes (22): 10. ARC and object lifetime, 11. Testing — Swift Testing by default, 12. Macros, 13. Logging and debugging, 14. Unsafe code and interop, 15. Modern syntax you should be using, 16. Migrating an existing codebase to Swift 6, 1. Model data with value types (+14 more)

### Community 182 - "Apple Design"
Cohesion: 0.09
Nodes (21): 10. Gesture design details (the "feel" checklist), 11. Frame-level smoothness, 12. Materials & depth — translucency conveys hierarchy, 13. Multimodal feedback — motion + sound + haptics, 14. Reduced motion & accessibility, 15. Typography — optical sizing, tracking, leading, 16. Design foundations — the eight principles, 17. Process (+13 more)

### Community 183 - "The Fixes"
Cohesion: 0.09
Nodes (21): 10. Status bar color doesn't match, 11. Right in Chrome, wrong on phone, 1. Hover state stuck after tap, 2. Gray/blue flash on tap, 3. Layout has the wrong height, 4. Page zooms into the input, 5. Tap feels laggy, 6. Pull-to-refresh hijacks scroll (+13 more)

### Community 184 - "Prototyping Variants"
Cohesion: 0.10
Nodes (19): Behavior contract, Markup, Reference wiring, Rules, Styles, The Picker, Hard Rules, Initial Response (+11 more)

### Community 185 - "Glossary"
Cohesion: 0.11
Nodes (18): Animation Vocabulary, Easing — how speed changes over an animation, Entrances & Exits — how elements appear and disappear, Examples, Feedback & Interaction — responding to the user's actions, Glossary, Initial Response, Instructions (+10 more)

### Community 186 - "Finding Animation Opportunities"
Cohesion: 0.12
Nodes (16): 1. Frequency — how often will a user see this?, 2. Purpose — why does this animate?, 3. Speed — can it stay inside budget?, 4. Function — does motion help or hinder here?, Finding Animation Opportunities, Hard Rules, Initial Response, Operating Posture (+8 more)

### Community 187 - "Working With Sonner"
Cohesion: 0.15
Nodes (11): Functions, Sonner API Reference, `toast()` options, `<Toaster />`, Initial Response, Picking the right call, Recipes, Setup (+3 more)

### Community 188 - "design-tokens-starter.json"
Cohesion: 0.15
Nodes (12): component, $type, $value, dark, semantic, $schema, $type, $value (+4 more)

### Community 189 - "The list"
Cohesion: 0.18
Nodes (10): Charts, Common mismatches to catch, How to use this, Initial Response, Interaction & performance, Motion & visuals, Picking The Right Library, State & styling (+2 more)

### Community 190 - "button"
Cohesion: 0.20
Nodes (10): fg, font-size, hover-bg, button, $type, $value, $type, $value (+2 more)

### Community 191 - "Design Engineering"
Cohesion: 0.22
Nodes (8): Accessibility, Design Engineering, Initial Response, prefers-reduced-motion, Review Checklist, Review Format (Required), Stagger Animations, Touch device hover states

### Community 192 - "input"
Cohesion: 0.29
Nodes (8): padding-x, input, $type, $value, focus-ring, padding-x, $type, $value

### Community 193 - "Component Building Principles"
Cohesion: 0.25
Nodes (8): Animate enter states with @starting-style, Buttons must feel responsive, Component Building Principles, Make popovers origin-aware, Never animate from scale(0), Tooltips: skip delay on subsequent hovers, Use blur to mask imperfect transitions, Use CSS transitions over keyframes for interruptible UI

### Community 194 - "The Animation Decision Framework"
Cohesion: 0.33
Nodes (6): 1. Should this animate at all?, 2. What is the purpose?, 3. What easing should it use?, 4. How fast should it be?, Perceived performance, The Animation Decision Framework

### Community 195 - "clip-path for Animation"
Cohesion: 0.33
Nodes (6): clip-path for Animation, Comparison sliders, Hold-to-delete pattern, Image reveals on scroll, Tabs with perfect color transitions, The inset shape

### Community 196 - "Performance Rules"
Cohesion: 0.33
Nodes (6): CSS animations beat JS under load, CSS variables are inheritable, Framer Motion hardware acceleration caveat, Only animate transform and opacity, Performance Rules, Use WAAPI for programmatic CSS animations

### Community 197 - "Gesture and Drag Interactions"
Cohesion: 0.33
Nodes (6): Damping at boundaries, Friction instead of hard stops, Gesture and Drag Interactions, Momentum-based dismissal, Multi-touch protection, Pointer capture for drag

### Community 198 - "$type"
Cohesion: 0.60
Nodes (5): $type, $value, border, border, border

### Community 199 - "radius"
Cohesion: 0.60
Nodes (5): radius, radius, radius, $type, $value

### Community 200 - "CSS Transform Mastery"
Cohesion: 0.40
Nodes (5): 3D transforms for depth, CSS Transform Mastery, scale() scales children too, transform-origin, translateY with percentages

### Community 201 - "The Sonner Principles (Building Loved Components)"
Cohesion: 0.40
Nodes (5): Asymmetric enter/exit timing, Cohesion matters, Review your work the next day, The opacity + height combination, The Sonner Principles (Building Loved Components)

### Community 202 - "Spring Animations"
Cohesion: 0.40
Nodes (5): Interruptibility advantage, Spring Animations, Spring-based mouse interactions, Spring configuration, When to use springs

### Community 203 - "padding-y"
Cohesion: 0.67
Nodes (4): padding-y, padding-y, $type, $value

### Community 204 - "xl"
Cohesion: 0.67
Nodes (4): xl, xl, $type, $value

### Community 205 - "Core Philosophy"
Cohesion: 0.50
Nodes (4): Beauty is leverage, Core Philosophy, Taste is trained, not innate, Unseen details compound

### Community 206 - "Debugging Animations"
Cohesion: 0.50
Nodes (4): Debugging Animations, Frame-by-frame inspection, Slow motion testing, Test on real devices

### Community 207 - "destructive"
Cohesion: 0.67
Nodes (3): destructive, $type, $value

### Community 208 - "destructive-foreground"
Cohesion: 0.67
Nodes (3): destructive-foreground, $type, $value

### Community 209 - "muted"
Cohesion: 0.67
Nodes (3): muted, $type, $value

### Community 210 - "primary-foreground"
Cohesion: 0.67
Nodes (3): primary-foreground, $type, $value

### Community 211 - "ring"
Cohesion: 0.67
Nodes (3): ring, $type, $value

### Community 212 - "secondary-foreground"
Cohesion: 0.67
Nodes (3): secondary-foreground, $type, $value

### Community 213 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, dev, format, format:check, lint, lint:fix, preview (+3 more)

### Community 214 - "_normalize"
Cohesion: 0.22
Nodes (9): _exact_match_diagnostic(), _legacy_successor_guidance(), _normalize(), Apply longest-first synonym substitution at token boundaries., Whether a stack query explicitly targets an older framework generation., Choose one coherent applicability generation for stack retrieval., Prefer the explicit successor row for a brand-new app on legacy-only stacks., _stack_query_requests_legacy() (+1 more)

### Community 215 - "_palette_is_dark"
Cohesion: 0.18
Nodes (7): _palette_is_dark(), WCAG relative luminance of a #RRGGBB string, or None if unparseable., True when a colors.csv row's Background is a dark surface., _relative_luminance(), The exact reproduction from issue #428., TestEndToEndCoherence, TestLuminance

### Community 217 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @heroicons/react, react, react-dom, tailwindcss, @tailwindcss/vite, @tauri-apps/api, @tauri-apps/plugin-clipboard-manager (+2 more)

### Community 218 - "eslint.config.js"
Cohesion: 0.40
Nodes (4): @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, typescript-eslint

### Community 219 - "@vitejs/plugin-react"
Cohesion: 0.40
Nodes (3): @tailwindcss/vite, vite, @vitejs/plugin-react

## Knowledge Gaps
- **1507 isolated node(s):** `fs`, `path`, `fs`, `path`, `fs` (+1502 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1935 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `primitive` connect `primitive` to `radius`, `gray`, `shadow`, `fontSize`, `design-tokens-starter.json`, `spacing`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `search()` connect `search` to `design_system.py`, `validate_data.py`, `_row_identities`, `scripts/core.py`, `BM25`, `detect_domain`, `generate_design_system`, `test_text_layout_resilience.py`, `_normalize`, `test_style_taxonomy.py`, `.generate`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `DesignSystemGenerator` to `design_system.py`, `test_design_system_mode.py`, `BM25`, `generate_design_system`, `_select_palette_for_mode`, `_palette_is_dark`, `.generate`, `test_data_contracts.py`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `TestTailwindConfigGenerator`) actually correct?**
  _`TailwindConfigGenerator` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `DesignSystemGenerator` (e.g. with `TestReasoningMatch` and `TestReasoningContract`) actually correct?**
  _`DesignSystemGenerator` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `fs`, `path`, `fs` to the rest of the system?**
  _1507 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `validate_data.py` be split into smaller, more focused modules?**
  _Cohesion score 0.0726775956284153 - nodes in this community are weakly interconnected._