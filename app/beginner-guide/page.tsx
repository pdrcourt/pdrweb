import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = "beginner-guide";
const MIGRATED_SLUG = "beginners-guide";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  if (!p) return { title: "PDR COURT" };
  return buildMetadata({
    title: `${p.title} | PDR COURT`,
    description:
      p.description ||
      "A beginner's guide to Alternative Dispute Resolution with PDR COURT — understand arbitration, conciliation, and mediation, and how to resolve disputes faster.",
    path: "/beginner-guide",
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
