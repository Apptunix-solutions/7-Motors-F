import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { pageHead } from "@/lib/seo";
import { SITE, MARQUES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: `About ${SITE.name} — High-End Automotive Aftersales in Riyadh`,
      description:
        "Seven Motors specializes in high-end automotive after-sales across several divisions spanning vehicle repair and upgrades — factory-trained technicians and dealer-level diagnostics in Riyadh.",
      path: "/about",
    }),
  component: About,
});

const pillars = [
  {
    title: "Vision",
    heading: "The benchmark of modern ownership.",
    copy: "To redefine the premium automotive aftersales experience in the KSA, setting a new standard for precision, expertise, and customer care. We strive to deliver exceptional service through factory trained expertise, advanced diagnostic technologies, genuine quality parts, and meticulous attention to every detail, ensuring every vehicle receives the highest level of care, performance, and reliability.",
  },
  {
    title: "Mission",
    heading: "Redefining the standard of aftersales.",
    copy: "Seven Motors is redefining the premium automotive aftersales experience by delivering exceptional service, technical precision, and uncompromising attention to detail. We combine advanced diagnostic technologies, highly skilled technicians, quality parts, and continuous team development to ensure every vehicle receives the highest level of care, reliability, and performance while creating an ownership experience built on trust, transparency, and excellence.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Specialists in high-end aftersales."
        description="Seven Motors specializes in the high-end automotive after-sales field, across several divisions spanning vehicle repair and upgrades."
      />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/facility-3.jpg"
              alt="Ferrari 348, F355 and 360 Modena inside the Seven Motors workshop"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">
              Built for the modern Saudi customer
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Strategic hires let us offer our customers a premium, effortless maintenance and
              service experience — backed by the latest diagnostic equipment, dealer management
              systems and tooling, and specialists trained on high-end marques.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With a sound understanding of the market and its complications, we set out to meet the
              needs of the modern Saudi customer looking for genuine luxury mobility solutions —
              all-encompassing premium vehicle services and repairs, and an ownership experience
              built to surpass expectations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-card/40">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="card-surface card-surface-hover h-full p-8 md:p-10">
                <p className="label-eyebrow">{p.title}</p>
                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-[2rem] md:leading-[1.2]">
                  {p.heading}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-12">
        <div className="container-page">
          <Reveal>
            <h2 className="text-center text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Marques serviced
            </h2>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {MARQUES.map((m) => (
                <li
                  key={m}
                  className="text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
