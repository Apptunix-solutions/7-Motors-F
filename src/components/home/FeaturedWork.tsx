import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/language";

export function FeaturedWork() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section className="section-y">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Left card */}
        <Reveal delay={0.1}>
          <div className="card-surface flex h-full flex-col justify-center p-10">
            <p className="label-eyebrow">{isAr ? "أعمالنا المميزة" : "Featured Work"}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">
              {isAr ? "سيارات متقنة" : "Good Cars"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {isAr
                ? "موازنة أوزان الشاسيه، ضبط هندسة العجلات بالليزر، وتركيب جنوط مخصصة — التفاصيل الدقيقة التي تفصل بين سيارة سريعة وأخرى متكاملة الأداء."
                : "Corner-balanced setups, forged wheel fitments and geometry dialled in on our alignment rig — the details that separate a fast car from a finished one."}
            </p>
            <Link
              to="/facility"
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {isAr ? "معرفة المزيد" : "Learn More"}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        {/* Right card + red callout */}
        <Reveal delay={0.2}>
          <div className="grid gap-6">
            <img
              src="/images/facility-2.jpg"
              alt="Performance supercar lift inside Seven Motors Riyadh"
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full rounded-2xl border border-border object-cover"
            />
            <div className="rounded-2xl gradient-red p-8 shadow-glow">
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                {isAr ? "أفضل باقات التعديل" : "Top Modification"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                {isAr
                  ? "حزمة تعديل المرحلة الثانية: نظام سحب الهواء، عادم رياضي، برمجة ECU وترقية الفرامل في زيارة واحدة."
                  : "Stage-two package: intake, exhaust, ECU calibration and brake upgrade in one visit."}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
