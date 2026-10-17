import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { SITE, ADDRESS_LINE } from "@/lib/site";
import { useLanguage } from "@/lib/language";

const LOGO_URL = "/images/seven-motors-logo-white-transparent.png";

export function Footer() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* Ambient background glow matching motocare-f */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-72 rotate-45 opacity-20 blur-3xl"
        style={{ background: "var(--gradient-red)" }}
      />

      <div className="container-page relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        {/* Column 1: Brand & Social */}
        <div>
          <Link to="/" className="inline-block leading-none" aria-label="Seven Motors home">
            <img
              src={LOGO_URL}
              alt="Seven Motors — Riyadh"
              width={320}
              height={110}
              className="brand-logo"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {isAr
              ? "المركز الرائد في الرياض لصيانة وتعديل السيارات الخارقة والفارهة. فنيون معتمدون، أجهزة فحص مطابقة للوكالة، وشفافية كاملة."
              : "Performance tuning, customization and full-service repair for drivers who expect more from their machine. Certified technicians, genuine parts, honest pricing."}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-bright"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SITE.phone.href}
              aria-label="Phone"
              className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-bright"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={SITE.email.href}
              aria-label="Email"
              className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-bright"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <nav aria-label="About links">
          <h2 className="font-display text-base font-bold">{isAr ? "من نحن" : "About Us"}</h2>
          <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                {isAr ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                {isAr ? "عن المركز" : "About Us"}
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-primary">
                {isAr ? "الخدمات" : "Services"}
              </Link>
            </li>
            <li>
              <Link to="/facility" className="transition-colors hover:text-primary">
                {isAr ? "المركز والورشة" : "The Facility"}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                {isAr ? "اتصل بنا" : "Contact"}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 3: Contact */}
        <div>
          <h2 className="font-display text-base font-bold">{isAr ? "تواصل معنا" : "Contact Us"}</h2>
          <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={SITE.email.href} className="break-all transition-colors hover:text-primary">
                {SITE.email.label}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={SITE.phone.href} className="transition-colors hover:text-primary">
                {SITE.phone.label}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{ADDRESS_LINE}</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div>
          <h2 className="font-display text-base font-bold">
            {isAr ? "أوقات العمل" : "We Are Open"}
          </h2>
          <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{SITE.hours.week}</span>
            </li>
            <li className="pl-7">{SITE.hours.friday}</li>
            <li className="pl-7 font-medium text-primary">
              {isAr ? "استقبال وحجز مسبق للسيارات الفارهة" : "Exotic & Supercar Specialists"}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-center gap-2 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Seven Motors — Riyadh · All rights reserved.</p>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            4.9 ★ · {SITE.mapsRating.count} Google reviews
          </a>
        </div>
      </div>
    </footer>
  );
}
