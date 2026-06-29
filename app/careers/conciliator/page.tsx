import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = "careers/conciliator";
const MIGRATED_SLUG = "conciliator";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  if (!p) return { title: "PDR COURT" };
  return buildMetadata({
    title: `${p.title} | PDR COURT`,
    description:
      p.description ||
      "Join PDR COURT as a conciliator — guide parties toward amicable settlements, facilitate constructive dialogue, and help resolve disputes outside the courtroom.",
    path: "/careers/conciliator",
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
