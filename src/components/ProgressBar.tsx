import type { ProgressPayload } from "../types";

interface ProgressBarProps {
  progress: ProgressPayload;
  onCancel: () => void;
}

export function ProgressBar({ progress, onCancel }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, progress.percent));

  return (
    <div className="animate-panel-enter mt-5 border-t border-white/10 pt-5">
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="animate-sheen h-full rounded-full bg-[linear-gradient(90deg,var(--color-accent-dark),var(--color-accent-light))]
            bg-[length:200%_100%] drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]
            transition-[width] duration-300 ease-out"
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
        className="mt-3 flex w-full items-center justify-center rounded-xl py-2
          text-sm text-danger transition-all duration-200 ease-out hover:bg-danger/10
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger/30"
      >
        Cancelar
      </button>
    </div>
  );
}
