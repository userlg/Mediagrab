import { ArrowDownTrayIcon, ClipboardIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { readText } from "@tauri-apps/plugin-clipboard-manager";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

interface UrlBarProps {
  url: string;
  onUrlChange: (url: string) => void;
  onDownload: () => void;
  canDownload: boolean;
  disabled: boolean;
}

export function UrlBar({ url, onUrlChange, onDownload, canDownload, disabled }: UrlBarProps) {
  const { t } = useLanguage();

  async function handlePaste() {
    try {
      const text = await readText();
      if (text) onUrlChange(text);
    } catch {
      // Portapapeles sin texto o sin permiso — no hay nada que pegar.
    }
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onDownload();
      }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder={t("urlPlaceholder")}
          value={url}
          disabled={disabled}
          onChange={(e) => onUrlChange(e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-black/30 pl-4 pr-10 text-sm text-text
            placeholder:text-text-dim outline-none transition-all duration-150 ease-out
            focus-visible:border-accent/60 focus-visible:ring-1 focus-visible:ring-accent/30
            disabled:opacity-50"
        />
        {url && !disabled && (
          <button
            type="button"
            onClick={() => onUrlChange("")}
            aria-label={t("clearLink")}
            className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center
              justify-center rounded-full text-text-dim transition-all duration-150 ease-out
              hover:bg-white/10 hover:text-text"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex gap-2">
        <Tooltip text={t("paste")}>
          <Button
            variant="secondary"
            onClick={handlePaste}
            disabled={disabled}
            aria-label={t("paste")}
            icon={<ClipboardIcon className="h-4 w-4" />}
          >
            {""}
          </Button>
        </Tooltip>

        <Tooltip text={t("download")} className="flex-1">
          <Button
            type="submit"
            variant="primary"
            disabled={disabled || !canDownload}
            className="w-full"
            icon={<ArrowDownTrayIcon className="h-4 w-4" />}
          >
            {t("download")}
          </Button>
        </Tooltip>
      </div>
    </form>
  );
}
