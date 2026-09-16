import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "../hooks/useLanguage";
import { useVideoAnalysis } from "../hooks/useVideoAnalysis";
import * as tauriApi from "../lib/tauriApi";
import type { VideoInfo } from "../types";
import type { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("useVideoAnalysis hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("does nothing when url is empty", () => {
    const { result } = renderHook(() => useVideoAnalysis("   "), { wrapper });
    expect(result.current.analyzing).toBe(false);
    expect(result.current.videoInfo).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it("fetches video info after debounce delay", async () => {
    const mockInfo: VideoInfo = {
      title: "Test Video",
      duration: 100,
      thumbnail: null,
      videoQualities: [1080],
      audioBitrates: [128],
    };

    vi.spyOn(tauriApi, "fetchInfo").mockResolvedValue(mockInfo);

    const { result } = renderHook(() => useVideoAnalysis("https://youtube.com/watch?v=abc"), {
      wrapper,
    });

    expect(result.current.analyzing).toBe(true);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.analyzing).toBe(false);
    expect(result.current.videoInfo).toEqual(mockInfo);
    expect(result.current.error).toBe(null);
  });

  it("handles fetch errors with string or fallback message", async () => {
    vi.spyOn(tauriApi, "fetchInfo").mockRejectedValue("Video unavailable");

    const { result } = renderHook(() => useVideoAnalysis("https://youtube.com/watch?v=err"), {
      wrapper,
    });

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.analyzing).toBe(false);
    expect(result.current.videoInfo).toBe(null);
    expect(result.current.error).toBe("Video unavailable");
  });

  it("handles non-string fetch error with fallback message", async () => {
    vi.spyOn(tauriApi, "fetchInfo").mockRejectedValue(new Error("Network"));

    const { result } = renderHook(() => useVideoAnalysis("https://youtube.com/watch?v=err2"), {
      wrapper,
    });

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.analyzing).toBe(false);
    expect(result.current.error).toBeTruthy();
  });
});
