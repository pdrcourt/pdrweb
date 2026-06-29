import type { Metadata } from "next";
import MigratedRoutePage from "@/components/pages/MigratedRoutePage";
import { getBySlug } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

// Auto-generated: renders full-fidelity migrated pvtweb content.
const SLUG = "faqs";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", SLUG);
  return buildMetadata({
    title: p ? `${p.title} | PDR COURT` : "PDR COURT",
    description: p?.description || undefined,
    keywords: p?.keywords || undefined,
    path: "/faqs",
    noindex: true,
  });
}

export default function Page() {
  return <MigratedRoutePage slug={SLUG} />;
}
