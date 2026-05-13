import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaqPageClient } from "@/components/pages/FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ | PDR Court — Everything You Need to Know",
  description:
    "Find answers to common questions about Online Dispute Resolution (ODR), legal enforceability, security, and how to use the PDR Court platform.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <FaqPageClient />
      <Footer />
    </>
  );
}
