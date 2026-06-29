import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { mediationContent } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Digital Mediation | PDR Court — Collaborative Online Dispute Resolution",
  description:
    "PDR Court Digital Mediation pairs you with certified, neutral mediators to reach mutually agreeable outcomes — online, confidential, and legally recognized under the Mediation Act, 2023.",
  path: "/solutions/mediation",
});

export default function MediationPage() {
  return (
    <>
      <Navbar />
      <SolutionPageTemplate
        hero={mediationContent.hero}
        whatIs={mediationContent.whatIs}
        benefits={mediationContent.benefits}
        process={mediationContent.process}
        useCases={mediationContent.useCases}
        faqs={mediationContent.faqs}
      />
      <Footer />
    </>
  );
}
