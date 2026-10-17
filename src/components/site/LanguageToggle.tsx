import { useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

/**
 * Language toggle — EN | ع — with a smooth sliding pill indicator.
 *
 * Key design & accessibility details:
 * 1. Explicit `dir="ltr"` on the toggle wrapper ensures physical LTR coordinates
 *    so the sliding pill's `translate-x` works identically in both English and Arabic.
 * 2. High contrast colors: active item is white on brand red pill (`bg-primary`),
 *    inactive item is `text-foreground/75 hover:text-foreground` which is razor-sharp
 *    and crystal clear in both dark and light modes.
 * 3. Fluid cubic-bezier spring overshoot for a modern, tactile feel.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [pressing, setPressing] = useState<"en" | "ar" | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const isAr = lang === "ar";

  const handlePress = (target: "en" | "ar") => {
    if (target === lang) return;
    setPressing(target);
    setTimeout(() => setPressing(null), 250);
    setLang(target);
  };

  return (
    <div
      ref={wrapRef}
      role="group"
      dir="ltr"
      aria-label="Language selection"
      className={cn(
        "relative inline-flex items-center rounded-full border border-border/80 bg-secondary/80 p-0.5 backdrop-blur-md shadow-inner",
        "transition-colors duration-200 select-none",
        className,
      )}
    >
      {/* Sliding pill indicator */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-0.5 bottom-0.5 left-0.5 rounded-full",
          "bg-gradient-to-r from-primary to-primary-bright shadow-sm shadow-primary/25",
          "w-[calc(50%-2px)] pointer-events-none",
          "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          isAr ? "translate-x-[calc(100%+2px)]" : "translate-x-0",
        )}
        style={{ willChange: "transform" }}
      />

      {/* EN option */}
      <button
        type="button"
        onClick={() => handlePress("en")}
        aria-pressed={!isAr}
        aria-label="Switch to English"
        className={cn(
          "relative z-10 min-w-[2.1rem] rounded-full px-2.5 py-1 text-xs transition-all duration-200",
          !isAr
            ? "font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] scale-100"
            : "font-medium text-foreground/70 hover:text-foreground scale-95",
          pressing === "en" && "scale-90",
        )}
      >
        EN
      </button>

      {/* AR (ع) option */}
      <button
        type="button"
        onClick={() => handlePress("ar")}
        aria-pressed={isAr}
        aria-label="التبديل إلى العربية"
        className={cn(
          "relative z-10 min-w-[2.1rem] rounded-full px-2.5 py-1 text-xs transition-all duration-200",
          isAr
            ? "font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] scale-100"
            : "font-medium text-foreground/70 hover:text-foreground scale-95",
          pressing === "ar" && "scale-90",
        )}
      >
        ع
      </button>
    </div>
  );
}
