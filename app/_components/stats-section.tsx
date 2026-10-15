import { stats } from "../_content/resume";
import { SectionLabel, TickMarks } from "./primitives";

export function StatsSection() {
  return (
    <section id="numeros" className="scroll-mt-16 py-16">
      <SectionLabel>Em números</SectionLabel>
      <div className="mt-6 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const isFeatured = index === 0;

          return (
            <div
              key={stat.label}
              className={`flex min-h-48 flex-col justify-between border-r border-b border-line p-4 ${
                isFeatured ? "bg-accent text-accent-ink" : "bg-surface/60"
              }`}
            >
              <p className={`text-[11px] uppercase tracking-[0.2em] ${isFeatured ? "opacity-80" : "text-muted"}`}>
                {stat.label}
              </p>
              <div className="flex items-end justify-between">
                <TickMarks />
                <p className="text-5xl font-light tracking-tight sm:text-6xl">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
