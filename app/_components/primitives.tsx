import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted">
      {children}
    </span>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-accent px-1 text-accent-ink">{children}</mark>
  );
}

export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`select-none text-xl font-light text-muted ${className}`}>
      +
    </span>
  );
}

const DOT_POSITIONS = [0, 1, 2];

/** 3×3 grid of nodes wired by vertical traces, echoing the circuit motif. */
export function DotMatrixIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={`h-10 w-10 text-accent-light ${className}`}>
      {DOT_POSITIONS.map((column) => (
        <line
          key={`trace-${column}`}
          x1={6 + column * 14}
          y1={6}
          x2={6 + column * 14}
          y2={34}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
      ))}
      {DOT_POSITIONS.flatMap((row) =>
        DOT_POSITIONS.map((column) => (
          <circle
            key={`${row}-${column}`}
            cx={6 + column * 14}
            cy={6 + row * 14}
            r="3.5"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}

export function TickMarks({ count = 4 }: { count?: number }) {
  return (
    <div aria-hidden className="flex flex-col gap-2">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`block h-px w-3 ${index % 2 === 0 ? "bg-accent" : "bg-line"}`}
        />
      ))}
    </div>
  );
}
