import { memo } from "react";

export const BackgroundEffects = memo(function BackgroundEffects() {
  return (
    <>
      {/* Floating Ambient Gradient Blobs */}
      <div
        className="animate-drift-c pointer-events-none absolute left-[-6%] top-[-8%] h-[320px] w-[320px]
          rounded-full bg-[radial-gradient(circle,#ec4899,transparent_70%)] opacity-[0.1] blur-[10px]"
        aria-hidden="true"
      />
      <div
        className="animate-drift-a pointer-events-none absolute left-[55%] top-[12%] h-[440px] w-[440px]
          rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] opacity-25 blur-[10px]"
        aria-hidden="true"
      />
      <div
        className="animate-drift-b pointer-events-none absolute left-[15%] top-[55%] h-[360px] w-[360px]
          rounded-full bg-[radial-gradient(circle,#3fa8ff,transparent_70%)] opacity-10 blur-[10px]"
        aria-hidden="true"
      />
    </>
  );
});

export const CardGlowEffects = memo(function CardGlowEffects() {
  return (
    <>
      <div
        className="animate-drift-a pointer-events-none absolute -left-1/4 -top-1/3 z-0 h-[280px] w-[280px]
          rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] opacity-[0.12] blur-[40px]"
        aria-hidden="true"
      />
      <div
        className="animate-drift-b pointer-events-none absolute -bottom-1/3 -right-1/4 z-0 h-[260px] w-[260px]
          rounded-full bg-[radial-gradient(circle,#ec4899,transparent_70%)] opacity-[0.08] blur-[40px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.045] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </>
  );
});
