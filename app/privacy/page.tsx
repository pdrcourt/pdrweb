import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Privacy Policy"
        subtitle="How we collect, protect, and process your data in compliance with DPDP Act 2023."
        lastUpdated="February 20, 2024"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
              <p>We collect personal information necessary to facilitate dispute resolution, including identity documents, contact details, and case-related evidence. All data is processed in accordance with the Digital Personal Data Protection Act, 2023.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use of Data</h2>
              <p>Your data is used solely for providing our services, verifying identities, and ensuring the integrity of the dispute resolution process. We do not sell your personal information to third parties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p>PDR Court employs 256-bit AES encryption and ISO 27001-compliant infrastructure. All proceedings are confidential, and data is stored in secure Indian data centers.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
              <p>Under the DPDP Act 2023, you have the right to access, correct, and request the deletion of your personal data. You can exercise these rights by contacting our Data Protection Officer.</p>
            </section>
            <div className="p-8 rounded-2xl bg-cream dark:bg-dark-700 border border-cream-200 dark:border-white/5 italic text-dark/60 dark:text-white/60">
              Note: This is a placeholder for the full Privacy Policy document.
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
