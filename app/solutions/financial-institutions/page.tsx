import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function FinancialInstitutionsPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Financial Institutions"
        subtitle="Empowering Banks and NBFCs with faster, digital-first dispute resolution."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Streamlined Debt Recovery</h2>
              <p>PDR Court provides a specialized framework for financial institutions to resolve loan defaults and recovery disputes. Our ODR platform reduces the time-to-resolution from years to days, ensuring better liquidity and reduced NPA levels.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
              <p>Our processes are fully compliant with the RBI guidelines and the Arbitration & Conciliation Act, 1996. We provide bank-grade security and a complete digital audit trail for every case.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Scalable Solutions</h2>
              <p>Whether it's retail loans, credit cards, or micro-finance, our platform handles high-volume cases with ease, providing centralized tracking and automated reporting for your legal and recovery teams.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
