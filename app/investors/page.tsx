import type { Metadata } from "next";
import InvestorsPageClient from "./InvestorsPageClient";

export const metadata: Metadata = {
  title: "Investors | PDR COURT",
  description:
    "Join PDR COURT, an innovative ADR platform, and discover how your investment can contribute to revolutionizing dispute resolution services.",
};

export default function InvestorsPage() {
  return <InvestorsPageClient />;
}
