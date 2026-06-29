import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { buildMetadata } from "@/lib/seo";
import { getBySlug } from "@/lib/migrated-content";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | PDR COURT",
  description:
    "PDR COURT's cookie policy — what data we collect, how it's used, and how you can give consent or opt out before using our site.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  const page = getBySlug("any", "cookie-policy");
  if (!page) return notFound();
  return (
    <LegalDocPage
      slug="cookie-policy"
      eyebrow="Legal · Cookies"
      title="Cookie"
      titleAccent="Policy"
      intro="We forthrightly announce our cookie policy — what data we collect and how it's used — so you can give consent or opt out of cookies before using our site."
      blocks={page.blocks}
    />
  );
}
