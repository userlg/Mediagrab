import { describe, expect, it } from "vitest";
import { formatDuration, FORMAT_BY_MODE, qualityOptions } from "../lib/formatOptions";
import type { VideoInfo } from "../types";

describe("formatDuration", () => {
  it("returns dash when duration is null or undefined", () => {
    expect(formatDuration(null)).toBe("—");
    expect(formatDuration(undefined as unknown as null)).toBe("—");
  });

  it("formats seconds correctly (< 1 minute)", () => {
    expect(formatDuration(45)).toBe("0:45");
    expect(formatDuration(5)).toBe("0:05");
  });

  it("formats minutes and seconds (< 1 hour)", () => {
    expect(formatDuration(125)).toBe("2:05");
    expect(formatDuration(599)).toBe("9:59");
    expect(formatDuration(3599)).toBe("59:59");
  });

  it("formats total minutes when >= 1 hour", () => {
    expect(formatDuration(3600)).toBe("60:00");
    expect(formatDuration(3665)).toBe("61:05");
    expect(formatDuration(7322)).toBe("122:02");
  });
});

describe("FORMAT_BY_MODE", () => {
  it("provides expected formats for video mode", () => {
    expect(FORMAT_BY_MODE.video).toEqual([
      { value: "mp4", label: "MP4" },
      { value: "mkv", label: "MKV" },
    ]);
  });

  it("provides expected formats for audio mode", () => {
    expect(FORMAT_BY_MODE.audio).toEqual([
      { value: "mp3", label: "MP3" },
      { value: "m4a", label: "M4A" },
    ]);
  });
});

describe("qualityOptions", () => {
  const sampleInfo: VideoInfo = {
    title: "Test Video",
    duration: 180,
    thumbnail: "https://example.com/thumb.jpg",
    videoQualities: [1080, 720, 480],
    audioBitrates: [320, 160, 128],
  };

  it("maps video qualities to options with 'p' suffix", () => {
    const options = qualityOptions("video", sampleInfo);
    expect(options).toEqual([
      { value: "1080", label: "1080p" },
      { value: "720", label: "720p" },
      { value: "480", label: "480p" },
    ]);
  });

  it("maps audio bitrates to options with 'kbps' suffix", () => {
    const options = qualityOptions("audio", sampleInfo);
    expect(options).toEqual([
      { value: "320", label: "320 kbps" },
      { value: "160", label: "160 kbps" },
      { value: "128", label: "128 kbps" },
    ]);
  });

  it("returns empty array when source is empty", () => {
    const emptyInfo: VideoInfo = {
      title: "Empty",
      duration: 10,
      thumbnail: null,
      videoQualities: [],
      audioBitrates: [],
    };
    const options = qualityOptions("video", emptyInfo);
    expect(options).toEqual([]);
  });
});
