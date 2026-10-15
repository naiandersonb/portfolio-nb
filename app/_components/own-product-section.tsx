import { ownProduct } from "../_content/resume";
import { DotMatrixIcon, SectionLabel } from "./primitives";

export function OwnProductSection() {
  return (
    <section id="produto" className="scroll-mt-16 py-16">
      <SectionLabel>Produto próprio</SectionLabel>

      <div className="mt-6 flex flex-col gap-4 border border-line bg-surface/60 p-4">
        <div>
          <h2 className="text-4xl font-light uppercase tracking-tight sm:text-5xl">
            {ownProduct.name}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
            {ownProduct.role} · {ownProduct.period}
          </p>
        </div>
        <p className="max-w-3xl text-xs uppercase leading-relaxed tracking-wide text-muted">
          {ownProduct.summary}
        </p>
      </div>

      <ol className="grid border-l border-line md:grid-cols-2">
        {ownProduct.projects.map((project, index) => (
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
            <ul className="flex flex-wrap gap-2" aria-label="Stack utilizada">
              {project.stack.map((tech) => (
                <li key={tech} className="border border-line px-2 py-1 text-[11px] uppercase text-muted">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto text-[11px] uppercase tracking-[0.2em]">
              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light transition-colors hover:text-foreground"
                >
                  {project.link.label} ↗
                </a>
              ) : (
                <span className="text-muted">Repositório privado</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
