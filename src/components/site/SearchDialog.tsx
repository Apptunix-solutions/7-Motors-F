import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Search,
  Wrench,
  Gauge,
  Cpu,
  Flame,
  ShieldCheck,
  Snowflake,
  MapPin,
  Phone,
  MessageCircle,
  Home,
  Building2,
  Info,
  CalendarCheck,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/language";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (to: string) => {
    onOpenChange(false);
    navigate({ to });
  };

  const isAr = lang === "ar";

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} dir={isAr ? "rtl" : "ltr"}>
      <CommandInput
        placeholder={
          isAr ? "ابحث في الخدمات، الصيانة، المركز..." : "Search services, exotics, diagnostics..."
        }
      />
      <CommandList className="max-h-96">
        <CommandEmpty>{t("search.noResults")}</CommandEmpty>

        <CommandGroup heading={isAr ? "الصفحات الرئيسية" : "Pages & Sections"}>
          <CommandItem onSelect={() => handleSelect("/")} className="cursor-pointer">
            <Home className="me-2 size-4 text-primary" />
            <span>{isAr ? "الرئيسية — سيفن موتورز" : "Home — Seven Motors Riyadh"}</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <Wrench className="me-2 size-4 text-primary" />
            <span>
              {isAr
                ? "الخدمات — صيانة السيارات الفارهة والخارقة"
                : "Services — Supercar & Luxury Maintenance"}
            </span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/facility")} className="cursor-pointer">
            <Building2 className="me-2 size-4 text-primary" />
            <span>
              {isAr
                ? "المركز والورشة — التجهيزات وأجهزة الفحص"
                : "The Facility — Lifts & Diagnostic Systems"}
            </span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/about")} className="cursor-pointer">
            <Info className="me-2 size-4 text-primary" />
            <span>{isAr ? "من نحن — الرؤية والخبرات" : "About — Vision, Team & Standards"}</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/contact")} className="cursor-pointer">
            <CalendarCheck className="me-2 size-4 text-primary" />
            <span>{isAr ? "حجز موعد واتصل بنا" : "Contact & Book an Appointment"}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={isAr ? "خدمات الصيانة المعتمدة" : "Specialized Services"}>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <ShieldCheck className="me-2 size-4 text-primary" />
            <span>
              {isAr ? "الصيانة الدورية والزيوت المعتمدة" : "Routine Maintenance & Fluids"}
            </span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <Gauge className="me-2 size-4 text-primary" />
            <span>
              {isAr ? "منظومة الفرامل وأقراص الكربون-سيراميك" : "Brakes & Carbon-Ceramic Systems"}
            </span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <Cpu className="me-2 size-4 text-primary" />
            <span>
              {isAr ? "الفحص الإلكتروني المتقدم والبرمجة" : "Advanced Diagnostics & Coding"}
            </span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <Flame className="me-2 size-4 text-primary" />
            <span>{isAr ? "برمجة الأداء والداينو" : "Performance Tuning & Dyno"}</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <Wrench className="me-2 size-4 text-primary" />
            <span>
              {isAr
                ? "التوضيب الميكانيكي وتجديد المحركات"
                : "Mechanical Repair & Engine Rebuilding"}
            </span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/services")} className="cursor-pointer">
            <Snowflake className="me-2 size-4 text-primary" />
            <span>
              {isAr ? "فحص وصيانة التكييف للسيارات الفارهة" : "A/C Diagnostics & Climate Systems"}
            </span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={isAr ? "الاتصال المباشر والموقع" : "Direct Contact & Location"}>
          <CommandItem
            onSelect={() => {
              onOpenChange(false);
              window.open(SITE.phone.href, "_blank");
            }}
            className="cursor-pointer"
          >
            <Phone className="me-2 size-4 text-primary" />
            <span>{SITE.phone.label}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              onOpenChange(false);
              window.open(SITE.whatsapp, "_blank");
            }}
            className="cursor-pointer"
          >
            <MessageCircle className="me-2 size-4 text-primary" />
            <span>{isAr ? "محادثة فورية عبر واتساب" : "Chat on WhatsApp"}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              onOpenChange(false);
              window.open(SITE.maps, "_blank");
            }}
            className="cursor-pointer"
          >
            <MapPin className="me-2 size-4 text-primary" />
            <span>
              {isAr
                ? "موقع الورشة في حي الفيصلية، الرياض"
                : "Workshop: Al Faisaliyyah, Riyadh (Google Maps)"}
            </span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
