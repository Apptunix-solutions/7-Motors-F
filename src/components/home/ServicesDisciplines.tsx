import { Link } from "@tanstack/react-router";
import { ArrowRight, Car, PaintBucket, Wrench } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/language";

export function ServicesDisciplines() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const disciplines = [
    {
      Icon: Car,
      title: isAr ? "تعديل وتجهيز السيارات" : "Modification Car",
      description: isAr
        ? "باقات تعديل الأداء، أنظمة التعليق، الجنوط الرياضية وتجهيزات المحركات المصممة خصيصاً لأسلوب قيادتك."
        : "Bodykits, suspension, wheels and full performance builds engineered around how you drive.",
    },
    {
      Icon: PaintBucket,
      title: isAr ? "دهان وتجديد الهيكل" : "Car Painting",
      description: isAr
        ? "أفران دهان حرارية معتمدة، تغيير الألوان بالكامل، وحماية النانو سيراميك بلمعان مرآة فائق العمق."
        : "Booth-cured refinishing, colour changes and ceramic protection with a mirror-deep gloss.",
    },
    {
      Icon: Wrench,
      title: isAr ? "صيانة وإصلاح دقيق" : "Car Repair",
      description: isAr
        ? "فحص كمبيوتر متقدم، توضيب المحركات، ناقل الحركة، ومنظومة الفرامل — إصلاح متقن من المرة الأولى."
        : "Diagnostics, engine work, brakes and transmission — repaired right the first time.",
    },
  ];

  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow">{isAr ? "مجالات تخصصنا" : "What We Do"}</p>
          <h2
            data-align="center"
            className="heading-rule mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]"
          >
            {isAr ? "تعديل وتطوير سيارتك" : "Modification Your Car"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {isAr
              ? "ثلاثة تخصصات رئيسية، بمعيار دقة واحد لا يتغير."
              : "Three core disciplines, one standard of finish."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {disciplines.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="card-surface card-surface-hover group h-full p-8">
                <Icon className="size-9 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors"
                >
                  {isAr ? "معرفة المزيد" : "Learn More"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
