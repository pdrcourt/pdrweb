import type { Metadata } from "next";
import ResourcesLegalPageClient from "./ResourcesLegalPageClient";

export const metadata: Metadata = {
  title: "Resources & Legal | PDR COURT",
  description:
    "PDR COURT's rules, policies, terms and legal disclaimers — a clearly organised legal framework, plus the rules of procedure for arbitration and mediation.",
};

export default function ResourcesLegalPage() {
  return <ResourcesLegalPageClient />;
}
