import { skillGroups } from "../_content/resume";
import { Crosshair, SectionLabel } from "./primitives";

const MARQUEE_TERMS = ["React", "Next.js", "TypeScript", "Tailwind", "TanStack Query", "Zustand"];

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-16 py-16">
      <SectionLabel>Stack</SectionLabel>

      <div className="mt-6 overflow-hidden bg-sand py-2 text-sand-ink">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 text-3xl font-light uppercase whitespace-nowrap sm:text-4xl"
            >
              {MARQUEE_TERMS.map((term) => (
                <span key={term} className="px-4">
                  {term} ·
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="grid border-l border-line sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="relative border-r border-b border-line p-4 sm:p-6">
            <Crosshair className="absolute top-3 right-4" />
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">{group.label}</h3>
            <ul className="mt-4 flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item} className="text-xl font-light uppercase sm:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
