import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SliderSection } from "@/components/sections/SliderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { AdvisoryCouncilSection } from "@/components/sections/AdvisoryCouncilSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "PDR Court | Online Dispute Resolution (ODR) Platform",
  description:
    "India's advanced Online Dispute Resolution platform — Arbitration, Mediation, Conciliation & Negotiation. Resolve disputes online, faster and for less.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SliderSection />
        <ServicesSection />
        <ProcessSection />
        <PartnersSection />
        <FeaturesSection />
        <AdvisoryCouncilSection />
        <FaqSection limit={6} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
