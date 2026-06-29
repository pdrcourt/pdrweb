import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import RulesPageClient from "./RulesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Rules & Guidelines | PDR COURT",
  description:
    "PDR COURT Rules and Guidelines for Arbitration, Mediation, and Online Dispute Resolution proceedings — clear, consistent procedures built on trust.",
  path: "/rules",
});

export default function RulesPage() {
  return <RulesPageClient />;
}
