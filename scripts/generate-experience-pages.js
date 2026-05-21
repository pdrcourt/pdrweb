/* eslint-disable */
// Generates page.tsx for every route configured in lib/experience-config.ts,
// wiring it to the ExperiencePage template.

const fs = require("fs");
const path = require("path");

const APP = path.join(__dirname, "..", "app");

// route (under app/) → migrated content slug
const ROUTES = {
  buy: "buy",
  "lodge-dispute": "lodge-dispute",
  appointment: "appointment",
  "talk-to-us": "talktous",
  contact: "contact",
  information: "information",
  "how-it-works": "how-it-works",
  "beginner-guide": "beginners-guide",
  ethos: "our-ethos",
  "member-stories": "member-stories",
  developer: "developer",
  "media-kit": "mediakit",
  "press-release": "press-release",
  services: "services",
  individuals: "individuals",
  msmes: "msmes",
  "financial-institutions": "financialinstitutions",
  enterprise: "enterprise",
  // pricing — bespoke page (app/pricing/PricingPageClient.tsx), not generated
  "join-us": "joinus",
  "careers/arbitrator": "arbitrator",
  "careers/conciliator": "conciliator",
  "careers/case-manager": "case-manager",
  "careers/erp-manager": "erp-management",
  "careers/it-developers": "it-developers",
};

function src(route, slug) {
  return `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = ${JSON.stringify(route)};
const MIGRATED_SLUG = ${JSON.stringify(slug)};

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  return {
    title: p ? \`\${p.title} | PDR COURT\` : "PDR COURT",
    description: p?.description || undefined,
  };
}

export default function Page() {
  const cfg = EXPERIENCE_CONFIG[ROUTE];
  const page = getBySlug("any", MIGRATED_SLUG);
  if (!cfg || !page) return notFound();
  return (
    <ExperiencePage
      cfg={cfg}
      intro={cfg.intro || page.excerpt || page.description}
      blocks={page.blocks}
    />
  );
}
`;
}

let n = 0;
for (const [route, slug] of Object.entries(ROUTES)) {
  const dir = path.join(APP, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), src(route, slug));
  n++;
}
console.log(`Generated ${n} ExperiencePage routes.`);
