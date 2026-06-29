import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { EXPERIENCE_CONFIG } from "@/lib/experience-config";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated — situational ExperiencePage layout.
const ROUTE = "financial-institutions";
const MIGRATED_SLUG = "financialinstitutions";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", MIGRATED_SLUG);
  return buildMetadata({
    title: "Loan & Debt Recovery for Banks & NBFCs | PDR Court",
    description:
      "Online dispute resolution for loan default and debt recovery — banks and NBFCs resolve cheque bounce, EMI default and commercial loan disputes digitally with PDR Court.",
    path: "/financial-institutions",
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
