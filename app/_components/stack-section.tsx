import { skillGroups } from "../_content/resume";
import { SectionLabel, TechChip } from "./primitives";

const MARQUEE_TERMS = ["React", "Next.js", "TypeScript", "Tailwind", "TanStack Query", "Zustand"];

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-16 py-16">
      <SectionLabel>Stack</SectionLabel>

      <div className="mt-6 overflow-hidden py-2">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 text-4xl font-medium tracking-[-0.03em] whitespace-nowrap text-ghost sm:text-6xl"
            >
              {MARQUEE_TERMS.map((term) => (
                <span key={term} className="px-5">
                  {term} ✦
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-3xl border border-line bg-surface p-6">
            <h3 className="text-sm text-muted">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechChip key={item}>{item}</TechChip>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
