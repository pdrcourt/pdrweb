import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Pricing | PDR COURT",
  description:
    "PDR COURT value pricing — dispute resolution agreements starting at just ₹500. Transparent, cost-effective ADR for every business.",
  path: "/pricing",
});

const pricingLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Dispute Resolution",
  serviceType: "Alternative Dispute Resolution",
  provider: {
    "@type": "Organization",
    name: "PDR Court",
    url: "https://www.pdrcourt.com",
  },
  areaServed: "IN",
  offers: {
    "@type": "Offer",
    price: "500",
    priceCurrency: "INR",
    description: "Dispute resolution agreements starting at ₹500",
    url: "https://www.pdrcourt.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingLd).replace(/</g, "\\u003c"),
        }}
      />
      <PricingPageClient />
    </>
  );
}
