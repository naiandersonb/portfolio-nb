import { experience } from "../_content/resume";
import { DotMatrixIcon, SectionLabel } from "./primitives";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-16 py-16">
      <SectionLabel>Experiência</SectionLabel>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border border-line bg-surface/60 p-4">
        <div>
          <h2 className="text-4xl font-light uppercase tracking-tight sm:text-5xl">
            {experience.company}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
            {experience.role} · {experience.period}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Stack utilizada">
          {experience.stack.map((tech) => (
            <li key={tech} className="border border-line px-2 py-1 text-[11px] uppercase text-muted">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <ol className="grid border-l border-line md:grid-cols-2">
        {experience.projects.map((project, index) => (
          <li key={project.code} className="flex flex-col gap-6 border-r border-b border-line p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <DotMatrixIcon />
              <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap items-end gap-3">
              <span className="text-5xl font-light">{project.code}</span>
              <span className="mb-1.5 bg-accent px-1.5 text-[11px] uppercase text-accent-ink">
                {project.title}
              </span>
            </div>
            <p className="border-t border-line pt-4 text-xs uppercase leading-relaxed tracking-wide text-muted">
              {project.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
