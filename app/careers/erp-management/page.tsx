import type { Metadata } from "next";
import MigratedRoutePage from "@/components/pages/MigratedRoutePage";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated: renders full-fidelity migrated pvtweb content.
const SLUG = "erp-management";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", SLUG);
  if (!p) return { title: "PDR COURT" };
  return buildMetadata({
    title: `${p.title} | PDR COURT`,
    description:
      p.description ||
      "ERP management at PDR COURT — discover how our enterprise systems orchestrate case operations, automate workflows, and scale dispute resolution across India.",
    keywords: p.keywords || undefined,
    path: "/careers/erp-management",
  });
}

export default function Page() {
  return <MigratedRoutePage slug={SLUG} />;
}
