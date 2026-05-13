import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function MSMEPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="MSME Support"
        subtitle="Affordable and accessible justice for Micro, Small, and Medium Enterprises."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Protecting Small Businesses</h2>
              <p>MSMEs often lack the resources for protracted legal battles. PDR Court provides a level playing field, offering fast and cost-effective resolution mechanisms that protect small business interests against payment delays and contract breaches.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Low-Cost ADR</h2>
              <p>Our transparent pricing and digital-first approach mean that MSMEs can access the same high-quality arbitrators and mediators as large corporations, at a fraction of the cost of traditional litigation.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Preserving Growth</h2>
              <p>By resolving disputes in days rather than years, we help MSMEs maintain their cash flow and focus on growth rather than legal entanglements.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
