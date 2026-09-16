import { useEffect, useState } from "react";
import { fetchInfo } from "../lib/tauriApi";
import type { VideoInfo } from "../types";

const DEBOUNCE_MS = 500;

export function useVideoAnalysis(url: string) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trimmed = url.trim();
    setVideoInfo(null);
    setError(null);

    if (!trimmed) {
      setAnalyzing(false);
      return;
    }

    let cancelled = false;
    setAnalyzing(true);

    const timer = setTimeout(async () => {
      try {
        const info = await fetchInfo(trimmed);
        if (!cancelled) setVideoInfo(info);
      } catch (err) {
        if (!cancelled) {
          setError(typeof err === "string" ? err : "No se pudo analizar el link.");
        }
      } finally {
        if (!cancelled) setAnalyzing(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [url]);

  return { videoInfo, analyzing, error };
}
