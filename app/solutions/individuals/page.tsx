import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function IndividualsPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Solutions for Individuals"
        subtitle="Accessible, fast, and fair dispute resolution for everyday conflicts."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Justice at Your Fingertips</h2>
              <p>PDR Court makes professional dispute resolution accessible to everyone. Whether it's a consumer complaint, a rental disagreement, or a personal contract issue, you can now seek a fair and legally binding resolution without the cost and complexity of traditional courts.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Preserving Personal Relationships</h2>
              <p>Family and neighbor disputes require a delicate touch. Our mediation and conciliation frameworks prioritize communication and mutual understanding, helping you resolve conflicts while maintaining important personal bonds.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Affordable & Fast</h2>
              <p>Resolve your disputes in days rather than years. With our transparent, low-cost pricing for individuals, professional justice is now affordable for everyone.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
