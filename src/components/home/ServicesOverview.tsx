import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { SERVICES } from "@/data/services";

/** "Every specialty, under one roof." — the six official service lines. */
export function ServicesOverview() {
  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Every specialty, under one roof."
          description="Six service lines, all delivered in-house by factory-trained technicians."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ number, title, copy, Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="card-surface card-surface-hover group h-full p-8">
                <div className="flex items-center justify-between">
                  <Icon
                    className="size-8 text-primary-text"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold tracking-widest text-muted-foreground">
                    {number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-text"
                >
                  Learn more
                  <span className="sr-only"> about {title}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
