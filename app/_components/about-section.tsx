import { getTranslations } from "next-intl/server";
import { SectionLabel } from "./primitives";

export async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section
      id="sobre"
      className="flex scroll-mt-16 flex-col items-center py-16 text-center"
    >
      <SectionLabel>{t("label")}</SectionLabel>
      <p className="mt-6 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.02em]">
        {t.rich("statement", {
          muted: (chunks) => <span className="text-ghost">{chunks}</span>,
        })}
      </p>
    </section>
  );
}
