// =========================================================================
// Migrated content loader — pvtweb pages as clean structured block trees.
// Each page is a sequence of typed content blocks (heading/paragraph/list/
// quote) rendered by a modern React template — pvtweb's layout CSS is gone.
// =========================================================================

import articlesData from "@/data/migrated/articles.json";
import newsData from "@/data/migrated/news.json";
import caseStudiesData from "@/data/migrated/case-studies.json";
import coreData from "@/data/migrated/core.json";
import slugAliasesData from "@/data/migrated/slug-aliases.json";

export type MigratedCategory = "articles" | "news" | "case-studies" | "core";

export interface HeadingBlock {
  type: "heading";
  level: number;
  text: string;
}
export interface ParagraphBlock {
  type: "paragraph";
  html: string;
  text: string;
}
export interface ListBlock {
  type: "list";
  ordered: boolean;
  items: { html: string; text: string }[];
}
export interface QuoteBlock {
  type: "quote";
  html: string;
  text: string;
}
/** marker — rendered as the styled "We Are Growing" stats card in-place */
export interface StatsBlock {
  type: "stats";
}
export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | QuoteBlock
  | StatsBlock;

export interface MigratedPage {
  slug: string;
  originalSlug: string;
  title: string;
  description: string;
  keywords?: string;
  excerpt: string;
  heroImage: string;
  blocks: ContentBlock[];
  category: MigratedCategory;
  source: string;
}

const articles = articlesData as MigratedPage[];
const news = newsData as MigratedPage[];
const caseStudies = caseStudiesData as MigratedPage[];
const core = coreData as MigratedPage[];
const slugAliases = slugAliasesData as Record<string, string>;

const all: MigratedPage[] = [...articles, ...news, ...caseStudies, ...core];

const bySlug = new Map<string, MigratedPage>();
for (const p of all) bySlug.set(p.slug, p);
for (const p of all) if (!bySlug.has(p.originalSlug)) bySlug.set(p.originalSlug, p);
for (const [oldSlug, newSlug] of Object.entries(slugAliases)) {
  const target = bySlug.get(newSlug);
  if (target && !bySlug.has(oldSlug)) bySlug.set(oldSlug, target);
}

export function getAllByCategory(cat: MigratedCategory): MigratedPage[] {
  return cat === "articles" ? articles
    : cat === "news" ? news
    : cat === "case-studies" ? caseStudies
    : core;
}

export function getBySlug(
  cat: MigratedCategory | "any",
  slug: string,
): MigratedPage | null {
  if (cat === "any") return bySlug.get(slug) || null;
  const list = getAllByCategory(cat);
  return (
    list.find((x) => x.slug === slug) ||
    list.find((x) => x.originalSlug === slug) ||
    null
  );
}

export function getAllSlugs(cat: MigratedCategory): string[] {
  return getAllByCategory(cat).map((p) => p.slug);
}

export function getAllUrlSlugs(): string[] {
  const out = new Set<string>();
  for (const p of all) {
    out.add(p.slug);
    out.add(p.originalSlug);
  }
  return Array.from(out);
}

export function getRelated(
  cat: MigratedCategory,
  currentSlug: string,
  limit = 3,
): MigratedPage[] {
  const list = getAllByCategory(cat).filter((p) => p.slug !== currentSlug);
  return [...list].sort((a, b) => a.slug.localeCompare(b.slug)).slice(0, limit);
}

// Curated reading order for `core` pages — follows the site's information
// architecture so Prev/Next gives a meaningful journey (not raw alphabetical,
// which would land on 404/test/sec-level junk pages).
const CORE_ORDER = [
  "about", "company", "investors", "offices", "neutrals", "partners",
  "information", "how-it-works", "beginners-guide", "our-ethos",
  "case-studies", "member-stories",
  "services", "individuals", "msmes", "financialinstitutions", "enterprise", "pricing",
  "developer", "buy", "lodge-dispute", "appointment", "talktous", "contact",
  "mediacenter", "news", "articles", "mediakit", "press-release", "faqs",
  "joinus", "arbitrator", "conciliator", "case-manager", "erp-management", "it-developers",
  "pdrcourt-rules", "arbitration-rules", "mediation-rules", "proceeding-rules", "our-rules",
  "terms-conditions", "privacy-policy", "disclaimer", "cookie-policy",
  "book-launch", "knowledge-center-adr",
];

// Previous / next page within the same category (wraps around the ends)
export function getPrevNext(
  cat: MigratedCategory,
  currentSlug: string,
): { prev: MigratedPage | null; next: MigratedPage | null } {
  let sequence: MigratedPage[];

  if (cat === "core") {
    // walk the curated order; skip any slug we don't actually have
    sequence = CORE_ORDER.map((s) => getBySlug("core", s)).filter(
      (p): p is MigratedPage => !!p,
    );
  } else {
    sequence = getAllByCategory(cat);
  }

  const idx = sequence.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return { prev: null, next: null };
  const len = sequence.length;
  if (len < 2) return { prev: null, next: null };
  return {
    prev: sequence[(idx - 1 + len) % len],
    next: sequence[(idx + 1) % len],
  };
}

export function getCounts() {
  return {
    articles: articles.length,
    news: news.length,
    "case-studies": caseStudies.length,
    core: core.length,
    total: all.length,
  };
}

export function categoryRoute(category: MigratedCategory): string {
  switch (category) {
    case "articles": return "/articles";
    case "news": return "/newsroom";
    case "case-studies": return "/case-studies";
    case "core": return "";
  }
}

// Reserved static route slugs — the catch-all must NOT shadow these
export const RESERVED_ROUTES = new Set([
  "about", "appointment", "articles", "beginner-guide", "book-launch", "buy",
  "careers", "case-studies", "company", "contact", "cookie-policy", "cookies",
  "developer", "disclaimer", "enterprise", "ethos", "faq", "faqs",
  "financial-institutions", "fonts", "how-it-works", "individuals", "information",
  "investors", "join-us", "knowledge-center", "lodge-dispute", "media-center",
  "media-kit", "member-stories", "msmes", "neutrals", "newsroom", "offices",
  "partners", "press-release", "pricing", "privacy", "privacy-policy", "resources",
  "resources-legal", "rules", "arbitration-rules", "mediation-rules",
  "proceeding-rules", "services", "solutions", "talk-to-us", "terms",
  "terms-conditions", "thankyou",
]);
