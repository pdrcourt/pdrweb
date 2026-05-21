import type { Metadata } from "next";
import TalkToUsPageClient from "./TalkToUsPageClient";

export const metadata: Metadata = {
  title: "Talk to an Expert | PDR COURT",
  description:
    "Talk to PDR COURT's experts for guidance toward sustainable conflict resolution — advice worth taking, from the team that supports you start to finish.",
};

export default function TalkToUsPage() {
  return <TalkToUsPageClient />;
}
