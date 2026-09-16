import { LanguageSelector } from "./LanguageSelector";

export function AppHeader() {
  return (
    <header className="relative z-10 flex items-center justify-center">
      <div className="absolute right-0 top-0">
        <LanguageSelector />
      </div>

      <div className="flex items-center gap-2.5">
        <img src="/icon.svg" alt="" className="h-7 w-7 select-none" />
        <h1 className="text-[26px] font-bold tracking-tight text-text [font-family:var(--font-display)]">
          Mediagrab
        </h1>
      </div>
    </header>
  );
}
