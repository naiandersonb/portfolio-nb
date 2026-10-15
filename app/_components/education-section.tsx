import { education } from "../_content/resume";
import { SectionLabel } from "./primitives";

export function EducationSection() {
  return (
    <section id="formacao" className="scroll-mt-16 py-16">
      <SectionLabel>Formação</SectionLabel>
      <ul className="mt-6 border border-line">
        {education.map((course) => (
          <li
            key={course.title}
            className="group flex flex-col gap-2 border-b border-line p-4 last:border-b-0 transition-colors hover:bg-surface-raised sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xl font-light uppercase text-muted transition-colors group-hover:text-foreground sm:text-3xl">
                {course.title}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">{course.school}</p>
            </div>
            <p className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-accent-light">
              {course.hours} · {course.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
