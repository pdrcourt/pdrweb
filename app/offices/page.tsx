import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import OfficesPageClient from "./OfficesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Our Offices | PDR COURT",
  description:
    "Meet PDR COURT across India — corporate and regional offices in Mumbai, Delhi, Bengaluru, Hyderabad, Thane, and Patna, backed by a nationwide network of conciliation centres.",
  path: "/offices",
});

export default function OfficesPage() {
  return <OfficesPageClient />;
}
