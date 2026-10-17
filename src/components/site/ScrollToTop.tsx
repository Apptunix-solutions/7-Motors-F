import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/lib/language";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle calculation for progress ring
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-40"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={isAr ? "الرجوع إلى أعلى الصفحة" : "Scroll to top"}
            className="group relative flex size-12 items-center justify-center rounded-full border border-border bg-card/85 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:text-primary hover:shadow-glow hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {/* Circular Progress Ring */}
            <svg
              className="absolute inset-0 size-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 44 44"
              aria-hidden="true"
            >
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-border/40"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-primary transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Arrow Icon */}
            <ArrowUp className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
