import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function ConciliatorCareerPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Become a Conciliator"
        subtitle="Help parties bridge the gap through proactive expert guidance."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Role Overview</h2>
              <p>Conciliators at PDR Court play a proactive role in proposing settlement terms and facilitating agreements in complex commercial, labor, and family disputes.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional background in Law, Finance, or Industry-specific domains.</li>
                <li>Excellent negotiation and communication skills.</li>
                <li>Experience in ADR or proactive conflict resolution.</li>
                <li>Strong analytical skills to propose fair and balanced solutions.</li>
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
