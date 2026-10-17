export type FacilityImage = {
  src: string;
  /** Alt text copied from the official website's image descriptions. */
  alt: string;
};

/** Workshop photos published on the official 7-motors.com website. */
export const FACILITY_IMAGES: FacilityImage[] = [
  {
    src: "/images/facility-1.jpg",
    alt: "Porsche 911s and a Lamborghini Huracán in the main service bay",
  },
  {
    src: "/images/facility-2.jpg",
    alt: "Two Porsche 911 GT3s raised on scissor lifts beside a 992 S/T",
  },
  { src: "/images/facility-3.jpg", alt: "Ferrari 348, F355 and 360 Modena inside the workshop" },
  {
    src: "/images/facility-4.jpg",
    alt: "Maserati GranTurismo, Ferrari F355 and F430 parked outside the workshop",
  },
  {
    src: "/images/facility-5.jpg",
    alt: "Ferrari 488 Pista, F430 and a yellow F430 at the Seven Motors entrance",
  },
  {
    src: "/images/facility-6.jpg",
    alt: "TECHART aerodynamic kit laid out before fitting to a Porsche 911 Carrera",
  },
];

/** The three facility commitments listed on the official website. */
export const FACILITY_POINTS = [
  {
    number: "01",
    title: "Insured while in our care",
    copy: "Cars secured indoor during maintenance.",
  },
  {
    number: "02",
    title: "Factory-trained team",
    copy: "Certified on European luxury and hyper-cars.",
  },
  {
    number: "03",
    title: "Commitment to deadlines",
    copy: "Transparent timelines. Delivered on time.",
  },
] as const;
