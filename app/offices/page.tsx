import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function OfficesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Our Offices"
        subtitle="Physical presence supporting our digital-first mission across India."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary">Regional Headquarters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Mumbai (South Zone)</h3>
                  <p className="text-dark/60 dark:text-white/60 text-sm leading-relaxed mb-2">Unit No. 208, 2nd Floor, Globe Business Park, Khuntavali, Ambernath, Thane, Kalyan, Maharashtra, 421501.</p>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mt-4">Corporate HQ</p>
                </div>
                <div className="p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Delhi (North Zone)</h3>
                  <p className="text-dark/60 dark:text-white/60 text-sm leading-relaxed mb-2">A-19, Guru Nanak Pura, Street No. 3, Laxmi Nagar, Delhi-110092.</p>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mt-4">Regional Center</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">Service Locations</h2>
              <p className="text-dark/60 dark:text-white/60 mb-6">We provide localized support and physical infrastructure for ADR proceedings in the following cities:</p>
              <div className="flex flex-wrap gap-2">
                {["Bengaluru", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Amritsar", "Bhopal", "Chandigarh", "Jaipur", "Lucknow", "Nagpur", "Surat"].map((city) => (
                  <span key={city} className="px-4 py-2 rounded-full bg-cream dark:bg-dark-700 text-xs font-semibold text-dark/70 dark:text-white/70 border border-cream-300 dark:border-white/5">{city}</span>
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
