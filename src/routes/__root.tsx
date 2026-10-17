import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE } from "../lib/site";
import { LOCAL_BUSINESS_JSONLD } from "../lib/structured-data";
import { LanguageProvider } from "../lib/language";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { ChatWidget } from "@/components/site/ChatWidget";
import { Toaster } from "@/components/ui/sonner";

/**
 * Applies the saved (or system) theme before first paint so there is no
 * light/dark flash and no hydration mismatch: the server always renders the
 * bare <html>, and this script sets the `.dark` class synchronously.
 */
const THEME_INIT_SCRIPT = `(function(){try{var k="7m-theme";var s=localStorage.getItem(k);var m=window.matchMedia("(prefers-color-scheme: light)").matches;var t=s==="light"||s==="dark"?s:(m?"light":"dark");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`;

/**
 * Synchronously applies saved language and text direction (RTL for Arabic)
 * before first paint to prevent layout jumps.
 */
const LANG_INIT_SCRIPT = `(function(){try{var k="7m-lang";var s=localStorage.getItem(k);if(s==="ar"){document.documentElement.lang="ar";document.documentElement.dir="rtl";document.documentElement.classList.add("lang-ar");}}catch(e){}})();`;

function PendingComponent() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-background px-4"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span
          className="relative flex size-12 items-center justify-center rounded-full border border-primary/35 bg-primary/10"
          aria-hidden="true"
        >
          <span className="size-6 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
        </span>
        <p className="text-sm font-medium text-muted-foreground">Loading Seven Motors…</p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Shared branded error page scaffold
────────────────────────────────────────────────────────────────────────── */
interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
  actions: ReactNode;
  icon?: "gear" | "warning";
}

