import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PartnersPageClient from "./PartnersPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Partners | PDR COURT",
  description:
    "Explore partnership opportunities with PDR COURT to drive success in ADR through advanced tech-driven solutions — brand partnering and sponsorship.",
  path: "/partners",
});

export default function PartnersPage() {
  return <PartnersPageClient />;
}
