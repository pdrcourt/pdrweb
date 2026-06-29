import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = "careers/arbitrator";
const MIGRATED_SLUG = "arbitrator";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  if (!p) return { title: "PDR COURT" };
  return buildMetadata({
    title: `${p.title} | PDR COURT`,
    description:
      p.description ||
      "Become an arbitrator with PDR COURT — preside over commercial and civil disputes, deliver impartial awards, and join India's leading panel of ADR professionals.",
    path: "/careers/arbitrator",
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
