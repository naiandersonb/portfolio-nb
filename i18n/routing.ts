import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en"],
  defaultLocale: "pt-BR",
  localePrefix: "always",
});

export const LOCALE_LABELS: Record<(typeof routing.locales)[number], string> = {
  "pt-BR": "PT",
  en: "EN",
};
