import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="How it Works"
        subtitle="A step-by-step guide to resolving disputes on the PDR Court platform."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <section className="relative pl-12 border-l-2 border-primary/20 space-y-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">1. Initiate a Case</h2>
              <p className="text-dark/60 dark:text-white/60">Submit your dispute details, upload supporting evidence, and select your preferred resolution mechanism (Arbitration, Mediation, Conciliation, or Negotiation).</p>
            </section>
            <section className="relative pl-12 border-l-2 border-primary/20 space-y-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">2. Invitation & Onboarding</h2>
              <p className="text-dark/60 dark:text-white/60">The counterparty receives a secure invitation to join the platform. Our case managers assist both parties with onboarding and platform walkthroughs.</p>
            </section>
            <section className="relative pl-12 border-l-2 border-primary/20 space-y-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">3. Neutral Appointment</h2>
              <p className="text-dark/60 dark:text-white/60">Select a neutral professional (Arbitrator, Mediator, or Conciliator) from our vetted panel of experts based on domain expertise and profile.</p>
            </section>
            <section className="relative pl-12 border-l-2 border-primary/20 space-y-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">4. Conduct Proceedings</h2>
              <p className="text-dark/60 dark:text-white/60">Participate in secure video hearings, exchange documents, and communicate through our encrypted messaging system.</p>
            </section>
            <section className="relative pl-12 border-l-2 border-primary/20 space-y-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">5. Resolution & Award</h2>
              <p className="text-dark/60 dark:text-white/60">Receive a legally binding award or settlement agreement, e-signed and archived securely on the platform.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
