import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 shrink-0">
      {/* Soft divider */}
      <div className="mx-auto h-px w-full max-w-[380px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)]" />

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-6 py-6 text-center text-xs text-text-dim">
        <span className="font-semibold tracking-tight text-text/70 [font-family:var(--font-display)]">
          Mediagrab
        </span>

        <span className="flex items-center gap-1.5">
          {t("madeWith")}{" "}
          <span className="text-danger" aria-hidden="true">
            ♥
          </span>{" "}
          {t("using")}
          <a
            href="https://github.com/yt-dlp/yt-dlp"
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors duration-200 ease-out hover:text-accent-light focus-visible:underline"
          >
            yt-dlp
          </a>
        </span>

        <span className="font-mono tracking-wide text-text-dim/80">MIT License</span>
      </div>
    </footer>
  );
}
