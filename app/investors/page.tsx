import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Investor Relations"
        subtitle="Transparent information for our shareholders and investment partners."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p>PDR Court is committed to building a sustainable and scalable digital justice infrastructure that creates long-term value for our investors and the legal ecosystem in India.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Market Growth</h2>
              <p>The ODR market in India is at a pivotal point, with increasing regulatory support and a massive backlog in traditional courts driving adoption among enterprises and individuals alike.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Investor Relations</h2>
              <p>For investment inquiries, financial reports, and corporate governance information, please reach out to our dedicated investor relations team at investors@pdrcourt.com.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
