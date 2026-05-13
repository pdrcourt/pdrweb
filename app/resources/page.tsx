import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Resources"
        subtitle="Access templates, guides, and research papers on Online Dispute Resolution."
        lastUpdated="February 20, 2024"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Sample Clauses</h2>
              <p>Download recommended arbitration and mediation clauses to include in your contracts for seamless ODR integration.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">User Guides</h2>
              <p>Comprehensive step-by-step guides for parties, lawyers, and neutrals to navigate the PDR Court platform efficiently.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Legal Whitepapers</h2>
              <p>Explore our research on the impact of ODR on the Indian legal landscape and the future of digital justice.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
