import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface StatusBannerProps {
  kind: "done" | "error";
  message: string;
  onDismiss: () => void;
}

export function StatusBanner({ kind, message, onDismiss }: StatusBannerProps) {
  const isDone = kind === "done";

  return (
    <div
      className={`animate-panel-enter mt-4 flex items-center gap-2.5 rounded-xl border
        border-white/8 px-3 py-2.5 text-sm ${isDone ? "bg-accent/15 text-accent" : "bg-danger/10 text-danger"}`}
    >
      {isDone ? (
        <CheckCircleIcon className="h-5 w-5 shrink-0" />
      ) : (
        <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
      )}
      <p className="flex-1 truncate">{message}</p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Cerrar"
        className="text-current opacity-60 transition-opacity hover:opacity-100"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
