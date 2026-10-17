import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BOOKING_SERVICE_OPTIONS } from "@/data/services";
import { SITE, TIME_SLOTS } from "@/lib/site";

const schema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please choose a preferred date"),
  time: z.string().min(1, "Please choose a preferred time"),
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Name must be under 100 characters"),
  phone: z.string().trim().min(5, "A valid phone number is required").max(30),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  car: z.string().trim().min(1, "Please tell us the make, model and year").max(120),
  notes: z.string().trim().max(1000, "Notes must be under 1000 characters"),
});

type FormState = z.infer<typeof schema>;

const EMPTY: FormState = {
  service: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  car: "",
  notes: "",
};

function buildMessage(f: FormState): string {
  return [
    "Hello Seven Motors, I'd like to book a service.",
    "",
    `Service: ${f.service}`,
    `Preferred date: ${f.date}`,
    `Preferred time: ${f.time}`,
    `Full name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Email: ${f.email}`,
    `Car: ${f.car}`,
    f.notes ? `Notes: ${f.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Appointment request form matching the official 7-motors.com booking form.
 * Submissions are handed to WhatsApp or the visitor's email client — the same
 * channels the official site uses (no backend required).
 */
export function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);

  const set = (field: keyof FormState) => (value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const validate = (): FormState | null => {
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return null;
    }
    return result.data;
  };

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    const url = `https://wa.me/966562244034?text=${encodeURIComponent(buildMessage(data))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your appointment request.");
  };

  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    const subject = encodeURIComponent(`Service booking request — ${data.name}`);
    const body = encodeURIComponent(buildMessage(data));
    window.location.href = `${SITE.email.href}?subject=${subject}&body=${body}`;
    toast.success("Your email app is opening with the booking request ready to send.");
  };

  const fieldClass = "mt-2 bg-background";

  return (
    <form
      onSubmit={submitWhatsApp}
      className="card-surface space-y-5 p-8"
      aria-label="Book an appointment"
    >
      <div>
        <Label htmlFor="booking-service">Service type *</Label>
        <Select value={form.service} onValueChange={set("service")}>
          <SelectTrigger id="booking-service" className={fieldClass} aria-label="Service type">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {BOOKING_SERVICE_OPTIONS.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-date">Preferred date *</Label>
          <DatePicker
            id="booking-date"
            name="date"
            value={form.date}
            onChange={set("date")}
            placeholder="Choose a date"
            aria-label="Preferred appointment date"
            required
          />
        </div>
        <div>
          <Label htmlFor="booking-time">Preferred time *</Label>
          <Select value={form.time} onValueChange={set("time")}>
            <SelectTrigger id="booking-time" className={fieldClass} aria-label="Preferred time">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-name">Full name *</Label>
          <Input
            id="booking-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <Label htmlFor="booking-phone">Phone *</Label>
          <Input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={30}
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-email">Email</Label>
          <Input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <Label htmlFor="booking-car">Car (make, model, year) *</Label>
          <Input
            id="booking-car"
            name="car"
            placeholder="e.g. Porsche 911 Carrera S, 2022"
            required
            maxLength={120}
            value={form.car}
            onChange={(e) => set("car")(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="booking-notes">Notes</Label>
        <Textarea
          id="booking-notes"
          name="notes"
          rows={4}
          maxLength={1000}
          value={form.notes}
          onChange={(e) => set("notes")(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="h-12 flex-1">
          Request via WhatsApp →
        </Button>
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-12 flex-1"
          onClick={submitEmail}
        >
          Request via email →
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Open {SITE.hours.short}. {SITE.hours.friday}.
      </p>
    </form>
  );
}
