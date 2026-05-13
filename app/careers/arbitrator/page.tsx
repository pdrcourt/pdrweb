import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function ArbitratorCareerPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Become an Arbitrator"
        subtitle="Join India&apos;s most prestigious panel of digital-first arbitrators."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Role Overview</h2>
              <p>As an arbitrator on the PDR Court panel, you will be responsible for conducting online hearings, reviewing evidence, and issuing legally binding awards in commercial and civil disputes.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Legal qualification (LLB/LLM) with 10+ years of experience.</li>
                <li>Certification in Arbitration from a recognized institute.</li>
                <li>Proven track record of neutral adjudication.</li>
                <li>Comfort with digital tools and online hearing platforms.</li>
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
