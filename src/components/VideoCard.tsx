import { formatDuration } from "../lib/formatOptions";
import type { VideoInfo } from "../types";

interface VideoCardProps {
  info: VideoInfo;
  variant?: "compact" | "card";
  className?: string;
}

export function VideoCard({ info, variant = "compact", className = "" }: VideoCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 transition-all duration-200 ease-out
        ${isCompact ? "p-2.5" : "p-3.5"}
        ${className}`}
    >
      {info.thumbnail && (
        <img
          src={info.thumbnail}
          alt={info.title || ""}
          className={`shrink-0 rounded-lg border border-white/10 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.35)]
            ${isCompact ? "h-10 w-[72px]" : "h-12 w-20"}`}
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-text/90" title={info.title}>
          {info.title}
        </p>
        <span className="font-mono text-xs text-text-dim">{formatDuration(info.duration)}</span>
      </div>
    </div>
  );
}
