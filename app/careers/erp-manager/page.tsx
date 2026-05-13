import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function ERPManagerCareerPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="ERP Integration Specialist"
        subtitle="Bridge the gap between enterprise systems and digital justice."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Role Overview</h2>
              <p>You will lead the integration of PDR Court&apos;s ODR platform with the internal ERP and CRM systems of our banking and enterprise clients.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deep understanding of ERP systems (SAP, Oracle, Microsoft Dynamics).</li>
                <li>Experience with API integrations and data migration.</li>
                <li>Strong problem-solving skills and technical project management experience.</li>
                <li>Ability to communicate technical concepts to non-technical stakeholders.</li>
              </ul>
            </section>
            <div className="mt-12 p-8 rounded-3xl bg-gold-gradient text-white">
              <h3 className="text-xl font-bold mb-4">Interested in joining?</h3>
              <p className="mb-6 opacity-90">Send your CV and a brief cover letter outlining your expertise to experts@pdrcourt.com.</p>
              <button className="bg-white text-primary font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform">Apply Now</button>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
