import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { buildMetadata } from "@/lib/seo";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = buildMetadata({
  title: "Arbitration Rules | PDR COURT",
  description:
    "The rules and procedure governing arbitration proceedings conducted on the PDR COURT platform.",
  path: "/arbitration-rules",
});

export default function ArbitrationRulesPage() {
  const page = getBySlug("any", "arbitration-rules");
  if (!page) return notFound();
  return (
    <LegalDocPage
      variant="rules"
      slug="arbitration-rules"
      eyebrow="Rulebook · Arbitration"
      title="Arbitration"
      titleAccent="Rules"
      intro="The rules and procedure governing arbitration proceedings conducted on the PDR COURT platform — clear, consistent, and built on trust."
      blocks={page.blocks}
    />
  );
}
