import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = buildMetadata({
  title: "About Us | PDR COURT",
  description:
    "PDR COURT is a premier ADR platform using advanced technology to foster effective, impartial dispute resolution — building a place of trust, established in truth.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}
