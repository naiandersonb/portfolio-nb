"use client";

import { useLayoutEffect } from "react";
import { applyInitialTheme, saveTheme } from "./theme";

export function ThemeToggle({ label }: { label: string }) {
  useLayoutEffect(applyInitialTheme, []);

  function toggleTheme() {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    saveTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:bg-surface"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="hidden h-4 w-4 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
