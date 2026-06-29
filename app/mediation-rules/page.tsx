import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { buildMetadata } from "@/lib/seo";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = buildMetadata({
  title: "Mediation Rules | PDR COURT",
  description:
    "The rules and procedure governing mediation proceedings conducted on the PDR COURT platform.",
  path: "/mediation-rules",
});

export default function MediationRulesPage() {
  const page = getBySlug("any", "mediation-rules");
  if (!page) return notFound();
  return (
    <LegalDocPage
      variant="rules"
      slug="mediation-rules"
      eyebrow="Rulebook · Mediation"
      title="Mediation"
      titleAccent="Rules"
      intro="The rules and procedure governing mediation proceedings conducted on the PDR COURT platform — clear, consistent, and built on trust."
      blocks={page.blocks}
    />
  );
}
