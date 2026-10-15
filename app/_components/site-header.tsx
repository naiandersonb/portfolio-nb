import { PillLink } from "./primitives";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#produto", label: "Produto" },
  { href: "#stack", label: "Stack" },
  { href: "#formacao", label: "Formação" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <a href="#topo" className="flex items-center gap-2 text-[15px] font-semibold">
          <span aria-hidden>✦</span>
          naianderson
        </a>
        <nav aria-label="Seções" className="hidden gap-7 text-sm text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PillLink href="#contato">Fale comigo</PillLink>
        </div>
      </div>
    </header>
  );
}
