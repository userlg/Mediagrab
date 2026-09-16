import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "../hooks/useLanguage";
import type { VideoInfo } from "../types";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { VideoCard } from "./VideoCard";

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
            <div className="mt-5 text-left">
              <VideoCard info={info} variant="card" />
            </div>
          )}

          <Button variant="primary" size="md" onClick={onClose} className="mt-6 w-full">
            {t("ok")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
