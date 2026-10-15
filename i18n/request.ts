import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { locale as readLocaleParam } from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale: explicitLocale }) => {
  const requestedLocale = explicitLocale ?? (await readLocaleParam());
  const locale = hasLocale(routing.locales, requestedLocale) ? requestedLocale : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
