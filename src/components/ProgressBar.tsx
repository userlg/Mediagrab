import { XCircleIcon } from "@heroicons/react/24/outline";
import type { ProgressPayload } from "../types";

interface ProgressBarProps {
  progress: ProgressPayload;
  onCancel: () => void;
}

export function ProgressBar({ progress, onCancel }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, progress.percent));

  return (
    <div className="animate-panel-enter mt-5 border-t border-white/8 pt-5">
      <div className="h-2 overflow-hidden rounded-full border border-white/8 bg-[rgba(10,10,10,0.35)]">
        <div
          className="animate-sheen h-full rounded-full bg-[linear-gradient(90deg,var(--color-accent),#58ffd0,var(--color-accent))] bg-[length:200%_100%] transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-2.5 flex justify-between font-mono text-xs text-text-dim">
        <span>{percent.toFixed(1)}%</span>
        <span>{progress.speed}</span>
        <span>ETA {progress.eta}</span>
      </div>

      <button
        type="button"
        onClick={onCancel}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border
          border-white/8 py-2 text-sm text-danger transition-colors hover:border-danger
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger/30"
      >
        <XCircleIcon className="h-4 w-4" />
        Cancelar
      </button>
    </div>
  );
}
