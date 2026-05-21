/* eslint-disable */
// =========================================================================
// Generates page.tsx for every footer-linked static route, pointing it at
// the full-fidelity migrated pvtweb content (via MigratedRoutePage).
//
// Index routes (/newsroom, /articles, /case-studies) are intentionally
// NOT touched — they keep their search/filter listing pages.
// =========================================================================

const fs = require("fs");
const path = require("path");

const APP = path.join(__dirname, "..", "app");

// route path (under app/) → migrated slug
const ROUTES = {
  about: "about",
  company: "company",
  investors: "investors",
  offices: "offices",
  neutrals: "neutrals",
  partners: "partners",
  information: "information",
  "how-it-works": "how-it-works",
  "beginner-guide": "beginners-guide",
  ethos: "our-ethos",
  "member-stories": "member-stories",
  developer: "developer",
  buy: "buy",
  "lodge-dispute": "lodge-dispute",
  appointment: "appointment",
  "talk-to-us": "talktous",
  contact: "contact",
  "media-center": "mediacenter",
  "media-kit": "mediakit",
  "press-release": "press-release",
  faqs: "faqs",
  faq: "faqs",
  services: "services",
  individuals: "individuals",
  msmes: "msmes",
  "financial-institutions": "financialinstitutions",
  enterprise: "enterprise",
  pricing: "pricing",
  "join-us": "joinus",
  "careers/arbitrator": "arbitrator",
  "careers/conciliator": "conciliator",
  "careers/case-manager": "case-manager",
  "careers/erp-manager": "erp-management",
  "careers/erp-management": "erp-management",
  "careers/it-developers": "it-developers",
  rules: "pdrcourt-rules",
  "terms-conditions": "terms-conditions",
  terms: "terms-conditions",
  "privacy-policy": "privacy-policy",
  privacy: "privacy-policy",
  disclaimer: "disclaimer",
  "cookie-policy": "cookie-policy",
  cookies: "cookie-policy",
  ethos2: null, // placeholder ignore
};

function pageSource(slug) {
  return `import type { Metadata } from "next";
import MigratedRoutePage from "@/components/pages/MigratedRoutePage";
import { getBySlug } from "@/lib/migrated-content";

// Auto-generated: renders full-fidelity migrated pvtweb content.
const SLUG = ${JSON.stringify(slug)};

export function generateMetadata(): Metadata {
  const p = getBySlug("any", SLUG);
  return {
    title: p ? \`\${p.title} | PDR COURT\` : "PDR COURT",
    description: p?.description || undefined,
    keywords: p?.keywords || undefined,
  };
}

export default function Page() {
  return <MigratedRoutePage slug={SLUG} />;
}
`;
}

let written = 0;
for (const [route, slug] of Object.entries(ROUTES)) {
  if (!slug) continue;
  const dir = path.join(APP, route);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, "page.tsx"), pageSource(slug));
  written++;
}

console.log(`Generated ${written} footer-route page.tsx files.`);
