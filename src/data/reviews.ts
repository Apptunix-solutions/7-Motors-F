export type Review = {
  rating: 5;
  source: "GOOGLE";
  /** Publication date as shown on the official website. */
  date: string;
  text: string;
};

/**
 * Client reviews published on the official 7-motors.com website, copied
 * verbatim (source: Google reviews). Do not add reviews that are not on the
 * official site.
 */
export const REVIEWS: Review[] = [
  {
    rating: 5,
    source: "GOOGLE",
    date: "05/02/2026",
    text: "I had a great experience at this workshop. The service was professional, transparent, and completed on time. The quality of work is top-notch. Special shout-out to Adam — incredibly helpful, honest, and kept me updated throughout the entire process.",
  },
  {
    rating: 5,
    source: "GOOGLE",
    date: "25/02/2026",
    text: "Excellent service for my Audi at Seven Motors. The team was professional, honest, and very knowledgeable. They diagnosed the issue accurately and fixed it quickly. Highly recommended for Audi owners.",
  },
  {
    rating: 5,
    source: "GOOGLE",
    date: "13/03/2026",
    text: "Very good experience. The team was professional, explained everything clearly, and finished the work on time. Thank you!",
  },
  {
    rating: 5,
    source: "GOOGLE",
    date: "19/06/2026",
    text: "Thank you for the excellent service, clean work, and attention to detail. I was impressed with the speed of execution. Honestly, 10/10.",
  },
];
