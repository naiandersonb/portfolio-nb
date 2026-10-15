import { getTranslations } from "next-intl/server";
import { stats } from "../_content/resume";
import { SectionLabel } from "./primitives";

export async function StatsSection() {
  const t = await getTranslations("stats");

  return (
    <section id="numeros" className="scroll-mt-16 py-16">
      <SectionLabel>{t("label")}</SectionLabel>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const isFeatured = index === 0;

          return (
            <div
              key={stat.key}
              className={`flex min-h-44 flex-col justify-between rounded-3xl border p-6 ${
                isFeatured ? "border-foreground bg-foreground text-inverse" : "border-line bg-surface"
              }`}
            >
              <p className={`text-sm ${isFeatured ? "opacity-70" : "text-muted"}`}>{t(stat.key)}</p>
              <p className="text-5xl font-medium tracking-[-0.03em] sm:text-6xl">{stat.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
