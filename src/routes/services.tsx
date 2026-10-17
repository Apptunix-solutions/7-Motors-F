import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES } from "@/data/services";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: `Car Services in Riyadh — Oil, Brakes, Diagnostics & Tuning | ${SITE.name}`,
      description:
        "Oil & fluids, brake systems, computer diagnostics, performance tuning, mechanical repair and A/C service for Ferrari, Lamborghini, Bentley, Porsche and more — at Seven Motors, Riyadh.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every specialty, under one roof."
        description="Six service lines delivered in-house by factory-trained technicians with dealer-level equipment."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ number, title, copy, Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="card-surface card-surface-hover h-full p-8">
                <div className="flex items-center justify-between">
                  <Icon
                    className="size-9 text-primary-text"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold tracking-widest text-muted-foreground">
                    {number}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-text transition-colors hover:text-primary-text-hover"
            >
              Book a service
              <ArrowRight className="size-4" />
            </Link>
          </p>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
