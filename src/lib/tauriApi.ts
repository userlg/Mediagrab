import { invoke } from "@tauri-apps/api/core";
import { listen, type UnlistenFn } from "@tauri-apps/api/event";
import type {
  CompletePayload,
  ErrorPayload,
  Mode,
  ProgressPayload,
  VideoInfo,
} from "../types";

export function fetchInfo(url: string): Promise<VideoInfo> {
  return invoke<VideoInfo>("fetch_info", { url });
}

export function startDownload(params: {
  url: string;
  mode: Mode;
  format: string;
  quality: string;
  destDir: string;
}): Promise<void> {
  return invoke("start_download", params);
}

export function cancelDownload(): Promise<void> {
  return invoke("cancel_download");
}

export function pickFolder(): Promise<string | null> {
  return invoke<string | null>("pick_folder");
}

export function onDownloadProgress(
  cb: (payload: ProgressPayload) => void,
): Promise<UnlistenFn> {
  return listen<ProgressPayload>("download-progress", (e) => cb(e.payload));
}

export function onDownloadComplete(
  cb: (payload: CompletePayload) => void,
): Promise<UnlistenFn> {
  return listen<CompletePayload>("download-complete", (e) => cb(e.payload));
}

export function onDownloadError(
  cb: (payload: ErrorPayload) => void,
): Promise<UnlistenFn> {
  return listen<ErrorPayload>("download-error", (e) => cb(e.payload));
}
