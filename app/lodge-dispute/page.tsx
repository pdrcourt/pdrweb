import type { Metadata } from "next";
import LodgeDisputePageClient from "./LodgeDisputePageClient";

export const metadata: Metadata = {
  title: "Lodge a Dispute | PDR COURT",
  description:
    "Lodge your dispute with PDR COURT for quick, guaranteed-TAT resolutions through conciliation and arbitration — a fair, just outcome that saves time and money.",
};

export default function LodgeDisputePage() {
  return <LodgeDisputePageClient />;
}
