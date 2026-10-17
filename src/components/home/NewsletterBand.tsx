import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/language";

export function NewsletterBand() {
  const [email, setEmail] = useState("");
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success(
      isAr
        ? "شكراً لاشتراكك! ستصلك آخر أخبار وتحديثات سيفن موتورز."
        : "Thank you for subscribing! You will receive exclusive updates from Seven Motors.",
    );
    setEmail("");
  };

  return (
    <section className="band-red relative overflow-hidden">
      <div className="container-page relative grid gap-8 py-24 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
            {isAr ? "نشرتنا الإخبارية" : "Our Newsletter"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary-foreground md:text-[2.6rem] md:leading-[1.15]">
            {isAr ? "اشترك للحصول على آخر التحديثات" : "Subscribe for Updates"}
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/85">
            {isAr
              ? "احصل على أحدث مشاريع تعديل السيارات، نصائح الصيانة، وعروض الورشة الحصرية مباشرة في بريدك."
              : "Get the latest builds, maintenance tips and special workshop offers straight to your inbox."}
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              {isAr ? "البريد الإلكتروني" : "Email address"}
            </label>
            <input
              type="email"
              id="newsletter-email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isAr ? "أدخل بريدك الإلكتروني" : "Your email address"}
              maxLength={255}
              name="email"
              className="flex h-12 w-full rounded-md border border-transparent bg-background/95 px-3 py-1 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {isAr ? "اشتراك" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
