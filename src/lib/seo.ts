import { SITE } from "./site";

type HeadInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/" or "/services". */
  path: string;
};

type HeadTag =
  { title: string } | { name: string; content: string } | { property: string; content: string };

type HeadLink = { rel: string; href: string };

/**
 * Builds the per-page <head> payload: unique title and description, Open
 * Graph / Twitter tags and a canonical URL pointing at the production origin.
 * Root-level metadata (charset, theme-color, image, JSON-LD) lives in
 * `src/routes/__root.tsx`.
 */
export function pageHead({ title, description, path }: HeadInput): {
  meta: HeadTag[];
  links: HeadLink[];
} {
  const url = path === "/" ? SITE.origin : `${SITE.origin}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
