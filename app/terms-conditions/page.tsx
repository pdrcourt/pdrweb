import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { buildMetadata } from "@/lib/seo";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | PDR COURT",
  description:
    "PDR COURT defines the terms & conditions by which users may access, browse, and use our website — as a guest or an account holder.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  const page = getBySlug("any", "terms-conditions");
  if (!page) return notFound();
  return (
    <LegalDocPage
      slug="terms-conditions"
      eyebrow="Legal · Terms of Use"
      title="Terms &"
      titleAccent="Conditions"
      intro="PDR COURT defines the terms on which users may access, browse, and use our website — as a guest or an account holder. Please read them carefully before using our site."
      blocks={page.blocks}
    />
  );
}
