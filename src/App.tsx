import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { downloadDir } from "@tauri-apps/api/path";
import { useEffect, useState } from "react";
import { OptionsPanel } from "./components/OptionsPanel";
import { ProgressBar } from "./components/ProgressBar";
import { StatusBanner } from "./components/StatusBanner";
import { UrlBar } from "./components/UrlBar";
import { useDownload } from "./hooks/useDownload";
import { useVideoAnalysis } from "./hooks/useVideoAnalysis";
import { FORMAT_BY_MODE, qualityOptions } from "./lib/formatOptions";
import type { Mode } from "./types";

function App() {
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<Mode>("video");
  const [format, setFormat] = useState(FORMAT_BY_MODE.video[0].value);
  const [quality, setQuality] = useState("");
  const [destDir, setDestDir] = useState("");

  const { videoInfo, analyzing, error: analysisError } = useVideoAnalysis(url);
  const { status, progress, message, start, cancel, reset } = useDownload();

  useEffect(() => {
    downloadDir().then(setDestDir).catch(() => {});
  }, []);

  useEffect(() => {
    if (!videoInfo) return;
    const options = qualityOptions(mode, videoInfo);
    setQuality(options[0]?.value ?? "");
  }, [videoInfo, mode]);

  function handleModeChange(next: Mode) {
    setMode(next);
    setFormat(FORMAT_BY_MODE[next][0].value);
  }

  async function handleDownload() {
    if (!videoInfo || !quality || !destDir) return;
    await start({ url, mode, format, quality, destDir });
  }

  const busy = status === "downloading";
  const canDownload = Boolean(videoInfo && quality && destDir && !analyzing);

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%232ee6a6' fill-opacity='0.09' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <div
        className="animate-drift-a pointer-events-none absolute left-[55%] top-[12%] h-[440px] w-[440px]
          rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] opacity-25 blur-[10px]"
      />
      <div
        className="animate-drift-b pointer-events-none absolute left-[15%] top-[55%] h-[360px] w-[360px]
          rounded-full bg-[radial-gradient(circle,#3fa8ff,transparent_70%)] opacity-10 blur-[10px]"
      />

      <div
        className={`animate-card-enter relative w-[440px] overflow-hidden rounded-2xl
          border border-white/8 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl
          backdrop-saturate-150 transition-shadow duration-500
          ${busy ? "animate-glow-pulse" : ""}`}
        style={{ backgroundColor: "rgba(20,20,20,0.5)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%)",
          }}
        />
        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.045] mix-blend-overlay">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <div className="relative z-10 flex items-center justify-center gap-2.5">
          <img src="/icon.svg" alt="" className="h-7 w-7" />
          <h1 className="text-[26px] font-bold tracking-tight text-text [font-family:var(--font-display)]">
            Mediagrab
          </h1>
        </div>

        <div className="mt-5">
          <UrlBar
            url={url}
            onUrlChange={setUrl}
            onDownload={handleDownload}
            canDownload={canDownload}
            disabled={busy}
          />
        </div>

        {analyzing && (
          <div className="animate-fade-in mt-3 flex justify-center text-accent">
            <ArrowPathIcon className="h-5 w-5 animate-spin" />
          </div>
        )}

        {analysisError && (
          <p className="animate-fade-in mt-3 text-center text-sm text-danger">{analysisError}</p>
        )}

        {videoInfo && !busy && (
          <OptionsPanel
            info={videoInfo}
            mode={mode}
            onModeChange={handleModeChange}
            format={format}
            onFormatChange={setFormat}
            quality={quality}
            onQualityChange={setQuality}
            onDestDirChange={setDestDir}
            disabled={busy}
          />
        )}

        {busy && <ProgressBar progress={progress} onCancel={cancel} />}

        {(status === "done" || status === "error") && message && (
          <StatusBanner
            kind={status === "done" ? "done" : "error"}
            message={message}
            onDismiss={reset}
          />
        )}
      </div>
    </main>
  );
}

export default App;
