import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./useLanguage";
import {
  cancelDownload,
  onDownloadComplete,
  onDownloadError,
  onDownloadProgress,
  startDownload,
} from "../lib/tauriApi";
import type { DownloadStatus, Mode, ProgressPayload } from "../types";

export function useDownload() {
  const [status, setStatus] = useState<DownloadStatus>("idle");
  const [progress, setProgress] = useState<ProgressPayload>({
    percent: 0,
    speed: "—",
    eta: "—",
  });
  const [message, setMessage] = useState<string | null>(null);

  const { lang, t } = useLanguage();
  // Los listeners de eventos se registran una sola vez (efecto con deps
  // vacías); se lee `t` por ref para que el mensaje de "Guardado en ..."
  // siempre use el idioma vigente en el momento del evento, no el que
  // estaba activo cuando se montó el hook.
  const tRef = useRef(t);
  tRef.current = t;

  useEffect(() => {
    let disposed = false;
    let unlisteners: (() => void)[] = [];

    Promise.all([
      onDownloadProgress((p) => !disposed && setProgress(p)),
      onDownloadComplete((p) => {
        if (disposed) return;
        setStatus("done");
        setMessage(`${tRef.current("savedTo")} ${p.path}`);
      }),
      onDownloadError((p) => {
        if (disposed) return;
        setStatus("error");
        setMessage(p.message);
      }),
    ]).then((fns) => {
      // Si el efecto ya se limpió mientras listen() resolvía (p. ej. el doble
      // montaje de StrictMode en dev), se desuscribe de inmediato en vez de
      // dejar los listeners de este primer intento filtrándose para siempre.
      if (disposed) {
        fns.forEach((fn) => fn());
      } else {
        unlisteners = fns;
      }
    });

    return () => {
      disposed = true;
      unlisteners.forEach((fn) => fn());
    };
  }, []);

  async function start(params: {
    url: string;
    mode: Mode;
    format: string;
    quality: string;
    destDir: string;
  }) {
    setStatus("downloading");
    setMessage(null);
    setProgress({ percent: 0, speed: "—", eta: "—" });
    try {
      await startDownload({ ...params, lang });
    } catch (err) {
      setStatus("error");
      setMessage(typeof err === "string" ? err : t("couldNotStartDownload"));
    }
  }

  async function cancel() {
    await cancelDownload();
    setStatus("idle");
    setMessage(null);
  }

  function reset() {
    setStatus("idle");
    setMessage(null);
  }

  return { status, progress, message, start, cancel, reset };
}
