import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function ITDeveloperCareerPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="IT Developer"
        subtitle="Build the future of Online Dispute Resolution."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Role Overview</h2>
              <p>Join our core engineering team to build scalable, secure, and user-friendly legal-tech applications using Next.js, TypeScript, and AI-driven workflows.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proficiency in React, Next.js, and TypeScript.</li>
                <li>Experience with Node.js and MongoDB/PostgreSQL.</li>
                <li>Knowledge of security best practices and encryption.</li>
                <li>Passion for building high-quality, high-impact products.</li>
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
