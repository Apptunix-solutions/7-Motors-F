import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { FACILITY_IMAGES, FACILITY_POINTS } from "@/data/facility";

/** Facility teaser for the landing page — commitments plus workshop photos. */
export function FacilityPreview() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="The facility"
          title="A trustworthy workshop that your car deserves."
          description="Climate-controlled bays. Dealer-grade diagnostic equipment. Dedicated lifts for exotics with low ground clearance."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FACILITY_POINTS.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.08}>
              <div className="card-surface h-full p-8">
                <span className="text-3xl font-bold text-primary-text">{p.number}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {FACILITY_IMAGES.slice(0, 2).map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08}>
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="px-8">
              <Link to="/facility">Tour the facility</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
