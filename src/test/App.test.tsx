import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import { LanguageProvider } from "../hooks/useLanguage";
import * as tauriApi from "../lib/tauriApi";
import type { CompletePayload, ProgressPayload, VideoInfo } from "../types";

const renderApp = () => {
  return render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  );
};

describe("App main integration", () => {
  let progressCb: (p: ProgressPayload) => void;
  let completeCb: (c: CompletePayload) => void;
  let errorCb: (e: { message: string }) => void;

  const mockVideo: VideoInfo = {
    title: "Awesome Clip",
    duration: 150,
    thumbnail: "https://example.com/thumb.jpg",
    videoQualities: [1080, 720],
    audioBitrates: [320, 128],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(tauriApi, "onDownloadProgress").mockImplementation((cb) => {
      progressCb = cb;
      return Promise.resolve(vi.fn());
    });
    vi.spyOn(tauriApi, "onDownloadComplete").mockImplementation((cb) => {
      completeCb = cb;
      return Promise.resolve(vi.fn());
    });
    vi.spyOn(tauriApi, "onDownloadError").mockImplementation((cb) => {
      errorCb = cb;
      return Promise.resolve(vi.fn());
    });
  });

  it("renders header, tabs, footer and defaults to download view", () => {
    renderApp();
    expect(screen.getByRole("heading", { name: "Mediagrab", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /descargar|download/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /plataformas|platforms/i })).toBeInTheDocument();
    expect(screen.getByText("© 2026")).toBeInTheDocument();
  });

  it("switches to platforms view when clicking platforms tab", () => {
    renderApp();
    const platformsTab = screen.getByRole("tab", { name: /plataformas|platforms/i });
    fireEvent.click(platformsTab);

    expect(screen.getByText("YouTube Shorts")).toBeInTheDocument();
    expect(screen.getByText("TikTok")).toBeInTheDocument();
  });

  it("handles video analysis, options selection, folder picking and download flow", async () => {
    vi.useFakeTimers();
    vi.spyOn(tauriApi, "fetchInfo").mockResolvedValue(mockVideo);
    vi.spyOn(tauriApi, "pickFolder").mockResolvedValue("D:\\Downloads");
    vi.spyOn(tauriApi, "startDownload").mockResolvedValue();

    renderApp();

    const input = screen.getByPlaceholderText(/enlace|link/i);
    fireEvent.change(input, { target: { value: "https://youtube.com/watch?v=12345" } });

    // Advance debounce timer for video analysis
    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    vi.useRealTimers();

    // Video info should be displayed
    expect(screen.getByText("Awesome Clip")).toBeInTheDocument();

    // Switch to audio mode
    const audioRadio = screen.getByRole("radio", { name: /audio/i });
    fireEvent.click(audioRadio);

    // Click download button
    const downloadBtn = screen.getByRole("button", { name: /descargar|download/i });
    await act(async () => {
      fireEvent.click(downloadBtn);
    });

    expect(tauriApi.pickFolder).toHaveBeenCalled();
    expect(tauriApi.startDownload).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "audio",
        destDir: "D:\\Downloads",
      }),
    );

    // Simulate progress
    act(() => {
      progressCb?.({ percent: 50, speed: "3MB/s", eta: "00:05" });
    });
    expect(screen.getByText("50.0%")).toBeInTheDocument();

    // Simulate completion
    act(() => {
      completeCb?.({ path: "D:\\Downloads\\clip.mp3" });
    });

    // Success modal appears
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    // Close success modal
    const okBtn = screen.getByRole("button", { name: /aceptar|ok/i });
    fireEvent.click(okBtn);

    // Should return to idle with reset input
    expect(screen.getByPlaceholderText(/enlace|link/i)).toHaveValue("");
  });

  it("displays error banner if download encounters error and allows dismissing", async () => {
    renderApp();

    act(() => {
      errorCb?.({ message: "Network connection lost" });
    });

    expect(screen.getByText("Network connection lost")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /cerrar|close/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByText("Network connection lost")).not.toBeInTheDocument();
  });
});
