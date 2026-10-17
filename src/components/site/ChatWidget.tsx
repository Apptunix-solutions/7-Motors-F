import { useState } from "react";
import { MessageCircle, X, Send, Phone, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/language";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Popover / Dialog Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-80 sm:w-96 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-secondary/70 p-4">
              <div className="flex items-center gap-3">
                <div className="relative flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold">
                  7M
                  <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-card" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold leading-tight">
                    {isAr ? "مستشار خدمة سيفن موتورز" : "Seven Motors Concierge"}
                  </h3>
                  <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {isAr ? "متصل الآن — الرد خلال دقائق" : "Online · Fast response"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={isAr ? "إغلاق نافذة المحادثة" : "Close chat"}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Conversation Body */}
            <div className="space-y-3.5 p-4 text-xs leading-relaxed">
              <div className="rounded-2xl rounded-tl-sm bg-secondary/80 p-3.5 text-foreground shadow-sm">
                <p>
                  {isAr
                    ? "أهلاً بك في سيفن موتورز الرياض! كيف يمكننا مساعدتك في صيانة أو ترقية سيارتك اليوم؟"
                    : "Welcome to Seven Motors Riyadh. How can we assist with your exotic or performance vehicle today?"}
                </p>
              </div>

              {/* Quick Action Options */}
              <div className="space-y-2 pt-1">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-background/90 p-3 transition-all duration-200 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-sm"
                >
                  <span className="flex items-center gap-2.5 font-medium text-foreground">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">
                      <Send className="size-3.5" />
                    </span>
                    {isAr ? "محادثة عبر واتساب" : "Chat on WhatsApp"}
                  </span>
                  <span className="text-[10px] text-emerald-500 font-semibold uppercase">
                    {isAr ? "مباشر" : "Instant"}
                  </span>
                </a>

                <a
                  href={SITE.phone.href}
                  className="flex items-center justify-between rounded-xl border border-border bg-background/90 p-3 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:shadow-sm"
                >
                  <span className="flex items-center gap-2.5 font-medium text-foreground">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Phone className="size-3.5" />
                    </span>
                    {isAr ? "اتصال بالاستقبال" : "Call Workshop"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{SITE.phone.label}</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-border bg-background/90 p-3 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:shadow-sm"
                >
                  <span className="flex items-center gap-2.5 font-medium text-foreground">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <CalendarCheck className="size-3.5" />
                    </span>
                    {isAr ? "حجز موعد إلكتروني" : "Book Online"}
                  </span>
                  <span className="text-[10px] text-primary font-semibold">→</span>
                </Link>
              </div>
            </div>

            {/* Footer Location note */}
            <div className="border-t border-border bg-secondary/30 px-4 py-2.5 text-center text-[11px] text-muted-foreground">
              {isAr
                ? "الرياض — حي الفيصلية، شارع عبدالله الفقيه"
                : "Riyadh · Al Faisaliyyah, Abdallah Al Fakih St"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <div className="relative">
        {/* Subtle ping ring animation */}
        {!open && (
          <span className="absolute -inset-1 rounded-full bg-primary/35 animate-ping pointer-events-none" />
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={isAr ? "فتح المساعد المباشر" : "Open live chat"}
          className="group relative flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary-deep via-primary to-primary-bright text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {open ? (
            <X className="size-6 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <MessageCircle className="size-6 transition-transform duration-200 group-hover:scale-110" />
          )}

          {/* Small online green dot on the trigger icon */}
          <span className="absolute top-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-background" />
        </button>
      </div>
    </div>
  );
}
