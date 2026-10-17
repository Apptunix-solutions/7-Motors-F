import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/language";

export function WorkshopGallery() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const photos = [
    {
      src: "/images/facility-3.jpg",
      title: isAr ? "الإطارات والجنوط الرياضية" : "Wheels & Tyres",
    },
    {
      src: "/images/facility-4.jpg",
      title: isAr ? "تعديل وبرمجة المحركات" : "Engine Tuning",
    },
    {
      src: "/images/facility-5.jpg",
      title: isAr ? "أنظمة العادم والداينو" : "Exhaust Systems",
    },
    {
      src: "/images/facility-6.jpg",
      title: isAr ? "صيانة الفرامل والكربون-سيراميك" : "Brake Service",
    },
  ];

  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow">{isAr ? "معرض أعمالنا" : "Our Gallery"}</p>
          <h2
            data-align="center"
            className="heading-rule mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]"
          >
            {isAr ? "أحدث التجهيزات والمشاريع" : "Recent Builds"}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map(({ src, title }, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <figure className="group relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={src}
                  alt={title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/20 to-transparent p-5 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
