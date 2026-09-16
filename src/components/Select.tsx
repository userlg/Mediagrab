import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  emptyLabel?: string;
  containerClassName?: string;
}

export function Select({
  options,
  emptyLabel,
  className = "",
  containerClassName = "",
  disabled,
  ...props
}: SelectProps) {
  return (
    <div className={`relative flex-1 ${containerClassName}`}>
      <select
        disabled={disabled}
        className={`w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-black/40
          px-3 py-2 pr-8 text-sm text-text outline-none transition-all duration-150 ease-out
          hover:border-white/20 focus-visible:border-accent/60 focus-visible:ring-1 focus-visible:ring-accent/30
          disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
        {...props}
      >
        {options.length === 0 && emptyLabel && (
          <option value="" className="bg-[#141414] text-text">
            {emptyLabel}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#141414] text-text">
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-text-dim">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
