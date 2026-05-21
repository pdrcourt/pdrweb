import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | PDR COURT",
  description:
    "PDR COURT value pricing — dispute resolution agreements starting at just ₹500. Transparent, cost-effective ADR for every business.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
