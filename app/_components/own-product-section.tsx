import { ownProduct } from "../_content/resume";
import { SectionLabel, TechChip } from "./primitives";

export function OwnProductSection() {
  return (
    <section id="produto" className="scroll-mt-16 py-16">
      <SectionLabel>Produto próprio</SectionLabel>

      <div className="mt-6">
        <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">{ownProduct.name}</h2>
        <p className="mt-2 text-muted">
          {ownProduct.role} · {ownProduct.period}
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{ownProduct.summary}</p>
      </div>

      <ol className="mt-8 grid gap-3 md:grid-cols-2">
        {ownProduct.projects.map((project, index) => (
          <li key={project.code} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface">
            <div
              aria-hidden
              className={`bg-aurora flex h-36 items-end p-5 ${index % 2 === 1 ? "hue-rotate-60" : ""}`}
            >
              <span className="rounded-md bg-white/30 px-2 py-0.5 font-mono text-[11px] text-white">
                {project.code}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-xl font-medium tracking-[-0.01em]">{project.title}</h3>
              <p className="leading-relaxed text-muted">{project.description}</p>
              <ul className="flex flex-wrap gap-2" aria-label="Stack utilizada">
                {project.stack.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </ul>
              <div className="mt-auto pt-2 text-sm">
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {project.link.label} ↗
                  </a>
                ) : (
                  <span className="text-muted">Repositório privado</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
