import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { negotiationContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Structured Negotiation | PDR Court — Resolve on Your Own Terms",
  description:
    "PDR Court Structured Negotiation gives parties a platform-guided framework to reach bilateral agreements independently — the fastest, most cost-effective form of online dispute resolution.",
  openGraph: {
    title: "Structured Negotiation | PDR Court",
    description: "Platform-guided direct negotiation. Resolve disputes in 24–48 hours without a third party.",
    url: "https://www.pdrcourt.in/solutions/negotiation",
  },
};

export default function NegotiationPage() {
  return (
    <>
      <Navbar />
      <SolutionPageTemplate
        hero={negotiationContent.hero}
        whatIs={negotiationContent.whatIs}
        benefits={negotiationContent.benefits}
        process={negotiationContent.process}
        useCases={negotiationContent.useCases}
        faqs={negotiationContent.faqs}
      />
      <Footer />
    </>
  );
}
