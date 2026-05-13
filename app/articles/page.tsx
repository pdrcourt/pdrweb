import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Articles & Insights"
        subtitle="Educational content and thought leadership on ODR and ADR."
        lastUpdated="May 13, 2026"
        content={
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-6 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 shadow-sm hover:shadow-gold transition-all duration-300">
              <div className="aspect-video rounded-2xl bg-cream dark:bg-dark-700 mb-6 flex items-center justify-center text-dark/20 dark:text-white/20">
                [Image Placeholder]
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">The Future of Digital Justice in India</h3>
              <p className="text-sm text-dark/60 dark:text-white/60 mb-4 line-clamp-3">Exploring how Online Dispute Resolution is reforming the judicial backlog and providing faster access to justice for millions.</p>
              <a href="#" className="text-sm font-bold text-primary">Read More →</a>
            </div>
            <div className="group p-6 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 shadow-sm hover:shadow-gold transition-all duration-300">
              <div className="aspect-video rounded-2xl bg-cream dark:bg-dark-700 mb-6 flex items-center justify-center text-dark/20 dark:text-white/20">
                [Image Placeholder]
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Benefits of ODR for Financial Institutions</h3>
              <p className="text-sm text-dark/60 dark:text-white/60 mb-4 line-clamp-3">A deep dive into how banks and NBFCs are leveraging digital platforms to streamline their recovery processes and reduce NPAs.</p>
              <a href="#" className="text-sm font-bold text-primary">Read More →</a>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
