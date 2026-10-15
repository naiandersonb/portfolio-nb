import { profile } from "../_content/resume";
import { SectionLabel } from "./primitives";

const CONTACT_LINKS = [
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "/in/naianderson-bruno", href: profile.linkedin },
  { label: "GitHub", value: "@naiandersonb", href: profile.github },
];

export function ContactSection() {
  return (
    <section id="contato" className="flex scroll-mt-16 flex-col items-center py-16 text-center">
      <SectionLabel>Contato</SectionLabel>
      <h2 className="mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.035em]">
        Vamos construir <span className="text-ghost">algo juntos?</span>
      </h2>
      <p className="mt-4 max-w-md text-muted">
        Aberto a conversas sobre front-end, produtos digitais e novas oportunidades.
      </p>

      <ul className="mt-10 grid w-full gap-3 text-left sm:grid-cols-3">
        {CONTACT_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col gap-2 rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-foreground"
            >
              <span className="text-sm text-muted">{link.label} ↗</span>
              <span className="break-all font-medium">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex w-full max-w-xl items-center gap-4 rounded-3xl bg-foreground p-3 pl-4 text-left text-inverse">
        <span aria-hidden className="bg-aurora h-10 w-10 shrink-0 rounded-full" />
        <p className="flex-1 text-sm leading-snug">
          {profile.availability}
          <br />
          <span className="opacity-60">{profile.location} · remoto</span>
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="shrink-0 rounded-full bg-inverse px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
