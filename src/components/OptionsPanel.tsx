import { FolderIcon, MusicalNoteIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { pickFolder } from "../lib/tauriApi";
import { formatDuration, FORMAT_BY_MODE, qualityOptions } from "../lib/formatOptions";
import type { Mode, VideoInfo } from "../types";

interface OptionsPanelProps {
  info: VideoInfo;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  format: string;
  onFormatChange: (format: string) => void;
  quality: string;
  onQualityChange: (quality: string) => void;
  onDestDirChange: (dir: string) => void;
  disabled: boolean;
}

const selectClasses =
  "flex-1 rounded-xl border border-white/8 bg-[rgba(10,10,10,0.35)] px-3 py-2 text-sm text-text outline-none " +
  "transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 " +
  "disabled:opacity-40";

export function OptionsPanel({
  info,
  mode,
  onModeChange,
  format,
  onFormatChange,
  quality,
  onQualityChange,
  onDestDirChange,
  disabled,
}: OptionsPanelProps) {
  const qualities = qualityOptions(mode, info);
  const formats = FORMAT_BY_MODE[mode];

  async function handlePickFolder() {
    const dir = await pickFolder();
    if (dir) onDestDirChange(dir);
  }

  return (
    <div className="animate-panel-enter mt-5 border-t border-white/8 pt-5">
      <div className="mb-4 flex items-center gap-3">
        {info.thumbnail && (
          <img
            src={info.thumbnail}
            alt=""
            className="h-10 w-[72px] rounded-md border border-white/8 object-cover"
          />
        )}
        <div className="min-w-0">
          <p className="truncate text-sm text-text">{info.title}</p>
          <span className="font-mono text-xs text-text-dim">{formatDuration(info.duration)}</span>
        </div>
      </div>

      <div className="mb-3 flex gap-2">
        <div className="flex overflow-hidden rounded-xl border border-white/8">
          <button
            type="button"
            onClick={() => onModeChange("video")}
            disabled={disabled}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm transition-colors ${
              mode === "video" ? "bg-accent/15 text-accent" : "text-text-dim"
            }`}
          >
            <VideoCameraIcon className="h-4 w-4" />
            Video
          </button>
          <button
            type="button"
            onClick={() => onModeChange("audio")}
            disabled={disabled}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm transition-colors ${
              mode === "audio" ? "bg-accent/15 text-accent" : "text-text-dim"
            }`}
          >
            <MusicalNoteIcon className="h-4 w-4" />
            Audio
          </button>
        </div>

        <select
          value={format}
          onChange={(e) => onFormatChange(e.target.value)}
          disabled={disabled}
          className={selectClasses}
        >
          {formats.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>

        <select
          value={quality}
          onChange={(e) => onQualityChange(e.target.value)}
          disabled={disabled || qualities.length === 0}
          className={`${selectClasses} font-mono`}
        >
          {qualities.length === 0 && <option value="">No disponible</option>}
          {qualities.map((q) => (
            <option key={q.value} value={q.value}>
              {q.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={handlePickFolder}
          disabled={disabled}
          title="Elegir carpeta de destino"
          aria-label="Elegir carpeta de destino"
          className="flex items-center justify-center rounded-full border border-white/8 p-2.5
            text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent
            active:translate-y-0 active:scale-95 disabled:pointer-events-none disabled:opacity-40
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          <FolderIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
