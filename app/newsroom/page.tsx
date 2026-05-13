import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function NewsroomPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Newsroom"
        subtitle="Coverage of PDR Court in the media and industry publications."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { source: "The Economic Times", title: "PDR Court Leads the ODR Wave in India", date: "May 2026" },
                { source: "Legal Era", title: "Transforming Arbitration through Technology", date: "April 2026" },
                { source: "FinTech Daily", title: "How PDR Court is Reducing Bank NPAs", date: "March 2026" },
              ].map((news) => (
                <div key={news.title} className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10">
                  <div className="text-xs font-bold text-primary mb-2">{news.source}</div>
                  <h3 className="font-bold mb-4 line-clamp-2">{news.title}</h3>
                  <div className="text-[10px] text-dark/40 dark:text-white/40">{news.date}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
