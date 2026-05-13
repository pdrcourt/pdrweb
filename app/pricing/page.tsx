import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Transparent Pricing"
        subtitle="Value-driven pricing models for disputes of all scales."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Pay-Per-Case</h2>
              <p>Ideal for individual users and small businesses. Pay only for the services you use, with transparent fees based on the dispute value and the resolution mechanism chosen.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Enterprise Subscriptions</h2>
              <p>Designed for high-volume users like Banks, NBFCs, and E-commerce platforms. Our subscription models offer discounted per-case rates, dedicated support, and advanced platform features.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Expert Fees</h2>
              <p>Neutrals on the PDR Court panel have transparent fee structures. Parties can view expert profiles and their respective fees before selecting them for their case.</p>
            </section>
            <div className="p-8 rounded-2xl bg-cream dark:bg-dark-700 border border-cream-200 dark:border-white/5 italic text-dark/60 dark:text-white/60">
              For a detailed fee schedule or a custom enterprise quote, please contact our sales team at sales@pdrcourt.com.
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