function ErrorPage({ code, title, description, actions, icon = "gear" }: ErrorPageProps) {
  // Floating particle positions (stable — not random on every render)
  const particles = [
    { top: "12%", left: "8%", size: 3, delay: 0 },
    { top: "22%", left: "88%", size: 2, delay: 0.7 },
    { top: "55%", left: "5%", size: 4, delay: 1.4 },
    { top: "70%", left: "92%", size: 2, delay: 0.3 },
    { top: "85%", left: "15%", size: 3, delay: 1.1 },
    { top: "40%", left: "95%", size: 2, delay: 1.8 },
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-16">

      {/* Ambient red glow behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, oklch(52% 0.20 25 / 0.18) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-primary/40"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float-dot 4s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Main card */}
      <div className="relative z-10 flex max-w-lg flex-col items-center gap-8 text-center">

        {/* Icon area */}
        <div className="relative flex items-center justify-center">
          {/* Outer glow ring */}
          <span
            aria-hidden="true"
            className="absolute size-40 animate-ping rounded-full bg-primary/10"
            style={{ animationDuration: "2.4s" }}
          />
          <span
            aria-hidden="true"
            className="absolute size-32 rounded-full border border-primary/20 bg-primary/5"
          />

          {icon === "gear" ? (
            /* Rotating gear SVG */
            <svg
              viewBox="0 0 80 80"
              className="relative size-20 text-primary"
              aria-hidden="true"
              style={{ animation: "spin-slow 8s linear infinite" }}
            >
              <path
                fill="currentColor"
                fillOpacity="0.15"
                d="M40 0a40 40 0 1 1 0 80A40 40 0 0 1 40 0z"
              />
              <path
                fill="currentColor"
                d="M44.5 8h-9l-1 6.3a22.5 22.5 0 0 0-6.5 2.7l-5.4-3.2-6.4 6.4 3.2 5.4A22.5 22.5 0 0 0 16.3 32L10 33v9l6.3 1a22.5 22.5 0 0 0 2.7 6.5l-3.2 5.4 6.4 6.4 5.4-3.2A22.5 22.5 0 0 0 34 59.7l1 6.3h9l1-6.3a22.5 22.5 0 0 0 6.5-2.7l5.4 3.2 6.4-6.4-3.2-5.4A22.5 22.5 0 0 0 63.7 42l6.3-1v-9l-6.3-1a22.5 22.5 0 0 0-2.7-6.5l3.2-5.4-6.4-6.4-5.4 3.2A22.5 22.5 0 0 0 46 8.3zM40 29a11 11 0 1 1 0 22 11 11 0 0 1 0-22z"
              />
            </svg>
          ) : (
            /* Warning triangle SVG */
            <svg
              viewBox="0 0 80 80"
              className="relative size-20 text-primary"
              aria-hidden="true"
              style={{ animation: "pulse-scale 2s ease-in-out infinite" }}
            >
              <path
                fill="currentColor"
                fillOpacity="0.15"
                d="M40 8 L72 68 H8 Z"
              />
              <path
                fill="currentColor"
                d="M40 12 L69 65 H11 Z M37 32h6v18h-6z M37 54h6v6h-6z"
              />
            </svg>
          )}
        </div>

        {/* Code */}
        <div className="relative">
          <span
            className="block font-display text-[7rem] font-bold leading-none tracking-tight"
            style={{
              background: "linear-gradient(135deg, oklch(75% 0.04 285) 0%, oklch(52% 0.205 25) 60%, oklch(75% 0.04 285) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            aria-label={code}
          >
            {code}
          </span>
          {/* Subtle reflection */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-full block font-display text-[7rem] font-bold leading-none tracking-tight opacity-[0.07]"
            style={{
              background: "linear-gradient(135deg, oklch(75% 0.04 285) 0%, oklch(52% 0.205 25) 60%, oklch(75% 0.04 285) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transform: "scaleY(-1)",
              maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            }}
          >
            {code}
          </span>
        </div>

        {/* Title + description */}
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-3">{actions}</div>

        {/* Brand strip */}
        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-primary/50">
          Seven Motors — Riyadh
        </p>
      </div>

      {/* Bottom decorative line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(52% 0.205 25 / 0.5) 50%, transparent)",
        }}
      />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
        @keyframes float-dot {
          from { transform: translateY(0px); opacity: 0.4; }
          to   { transform: translateY(-14px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Shared button variants for error pages
────────────────────────────────────────────────────────────────────────── */
const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_20px_-4px_oklch(52%_0.205_25_/_0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/* ──────────────────────────────────────────────────────────────────────────
   404 Not Found
────────────────────────────────────────────────────────────────────────── */
function NotFoundComponent() {
  return (
    <ErrorPage
      code="404"
      icon="gear"
      title="Page not found"
      description="This road doesn't lead anywhere. The page you're looking for has moved, been removed, or never existed. Let us steer you back."
      actions={
        <>
          <Link to="/" className={primaryBtn}>
            ← Back to home
          </Link>
          <Link to="/contact" className={ghostBtn}>
            Contact us
          </Link>
        </>
      }
    />
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Runtime / network error
────────────────────────────────────────────────────────────────────────── */
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  const [detail, setDetail] = useState<string>("");

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });

    // Classify the error for user-facing copy
    const msg = error instanceof Error ? error.message : String(error);
    if (/chunk|loading chunk|dynamically imported/i.test(msg)) {
      setDetail("A page asset failed to load. This usually fixes itself on refresh.");
    } else if (/network|fetch|failed to fetch/i.test(msg)) {
      setDetail("Check your internet connection and try again.");
    } else if (msg) {
      setDetail(msg.slice(0, 120));
    }
  }, [error]);

  return (
    <ErrorPage
      code="500"
      icon="warning"
      title="Something went wrong"
      description={
        detail ||
        "An unexpected error occurred on our end. Refreshing usually fixes it — if not, come back shortly or reach us directly."
      }
      actions={
        <>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={primaryBtn}
          >
            ↺ Try again
          </button>
          <a href="/" className={ghostBtn}>
            Go home
          </a>
        </>
      }
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — Luxury Car Service Center in Riyadh` },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#0d0d0e", media: "(prefers-color-scheme: dark)" },
      { name: "theme-color", content: "#f4f4f6", media: "(prefers-color-scheme: light)" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE.ogImage },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SITE.ogImage },
      // LocalBusiness/JSON-LD, built from verified business data.
      { "script:ld+json": LOCAL_BUSINESS_JSONLD },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Cairo:wght@600;700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/images/favicon-16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", href: "/images/favicon-48.png", sizes: "48x48", type: "image/png" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
    ],
    scripts: [
      // Inline theme initializer — runs before first paint, no flash.
      { children: THEME_INIT_SCRIPT },
      // Inline language initializer — sets lang and dir before first paint.
      { children: LANG_INIT_SCRIPT },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  pendingComponent: PendingComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <ChatWidget />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
