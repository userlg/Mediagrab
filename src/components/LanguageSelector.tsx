import { useLanguage } from "../hooks/useLanguage";
import type { Lang } from "../lib/translations";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-0.5 rounded-lg bg-black/40 p-0.5" role="group" aria-label="Language">
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLang(opt.code)}
          aria-pressed={lang === opt.code}
          className={`rounded-md px-2 py-1 font-mono text-[11px] tracking-wide transition-all duration-200 ease-out ${
            lang === opt.code ? "bg-white/10 text-text" : "text-text-dim hover:text-text/80"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
