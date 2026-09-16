import { MusicalNoteIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../hooks/useLanguage";
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
  disabled: boolean;
}

const selectClasses =
  "flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-text outline-none " +
  "transition-all duration-200 ease-out focus-visible:border-accent/60 " +
  "focus-visible:ring-1 focus-visible:ring-accent/30 disabled:opacity-40 cursor-pointer";

export function OptionsPanel({
  info,
  mode,
  onModeChange,
  format,
  onFormatChange,
  quality,
  onQualityChange,
  disabled,
}: OptionsPanelProps) {
  const { t } = useLanguage();
  const qualities = qualityOptions(mode, info);
  const formats = FORMAT_BY_MODE[mode];

  return (
    <div className="animate-panel-enter mt-5 border-t border-white/10 pt-5">
      <div className="mb-4 flex items-center gap-3">
        {info.thumbnail && (
          <img
            src={info.thumbnail}
            alt=""
            className="h-10 w-[72px] rounded-lg border border-white/10 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
          />
        )}
        <div className="min-w-0">
          <p className="truncate text-sm text-text/90">{info.title}</p>
          <span className="font-mono text-xs text-text-dim">{formatDuration(info.duration)}</span>
        </div>
      </div>

      <div className="mb-3 flex gap-2">
        <div className="flex gap-1 rounded-xl bg-black/40 p-1" role="radiogroup" aria-label="Mode">
          <button
            type="button"
            role="radio"
            aria-checked={mode === "video"}
            onClick={() => onModeChange("video")}
            disabled={disabled}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-200 ease-out ${
              mode === "video" ? "bg-white/10 text-text" : "text-text-dim hover:text-text/80"
            }`}
          >
            <VideoCameraIcon className="h-4 w-4" aria-hidden="true" />
            {t("modeVideo")}
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === "audio"}
            onClick={() => onModeChange("audio")}
            disabled={disabled}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-200 ease-out ${
              mode === "audio" ? "bg-white/10 text-text" : "text-text-dim hover:text-text/80"
            }`}
          >
            <MusicalNoteIcon className="h-4 w-4" aria-hidden="true" />
            {t("modeAudio")}
          </button>
        </div>

        <select
          value={format}
          onChange={(e) => onFormatChange(e.target.value)}
          disabled={disabled}
          aria-label="Format"
          className={selectClasses}
        >
          {formats.map((f) => (
            <option key={f.value} value={f.value} className="bg-[#141414] text-text">
              {f.label}
            </option>
          ))}
        </select>

        <select
          value={quality}
          onChange={(e) => onQualityChange(e.target.value)}
          disabled={disabled || qualities.length === 0}
          aria-label="Quality"
          className={`${selectClasses} font-mono`}
        >
          {qualities.length === 0 && (
            <option value="" className="bg-[#141414] text-text">
              {t("notAvailable")}
            </option>
          )}
          {qualities.map((q) => (
            <option key={q.value} value={q.value} className="bg-[#141414] text-text">
              {q.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
