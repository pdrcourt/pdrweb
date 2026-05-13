import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function BeginnerGuidePage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Beginner's Guide to ODR"
        subtitle="New to Online Dispute Resolution? Start here."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">What is ODR?</h2>
              <p>Online Dispute Resolution (ODR) is a branch of dispute resolution which uses technology to facilitate the resolution of disputes between parties. It primarily involves the use of negotiation, mediation, or arbitration conducted via the internet.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Why choose ODR over Court?</h2>
              <ul className="list-disc pl-6 space-y-4 text-dark/60 dark:text-white/60">
                <li><strong>Speed:</strong> Cases that take years in court can be resolved in days or weeks.</li>
                <li><strong>Cost:</strong> ODR is significantly cheaper, eliminating travel, physical paperwork, and prolonged legal fees.</li>
                <li><strong>Convenience:</strong> Participate from anywhere in the world on any device.</li>
                <li><strong>Confidentiality:</strong> Unlike court records, ODR proceedings are private and confidential.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Mechanisms</h2>
              <p className="mb-4">PDR Court offers four primary ways to resolve your dispute:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cream dark:bg-dark-700"><strong>Arbitration:</strong> Binding decision by a third party.</div>
                <div className="p-4 rounded-xl bg-cream dark:bg-dark-700"><strong>Mediation:</strong> Facilitated mutual agreement.</div>
                <div className="p-4 rounded-xl bg-cream dark:bg-dark-700"><strong>Conciliation:</strong> Proactive solution proposals.</div>
                <div className="p-4 rounded-xl bg-cream dark:bg-dark-700"><strong>Negotiation:</strong> Direct party-to-party agreement.</div>
              </div>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
