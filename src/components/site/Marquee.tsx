import { MARQUES } from "@/lib/site";

/**
 * Infinite marquee of the marques serviced, matching the official site's
 * scrolling brand strip. Duplicated once for a seamless loop; decorative
 * (aria-hidden) since the list is also stated in text elsewhere.
 */
export function Marquee() {
  const row = [...MARQUES, ...MARQUES];
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-border py-6">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {row.map((marque, i) => (
              <li
                key={`${copy}-${marque}-${i}`}
                className="flex items-center gap-8 px-8 text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground"
              >
                {marque}
                <span className="size-1.5 rounded-full bg-primary" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
