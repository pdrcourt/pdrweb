import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function EthosPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Our Ethos"
        subtitle="The values and principles that drive PDR Court."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Neutrality & Integrity</h2>
              <p>We maintain absolute neutrality in every proceeding. Our platform is a dedicated space for justice, ensuring that both parties are heard and that every resolution is backed by procedural integrity.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Accessibility for All</h2>
              <p>We believe that justice should not be a privilege of the few. Our technology is built to be accessible to anyone, anywhere, regardless of their legal or technical expertise.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Innovation with Purpose</h2>
              <p>Every feature we build is designed to remove friction from the dispute resolution lifecycle. We leverage AI and digital-first workflows to make justice faster and fairer.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Preserving Dignity</h2>
              <p>Conflict is difficult. Our platform is designed to facilitate resolution while preserving the dignity of all parties and protecting business and personal relationships.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
