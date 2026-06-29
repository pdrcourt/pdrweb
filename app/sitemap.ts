import type { MetadataRoute } from "next";

const BASE_URL = "https://www.pdrcourt.com";

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
  "media-center",
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

// Indexable long-form guides (top-of-funnel content).
const GUIDES = [
  "guides",
  "guides/cheque-bounce-recovery",
  "guides/recover-msme-delayed-payments",
  "guides/arbitration-clause-for-contracts",
  "guides/arbitration-vs-mediation-vs-conciliation",
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
    ...GUIDES.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // Blog pages (articles / newsroom / case-studies + their detail pages,
  // media-kit / press-release / faqs / member-stories) are intentionally
  // excluded from the sitemap — they are also robots-noindexed.
  return staticEntries;
}
