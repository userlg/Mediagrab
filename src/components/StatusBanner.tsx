import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "../hooks/useLanguage";

interface StatusBannerProps {
  kind: "done" | "error";
  message: string;
  onDismiss: () => void;
}

export function StatusBanner({ kind, message, onDismiss }: StatusBannerProps) {
  const { t } = useLanguage();
  const isDone = kind === "done";

  return (
    <div
      role="alert"
      className={`animate-banner-enter mt-4 flex items-center gap-2.5 rounded-xl border
        border-white/10 px-3 py-2.5 text-sm ${isDone ? "bg-accent/15 text-accent" : "bg-danger/10 text-danger"}`}
    >
      {isDone ? (
        <CheckCircleIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      ) : (
        <ExclamationCircleIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      )}
      <p className="flex-1 truncate">{message}</p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label={t("close")}
        className="text-current opacity-60 transition-opacity duration-200 ease-out hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current rounded"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
