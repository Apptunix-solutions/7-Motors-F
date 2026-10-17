import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "ar";

export interface LanguageContextValue {
  lang: Language;
  dir: "ltr" | "rtl";
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "7m-lang";

export const DICTIONARY: Record<string, { en: string; ar: string }> = {
  // Navigation
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.facility": { en: "Facility", ar: "المركز والورشة" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.book": { en: "Book", ar: "حجز موعد" },
  "nav.bookService": { en: "Book a service", ar: "احجز خدمة" },
  "nav.search": { en: "Search...", ar: "بحث..." },
  "nav.searchShortcut": { en: "Search", ar: "بحث" },

  // Search dialog
  "search.title": { en: "Search Seven Motors", ar: "البحث في سيفن موتورز" },
  "search.placeholder": {
    en: "Search services, exotics, diagnostics, location...",
    ar: "ابحث في الخدمات، الصيانة، الفحص، الموقع...",
  },
  "search.noResults": { en: "No matching results found.", ar: "لم يتم العثور على نتائج مطابقة." },
  "search.pages": { en: "Navigation & Pages", ar: "الصفحات والأقسام" },
  "search.services": { en: "Official Services", ar: "خدمات الصيانة المعتمدة" },
  "search.quickContact": { en: "Direct Contact & Location", ar: "الاتصال المباشر والموقع" },

  // General
  "lang.toggle": { en: "ع", ar: "EN" },
  "lang.label": { en: "Switch to Arabic", ar: "التحويل للإنجليزية" },
  "theme.toggle": { en: "Toggle theme", ar: "تغيير المظهر" },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "ar" || saved === "en") {
        setLangState(saved);
        applyLanguage(saved);
      }
    } catch {
      // Ignore localStorage access failures
    }
  }, []);

  const applyLanguage = (newLang: Language) => {
    const isAr = newLang === "ar";
    document.documentElement.lang = newLang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    if (typeof document !== "undefined" && document.body) {
      document.body.dir = isAr ? "rtl" : "ltr";
    }
    if (isAr) {
      document.documentElement.classList.add("lang-ar");
    } else {
      document.documentElement.classList.remove("lang-ar");
    }
  };

  const setLang = (next: Language) => {
    setLangState(next);
    applyLanguage(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    setLang(next);
  };

  const t = (key: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en",
      dir: "ltr",
      setLang: () => {},
      toggleLang: () => {},
      t: (key: string) => DICTIONARY[key]?.en || key,
    };
  }
  return ctx;
}
