export type Theme = "light" | "dark";

/** The saved choice wins, otherwise the OS preference. Must stay self-contained: it is serialized into an inline script. */
export function applyInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");
    const theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    // Storage can be blocked (private mode); the server default stays applied.
  }
}

export function saveTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
}

/** Runs during HTML parsing, before first paint. */
export const THEME_INIT_SCRIPT = `(${applyInitialTheme.toString()})()`;
