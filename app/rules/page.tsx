import type { Metadata } from "next";
import RulesPageClient from "./RulesPageClient";

export const metadata: Metadata = {
  title: "Rules & Guidelines | PDR COURT",
  description:
    "PDR COURT Rules and Guidelines for Arbitration, Mediation, and Online Dispute Resolution proceedings — clear, consistent procedures built on trust.",
};

export default function RulesPage() {
  return <RulesPageClient />;
}
