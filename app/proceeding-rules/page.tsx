import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = {
  title: "Rules of ODR Proceedings | PDR COURT",
  description:
    "The rules governing the conduct of Online Dispute Resolution proceedings on the PDR COURT platform.",
};

export default function ProceedingRulesPage() {
  const page = getBySlug("any", "proceeding-rules");
  if (!page) return notFound();
  return (
    <LegalDocPage
      variant="rules"
      slug="proceeding-rules"
      eyebrow="Rulebook · ODR Proceedings"
      title="Rules of"
      titleAccent="ODR Proceedings"
      intro="The rules governing the conduct of Online Dispute Resolution proceedings on the PDR COURT platform."
      blocks={page.blocks}
    />
  );
}
