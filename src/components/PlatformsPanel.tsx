import { useLanguage } from "../hooks/useLanguage";
import type { TranslationKey } from "../lib/translations";

interface PlatformConfig {
  name: string;
  detailKey: TranslationKey;
  badgeClass: string;
  icon: React.ReactNode;
}

const PLATFORMS: PlatformConfig[] = [
  {
    name: "YouTube",
    detailKey: "platformVideos",
    badgeClass: "bg-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
        <path d="M9.5 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
  {
    name: "YouTube Shorts",
    detailKey: "platformShortVertical",
    badgeClass: "bg-black",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="4" stroke="#FF0000" strokeWidth="1.6" />
        <path d="M10.5 11.2V8.6l4 2.6-4 2.6v-2.6z" fill="#FF0000" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    detailKey: "platformReelsPosts",
    badgeClass: "bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.6" cy="7.4" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    detailKey: "platformVideosPosts",
    badgeClass: "bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
        <path d="M14 8.5h2V5.7c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.84-4.92 5.2v2.75H5.5V17h2.63v7h3.3v-7h2.53l.4-3.5h-2.93v-2.4c0-1 .27-1.6 1.57-1.6z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    detailKey: "platformVideos",
    badgeClass: "bg-black",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M14 4c.3 1.8 1.5 3 3.4 3.2v2.3c-1.2 0-2.3-.4-3.4-1.1v5.4a4.6 4.6 0 1 1-4.6-4.6c.2 0 .4 0 .6.03v2.4a2.2 2.2 0 1 0 2 2.2V4h2z"
          fill="#25F4EE"
        />
        <path
          d="M13.4 4c.3 1.8 1.5 3 3.4 3.2v2.3c-1.2 0-2.3-.4-3.4-1.1v5.4a4.6 4.6 0 1 1-4.6-4.6c.2 0 .4 0 .6.03v2.4a2.2 2.2 0 1 0 2 2.2V4h2z"
          fill="#FE2C55"
        />
        <path
          d="M13.7 4c.3 1.8 1.5 3 3.4 3.2v2.3c-1.2 0-2.3-.4-3.4-1.1v5.4a4.6 4.6 0 1 1-4.6-4.6c.2 0 .4 0 .6.03v2.4a2.2 2.2 0 1 0 2 2.2V4h2z"
          fill="white"
        />
      </svg>
    ),
  },
];

export function PlatformsPanel() {
  const { t } = useLanguage();

  return (
    <div
      id="panel-platforms"
      role="tabpanel"
      aria-labelledby="tab-platforms"
      className="animate-panel-enter flex flex-col gap-2"
    >
      <p className="mb-1 text-xs text-text-dim">{t("platformsIntro")}</p>
      {PLATFORMS.map((p) => (
        <div
          key={p.name}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5
            transition-all duration-200 ease-out hover:border-white/20"
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${p.badgeClass}`}
          >
            {p.icon}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-text">{p.name}</p>
            <p className="text-xs text-text-dim">{t(p.detailKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
