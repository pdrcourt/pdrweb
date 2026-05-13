import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function MediaKitPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Media Kit"
        subtitle="Assets and information for press and media partners."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Brand Assets</h2>
              <p>Download the official PDR Court logos, brand guidelines, and high-resolution imagery for use in media coverage.</p>
              <div className="mt-4 p-6 rounded-xl bg-cream dark:bg-dark-700 border border-primary/20 flex items-center justify-between">
                <span>PDR Court Brand Pack (.zip)</span>
                <button className="btn-primary py-2 px-4 text-xs">Download</button>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
              <p>PDR Court is India's most advanced Online Dispute Resolution platform, combining legal expertise with cutting-edge technology to deliver fast, secure, and legally binding resolutions.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Core Values</h2>
              <p>Our mission is to democratize access to justice through innovation, neutrality, and accessibility. We are committed to reforming the dispute resolution landscape in India.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
