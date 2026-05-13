import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Join the Revolution"
        subtitle="Work at the intersection of Law and Technology to reform access to justice."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Why PDR Court?</h2>
              <p className="text-dark/60 dark:text-white/60 mb-8 leading-relaxed">
                PDR Court is more than just a platform; it&apos;s a movement toward a more efficient and accessible legal system. We are looking for passionate individuals who want to solve complex legal and technical challenges while making a real-world impact.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Arbitrator", link: "/careers/arbitrator", desc: "Join our panel of certified independent arbitrators." },
                  { title: "Conciliator", link: "/careers/conciliator", desc: "Guide parties toward settlement as an expert conciliator." },
                  { title: "Case Manager", link: "/careers/case-manager", desc: "Oversee the end-to-end resolution lifecycle for enterprise clients." },
                  { title: "ERP Management", link: "/careers/erp-manager", desc: "Manage platform integration for our large-scale institutional partners." },
                  { title: "IT Developers", link: "/careers/it-developers", desc: "Build the next generation of legal-tech infrastructure." },
                ].map((job) => (
                  <a 
                    key={job.title}
                    href={job.link} 
                    className="p-6 rounded-2xl bg-cream dark:bg-dark-700 border border-cream-200 dark:border-white/10 hover:border-primary/50 hover:shadow-gold transition-all duration-300 group"
                  >
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-sm text-dark/50 dark:text-white/50">{job.desc}</p>
                    <div className="mt-4 text-primary text-xs font-bold uppercase tracking-wider">View Role →</div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
