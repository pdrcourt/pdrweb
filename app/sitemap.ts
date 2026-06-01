import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/migrated-content";

const BASE_URL = "https://www.pdrcourt.in";

// Canonical static routes. Duplicate aliases (/terms, /privacy, /cookies,
// /faq, /careers/erp-manager, /solutions/individuals etc.) are deliberately
// excluded so the sitemap only advertises one URL per piece of content.
const PRIMARY = [
  "about",
  "services",
  "how-it-works",
  "pricing",
  "buy",
  "lodge-dispute",
  "appointment",
  "talk-to-us",
  "contact",
];

const SECONDARY = [
  "company",
  "investors",
  "offices",
  "neutrals",
  "partners",
  "individuals",
  "msmes",
  "financial-institutions",
  "enterprise",
  "solutions/arbitration",
  "solutions/conciliation",
  "solutions/mediation",
  "solutions/negotiation",
  "information",
  "knowledge-center",
  "beginner-guide",
  "ethos",
  "case-studies",
  "member-stories",
  "media-center",
  "newsroom",
  "articles",
  "media-kit",
  "press-release",
  "faqs",
  "join-us",
  "careers",
  "careers/arbitrator",
  "careers/conciliator",
  "careers/case-manager",
  "careers/erp-management",
  "careers/it-developers",
  "developer",
  "book-launch",
];

const LEGAL = [
  "resources",
  "resources-legal",
  "rules",
  "arbitration-rules",
  "mediation-rules",
  "proceeding-rules",
  "terms-conditions",
  "privacy-policy",
  "disclaimer",
  "cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => (path ? `${BASE_URL}/${path}` : BASE_URL);

  const staticEntries: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...PRIMARY.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...SECONDARY.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...LEGAL.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];

  const detailEntries = (
    category: "articles" | "news" | "case-studies",
    base: string,
  ): MetadataRoute.Sitemap =>
    getAllSlugs(category).map((slug) => ({
      url: `${BASE_URL}${base}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [
    ...staticEntries,
    ...detailEntries("articles", "/articles"),
    ...detailEntries("news", "/newsroom"),
    ...detailEntries("case-studies", "/case-studies"),
  ];
}
