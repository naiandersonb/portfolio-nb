import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { locale as readLocaleParam } from "next/root-params";
import { routing } from "@/i18n/routing";
import { THEME_INIT_SCRIPT } from "../_components/theme";
import "../globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return { title: t("title"), description: t("description") };
}

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await readLocaleParam();
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html
      lang={locale}
      data-theme="light"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* text/plain on the client stops React's dev warning; the browser already ran it while parsing. */}
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip font-sans">{children}</body>
    </html>
  );
}
