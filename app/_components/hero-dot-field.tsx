"use client";

import { useEffect, useRef } from "react";

const SPACING = 28;
const BASE_RADIUS = 1.2;
const MAX_RADIUS = 3.6;
const INFLUENCE_RADIUS = 160;
const POINTER_EASING = 0.12;
// The page-wide --dot tone is too faint for the hero, so nudge it toward --muted.
const BASE_DOT_BRIGHTEN = 0.35;

type Rgb = [number, number, number];

function readCssColor(variable: string): Rgb {
  const hex = getComputedStyle(document.documentElement).getPropertyValue(variable).trim().slice(1);
  return [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16)) as Rgb;
}

function mix(from: Rgb, to: Rgb, amount: number): Rgb {
  return from.map((channel, index) => Math.round(channel + (to[index] - channel) * amount)) as Rgb;
}

const toCss = ([r, g, b]: Rgb) => `rgb(${r} ${g} ${b})`;

/** Dot grid that swells and tints toward the accent color around the pointer. */
export function HeroDotField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const dotColor = mix(readCssColor("--dot"), readCssColor("--muted"), BASE_DOT_BRIGHTEN);
    const accentColor = readCssColor("--accent-light");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const target = { x: -9999, y: -9999 };
    const pointer = { ...target };
    let width = 0;
    let height = 0;
    let frameId = 0;
    let isVisible = true;

    const draw = () => {
      pointer.x += (target.x - pointer.x) * POINTER_EASING;
      pointer.y += (target.y - pointer.y) * POINTER_EASING;
      context.clearRect(0, 0, width, height);

      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          const strength = Math.max(0, 1 - distance / INFLUENCE_RADIUS) ** 2;
          context.beginPath();
          context.fillStyle = toCss(mix(dotColor, accentColor, strength));
          context.arc(x, y, BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * strength, 0, Math.PI * 2);
          context.fill();
        }
      }
    };

    const loop = () => {
      draw();
      if (isVisible && !prefersReducedMotion) frameId = requestAnimationFrame(loop);
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    };

    const trackPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      cancelAnimationFrame(frameId);
      if (isVisible) loop();
    });
    visibilityObserver.observe(canvas);

    window.addEventListener("pointermove", trackPointer);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", trackPointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`h-full w-full ${className}`} />;
}
