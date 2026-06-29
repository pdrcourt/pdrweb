import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ResourcesLegalPageClient from "./ResourcesLegalPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Resources & Legal | PDR COURT",
  description:
    "PDR COURT's rules, policies, terms and legal disclaimers — a clearly organised legal framework, plus the rules of procedure for arbitration and mediation.",
  path: "/resources-legal",
});

export default function ResourcesLegalPage() {
  return <ResourcesLegalPageClient />;
}
