import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Enterprise Solutions"
        subtitle="Customizable, high-volume dispute resolution for modern businesses."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Operational Efficiency</h2>
              <p>For large enterprises, commercial disputes with vendors, partners, and customers can be a major bottleneck. PDR Court automates the resolution lifecycle, allowing your legal team to focus on strategic initiatives while our platform handles the volume.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Relationship Preservation</h2>
              <p>Our mediation and negotiation frameworks are designed to resolve conflicts without destroying valuable business relationships. We prioritize collaboration over confrontation, ensuring long-term business continuity.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Enterprise Integration</h2>
              <p>PDR Court&apos;s ODR platform seamlessly integrates with your existing ERP and CRM systems via secure APIs, enabling automated case filing and real-time status updates across your organization.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
