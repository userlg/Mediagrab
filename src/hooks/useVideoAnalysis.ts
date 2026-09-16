import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./useLanguage";
import { fetchInfo } from "../lib/tauriApi";
import type { VideoInfo } from "../types";

const DEBOUNCE_MS = 500;

export function useVideoAnalysis(url: string) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // El idioma puede cambiar mientras hay un análisis en curso o entre
  // pegadas de link; se lee por ref para no tener que re-disparar el
  // efecto (y por lo tanto un nuevo fetch) solo porque cambió el idioma.
  const { lang, t } = useLanguage();
  const langRef = useRef(lang);
  const tRef = useRef(t);
  langRef.current = lang;
  tRef.current = t;

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
        const info = await fetchInfo(trimmed, langRef.current);
        if (!cancelled) setVideoInfo(info);
      } catch (err) {
        if (!cancelled) {
          setError(typeof err === "string" ? err : tRef.current("couldNotAnalyzeLink"));
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
