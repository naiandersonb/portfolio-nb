"use client";

import { useEffect, useState } from "react";

const formatAxis = (value: number) => String(Math.round(value)).padStart(4, "0");

/** Live readout of pointer position and viewport size, like a design tool's status bar. */
export function CursorHud() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const trackPointer = (event: PointerEvent) => setPointer({ x: event.clientX, y: event.clientY });
    const trackViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight });

    trackViewport();
    window.addEventListener("pointermove", trackPointer);
    window.addEventListener("resize", trackViewport);
    return () => {
      window.removeEventListener("pointermove", trackPointer);
      window.removeEventListener("resize", trackViewport);
    };
  }, []);

  return (
    <dl className="flex gap-6 text-[10px] uppercase tracking-[0.2em] tabular-nums">
      <div className="flex gap-2">
        <dt className="text-muted">X</dt>
        <dd>{formatAxis(pointer.x)}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="text-muted">Y</dt>
        <dd>{formatAxis(pointer.y)}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="text-muted">Viewport</dt>
        <dd>
          {viewport.width}×{viewport.height}
        </dd>
      </div>
    </dl>
  );
}
