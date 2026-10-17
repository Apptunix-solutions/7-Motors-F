import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

/** Closing call-to-action band, mirroring the official site's final CTA. */
export function CtaBand() {
  return (
    <section className="band-brand relative overflow-hidden">
      <div className="container-page relative grid gap-8 py-24 md:grid-cols-2 md:items-center md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground md:text-[2.6rem] md:leading-[1.1]">
            Ready to hand over the keys?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base">
              <Link to="/contact">Book your service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary-foreground/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/facility">Visit Us</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
