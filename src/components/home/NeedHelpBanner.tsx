import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";

export function NeedHelpBanner() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section className="relative overflow-hidden gradient-red">
      <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-0">
        <div className="md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            {isAr ? "هل تحتاج لمساعدة؟" : "Need Help?"}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/85">
            {isAr
              ? "تواصل مع خبرائنا للحصول على خدمة سريعة وموثوقة. فحص وتشخيص في نفس اليوم لأغلب السيارات."
              : "Contact our experts for fast, reliable service. Same-day diagnostics on most vehicles."}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80"
          >
            {isAr ? "اتصل بنا" : "Contact Us"}
          </Link>
        </div>

        <div className="relative h-64 md:h-full md:min-h-[22rem]">
          <img
            src="/images/workshop-supercars.jpg"
            alt="Seven Motors technician at work"
            width={1024}
            height={700}
            loading="lazy"
            className="absolute inset-0 size-full rounded-2xl object-cover md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
