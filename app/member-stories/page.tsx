import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = "member-stories";
const MIGRATED_SLUG = "member-stories";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  return {
    title: p ? `${p.title} | PDR COURT` : "PDR COURT",
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
