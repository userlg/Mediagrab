import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent font-semibold text-accent-ink shadow-[0_2px_12px_rgba(52,211,153,0.25)] " +
    "hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_4px_18px_rgba(52,211,153,0.35)] " +
    "active:translate-y-0 active:scale-[0.98] focus-visible:ring-accent/50",
  secondary:
    "border border-white/10 bg-black/20 text-text hover:-translate-y-0.5 hover:border-white/25 " +
    "hover:bg-white/[0.06] active:translate-y-0 active:scale-[0.98] focus-visible:ring-white/30",
  danger:
    "border border-danger/20 bg-danger/10 text-danger hover:border-danger/30 hover:bg-danger/15 " +
    "active:scale-[0.98] focus-visible:ring-danger/40",
  ghost:
    "border-transparent bg-transparent text-text-dim hover:bg-white/10 hover:text-text " +
    "active:scale-[0.98] focus-visible:ring-white/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-2.5 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-3.5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-5 py-3 text-base rounded-xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center font-medium transition-all duration-150 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117]
        disabled:pointer-events-none disabled:opacity-40
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
