import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = "individuals";
const MIGRATED_SLUG = "individuals";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  return buildMetadata({
    title: p ? `${p.title} | PDR COURT` : "PDR COURT",
    description:
      p?.description ||
      "Resolve loan, contract, and consumer disputes online as an individual or sole proprietor with PDR Court — fast, affordable, legally enforceable ADR without going to court.",
    path: "/individuals",
  });
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
