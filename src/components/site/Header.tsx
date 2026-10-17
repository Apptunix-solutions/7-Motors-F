import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { SearchDialog } from "./SearchDialog";
import { useLanguage } from "@/lib/language";

/** Official logo asset, served from /public/images. */
const LOGO_URL = "/images/seven-motors-logo-white-transparent.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="container-page grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[auto_1fr_auto]">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex shrink-0 flex-col items-start leading-none"
            aria-label="Seven Motors home"
          >
            <img
              src={LOGO_URL}
              alt="Seven Motors — luxury car service center in Riyadh"
              width={320}
              height={110}
              className="brand-logo"
            />
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav aria-label="Main" className="hidden items-center justify-center gap-9 lg:flex">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary-text font-semibold" }}
              className="py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary-text"
            >
              {isAr ? "الرئيسية" : "Home"}
            </Link>

            {/* About Us Dropdown */}
            <div className="group relative">
              <Link
                to="/about"
                className="flex items-center gap-1 py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary-text"
              >
                <span>{isAr ? "من نحن" : "About Us"}</span>
                <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="overflow-hidden rounded-xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl">
                  <li>
                    <Link
                      to="/about"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "رؤية وخبرات المركز" : "Our Story & Vision"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "فريق الفنيين المعتمدين" : "Expert Technicians"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "لماذا سيفن موتورز" : "Why Choose Us"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="group relative">
              <Link
                to="/services"
                className="flex items-center gap-1 py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary-text"
              >
                <span>{isAr ? "الخدمات" : "Services"}</span>
                <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="overflow-hidden rounded-xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl">
                  <li>
                    <Link
                      to="/services"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "جميع الخدمات المعتمدة" : "All Services"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "الصيانة الدورية والزيوت" : "Routine Maintenance"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "الفحص الإلكتروني والبرمجة" : "Diagnostics & Coding"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-text"
                    >
                      {isAr ? "التوضيب وتعديل الأداء" : "Mechanical & Tuning"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Facility Link */}
            <Link
              to="/facility"
              activeProps={{ className: "text-primary-text font-semibold" }}
              className="py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary-text"
            >
              {isAr ? "المركز والورشة" : "The Facility"}
            </Link>

            {/* Contact Link */}
            <Link
              to="/contact"
              activeProps={{ className: "text-primary-text font-semibold" }}
              className="py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary-text"
            >
              {isAr ? "اتصل بنا" : "Contact"}
            </Link>
          </nav>

          {/* Header Actions: Search, Language, Theme, Book CTA */}
          <div className="flex items-center gap-2 justify-self-end">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-secondary hover:text-foreground"
            >
              <Search className="size-3.5 text-primary-text" />
              <span className="hidden sm:inline">{t("nav.searchShortcut")}</span>
              <kbd className="hidden rounded bg-background/80 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground shadow-sm sm:inline-block">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle EN / ع */}
            <LanguageToggle />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Book Service CTA */}
            <Button asChild className="hidden rounded-md px-6 font-semibold sm:inline-flex">
              <Link to="/contact">{t("nav.book")}</Link>
            </Button>

            {/* Mobile Sheet Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
                  {open ? <X className="size-6" /> : <Menu className="size-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-border bg-card/95 backdrop-blur-xl">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col gap-2 overflow-y-auto px-4 pt-10 pb-8">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setSearchOpen(true);
                    }}
                    className="flex w-full items-center justify-between rounded-lg border border-border bg-secondary/60 px-3 py-2.5 text-sm text-muted-foreground"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="size-4 text-primary-text" />
                      {t("nav.search")}
                    </span>
                    <kbd className="rounded bg-background px-1.5 py-0.5 text-[10px] font-mono">
                      ⌘K
                    </kbd>
                  </button>

                  <div className="my-2 flex items-center justify-between border-y border-border py-2.5">
                    <span className="text-xs font-medium text-muted-foreground">
                      Language / اللغة
                    </span>
                    <LanguageToggle />
                  </div>

                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary-text"
                  >
                    {isAr ? "الرئيسية" : "Home"}
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary-text"
                  >
                    {isAr ? "من نحن" : "About Us"}
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary-text"
                  >
                    {isAr ? "الخدمات" : "Services"}
                  </Link>
                  <Link
                    to="/facility"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary-text"
                  >
                    {isAr ? "المركز والورشة" : "The Facility"}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary-text"
                  >
                    {isAr ? "اتصل بنا" : "Contact"}
                  </Link>

                  <Button asChild className="mt-6 rounded-md">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      {t("nav.bookService")}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Global Command Palette / Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
