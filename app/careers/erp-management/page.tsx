import type { Metadata } from "next";
import MigratedRoutePage from "@/components/pages/MigratedRoutePage";
import { getBySlug } from "@/lib/migrated-content";

// Auto-generated: renders full-fidelity migrated pvtweb content.
const SLUG = "erp-management";

export function generateMetadata(): Metadata {
  const p = getBySlug("any", SLUG);
  return {
    title: p ? `${p.title} | PDR COURT` : "PDR COURT",
    description: p?.description || undefined,
    keywords: p?.keywords || undefined,
  };
}

export default function Page() {
  return <MigratedRoutePage slug={SLUG} />;
}
