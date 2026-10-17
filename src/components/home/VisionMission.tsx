import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

const blocks = [
  {
    eyebrow: "Vision",
    title: "The benchmark of modern ownership.",
    copy: "To redefine the premium automotive aftersales experience in the KSA, setting a new standard for precision, expertise, and customer care. We strive to deliver exceptional service through factory trained expertise, advanced diagnostic technologies, genuine quality parts, and meticulous attention to every detail, ensuring every vehicle receives the highest level of care, performance, and reliability.",
  },
  {
    eyebrow: "Mission",
    title: "Redefining the standard of aftersales.",
    copy: "Seven Motors is redefining the premium automotive aftersales experience by delivering exceptional service, technical precision, and uncompromising attention to detail. We combine advanced diagnostic technologies, highly skilled technicians, quality parts, and continuous team development to ensure every vehicle receives the highest level of care, reliability, and performance while creating an ownership experience built on trust, transparency, and excellence.",
  },
] as const;

/** Vision & mission statement, copied from the official website. */
export function VisionMission() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-6 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.eyebrow} delay={i * 0.1}>
            <article className="card-surface card-surface-hover h-full p-8 md:p-10">
              <p className="label-eyebrow">{b.eyebrow}</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-[2rem] md:leading-[1.2]">
                {b.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="container-page mt-10">
        <Button asChild variant="outline">
          <Link to="/about">More about us</Link>
        </Button>
      </div>
    </section>
  );
}
