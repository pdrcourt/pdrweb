'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function DisclaimerClientPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40" />
          <img decoding="async" src="/images/man-clapping.jpg" alt="Corporate Announcement" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <AlertTriangle className="w-4 h-4" />
                <span>Legal Notices</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Disclaimer.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                PDR COURT wants to help protect your business against legal claims. We want users to be informed about our limitations of liability.
              </p>
              
              <div className="flex gap-4">
                <a href="mailto:legal@pdrcourt.com" className="group flex items-center gap-2 text-paper-70 hover:text-white transition-colors">
                  <span className="font-bold">Got Questions?</span>
                  <span className="text-primary-300 underline underline-offset-4 group-hover:text-primary-200">legal@pdrcourt.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg prose-primary max-w-none text-ink-80">
            
            <div className="bg-cream border border-cream-300 p-8 rounded-3xl mb-12">
              <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-primary" />
                Not a Law Firm
              </h3>
              <p className="font-medium text-dark m-0 leading-relaxed">
                PDR ORGANIZATION PRIVATE LIMITED (also known as PDR COURT) is not a practicing law firm. PDR COURT is an institutional dispute resolution organization. It however does not provide legal services that are, by virtue of regulation, statute or act solely within the domain of practicing attorney. Parties are free to appoint an Arbitrator or Mediator from the Panel of PDR COURT who are Independent and Impartial and has no relation whatsoever with PDR COURT.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-dark mt-12 mb-6">Nature of Services</h3>
            <p className="leading-relaxed">
              {"PDR COURT is a private entity specializing in dispute resolution facilitation through a technologically advanced platform that enables parties to efficiently conduct the dispute resolution process. The name \"PDR COURT\", its logo and software are registered trademarks the team / PDR Organization Private Limited. PDR COURT is a neutral platform facilitating alternative dispute resolution (ADR) through arbitration and conciliation. It is not an arbitral institution, tribunal, or adjudicatory authority and does not exercise any judicial or quasi-judicial functions."}
            </p>

            <h3 className="text-2xl font-bold text-dark mt-12 mb-6">Role of the Platform</h3>
            <p className="leading-relaxed">
              PDR COURT provides access to a panel of independent arbitrators and conciliators, allowing parties to select professionals for their disputes. While it maintains both physical and digital support for the ADR process, its role is strictly administrative and facilitative, with no influence over outcomes.
            </p>

            <h3 className="text-2xl font-bold text-dark mt-12 mb-6">Data Protection</h3>
            <p className="leading-relaxed">
              PDR COURT is 100% compliant with the digital personal data protection act, 2023. To learn more about how we collect, keep, and process your private information in compliance with the digital personal data protection act, 2023 please view our website.
            </p>

            <h3 className="text-2xl font-bold text-dark mt-12 mb-6">Independence & Neutrality</h3>
            <p className="leading-relaxed">
              PDR COURT and its affiliates do not endorse, promote, or have any affiliation with any specific service, product, person or brand mentioned or used by PDR COURT, its employees, or during the proceedings of PDR COURT. We maintain independence and neutrality in our operations, and our actions should not be construed as an endorsement of external entities or their offerings. Furthermore, PDR COURT asserts that it has no relations with other companies in any capacity, and any perceived connections are purely coincidental. Our focus remains solely on delivering our services with integrity and impartiality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Privacy Policy", route: "/privacy-policy", description: "Data protection rules." },
            { title: "Cookie Policy", route: "/cookie-policy", description: "Data tracking." },
            { title: "Terms & Conditions", route: "/terms-conditions", description: "Usage guidelines." }
          ]} 
          parentRoute="/resources" 
          currentRoute="/disclaimer" 
          kind="Legal" 
        />
      </div>
    </div>
  );
}
