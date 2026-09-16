export type Mode = "video" | "audio";

export type DownloadStatus = "idle" | "downloading" | "done" | "error";

export interface VideoInfo {
  title: string;
  thumbnail: string | null;
  duration: number | null;
  videoQualities: number[];
  audioBitrates: number[];
}

export interface ProgressPayload {
  percent: number;
  speed: string;
  eta: string;
}

export interface CompletePayload {
  path: string;
}

export interface ErrorPayload {
  message: string;
}
