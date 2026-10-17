import { SITE } from "./site";

/**
 * LocalBusiness structured data for Seven Motors, built only from verified
 * information published on https://7-motors.com (address, phone, hours,
 * Google rating).
 */
export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  description: SITE.description,
  url: SITE.origin,
  telephone: "+966562244034",
  email: SITE.email.label,
  image: SITE.ogImage,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.district,
    postalCode: SITE.address.postalCode,
    addressCountry: "SA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Riyadh",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.mapsRating.score,
    reviewCount: SITE.mapsRating.count,
  },
  sameAs: [SITE.instagram, SITE.tiktok, SITE.maps],
} as const;
