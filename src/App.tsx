import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { BackgroundEffects, CardGlowEffects } from "./components/BackgroundEffects";
import { Footer } from "./components/Footer";
import { NavigationTabs, type ViewTab } from "./components/NavigationTabs";
import { OptionsPanel } from "./components/OptionsPanel";
import { PlatformsPanel } from "./components/PlatformsPanel";
import { ProgressBar } from "./components/ProgressBar";
import { StatusBanner } from "./components/StatusBanner";
import { SuccessModal } from "./components/SuccessModal";
import { UrlBar } from "./components/UrlBar";
import { useDownload } from "./hooks/useDownload";
import { useVideoAnalysis } from "./hooks/useVideoAnalysis";
import { FORMAT_BY_MODE, qualityOptions } from "./lib/formatOptions";
import { pickFolder } from "./lib/tauriApi";
import type { Mode } from "./types";

export default function App() {
  const [view, setView] = useState<ViewTab>("download");
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<Mode>("video");
  const [format, setFormat] = useState(FORMAT_BY_MODE.video[0].value);
  const [quality, setQuality] = useState("");

  const { videoInfo, analyzing, error: analysisError } = useVideoAnalysis(url);
  const { status, progress, message, start, cancel, reset } = useDownload();

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
    if (!videoInfo || !quality) return;
    const destDir = await pickFolder();
    if (!destDir) return;
    await start({ url, mode, format, quality, destDir });
  }

  function handleSuccessClose() {
    reset();
    setUrl("");
    setMode("video");
    setFormat(FORMAT_BY_MODE.video[0].value);
  }

  const busy = status === "downloading";
  const canDownload = Boolean(videoInfo && quality && !analyzing);

  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden bg-bg"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(16,185,129,0.08) 0%, transparent 70%), " +
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%2310b981' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <BackgroundEffects />

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-8">
        <section
          aria-label="Media Grabber Card"
          className={`animate-card-enter relative w-[440px] overflow-hidden rounded-2xl
            border border-white/10 bg-[rgba(18,24,27,0.65)] p-8 backdrop-blur-xl backdrop-saturate-150
            transition-shadow duration-200 ease-out
            hover:shadow-[0_0_25px_rgba(16,185,129,0.15),0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]
            ${
              busy || analyzing
                ? "shadow-[0_0_30px_rgba(16,185,129,0.12),0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]"
                : "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]"
            }`}
        >
          <CardGlowEffects />

          <AppHeader />

          <NavigationTabs currentView={view} onSelectView={setView} />

          {view === "platforms" ? (
            <div className="relative z-10 mt-5">
              <PlatformsPanel />
            </div>
          ) : (
            <div
              id="panel-download"
              role="tabpanel"
              aria-labelledby="tab-download"
              className="relative z-10"
            >
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
                <div className="animate-fade-in mt-3 flex justify-center text-accent" role="status">
                  <ArrowPathIcon className="h-5 w-5 animate-spin" />
                </div>
              )}

              {analysisError && (
                <p className="animate-fade-in mt-3 text-center text-sm text-danger" role="alert">
                  {analysisError}
                </p>
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
                  disabled={busy}
                />
              )}

              {busy && <ProgressBar progress={progress} onCancel={cancel} />}

              {status === "error" && message && (
                <StatusBanner kind="error" message={message} onDismiss={reset} />
              )}
            </div>
          )}
        </section>
      </div>

      <Footer />

      <SuccessModal open={status === "done"} info={videoInfo} onClose={handleSuccessClose} />
    </main>
  );
}
