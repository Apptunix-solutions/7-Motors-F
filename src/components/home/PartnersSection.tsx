import { ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { PARTNERS } from "@/data/partners";

/** Authorised dealerships and retailer, per the official "Partners" section. */
export function PartnersSection() {
  const dealerships = PARTNERS.filter((p) => p.category === "Dealerships");
  const retailer = PARTNERS.filter((p) => p.category === "Retailer");

  const renderCard = (p: (typeof PARTNERS)[number], delay: number) => (
    <Reveal key={p.name} delay={delay}>
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-surface card-surface-hover group flex h-full flex-col p-7"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {p.category}
        </span>
        <h3 className="mt-3 font-display text-xl font-bold">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.focus}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-text">
          Visit
          <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
    </Reveal>
  );

  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Partners"
          title="Direct lines to the source."
          description="Direct partnerships with world-class performance and refinement houses — bringing genuine parts, upgrades, and expertise straight from source to Riyadh."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dealerships.map((p, i) => renderCard(p, i * 0.07))}
          {retailer.map((p, i) => renderCard(p, (dealerships.length + i) * 0.07))}
        </div>
      </div>
    </section>
  );
}
