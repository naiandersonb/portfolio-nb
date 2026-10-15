import { profile } from "../_content/resume";

const NAV_ITEMS = [
  { href: "#numeros", label: "Números" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#produto", label: "Produto" },
  { href: "#stack", label: "Stack" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 text-[11px] uppercase tracking-[0.2em] sm:px-6">
        <a href="#topo" className="flex items-center gap-2 text-foreground">
          <span className="animate-blink inline-block h-2 w-2 bg-accent" />
          NB/DEV
        </a>
        <nav aria-label="Seções" className="hidden gap-6 text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-accent-light">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumePath}
          download
          className="border border-accent px-3 py-1.5 text-accent-light transition-colors hover:bg-accent hover:text-accent-ink"
        >
          Baixar CV
        </a>
      </div>
    </header>
  );
}
