import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Disclaimer"
        subtitle="Important legal notices regarding our services and platform role."
        lastUpdated="February 20, 2024"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">No Legal Practice</h2>
              <p>PDR ORGANIZATION PRIVATE LIMITED is not a legal practice and does not provide legal services or recruit lawyers. Our platform functions as a technology-backed system that enables Dispute Resolution services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Neutral Facilitation</h2>
              <p>Our role is strictly administrative and facilitative. PDR Court is not an arbitral institution, tribunal, or adjudicatory authority and does not exercise any judicial or quasi-judicial functions.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Independent Neutrals</h2>
              <p>Parties are free to appoint an Arbitrator or Mediator from the Panel of PDR ORGANIZATION PRIVATE LIMITED who are Independent and Impartial and have no relation whatsoever with PDR ORGANIZATION PRIVATE LIMITED.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">No Influence on Outcomes</h2>
              <p>While we maintain both physical and digital support for the ADR process, we have no influence over the outcomes of the proceedings conducted on our platform.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
