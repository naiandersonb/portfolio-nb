"use client";

import { useRef, useState, type ReactNode } from "react";

type InspectableProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/** Wraps content with a DevTools-style highlight that reports its live size on hover. */
export function Inspectable({ label, children, className = "" }: InspectableProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState("");

  const measure = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setSize(`${Math.round(rect.width)}×${Math.round(rect.height)}`);
  };

  return (
    <div ref={ref} onPointerEnter={measure} className={`group/inspect relative ${className}`}>
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 border border-dashed border-accent-light bg-accent/10 opacity-0 transition-opacity duration-150 group-hover/inspect:opacity-100"
      >
        <span className="absolute -top-px left-0 -translate-y-full bg-accent px-1.5 py-0.5 text-[10px] whitespace-nowrap text-accent-ink">
          {label} <span className="opacity-70">{size}</span>
        </span>
        {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
          (corner) => (
            <span key={corner} className={`absolute h-2 w-2 bg-accent-light ${corner}`} />
          ),
        )}
      </span>
    </div>
  );
}
