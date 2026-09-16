import { ArrowDownTrayIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { readText } from "@tauri-apps/plugin-clipboard-manager";

interface UrlBarProps {
  url: string;
  onUrlChange: (url: string) => void;
  onDownload: () => void;
  canDownload: boolean;
  disabled: boolean;
}

export function UrlBar({ url, onUrlChange, onDownload, canDownload, disabled }: UrlBarProps) {
  async function handlePaste() {
    const text = await readText();
    if (text) onUrlChange(text);
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onDownload();
      }}
    >
      <input
        type="text"
        placeholder="Pega el link del video o audio…"
        value={url}
        disabled={disabled}
        onChange={(e) => onUrlChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-white/8 bg-[rgba(10,10,10,0.35)] px-4 text-sm text-text
          placeholder:text-text-dim outline-none transition-colors focus-visible:border-accent
          focus-visible:ring-2 focus-visible:ring-accent/30 disabled:opacity-50"
      />

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handlePaste}
          disabled={disabled}
          title="Pegar"
          aria-label="Pegar"
          className="flex items-center justify-center rounded-xl border border-white/8
            bg-transparent px-3.5 text-text transition-all
            hover:-translate-y-0.5 hover:border-white/20 active:translate-y-0 active:scale-95
            disabled:pointer-events-none disabled:opacity-40
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          <ClipboardIcon className="h-4 w-4" />
        </button>
        <button
          type="submit"
          disabled={disabled || !canDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-accent
            bg-accent py-2.5 text-sm font-semibold text-[#06231a] transition-all
            hover:-translate-y-0.5 active:translate-y-0 active:scale-97
            disabled:pointer-events-none disabled:opacity-40
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          Descargar
        </button>
      </div>
    </form>
  );
}
