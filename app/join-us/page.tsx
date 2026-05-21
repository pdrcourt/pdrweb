import type { Metadata } from "next";
import JoinUsPageClient from "./JoinUsPageClient";

export const metadata: Metadata = {
  title: "Join Us | PDR COURT",
  description:
    "Join PDR COURT — arbitrators, conciliators, case managers, ERP and IT roles. We hire professionals who believe in independent thinking and talent development.",
};

export default function JoinUsPage() {
  return <JoinUsPageClient />;
}
