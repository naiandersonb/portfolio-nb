import { getPathname } from "@/i18n/navigation";
import { LOCALE_LABELS, routing } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

export async function LanguageSwitcher() {
  const [activeLocale, t] = await Promise.all([
    getLocale(),
    getTranslations("header"),
  ]);

  return (
    <nav
      aria-label={t("languageSwitcher")}
      className="flex rounded-full border border-line p-0.5 text-xs font-medium"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;

        return (
          <a
            key={locale}
            href={getPathname({ href: "/", locale })}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-2.5 py-1.5 transition-colors ${
              isActive
                ? "bg-foreground text-inverse"
                : "text-muted hover:text-foreground"
            }`}
          >
            {LOCALE_LABELS[locale]}
          </a>
        );
      })}
    </nav>
  );
}
