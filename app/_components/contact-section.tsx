import { profile } from "../_content/resume";
import { DotMatrixIcon, Highlight, SectionLabel } from "./primitives";

const CONTACT_LINKS = [
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "/in/naianderson-bruno", href: profile.linkedin },
  { label: "GitHub", value: "@naiandersonb", href: profile.github },
];

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-16 py-16">
      <SectionLabel>Contato</SectionLabel>
      <div className="mt-6 border border-line bg-surface/60 p-4 sm:p-8">
        <DotMatrixIcon />
        <h2 className="mt-8 text-4xl font-light uppercase leading-tight tracking-tight sm:text-6xl">
          Vamos construir
          <br />
          algo <span className="text-accent-light">juntos?</span>
        </h2>
        <p className="mt-6 max-w-md text-xs uppercase leading-relaxed tracking-wider text-muted">
          Aberto a conversas sobre <Highlight>front-end</Highlight>, produtos
          digitais e novas oportunidades.
        </p>
      </div>
      <ul className="grid border-l border-line sm:grid-cols-3">
        {CONTACT_LINKS.map((link) => (
          <li key={link.label} className="border-r border-b border-line">
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col gap-3 p-4 transition-colors hover:bg-accent hover:text-accent-ink"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] opacity-70">{link.label} ↗</span>
              <span className="break-all text-sm">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
