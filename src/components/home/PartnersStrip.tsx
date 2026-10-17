import { Gauge, ShieldCheck, Disc, Settings } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function PartnersStrip() {
  const partners = [
    { Icon: Gauge, name: "SPEED AUTO" },
    { Icon: ShieldCheck, name: "QUALITY POWER" },
    { Icon: Disc, name: "CHROME TYRES" },
    { Icon: Settings, name: "AUTOFAST" },
  ];

  return (
    <section className="border-y border-border py-12">
      <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
        {partners.map(({ Icon, name }, i) => (
          <Reveal key={name} delay={i * 0.08}>
            <div className="flex items-center justify-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Icon className="size-6 shrink-0" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-widest">{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
