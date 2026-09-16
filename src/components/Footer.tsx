import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mx-auto mb-5 w-full max-w-[500px] px-4 shrink-0">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 hover:border-white/20">
        {/* Engine Status & Version */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" title="Sidecars online">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[11px] font-medium text-text-dim">yt-dlp + ffmpeg</span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-text-dim/80">
            v0.1.0
          </span>
        </div>

        {/* Craft & Credits */}
        <div className="flex items-center gap-2 text-xs text-text-dim">
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

          <a
            href="https://github.com/yt-dlp/yt-dlp"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-accent transition-all duration-150 hover:-translate-y-0.5 hover:text-accent-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40"
          >
            <span>yt-dlp</span>
            <svg
              className="h-3 w-3 opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-text-dim/70">
            MIT
          </span>
        </div>
      </div>
    </footer>
  );
}
