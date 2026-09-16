interface Platform {
  name: string;
  detail: string;
  badgeClass: string;
  icon: React.ReactNode;
}

// Plataformas ya probadas y funcionando en Mediagrab. Cuando se pruebe una
// nueva, se agrega aquí con su propio ícono — esta lista es la única fuente
// de verdad para la pestaña "Plataformas".
const PLATFORMS: Platform[] = [
  {
    name: "YouTube",
    detail: "Videos",
    badgeClass: "bg-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M9.5 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
  {
    name: "YouTube Shorts",
    detail: "Video corto vertical",
    badgeClass: "bg-black",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <rect x="7" y="3" width="10" height="18" rx="4" stroke="#FF0000" strokeWidth="1.6" />
        <path d="M10.5 11.2V8.6l4 2.6-4 2.6v-2.6z" fill="#FF0000" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    detail: "Reels y publicaciones",
    badgeClass: "bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="1.6">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.6" cy="7.4" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    detail: "Videos",
    badgeClass: "bg-black",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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
  return (
    <div className="animate-panel-enter flex flex-col gap-2">
      <p className="mb-1 text-xs text-text-dim">
        Sitios ya probados y funcionando. Se irán sumando más con el tiempo.
      </p>
      {PLATFORMS.map((p) => (
        <div
          key={p.name}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5
            transition-all duration-200 ease-out hover:border-white/20"
        >
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${p.badgeClass}`}>
            {p.icon}
          </div>
          <div className="min-w-0">
            <p className="text-sm text-text">{p.name}</p>
            <p className="text-xs text-text-dim">{p.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
