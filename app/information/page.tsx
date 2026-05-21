import type { Metadata } from "next";
import InformationPageClient from "./InformationPageClient";

export const metadata: Metadata = {
  title: "Information | PDR COURT",
  description:
    "Know all about PDR COURT's Alternative Dispute Resolution service — guides, ethos, case studies and member stories, with support and sales just a message away.",
};

export default function InformationPage() {
  return <InformationPageClient />;
}
