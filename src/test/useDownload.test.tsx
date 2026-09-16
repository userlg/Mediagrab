import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "../hooks/useLanguage";
import { useDownload } from "../hooks/useDownload";
import * as tauriApi from "../lib/tauriApi";
import type { CompletePayload, ErrorPayload, ProgressPayload } from "../types";
import type { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("useDownload hook", () => {
  let progressCallback: (p: ProgressPayload) => void;
  let completeCallback: (c: CompletePayload) => void;
  let errorCallback: (e: ErrorPayload) => void;

  beforeEach(() => {
    vi.clearAllMocks();

    vi.spyOn(tauriApi, "onDownloadProgress").mockImplementation((cb) => {
      progressCallback = cb;
      return Promise.resolve(vi.fn());
    });
    vi.spyOn(tauriApi, "onDownloadComplete").mockImplementation((cb) => {
      completeCallback = cb;
      return Promise.resolve(vi.fn());
    });
    vi.spyOn(tauriApi, "onDownloadError").mockImplementation((cb) => {
      errorCallback = cb;
      return Promise.resolve(vi.fn());
    });
  });

  it("initializes with idle status", () => {
    const { result } = renderHook(() => useDownload(), { wrapper });
    expect(result.current.status).toBe("idle");
    expect(result.current.progress.percent).toBe(0);
    expect(result.current.message).toBe(null);
  });

  it("transitions to downloading on start and calls startDownload", async () => {
    vi.spyOn(tauriApi, "startDownload").mockResolvedValue();

    const { result } = renderHook(() => useDownload(), { wrapper });

    await act(async () => {
      await result.current.start({
        url: "https://test.com",
        mode: "video",
        format: "mp4",
        quality: "1080",
        destDir: "C:\\Downloads",
      });
    });

    expect(result.current.status).toBe("downloading");
    expect(tauriApi.startDownload).toHaveBeenCalled();
  });

  it("handles start download rejection", async () => {
    vi.spyOn(tauriApi, "startDownload").mockRejectedValue("Failed to spawn process");

    const { result } = renderHook(() => useDownload(), { wrapper });

    await act(async () => {
      await result.current.start({
        url: "https://test.com",
        mode: "video",
        format: "mp4",
        quality: "1080",
        destDir: "C:\\Downloads",
      });
    });

    expect(result.current.status).toBe("error");
    expect(result.current.message).toBe("Failed to spawn process");
  });

  it("updates progress when progress event occurs", async () => {
    const { result } = renderHook(() => useDownload(), { wrapper });

    // Wait for event listeners to attach
    await act(async () => {});

    act(() => {
      progressCallback?.({ percent: 75, speed: "5MB/s", eta: "00:03" });
    });

    expect(result.current.progress.percent).toBe(75);
    expect(result.current.progress.speed).toBe("5MB/s");
  });

  it("updates status on complete and error events", async () => {
    const { result } = renderHook(() => useDownload(), { wrapper });
    await act(async () => {});

    act(() => {
      completeCallback?.({ path: "C:\\Downloads\\file.mp4" });
    });

    expect(result.current.status).toBe("done");
    expect(result.current.message).toContain("C:\\Downloads\\file.mp4");

    act(() => {
      errorCallback?.({ message: "Network error" });
    });

    expect(result.current.status).toBe("error");
    expect(result.current.message).toBe("Network error");
  });

  it("supports cancelling download and resetting state", async () => {
    vi.spyOn(tauriApi, "cancelDownload").mockResolvedValue();

    const { result } = renderHook(() => useDownload(), { wrapper });

    await act(async () => {
      await result.current.cancel();
    });

    expect(tauriApi.cancelDownload).toHaveBeenCalled();
    expect(result.current.status).toBe("idle");

    act(() => {
      result.current.reset();
    });
    expect(result.current.status).toBe("idle");
  });
});
