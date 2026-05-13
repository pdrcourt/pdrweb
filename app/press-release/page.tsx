import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function PressReleasePage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Press Releases"
        subtitle="The latest news and announcements from PDR Court."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <article className="pb-8 border-b border-cream-200 dark:border-white/5">
              <div className="text-sm font-bold text-primary mb-2">May 10, 2026</div>
              <h3 className="text-xl font-bold mb-4">PDR Court Announces Strategic Partnership with Major NBFC Cluster</h3>
              <p className="text-dark/60 dark:text-white/60 mb-4">PDR Court has entered into a strategic agreement to provide digital dispute resolution services to over 50 leading NBFCs, streamlining debt recovery across the country.</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read Full Release →</a>
            </article>
            <article className="pb-8 border-b border-cream-200 dark:border-white/5">
              <div className="text-sm font-bold text-primary mb-2">April 15, 2026</div>
              <h3 className="text-xl font-bold mb-4">Launch of AI-Assisted Case Categorization Tools</h3>
              <p className="text-dark/60 dark:text-white/60 mb-4">The PDR Court platform has introduced advanced AI tools to help parties automatically categorize disputes and identify the most suitable resolution mechanism.</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read Full Release →</a>
            </article>
            <article>
              <div className="text-sm font-bold text-primary mb-2">March 01, 2026</div>
              <h3 className="text-xl font-bold mb-4">PDR Court Crosses 15,000 Resolved Cases Milestone</h3>
              <p className="text-dark/60 dark:text-white/60 mb-4">Our platform has successfully facilitated the resolution of over 15,000 cases, demonstrating the scalability and reliability of ODR in India.</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read Full Release →</a>
            </article>
          </div>
        }
      />
      <Footer />
    </>
  );
}
