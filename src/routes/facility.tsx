import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { FACILITY_IMAGES, FACILITY_POINTS } from "@/data/facility";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/facility")({
  head: () =>
    pageHead({
      title: `The Facility — Workshop & Diagnostic Equipment | ${SITE.name}`,
      description:
        "Climate-controlled bays, dealer-grade diagnostic equipment and dedicated lifts for exotics with low ground clearance — the Seven Motors workshop in Riyadh.",
      path: "/facility",
    }),
  component: Facility,
});

function Facility() {
  return (
    <>
      <PageHero
        eyebrow="The facility"
        title="A trustworthy workshop that your car deserves."
        description="Climate-controlled bays. Dealer-grade diagnostic equipment. Dedicated lifts for exotics with low ground clearance. Every detail — from the polished floors to the hand-cleaned tooling — reflects the standard our clients expect."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="grid gap-6 md:grid-cols-3">
            {FACILITY_POINTS.map((p, i) => (
              <li key={p.number}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="card-surface h-full p-8">
                    <span className="text-3xl font-bold text-primary-text">{p.number}</span>
                    <h2 className="mt-4 font-display text-lg font-bold">{p.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITY_IMAGES.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.07}>
                <figure className="group relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
