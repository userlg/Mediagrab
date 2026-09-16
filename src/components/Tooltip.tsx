import { useEffect, useRef, useState, type ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
  position?: "top" | "bottom";
}

const HOVER_DELAY_MS = 300;

export function Tooltip({ text, children, className = "", position = "top" }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => clearTimer(), []);

  function clearTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function show() {
    clearTimer();
    timerRef.current = setTimeout(() => setVisible(true), HOVER_DELAY_MS);
  }

  function hide() {
    clearTimer();
    setVisible(false);
  }

  const isTop = position === "top";

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      <div
        role="tooltip"
        aria-hidden={!visible}
        className={`pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap
          rounded-md border border-white/10 bg-[#1a1a1a] px-2.5 py-1.5 text-xs text-text
          shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-200 ease-out
          ${isTop ? "bottom-full mb-2" : "top-full mt-2"}
          ${
            visible
              ? "translate-y-0 opacity-100"
              : `opacity-0 ${isTop ? "translate-y-1" : "-translate-y-1"}`
          }`}
      >
        {text}
        <div
          className={`absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[#1a1a1a]
            ${isTop ? "top-full -mt-[3px] border-b border-r border-white/10" : "bottom-full -mb-[3px] border-l border-t border-white/10"}`}
        />
      </div>
    </div>
  );
}
