import { MusicalNoteIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../hooks/useLanguage";
import { FORMAT_BY_MODE, qualityOptions } from "../lib/formatOptions";
import type { Mode, VideoInfo } from "../types";
import { Select } from "./Select";
import { VideoCard } from "./VideoCard";

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
      <div className="mb-4">
        <VideoCard info={info} variant="compact" />
      </div>

      <div className="mb-3 flex gap-2">
        <div className="flex gap-1 rounded-xl bg-black/40 p-1" role="radiogroup" aria-label="Mode">
          <button
            type="button"
            role="radio"
            aria-checked={mode === "video"}
            onClick={() => onModeChange("video")}
            disabled={disabled}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-150 ease-out active:scale-[0.98] ${
              mode === "video"
                ? "bg-white/10 text-text shadow-sm"
                : "text-text-dim hover:text-text/80"
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
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-150 ease-out active:scale-[0.98] ${
              mode === "audio"
                ? "bg-white/10 text-text shadow-sm"
                : "text-text-dim hover:text-text/80"
            }`}
          >
            <MusicalNoteIcon className="h-4 w-4" aria-hidden="true" />
            {t("modeAudio")}
          </button>
        </div>

        <Select
          value={format}
          onChange={(e) => onFormatChange(e.target.value)}
          disabled={disabled}
          aria-label="Format"
          options={formats.map((f) => ({ value: f.value, label: f.label }))}
        />

        <Select
          value={quality}
          onChange={(e) => onQualityChange(e.target.value)}
          disabled={disabled || qualities.length === 0}
          aria-label="Quality"
          className="font-mono"
          emptyLabel={t("notAvailable")}
          options={qualities.map((q) => ({ value: q.value, label: q.label }))}
        />
      </div>
    </div>
  );
}
