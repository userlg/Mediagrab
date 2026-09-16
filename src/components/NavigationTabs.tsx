import { useLanguage } from "../hooks/useLanguage";

export type ViewTab = "download" | "platforms";

interface NavigationTabsProps {
  currentView: ViewTab;
  onSelectView: (view: ViewTab) => void;
}

export function NavigationTabs({ currentView, onSelectView }: NavigationTabsProps) {
  const { t } = useLanguage();

  return (
    <nav
      className="relative z-10 mx-auto mt-4 flex w-fit gap-1 rounded-xl bg-black/40 p-1"
      role="tablist"
      aria-label="Navigation"
    >
      <button
        type="button"
        role="tab"
        id="tab-download"
        aria-selected={currentView === "download"}
        aria-controls="panel-download"
        onClick={() => onSelectView("download")}
        className={`rounded-lg px-3.5 py-1.5 text-sm transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 ${
          currentView === "download"
            ? "bg-white/10 text-text shadow-sm"
            : "text-text-dim hover:text-text/80"
        }`}
      >
        {t("tabDownload")}
      </button>
      <button
        type="button"
        role="tab"
        id="tab-platforms"
        aria-selected={currentView === "platforms"}
        aria-controls="panel-platforms"
        onClick={() => onSelectView("platforms")}
        className={`rounded-lg px-3.5 py-1.5 text-sm transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 ${
          currentView === "platforms"
            ? "bg-white/10 text-text shadow-sm"
            : "text-text-dim hover:text-text/80"
        }`}
      >
        {t("tabPlatforms")}
      </button>
    </nav>
  );
}
