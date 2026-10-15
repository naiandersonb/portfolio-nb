import { getTranslations } from "next-intl/server";
import { education } from "../_content/resume";
import { SectionLabel } from "./primitives";

export async function EducationSection() {
  const t = await getTranslations("education");

  return (
    <section id="formacao" className="scroll-mt-16 py-16">
      <SectionLabel>{t("label")}</SectionLabel>
      <ul className="mt-6 overflow-hidden rounded-3xl border border-line">
        {education.map((course) => (
          <li
            key={course.key}
            className="flex flex-col gap-2 border-b border-line p-6 transition-colors last:border-b-0 hover:bg-surface sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xl font-medium tracking-[-0.01em] sm:text-2xl">{t(`courses.${course.key}`)}</p>
              <p className="mt-1 text-sm text-muted">{course.school}</p>
            </div>
            <p className="shrink-0 font-mono text-xs text-muted">
              {course.hours} · {course.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
