import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | PDR COURT",
  description:
    "Explore PDR COURT's ADR services for individuals, MSMEs, financial institutions and enterprises — a cutting-edge, technology-powered dispute resolution platform.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
