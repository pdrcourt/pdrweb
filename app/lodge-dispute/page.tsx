import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LodgeDisputePageClient from "./LodgeDisputePageClient";

export const metadata: Metadata = buildMetadata({
  title: "File a Dispute Online | Lodge a Case | PDR Court",
  description:
    "File a dispute online with PDR Court and resolve it through conciliation or arbitration — guaranteed turnaround, enforceable outcomes, and none of the cost or delay of court.",
  path: "/lodge-dispute",
});

export default function LodgeDisputePage() {
  return <LodgeDisputePageClient />;
}
