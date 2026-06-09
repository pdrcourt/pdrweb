'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Book, Scale, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";

export default function ResourcesClientPage() {
  const documents = [
    {
      title: "Rules",
      description: "PDR COURT Rules and Guidelines are formed to inform those involved about the procedure set by PDR COURT for Arbitration, Conciliation & Mediation using the platform.",
      icon: Scale,
      href: "/rules"
    },
    {
      title: "Terms & Conditions",
      description: "PDR COURT defines the terms on which users may make use of our website whether as a guest or an account holder. Use of our site includes accessing, browsing, and creating an account.",
      icon: FileText,
      href: "/terms"
    },
    {
      title: "Privacy Policy",
      description: "PDR COURT respects your privacy and shall spare no effort to protect your personal information. Acknowledge that you have read, understood and agreed to be bound by all terms.",
      icon: ShieldCheck,
      href: "/privacy"
    },
    {
      title: "Disclaimer",
      description: "PDR COURT wants to help protect your business against legal claims. Through our Disclaimers, we want users to be informed PDR COURT will not be held responsible for damages.",
      icon: AlertCircle,
      href: "/disclaimer"
    },
    {
      title: "Cookie Policy",
      description: "PDR COURT website is strictly compliant; we forthy-rightly announce to the website users our cookie policy, what data we collect, and how that data is used.",
      icon: Book,
      href: "/cookies"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream border-b border-cream-300">
        <EditorialHeroDecor />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-medium mb-8">
                <Scale className="w-4 h-4" />
                <span>Legal & Resources</span>
              </div>

              <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)] mb-6">
                Resources
              </h1>

              <p className="text-lg md:text-xl text-ink-60 leading-relaxed font-light mb-10 max-w-2xl">
                PDR COURT believes that everyone must get the best judgement and follow a just system for society & businesses to remain dispute-free.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block border-l border-cream-300 pl-10">
              <h3 className="text-2xl font-bold mb-4 text-primary">Got any<br/><span className="font-light italic text-dark">Questions?</span></h3>
              <p className="text-ink-60 mb-2 text-sm uppercase tracking-widest">Write to us</p>
              <a href="mailto:legal@pdrcourt.com" className="text-lg text-dark hover:text-primary transition-colors border-b border-cream-300 hover:border-primary pb-1">
                legal@pdrcourt.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Listing */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Official Documentation</span>
            <h2 className="heading-lg text-dark mt-4">Rules, Policies & Disclaimers</h2>
          </div>

          <div className="space-y-6">
            {documents.map((doc, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Link href={doc.href} className="group block bg-cream p-8 md:p-10 rounded-3xl border border-cream-300 hover:border-primary/50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-cream-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <doc.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-ink-60 leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                    <div className="shrink-0 mt-4 md:mt-0">
                      <div className="w-12 h-12 rounded-full border border-cream-300 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white text-ink-30 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Query Form Section */}
      <section className="py-20 lg:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl font-display font-light italic text-paper-90 mb-6">Ask us</h2>
              <p className="text-paper-60 leading-relaxed mb-8">
                Do you have any vital information that you may like to ask us?<br/><br/>
                Write to us at legal@pdrcourt.com; or, use the form to send us a quick inquiry.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Your Query has been submitted to our Legal Team."); }}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-bold text-primary-300 mb-2 block uppercase tracking-wider">Personal Details</label>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                        <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                      </div>
                      <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all mb-4" required />
                      <input type="tel" placeholder="Tel / Mobile" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                    </div>
                    
                    <div>
                      <label className="text-sm font-bold text-primary-300 mb-2 block uppercase tracking-wider">Information Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                        <option value="" className="text-dark">Pick type of Information</option>
                        <option value="arbitration" className="text-dark">Related to Arbitration</option>
                        <option value="process" className="text-dark">Process & Benefits</option>
                        <option value="pricing" className="text-dark">Pricing Information</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-primary-300 mb-2 block uppercase tracking-wider">Write your Query</label>
                    <textarea rows={8} placeholder="Write your inquiry here..." className="w-full flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" required></textarea>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input type="checkbox" required className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-dark" />
                      </div>
                      <div className="ml-3 text-sm">
                        <span className="text-paper-60 group-hover:text-white transition-colors">I provide my consent to PDR COURT to contact me.</span>
                      </div>
                    </div>
                  </label>
                  <button type="submit" className="btn-primary shrink-0 w-full sm:w-auto">
                    Submit Query
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Rules", route: "/rules", description: "Procedural guidelines." },
            { title: "Privacy Policy", route: "/privacy", description: "Data protection standards." },
            { title: "Terms & Conditions", route: "/terms", description: "Usage agreements." }
          ]} 
          parentRoute="/" 
          currentRoute="/resources" 
          kind="Resources" 
        />
      </div>
    </div>
  );
}
