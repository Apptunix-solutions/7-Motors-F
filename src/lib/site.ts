/**
 * Verified business information for Seven Motors, taken from the official
 * website https://7-motors.com. Never invent or alter values here — every
 * page pulls contact details, hours and social links from this file so the
 * content stays consistent site-wide.
 */

export const SITE = {
  name: "Seven Motors",
  legalName: "Seven Motors",
  /** Short descriptor used under the logo in the footer. */
  descriptor: "Car service",
  tagline: "Riyadh's specialist service center for the world's finest performance machines.",
  heroTagline: "Riyadh · Al Faisaliyyah",
  description:
    "Riyadh's specialist service center for Ferrari, Lamborghini, Bentley, Porsche and the world's finest performance machines. Factory-trained. Obsessively meticulous.",
  /** Production origin used for canonical URLs and Open Graph metadata. */
  origin: "https://7-motors.com",
  /** Hero / Open Graph image hosted on the official site. */
  ogImage: "https://7-motors.com/images/workshop-supercars.jpg",
  phone: { label: "+966 56 224 4034", href: "tel:+966562244034" },
  email: { label: "Reception@7-motors.com", href: "mailto:Reception@7-motors.com" },
  whatsapp:
    "https://wa.me/966562244034?text=Hello%20Seven%20Motors%2C%20I%27d%20like%20to%20book%20a%20service.",
  instagram: "https://instagram.com/sevenmotorsksa",
  tiktok: "https://www.tiktok.com/@seven.motorsksa",
  maps: "https://www.google.com/maps/search/?api=1&query=Seven%20Motors%20Service%20Center&query_place_id=ChIJN7MbbN4bLz4RJxoSf9czd-g",
  mapsRating: { score: "4.9", count: 85 },
  address: {
    street: "Abdallah Al Fakih St",
    district: "Al Faisaliyyah",
    city: "Riyadh",
    postalCode: "12892",
    country: "Saudi Arabia",
  },
  landmark: "Exit 17 behind the dealer of Ferrari, Riyadh",
  hours: {
    week: "Saturday — Thursday · 8:00 AM to 5:00 PM",
    friday: "Friday · Closed",
    short: "Sat – Thu, 8:00 AM – 5:00 PM",
  },
} as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city} ${SITE.address.postalCode}, ${SITE.address.country}`;

/** Marques serviced, as listed on the official website. */
export const MARQUES = [
  "Ferrari",
  "Lamborghini",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
  "Porsche",
  "Range Rover",
] as const;

/** Appointment time slots offered on the official booking form. */
export const TIME_SLOTS = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
] as const;
