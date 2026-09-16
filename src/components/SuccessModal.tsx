import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "../hooks/useLanguage";
import { formatDuration } from "../lib/formatOptions";
import type { VideoInfo } from "../types";
import { Modal } from "./Modal";

interface SuccessModalProps {
  open: boolean;
  info: VideoInfo | null;
  onClose: () => void;
}

export function SuccessModal({ open, info, onClose }: SuccessModalProps) {
  const { t } = useLanguage();

  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="relative w-[380px] overflow-hidden rounded-2xl border border-white/10
          bg-[rgba(18,24,27,0.92)] p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      >
        <div
          className="pointer-events-none absolute -top-1/3 left-1/2 h-[220px] w-[220px] -translate-x-1/2
            rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] opacity-[0.15] blur-[40px]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <CheckCircleIcon className="mx-auto h-14 w-14 text-accent" />

          <h2 className="mt-3 text-xl font-bold tracking-tight text-text [font-family:var(--font-display)]">
            {t("downloadComplete")}
          </h2>
          <p className="mt-1 text-sm text-text-dim">{t("fileSavedSuccess")}</p>

          {info && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-3 text-left">
              {info.thumbnail && (
                <img
                  src={info.thumbnail}
                  alt=""
                  className="h-11 w-20 shrink-0 rounded-lg border border-white/10 object-cover"
                />
              )}
              <div className="min-w-0">
                <p className="truncate text-sm text-text/90">{info.title}</p>
                <span className="font-mono text-xs text-text-dim">
                  {formatDuration(info.duration)}
                </span>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-xl border border-accent bg-accent py-2.5 text-sm font-semibold
              text-accent-ink transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-light
              hover:shadow-lg hover:shadow-accent/20 active:translate-y-0 active:scale-97
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t("ok")}
          </button>
        </div>
      </div>
    </Modal>
  );
}
