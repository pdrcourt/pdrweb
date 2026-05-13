import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Case Studies"
        subtitle="Real-world examples of successful dispute resolution on PDR Court."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <article className="p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10">
              <h3 className="text-xl font-bold mb-4">Resolving a Multi-Crore Commercial Default in 14 Days</h3>
              <p className="text-dark/60 dark:text-white/60 mb-6">A leading manufacturing firm used PDR Court to resolve a long-standing payment dispute with a vendor. Through structured mediation, both parties reached a settlement agreement that preserved their 10-year partnership.</p>
              <div className="flex gap-4 text-xs font-bold text-primary uppercase">
                <span>Sector: Manufacturing</span>
                <span>Mechanism: Mediation</span>
              </div>
            </article>
            <article className="p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10">
              <h3 className="text-xl font-bold mb-4">Streamlining Retail Loan Recovery for a Tier-1 Bank</h3>
              <p className="text-dark/60 dark:text-white/60 mb-6">By integrating PDR Court with their existing recovery systems, a major private bank was able to resolve over 5,000 small-ticket loan disputes in a single quarter, significantly reducing their NPA levels.</p>
              <div className="flex gap-4 text-xs font-bold text-primary uppercase">
                <span>Sector: Banking</span>
                <span>Mechanism: Arbitration</span>
              </div>
            </article>
          </div>
        }
      />
      <Footer />
    </>
  );
}
