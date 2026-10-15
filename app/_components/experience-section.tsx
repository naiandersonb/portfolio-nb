import { getTranslations } from "next-intl/server";
import { experience } from "../_content/resume";
import { SectionLabel, TechChip } from "./primitives";

export async function ExperienceSection() {
  const t = await getTranslations("experience");

  return (
    <section id="experiencia" className="scroll-mt-16 py-16">
      <SectionLabel>{t("label")}</SectionLabel>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{experience.company}</h2>
          <p className="mt-2 text-muted">
            {t("role")} · {t("period")}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label={t("stackLabel")}>
          {experience.stack.map((tech) => (
            <TechChip key={tech}>{tech}</TechChip>
          ))}
        </ul>
      </div>

      <ol className="mt-8 grid gap-3 md:grid-cols-2">
        {experience.projectCodes.map((code) => (
          <li key={code} className="flex flex-col gap-4 rounded-3xl border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-md border border-line bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted">
                {code}
              </span>
              <h3 className="text-xl font-medium tracking-[-0.01em]">{t(`projects.${code}.title`)}</h3>
            </div>
            <p className="leading-relaxed text-muted">{t(`projects.${code}.description`)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
