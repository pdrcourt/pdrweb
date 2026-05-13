import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SliderSection } from "@/components/sections/SliderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AdvisoryCouncilSection } from "@/components/sections/AdvisoryCouncilSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SliderSection />
        <PartnersSection />
        <ServicesSection />
        <ProcessSection />
        <FeaturesSection />
        {/* <TestimonialsSection /> */}
        <AdvisoryCouncilSection />
        {/* <FaqSection /> */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
