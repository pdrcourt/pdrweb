import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import NeutralsPageClient from "./NeutralsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Neutrals | PDR COURT",
  description:
    "Become a Neutral at PDR COURT and contribute to effective dispute resolution. Join our expert panel of arbitrators, conciliators, and case managers.",
  path: "/neutrals",
});

export default function NeutralsPage() {
  return <NeutralsPageClient />;
}
