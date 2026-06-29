import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import InvestorsPageClient from "./InvestorsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Investors | PDR COURT",
  description:
    "Join PDR COURT, an innovative ADR platform, and discover how your investment can contribute to revolutionizing dispute resolution services.",
  path: "/investors",
});

export default function InvestorsPage() {
  return <InvestorsPageClient />;
}
