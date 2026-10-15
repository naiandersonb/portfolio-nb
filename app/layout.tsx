import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { THEME_INIT_SCRIPT } from "./_components/theme";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naianderson Bruno — Desenvolvedor Front-End",
  description:
    "Portfólio de Naianderson Bruno, desenvolvedor front-end especializado em React, Next.js e TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
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
