import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = {
  title: "Privacy Policy | PDR COURT",
  description:
    "PDR COURT respects your privacy. Read, understand, and agree to the terms of this Privacy Policy — what data we collect and how we use it.",
};

export default function PrivacyPolicyPage() {
  const page = getBySlug("any", "privacy-policy");
  if (!page) return notFound();
  return (
    <LegalDocPage
      slug="privacy-policy"
      eyebrow="Legal · Privacy"
      title="Privacy"
      titleAccent="Policy"
      intro="PDR COURT respects your privacy. Please read, understand, and agree to the terms of this Privacy Policy — it explains what data we collect from you and how we use it."
      blocks={page.blocks}
    />
  );
}
