import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CompanyPageClient from "./CompanyPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Company Overview | PDR COURT",
  description:
    "Learn about PDR COURT, a leading ADR platform dedicated to delivering efficient dispute resolution solutions with a focus on innovation and trust.",
  path: "/company",
});

export default function CompanyPage() {
  return <CompanyPageClient />;
}
