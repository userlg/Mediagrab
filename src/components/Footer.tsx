import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mx-auto mb-5 w-full max-w-[500px] px-4 shrink-0">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 hover:border-white/20">
        {/* Left: App Identity, Live Status & Version */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2" title="Ready">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-semibold tracking-tight text-text/90 [font-family:var(--font-display)]">
            Mediagrab
          </span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-text-dim/80">
            v0.1.0
          </span>
        </div>

        {/* Right: Craft mark, Copyright 2026 & License */}
        <div className="flex items-center gap-2.5 text-xs text-text-dim">
          <span className="flex items-center gap-1 text-[11px]">
            {t("madeWith")}{" "}
            <span
              className="text-rose-500 drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]"
              aria-hidden="true"
            >
              ♥
            </span>
          </span>

          <span className="text-white/20">·</span>

          <span className="font-mono text-[11px] font-medium text-text/80">© 2026</span>

          <span className="text-white/20">·</span>

          <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-text-dim/70">
            MIT
          </span>
        </div>
      </div>
    </footer>
  );
}
