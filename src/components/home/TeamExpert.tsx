import { Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/language";

export function TeamExpert() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        {/* Left column */}
        <Reveal delay={0.1}>
          <div>
            <p className="label-eyebrow">{isAr ? "فريق الخبراء" : "Team Expert"}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">
              {isAr ? "الأيدي الموثوقة تحت غطاء محركك" : "The hands under your hood"}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {isAr
                ? "كبار الفنيين، مهندسو البرمجة ومختصو توضيب المحركات — كل فني معتمد دولياً ومسؤول عن كل سيارة يعتمد صيانتها."
                : "Master technicians, fabricators and paint specialists — each certified, each accountable for the car they sign off."}
            </p>
            <div className="mt-8 flex items-center gap-3 text-muted-foreground">
              <Users className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm">
                {isAr
                  ? "24 متخصصاً عبر أقسام وورش الصيانة المجهزة"
                  : "24 specialists across 9 service bays"}
              </span>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {isAr ? "تعرف على الفريق" : "Meet the Team"}
            </Link>
          </div>
        </Reveal>

        {/* Right column: 2 technician cards */}
        <div className="grid grid-cols-2 gap-6">
          <Reveal delay={0.15}>
            <figure className="card-surface card-surface-hover overflow-hidden">
              <img
                src="/images/facility-1.jpg"
                alt="Marco Reyes"
                width={700}
                height={900}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="p-5">
                <p className="font-bold">{isAr ? "ماركو رييس" : "Marco Reyes"}</p>
                <p className="text-sm text-primary">{isAr ? "كبير الفنيين" : "Lead Technician"}</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.25}>
            <figure className="card-surface card-surface-hover overflow-hidden">
              <img
                src="/images/facility-2.jpg"
                alt="Dean Walker"
                width={700}
                height={900}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="p-5">
                <p className="font-bold">{isAr ? "دين ووكر" : "Dean Walker"}</p>
                <p className="text-sm text-primary">
                  {isAr ? "مهندس تعديل الأداء" : "Performance Tuner"}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
