import { about } from "../_content/resume";
import { SectionLabel } from "./primitives";

export function AboutSection() {
  return (
    <section id="sobre" className="flex scroll-mt-16 flex-col items-center py-16 text-center">
      <SectionLabel>Sobre mim</SectionLabel>
      <p className="mt-6 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.02em]">
        {about.map((segment) => (
          <span key={segment.text} className={segment.muted ? "text-ghost" : undefined}>
            {segment.text}
          </span>
        ))}
      </p>
    </section>
  );
}
