import type { Metadata } from "next";
import NeutralsPageClient from "./NeutralsPageClient";

export const metadata: Metadata = {
  title: "Neutrals | PDR COURT",
  description:
    "Become a Neutral at PDR COURT and contribute to effective dispute resolution. Join our expert panel of arbitrators, conciliators, and case managers.",
};

export default function NeutralsPage() {
  return <NeutralsPageClient />;
}
