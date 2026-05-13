import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function MemberStoriesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Member Stories"
        subtitle="Voices from our community of neutrals and resolution professionals."
        lastUpdated="May 13, 2026"
        content={
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 italic text-dark/60 dark:text-white/60">
                "PDR Court has transformed how I practice law. The ability to conduct hearings from my office and manage case documents digitally has increased my efficiency by 300%."
                <div className="mt-6 not-italic font-bold text-dark dark:text-white text-sm">— Adv. Rajesh Sharma, Arbitrator</div>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-dark-800 border border-cream-200 dark:border-white/10 italic text-dark/60 dark:text-white/60">
                "As a mediator, the structured communication tools on the platform help me keep parties focused on solutions rather than past grievances. It's a game-changer for collaborative resolution."
                <div className="mt-6 not-italic font-bold text-dark dark:text-white text-sm">— Ms. Ananya Iyer, Mediator</div>
              </div>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
