import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { mediationContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Digital Mediation | PDR Court — Collaborative Online Dispute Resolution",
  description:
    "PDR Court Digital Mediation pairs you with certified, neutral mediators to reach mutually agreeable outcomes — online, confidential, and legally recognized under the Mediation Act, 2023.",
  openGraph: {
    title: "Digital Mediation | PDR Court",
    description: "Collaborative dispute resolution with certified mediators. Online. Confidential. Legally enforceable.",
    url: "https://www.pdrcourt.in/solutions/mediation",
  },
};

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
