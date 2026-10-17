import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Wrench, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/language";

export function Hero() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-eyebrow">
            {isAr
              ? "المركز المتخصص لصيانة السيارات الخارقة — الرياض"
              : "Specialist Supercar Workshop — Riyadh"}
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {isAr ? (
              <>
                حيث تلتقي الفخامة
                <br />
                بأعلى درجات الدقة.
              </>
            ) : (
              <>
                Where Luxury
                <br />
                Meets Precision.
              </>
            )}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {isAr
              ? "المركز الرائد في الرياض لصيانة وتعديل فيراري، لامبورغيني، بورش وبنتلي بأيدي فنيين معتمدين وتقنيات فحص متطورة."
              : "Riyadh's specialist service center for Ferrari, Lamborghini, Bentley, Porsche and the world's finest performance machines. Factory-trained. Obsessively meticulous."}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-glow">
                <Link to="/services">
                  {isAr ? "استكشف الخدمات" : "Learn More"}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                <Link to="/contact">{isAr ? "حجز موعد صيانة" : "Book Service"}</Link>
              </Button>
            </motion.div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            {isAr ? "الاتصال المباشر بالورشة: " : "Direct workshop line — "}
            <a
              href={SITE.phone.href}
              className="font-semibold text-primary-text transition-colors hover:text-primary-text-hover"
            >
              {SITE.phone.label}
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/25 blur-3xl" />
          <img
            src="/images/workshop-supercars.jpg"
            alt="Porsche 911 and Lamborghini Huracán inside the Seven Motors workshop in Riyadh"
            width={1280}
            height={896}
            className="w-full rounded-2xl border border-border object-cover shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Bottom curved SVG wave matching motocare-f */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="relative block h-12 w-full md:h-[5.5rem]"
      >
        <path d="M0 90 C 360 10 1080 10 1440 90 L1440 90 L0 90 Z" fill="var(--background)" />
      </svg>

      {/* 3-column stats/feature strip immediately underneath */}
      <div className="border-b border-border bg-background">
        <div className="container-page grid gap-8 py-10 md:grid-cols-3 md:divide-x md:divide-border">
          <div className="md:px-8 md:first:pl-0">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-primary">01</span>
              <div className="min-w-0">
                <h2 className="text-lg font-bold">
                  {isAr ? "أفضل الخدمات المعتمدة" : "Best Services"}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {isAr
                    ? "أجهزة فحص مطابقة للوكالة وقطع غيار أصلية لكل سيارة نستقبلها في المركز."
                    : "Factory-grade diagnostics and genuine OEM parts on every machine we take in."}
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-primary">02</span>
              <div className="min-w-0">
                <h2 className="text-lg font-bold">
                  {isAr ? "مركز مجهز بالكامل" : "Dedicated Facility"}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {isAr
                    ? "أقسام مكيفة، روافع مخصصة للسيارات المنخفضة وتحديثات مستمرة لخدمتكم."
                    : "Climate-controlled bays, low-clearance lifts, and live digital progress updates."}
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-primary">03</span>
              <div className="min-w-0">
                <h2 className="text-lg font-bold">{isAr ? "فريق خبراء محترف" : "Expert Team"}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {isAr
                    ? "فنيون معتمدون بخبرة عقود في هندسة وصيانة السيارات الفارهة والخارقة."
                    : "Certified master technicians with decades of high-performance engineering experience."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
