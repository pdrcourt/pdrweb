import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Terms & Conditions"
        subtitle="The legal framework governing your use of the PDR Court platform and services."
        lastUpdated="February 20, 2024"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the PDR Court platform, you agree to be bound by these Terms and Conditions. These terms apply to all users, including parties to a dispute, legal representatives, and neutral professionals.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
              <p>PDR Court provides technology-backed Dispute Resolution services, including Online Arbitration, Digital Mediation, and Structured Negotiation. We are not a law firm and do not provide legal advice.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
              <p>Users must provide accurate information, maintain the confidentiality of their account, and comply with all applicable laws and the specific rules of the dispute resolution mechanism chosen.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p>The name “PDR Court”, its logo, software, and all platform content are registered trademarks and property of PDR Organization Private Limited.</p>
            </section>
            <div className="p-8 rounded-2xl bg-cream dark:bg-dark-700 border border-cream-200 dark:border-white/5 italic text-dark/60 dark:text-white/60">
              Note: This is a simplified placeholder for the full Terms & Conditions document. For the complete legal text, please consult with your legal department.
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
