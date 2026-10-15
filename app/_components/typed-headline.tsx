"use client";

import { useEffect, useState } from "react";

const TYPE_DELAY_MS = 70;
const ERASE_DELAY_MS = 35;
const HOLD_DELAY_MS = 1800;

/** Types each headline, holds it, erases it, then moves on to the next one. */
export function TypedHeadline({ headlines }: { headlines: string[] }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const headline = headlines[headlineIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timeout = setTimeout(() => setVisibleLength(headline.length), 0);
      return () => clearTimeout(timeout);
    }

    const isFullyTyped = visibleLength === headline.length;
    const isFullyErased = visibleLength === 0;

    const step = () => {
      if (!isErasing && isFullyTyped) return setIsErasing(true);
      if (isErasing && isFullyErased) {
        setIsErasing(false);
        return setHeadlineIndex((index) => (index + 1) % headlines.length);
      }
      setVisibleLength((length) => length + (isErasing ? -1 : 1));
    };

    const delay = !isErasing && isFullyTyped ? HOLD_DELAY_MS : isErasing ? ERASE_DELAY_MS : TYPE_DELAY_MS;
    const timeout = setTimeout(step, delay);
    return () => clearTimeout(timeout);
  }, [headline, headlines.length, isErasing, visibleLength]);

  return (
    <p className="min-h-[1.5em] text-sm sm:text-base">
      <span className="sr-only">{headlines.join(", ")}</span>
      <span aria-hidden>
        <span className="mr-2">✦</span>
        {headline.slice(0, visibleLength)}
        <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-px translate-y-[0.2em] bg-foreground" />
      </span>
    </p>
  );
}
