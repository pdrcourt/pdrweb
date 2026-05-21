import type { Metadata } from "next";
import OfficesPageClient from "./OfficesPageClient";

export const metadata: Metadata = {
  title: "Our Offices | PDR COURT",
  description:
    "Meet PDR COURT across India — corporate and regional offices in Mumbai, Delhi, Bengaluru, Hyderabad, Thane, and Patna, backed by a nationwide network of conciliation centres.",
};

export default function OfficesPage() {
  return <OfficesPageClient />;
}
