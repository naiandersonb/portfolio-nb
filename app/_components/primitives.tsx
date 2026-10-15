import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
      <span aria-hidden className="h-1.5 w-1.5 bg-muted" />
      {children}
    </span>
  );
}

export function TechChip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 text-xs text-muted">{children}</li>
  );
}

const PILL_VARIANTS = {
  solid: "border-foreground bg-foreground text-inverse hover:opacity-85",
  outline: "border-foreground text-foreground hover:bg-surface",
};

type PillLinkProps = {
  href: string;
  variant?: keyof typeof PILL_VARIANTS;
  download?: boolean;
  children: ReactNode;
};

export function PillLink({ href, variant = "solid", download, children }: PillLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition ${PILL_VARIANTS[variant]}`}
    >
      {children}
    </a>
  );
}
