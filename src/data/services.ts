import { Droplets, Disc3, MonitorSmartphone, Gauge, Wrench, Snowflake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  number: string;
  title: string;
  copy: string;
  Icon: LucideIcon;
};

/** The six service lines offered by Seven Motors, per the official website. */
export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Oil & Fluids",
    copy: "Full-synthetic service using manufacturer-spec lubricants for European exotics and luxury sedans.",
    Icon: Droplets,
  },
  {
    number: "02",
    title: "Brake Systems",
    copy: "Ceramic and OEM pad replacement, rotor resurfacing, calipers, brake-by-wire diagnostics.",
    Icon: Disc3,
  },
  {
    number: "03",
    title: "Computer Diagnostics",
    copy: "Dealer-level scan tools for Ferrari, Lamborghini, Bentley, Porsche, Audi, BMW, Mercedes.",
    Icon: MonitorSmartphone,
  },
  {
    number: "04",
    title: "Performance Tuning",
    copy: "ECU remapping, exhaust, suspension and handling upgrades tailored per chassis.",
    Icon: Gauge,
  },
  {
    number: "05",
    title: "Mechanical Repair",
    copy: "Engine, transmission and driveline work executed by factory-trained technicians.",
    Icon: Wrench,
  },
  {
    number: "06",
    title: "A/C & Climate",
    copy: "Full climate system service — compressors, evaporators, refrigerant, cabin comfort.",
    Icon: Snowflake,
  },
];

/** Service choices offered on the official booking form. */
export const BOOKING_SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  "Periodic Maintenance",
  "Other — I'll explain in the notes",
] as const;
