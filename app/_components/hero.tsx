import { getTranslations } from "next-intl/server";
import { ownProduct, profile } from "../_content/resume";
import { PillLink } from "./primitives";
import { TypedHeadline } from "./typed-headline";

const LIVE_PRODUCT_LINK = ownProduct.projects.find((project) => project.link)?.link;

export async function Hero() {
  const [tProfile, tHero] = await Promise.all([getTranslations("profile"), getTranslations("hero")]);

  return (
    <section id="topo" className="flex flex-col items-center pt-12 text-center sm:pt-16">
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {tProfile("availability")}
      </p>

      <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.035em]">
        {tProfile("tagline")}
      </h1>
      <p className="mt-5 text-base text-muted sm:text-lg">
        {profile.name} · {tProfile("summary")}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <PillLink href="#produto">{tHero("viewProjects")}</PillLink>
        <PillLink href={profile.resumePath} variant="outline" download>
          {tHero("downloadCv")}
        </PillLink>
      </div>

      <div className="bg-aurora mt-12 w-full rounded-[28px] p-5 text-left sm:p-8">
        <span className="inline-flex items-center gap-2 text-sm text-white">
          <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/30">
            ✦
          </span>
          nb/dev
        </span>
        <div className="mx-auto mt-10 max-w-md rounded-2xl bg-canvas p-4 shadow-[0_8px_30px_rgb(0_0_0/0.08)] sm:mt-14">
          <TypedHeadline headlines={tProfile.raw("headlines") as string[]} />
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[11px] text-muted">tsx · next.js 16</span>
            <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-inverse">
              ↑
            </span>
          </div>
        </div>
        {LIVE_PRODUCT_LINK && (
          <p className="mt-6 mb-4 text-center text-xs text-white/85 sm:mb-8">
            {tHero.rich("liveCta", {
              product: ownProduct.name,
              link: (chunks) => (
                <a
                  href={LIVE_PRODUCT_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        )}
      </div>
    </section>
  );
}
