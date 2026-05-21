import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = {
  title: "Disclaimer | PDR COURT",
  description:
    "PDR COURT will not be held responsible for damages arising from the use of our website, products, or services. Please review these disclaimers carefully.",
};

export default function DisclaimerPage() {
  const page = getBySlug("any", "disclaimer");
  if (!page) return notFound();
  return (
    <LegalDocPage
      slug="disclaimer"
      eyebrow="Legal · Disclaimer"
      title="Our"
      titleAccent="Disclaimer"
      intro="PDR COURT will not be held responsible for damages arising from the use of our website, products, or services. Please review these disclaimers carefully."
      blocks={page.blocks}
    />
  );
}
