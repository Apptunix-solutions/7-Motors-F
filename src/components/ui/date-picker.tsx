"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface DatePickerProps {
  /** ISO date string (YYYY-MM-DD) or empty string */
  value: string;
  onChange: (iso: string) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  /** Earliest selectable date. Defaults to today (no past dates). */
  fromDate?: Date;
  /** Latest selectable date */
  toDate?: Date;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  "aria-label"?: string;
}

/**
 * Reusable date-picker trigger that opens a calendar popover.
 * Drop-in replacement for <input type="date"> in forms.
 * Matches Input / SelectTrigger visually (same height, border, bg, ring).
 */
export function DatePicker({
  value,
  onChange,
  id,
  name,
  placeholder = "Pick a date",
  fromDate,
  toDate,
  className,
  disabled,
  required,
  "aria-label": ariaLabel,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  // Parse ISO string → Date (or undefined when empty)
  const selected: Date | undefined = value ? new Date(value + "T00:00:00") : undefined;

  // Default minimum: today at midnight (no past bookings)
  const minDate: Date = fromDate ?? (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  })();

  // react-day-picker v9 uses startMonth / endMonth for dropdown navigation range.
  // startMonth = first day of the current month (so the dropdown shows from now).
  // endMonth   = first day 2 years ahead.
  const startMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const endMonth   = toDate
    ? new Date(toDate.getFullYear(), toDate.getMonth(), 1)
    : new Date(minDate.getFullYear() + 2, 11, 1); // Dec, 2 years ahead

  const handleSelect = (day: Date | undefined) => {
    if (!day) return;
    onChange(format(day, "yyyy-MM-dd"));
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={ariaLabel ?? placeholder}
          aria-required={required}
          disabled={disabled}
          className={cn(
            // Identical sizing/colors to Input & SelectTrigger
            "mt-2 h-9 w-full justify-start gap-2 border-input bg-background px-3 font-normal text-sm shadow-sm ring-offset-background",
            "hover:bg-background hover:text-foreground",
            "focus:outline-none focus:ring-1 focus:ring-ring",
            !selected && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="h-4 w-4 shrink-0 opacity-50" />
          {selected ? format(selected, "d MMM yyyy") : placeholder}
        </Button>
      </PopoverTrigger>

      {/* Hidden input preserves value for native form submissions */}
      {name && (
        <input type="hidden" name={name} value={value} required={required} />
      )}

      {/*
        overflow-hidden is required so the Calendar's background/edges are
        clipped cleanly to the popover's rounded-md border — without it the
        calendar bleeds over the corners at the top.
      */}
      <PopoverContent
        className="w-auto overflow-hidden rounded-xl p-0 shadow-lg shadow-black/30"
        align="start"
        sideOffset={6}
      >
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          /* v9 API: startMonth / endMonth control the dropdown range */
          captionLayout="dropdown"
          startMonth={startMonth}
          endMonth={endMonth}
          disabled={(day) => {
            // No past dates
            if (day < minDate) return true;
            // Honour caller's upper bound
            if (toDate && day > toDate) return true;
            // Fridays — workshop closed (7-motors.com hours)
            if (day.getDay() === 5) return true;
            return false;
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
