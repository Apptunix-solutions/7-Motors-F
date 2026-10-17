import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/contact/BookingForm";
import { ADDRESS_LINE, SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `Contact & Booking — ${SITE.name}, Riyadh`,
      description:
        "Book a service at Seven Motors, Riyadh. Abdallah Al Fakih St, Al Faisaliyyah — open Saturday to Thursday, 8:00 AM to 5:00 PM. Call +966 56 224 4034.",
      path: "/contact",
    }),
  component: Contact,
});

const socialLinks = [
  { label: "WhatsApp", detail: SITE.phone.label, href: SITE.whatsapp, Icon: MessageCircle },
  { label: "Instagram", detail: "@sevenmotorsksa", href: SITE.instagram, Icon: Instagram },
  {
    label: "Google Maps",
    detail: `${SITE.mapsRating.score} ★ · ${SITE.mapsRating.count} reviews`,
    href: SITE.maps,
    Icon: MapPin,
  },
] as const;

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Visit us"
        title={SITE.landmark}
        description="Reserve a slot below — we'll confirm your appointment by WhatsApp or email."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">Reserve your slot.</h2>
            <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">
              Pick a service, a date and a time — we'll confirm your appointment by WhatsApp or
              email.
            </p>
            <BookingForm />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight">Visit the workshop</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{SITE.tagline}</p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4 text-muted-foreground">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary-text">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Address</span>
                  {ADDRESS_LINE}
                </span>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary-text">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Open days</span>
                  {SITE.hours.week}
                  <span className="mt-1 block">{SITE.hours.friday}</span>
                </span>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary-text">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Direct line</span>
                  <a href={SITE.phone.href} className="transition-colors hover:text-primary-text">
                    {SITE.phone.label}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary-text">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Email</span>
                  <a
                    href={SITE.email.href}
                    className="break-all transition-colors hover:text-primary-text"
                  >
                    {SITE.email.label}
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Message us & follow
              </p>
              <ul className="mt-4 space-y-3">
                {socialLinks.map(({ label, detail, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-primary-text"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-semibold text-foreground">{label}</span>
                        {detail}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-primary-text transition-colors hover:text-primary-text-hover"
              >
                Open in Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
