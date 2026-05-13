import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { conciliationContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Online Conciliation | PDR Court — Proactive Resolution for Complex Disputes",
  description:
    "PDR Court Online Conciliation features expert neutrals who proactively propose solutions and draft settlement terms to resolve disputes efficiently and legally.",
  openGraph: {
    title: "Online Conciliation | PDR Court",
    description: "Proactive resolution through expert conciliators. Settlement proposals. Legally binding results.",
    url: "https://www.pdrcourt.in/solutions/conciliation",
  },
};

export default function ConciliationPage() {
  return (
    <>
      <Navbar />
      <SolutionPageTemplate
        hero={conciliationContent.hero}
        whatIs={conciliationContent.whatIs}
        benefits={conciliationContent.benefits}
        process={conciliationContent.process}
        useCases={conciliationContent.useCases}
        faqs={conciliationContent.faqs}
        showcaseImage={conciliationContent.showcaseImage}
      />
      <Footer />
    </>
  );
}
