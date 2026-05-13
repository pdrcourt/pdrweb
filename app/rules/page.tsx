import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function RulesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Rules of Procedure"
        subtitle="The procedural rules governing different dispute resolution mechanisms on PDR Court."
        lastUpdated="February 20, 2024"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Arbitration Rules</h2>
              <p>Proceedings are governed by the PDR Court Online Arbitration Rules, which are designed to ensure speed, fairness, and compliance with the Arbitration & Conciliation Act, 1996.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Mediation Rules</h2>
              <p>Our mediation process follows the PDR Court Digital Mediation Framework, emphasizing voluntary participation, confidentiality, and neutral facilitation in line with the Mediation Act, 2023.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Conciliation Rules</h2>
              <p>Conciliation on PDR Court is conducted per our Structured Conciliation Protocol, where the conciliator plays a proactive role in suggesting settlements.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
