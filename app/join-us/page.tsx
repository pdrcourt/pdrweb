import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JoinUsPageClient from "./JoinUsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Join Us | PDR COURT",
  description:
    "Join PDR COURT — arbitrators, conciliators, case managers, ERP and IT roles. We hire professionals who believe in independent thinking and talent development.",
  path: "/join-us",
});

export default function JoinUsPage() {
  return <JoinUsPageClient />;
}
