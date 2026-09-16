import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  cancelDownload,
  fetchInfo,
  onDownloadComplete,
  onDownloadError,
  onDownloadProgress,
  pickFolder,
  startDownload,
} from "../lib/tauriApi";
import type { CompletePayload, ErrorPayload, ProgressPayload, VideoInfo } from "../types";

describe("tauriApi bridge", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls invoke for fetchInfo with url and lang", async () => {
    const mockResult: VideoInfo = {
      title: "Sample Video",
      duration: 120,
      thumbnail: null,
      videoQualities: [1080],
      audioBitrates: [128],
    };
    vi.mocked(invoke).mockResolvedValueOnce(mockResult);

    const res = await fetchInfo("https://youtube.com/watch?v=123", "es");
    expect(invoke).toHaveBeenCalledWith("fetch_info", {
      url: "https://youtube.com/watch?v=123",
      lang: "es",
    });
    expect(res).toEqual(mockResult);
  });

  it("calls invoke for startDownload with all parameters", async () => {
    vi.mocked(invoke).mockResolvedValueOnce(undefined);

    await startDownload({
      url: "https://youtube.com/watch?v=123",
      mode: "video",
      format: "mp4",
      quality: "1080",
      destDir: "C:\\Downloads",
      lang: "en",
    });

    expect(invoke).toHaveBeenCalledWith("start_download", {
      url: "https://youtube.com/watch?v=123",
      mode: "video",
      format: "mp4",
      quality: "1080",
      destDir: "C:\\Downloads",
      lang: "en",
    });
  });

  it("calls invoke for cancelDownload", async () => {
    vi.mocked(invoke).mockResolvedValueOnce(undefined);
    await cancelDownload();
    expect(invoke).toHaveBeenCalledWith("cancel_download");
  });

  it("calls invoke for pickFolder", async () => {
    vi.mocked(invoke).mockResolvedValueOnce("D:\\Movies");
    const folder = await pickFolder();
    expect(invoke).toHaveBeenCalledWith("pick_folder");
    expect(folder).toBe("D:\\Movies");
  });

  it("attaches event listeners for progress, complete, error and triggers callbacks", async () => {
    let progressHandler: ((e: { payload: ProgressPayload }) => void) | undefined;
    let completeHandler: ((e: { payload: CompletePayload }) => void) | undefined;
    let errorHandler: ((e: { payload: ErrorPayload }) => void) | undefined;

    const unlistenFn = vi.fn();
    vi.mocked(listen).mockImplementation(((event: string, handler: (e: any) => void) => {
      if (event === "download-progress") progressHandler = handler;
      if (event === "download-complete") completeHandler = handler;
      if (event === "download-error") errorHandler = handler;
      return Promise.resolve(unlistenFn);
    }) as any);

    const onProgress = vi.fn();
    const onComplete = vi.fn();
    const onError = vi.fn();

    const cleanup1 = await onDownloadProgress(onProgress);
    const cleanup2 = await onDownloadComplete(onComplete);
    const cleanup3 = await onDownloadError(onError);

    expect(listen).toHaveBeenCalledWith("download-progress", expect.any(Function));
    expect(listen).toHaveBeenCalledWith("download-complete", expect.any(Function));
    expect(listen).toHaveBeenCalledWith("download-error", expect.any(Function));

    // Simulate event emissions
    const mockProgress: ProgressPayload = { percent: 50, speed: "2MB/s", eta: "00:10" };
    progressHandler?.({ payload: mockProgress });
    expect(onProgress).toHaveBeenCalledWith(mockProgress);

    const mockComplete: CompletePayload = { path: "C:\\Downloads\\video.mp4" };
    completeHandler?.({ payload: mockComplete });
    expect(onComplete).toHaveBeenCalledWith(mockComplete);

    const mockError: ErrorPayload = { message: "Network failure" };
    errorHandler?.({ payload: mockError });
    expect(onError).toHaveBeenCalledWith(mockError);

    cleanup1();
    cleanup2();
    cleanup3();
    expect(unlistenFn).toHaveBeenCalledTimes(3);
  });
});
