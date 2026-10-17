import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";
const STORAGE_KEY = "7m-theme";

/**
 * Official CAiR Turbo Cinematic Theme Toggle:
 *
 * 1. Uses native View Transitions API with circular ripple reveal:
 *    Calculates click origin (x, y) coordinates and sets `--theme-toggle-x`
 *    and `--theme-toggle-y`, triggering the CSS @keyframes `theme-circle-reveal`.
 * 2. Icon morphing: Sun & Moon cross-rotate and scale in/out smoothly over 500ms.
 * 3. Graceful fallback for browsers without View Transitions API.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setThemeState(isDark ? "dark" : "light");
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = (((rect.left + rect.width / 2) / window.innerWidth) * 100).toFixed(1) + "%";
    const y = (((rect.top + rect.height / 2) / window.innerHeight) * 100).toFixed(1) + "%";
    document.documentElement.style.setProperty("--theme-toggle-x", x);
    document.documentElement.style.setProperty("--theme-toggle-y", y);

    const next: Theme = theme === "dark" ? "light" : "dark";

    const updateTheme = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      setThemeState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode fallback */
      }
    };

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => { finished: Promise<void> };
    };

    if (!doc.startViewTransition) {
      document.documentElement.classList.add("theme-transitioning");
      updateTheme();
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transitioning");
      }, 300);
      return;
    }

    doc.startViewTransition(() => {
      updateTheme();
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "relative flex size-9 items-center justify-center rounded-full border border-border/80 bg-secondary/70 text-foreground/85 hover:text-foreground hover:bg-secondary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Sun icon (Light mode: Seven Motors refined warm crimson-gold emblem) */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.35)" : "rotate(0deg) scale(1)",
        }}
      >
        <Sun className="size-4 text-primary-text drop-shadow-[0_0_10px_oklch(52.5%_0.205_25_/_0.35)]" />
      </span>

      {/* Moon icon (Dark mode: Seven Motors refined metallic titanium-silver emblem) */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.35)",
        }}
      >
        <Moon className="size-4 text-foreground/95 drop-shadow-[0_0_10px_oklch(95%_0.01_25_/_0.3)]" />
      </span>
    </button>
  );
}
