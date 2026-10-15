import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "./language-switcher";
import { PillLink } from "./primitives";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { href: "#experiencia", key: "experience" },
  { href: "#produto", key: "product" },
  { href: "#stack", key: "stack" },
  { href: "#formacao", key: "education" },
] as const;

export async function SiteHeader() {
  const t = await getTranslations("header");

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <a href="#topo" className="flex items-center gap-2 text-[15px] font-semibold">
          <span aria-hidden>✦</span>
          naianderson
        </a>
        <nav aria-label={t("sections")} className="hidden gap-7 text-sm text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle label={t("themeToggle")} />
          <span className="hidden sm:inline-flex">
            <PillLink href="#contato">{t("contactCta")}</PillLink>
          </span>
        </div>
      </div>
    </header>
  );
}
