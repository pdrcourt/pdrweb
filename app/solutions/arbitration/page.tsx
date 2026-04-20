import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { arbitrationContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Online Arbitration | PDR Court — Binding Decisions Without Courtrooms",
  description:
    "PDR Court Online Arbitration delivers legally binding awards through certified arbitrators — entirely online. Faster, cheaper, and enforceable under the Arbitration & Conciliation Act, 1996.",
  openGraph: {
    title: "Online Arbitration | PDR Court",
    description: "Legally binding arbitration awards delivered online. Certified arbitrators. No courtroom required.",
    url: "https://www.pdrcourt.in/solutions/arbitration",
  },
};

export default function ArbitrationPage() {
  return (
    <>
      <Navbar />
      <SolutionPageTemplate
        hero={arbitrationContent.hero}
        whatIs={arbitrationContent.whatIs}
        benefits={arbitrationContent.benefits}
        process={arbitrationContent.process}
        useCases={arbitrationContent.useCases}
        faqs={arbitrationContent.faqs}
        showcaseImage={arbitrationContent.showcaseImage}
      />
      <Footer />
    </>
  );
}
