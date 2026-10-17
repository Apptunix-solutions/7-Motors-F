import { Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

const stats: Array<{ value: string; label: string; note: string; star?: boolean }> = [
  {
    value: SITE.mapsRating.score,
    label: "Google reviews",
    note: "★★★★★ verified",
    star: true,
  },
  { value: "25+", label: "Years of experience", note: "Since inception" },
  { value: "20+", label: "Marques serviced", note: "European & GT" },
  { value: "100%", label: "Genuine parts", note: "OEM sourced" },
];

/** "Our workshop in numbers" band, using the official site's figures. */
export function Stats() {
  return (
    <section className="border-y border-border bg-card/60 py-14">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our workshop in numbers
          </h2>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-primary-text md:text-5xl">
                <span className="flex items-center justify-center gap-1.5">
                  {s.value}
                  {s.star ? (
                    <Star className="size-6 fill-gold text-gold" aria-hidden="true" />
                  ) : null}
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground">{s.label}</span>
                <span className="mt-1 block text-xs font-normal uppercase tracking-widest text-muted-foreground">
                  {s.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
