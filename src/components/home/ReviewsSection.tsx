import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { REVIEWS } from "@/data/reviews";

function Stars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
      ))}
    </div>
  );
}

/**
 * Google reviews section. All review texts are copied verbatim from the
 * official website's "Google Reviews" block — no reviews are fabricated.
 */
export function ReviewsSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Google Reviews"
          title={`${SITE.mapsRating.score} ★ rated by clients.`}
          description={`${SITE.mapsRating.count} reviews on Google — read by future clients before they hand us the keys.`}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.date + i} delay={i * 0.07}>
              <figure className="card-surface flex h-full flex-col p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {r.source} · {r.date}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 text-center">
            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary-text transition-colors hover:text-primary-text-hover"
            >
              Read all reviews on Google →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
