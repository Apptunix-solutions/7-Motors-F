export type Partner = {
  name: string;
  category: "Dealerships" | "Retailer";
  focus: string;
  url: string;
};

/** Authorised dealerships and retailer partnerships listed on 7-motors.com. */
export const PARTNERS: Partner[] = [
  {
    name: "Techchart",
    category: "Dealerships",
    focus: "Porsche · refinement & performance",
    url: "https://www.techart.de/en.html",
  },
  {
    name: "Manhart",
    category: "Dealerships",
    focus: "BMW · Audi · Porsche tuning",
    url: "https://manhart-automotive.de/en/",
  },
  {
    name: "Sparco",
    category: "Dealerships",
    focus: "Motorsport equipment",
    url: "https://www.sparco-official.com/en/",
  },
  {
    name: "Novitec",
    category: "Retailer",
    focus: "Ferrari · Lamborghini · Rolls-Royce tuning",
    url: "https://www.novitecgroup.com/",
  },
];
