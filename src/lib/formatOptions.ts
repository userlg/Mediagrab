import type { Mode, VideoInfo } from "../types";

export interface QualityOption {
  value: string;
  label: string;
}

export const FORMAT_BY_MODE: Record<Mode, { value: string; label: string }[]> = {
  video: [
    { value: "mp4", label: "MP4" },
    { value: "mkv", label: "MKV" },
  ],
  audio: [
    { value: "mp3", label: "MP3" },
    { value: "m4a", label: "M4A" },
  ],
};

export function qualityOptions(mode: Mode, info: VideoInfo): QualityOption[] {
  const source = mode === "video" ? info.videoQualities : info.audioBitrates;
  return source.map((n) => ({
    value: String(n),
    label: mode === "video" ? `${n}p` : `${n} kbps`,
  }));
}

export function formatDuration(seconds: number | null): string {
  if (seconds == null) return "—";
  const total = Math.round(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
