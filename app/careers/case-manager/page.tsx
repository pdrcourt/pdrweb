import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function CaseManagerCareerPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Case Manager"
        subtitle="Orchestrate the resolution journey for our enterprise partners."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Role Overview</h2>
              <p>Case Managers are the backbone of our platform operations. You will manage high-volume case portfolios for institutional clients, ensuring smooth communication between parties and neutrals.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bachelor&apos;s degree in Law, Management, or related fields.</li>
                <li>Strong organizational and project management skills.</li>
                <li>Experience in legal operations or customer success is a plus.</li>
                <li>Ability to work in a fast-paced, technology-driven environment.</li>
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
