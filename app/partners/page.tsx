import type { Metadata } from "next";
import PartnersPageClient from "./PartnersPageClient";

export const metadata: Metadata = {
  title: "Partners | PDR COURT",
  description:
    "Explore partnership opportunities with PDR COURT to drive success in ADR through advanced tech-driven solutions — brand partnering and sponsorship.",
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}
