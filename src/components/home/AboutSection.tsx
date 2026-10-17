import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

export function AboutSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Image with floating badge */}
        <Reveal delay={0.1}>
          <div className="relative">
            <img
              src="/images/facility-1.jpg"
              alt="Seven Motors technician servicing an exotic engine in Riyadh"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl gradient-red px-6 py-5 shadow-glow sm:block">
              <p className="text-3xl font-bold text-primary-foreground">10+</p>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/80">
                {isAr ? "سنوات في الرياض" : "Years in the bay"}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right: Narrative and CTA */}
        <Reveal delay={0.2}>
          <div>
            <p className="label-eyebrow">{isAr ? "من نحن" : "About Us"}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">
              {isAr
                ? "ورشة أسسها عشاق القيادة لخدمة عشاقها"
                : "A workshop built by drivers, for drivers"}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {isAr
                ? "تأسس مركز سيفن موتورز في الرياض لوضع معايير غير مسبوقة في خدمة وصيانة السيارات الفارهة والخارقة في المملكة. نوفر مركزاً متكاملاً يضم أحدث أجهزة الفحص المعتمدة وروافع مخصصة للسيارات ذات الخلوص الأرضي المنخفض."
                : "Seven Motors was founded to redefine the premium automotive aftersales experience in Riyadh. Today we operate a dedicated exotic facility equipped with dealer-grade diagnostic software, low-clearance hoists, and in-house tuning."}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {isAr
                ? "تخضع كل سيارة لفحص رقمي موثق، وعرض أسعار واضح ومحدد قبل بدء أي عمل، واختبار قيادة ميداني يعتمده كبير الفنيين المشرف على السيارة."
                : "Every car gets a documented inspection, a fixed quote before work begins, and a rigorous road test signed off by the master technician who did the job."}
            </p>
            <Button asChild className="mt-8 px-7 font-semibold">
              <Link to="/about">{isAr ? "المزيد عنا" : "Read More"}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
