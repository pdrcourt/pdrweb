import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { conciliationContent } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Online Conciliation | PDR Court - Proactive Settlement Support",
  description:
    "PDR Court Online Conciliation connects parties with expert conciliators who propose balanced settlement terms through a secure digital ADR process.",
  path: "/solutions/conciliation",
});

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
