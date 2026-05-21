'use client';

import { motion } from 'framer-motion';
import { Scale, ArrowRight, Gavel, HandshakeIcon, FileText } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function RulesClientPage() {
  const ruleCategories = [
    {
      title: "Arbitration Rules",
      description: "PDR COURT is building a place of trust that can ensure that everything will be established in truth. India's first ''Indic PDR COURT'' working on a robust digital system and infrastructure for effective dispute resolution and efficient enforcement.",
      href: "/arbitration-rules",
      icon: Gavel
    },
    {
      title: "Mediation Rules",
      description: "Our experience, business management plans and growth have set a record of high performance. Investing in PDR COURT is Investing In Success, Bottom Line & Profit",
      href: "/mediation-rules",
      icon: HandshakeIcon
    },
    {
      title: "Rules of ODR Proceedings",
      description: "We look at being present in every city of business. In keeping with this approach, we plan to expand our presence domestically and globally over the next few months.",
      href: "/proceeding-rules",
      icon: FileText
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40" />
          <img src="/images/business-hands-shake.jpg" alt="Business Hands Shake" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Scale className="w-4 h-4" />
                <span>Procedural Framework</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Rules & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Guidelines.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                PDR COURT Rules and Guidelines are formed to inform those involved about the procedure set by PDR COURT for Arbitration, Conciliation & Mediation using the platform.
              </p>
              
              <div className="flex gap-4">
                <a href="#rules" className="btn-primary">
                  Explore Rules
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="rules" className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Framework Architecture</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mt-4">Know more about us and our associations</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ruleCategories.map((category, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Link href={category.href} className="group flex flex-col h-full bg-cream p-8 rounded-3xl border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                    <category.icon className="w-32 h-32 text-primary" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-cream-300 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-8 shadow-sm">
                      <category.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-dark/70 leading-relaxed mb-8 flex-1">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-dark uppercase tracking-widest mt-auto group-hover:text-primary transition-colors pt-6 border-t border-cream-300">
                      Read Rules <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream">
        <SiblingLinksSection 
          links={[
            { title: "Terms & Conditions", route: "/terms-conditions", description: "Usage guidelines." },
            { title: "Privacy Policy", route: "/privacy-policy", description: "Data protection rules." },
            { title: "Disclaimer", route: "/disclaimer", description: "Liability limits." }
          ]} 
          parentRoute="/resources" 
          currentRoute="/rules" 
          kind="Legal" 
        />
      </div>
    </div>
  );
}
