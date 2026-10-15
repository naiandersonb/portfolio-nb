import { profile } from "../_content/resume";
import { CursorHud } from "./cursor-hud";
import { HeroDotField } from "./hero-dot-field";
import { Inspectable } from "./inspectable";
import { Highlight } from "./primitives";
import { TypedHeadline } from "./typed-headline";

export function Hero() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[calc(100svh-49px)] flex-col justify-between gap-12 py-8"
    >
      <div aria-hidden className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-base">
        <HeroDotField />
      </div>

      <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em]">
        <p className="flex items-center gap-2 text-muted">
          <span className="animate-blink inline-block h-2 w-2 bg-accent-light" />
          Modo inspeção<span className="hidden md:inline"> — passe o mouse</span>
        </p>
        <div className="hidden md:block">
          <CursorHud />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <Inspectable label="<Name />" className="self-start">
          <h1 className="text-[clamp(3rem,13.5vw,10.5rem)] font-light uppercase leading-[0.9] tracking-tight">
            {firstName}{" "}
            <br />
            <span className="text-accent-light">{lastName}</span>
          </h1>
        </Inspectable>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Inspectable label="<Role />" className="self-start">
            <TypedHeadline headlines={profile.headlines} />
          </Inspectable>

          <Inspectable label="<Bio />" className="max-w-sm self-start md:self-auto">
            <p className="text-xs uppercase leading-relaxed tracking-wider text-muted">
              Construo interfaces <Highlight>escaláveis e performáticas</Highlight>{" "}
              — de dashboards white label a comunidades interativas — com foco
              em código limpo e boa experiência.
            </p>
          </Inspectable>
        </div>
      </div>

      <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
        <p>● {profile.location} — Brasil</p>
        <a href="#numeros" className="transition-colors hover:text-foreground">
          Scroll ↓
        </a>
      </div>
    </section>
  );
}
