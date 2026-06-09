'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, ChevronRight, FileText, Building2, Landmark, Users, Building, PenTool, Search } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";

export interface CaseStudyItem {
  title: string;
  description: string;
  href: string;
  category: string;
}

export default function CaseStudiesClientPage({ caseStudies: caseStudiesProp }: { caseStudies?: CaseStudyItem[] } = {}) {
  const categories = [
    { name: "Banks", icon: Landmark },
    { name: "Professionals", icon: Users },
    { name: "NBFCs", icon: Building2 },
    { name: "Institutions", icon: Building },
    { name: "Freelancers", icon: PenTool },
    { name: "Contractors", icon: Briefcase }
  ];

  const fallbackCaseStudies: CaseStudyItem[] = [
    {
      title: "Rs. 2.01L Loan Default Settled via Ex-Parte ADR Award",
      description: "In India's fast-growing digital lending ecosystem, micro and small business borrowers can easily access credit ...",
      href: "/case-studies/two-lakh-loan-default-settled-via-ex-parte-adr-award",
      category: "NBFCs"
    },
    {
      title: "Rs. 2.77L Loan Default Resolved via Digital ADR Process",
      description: "Digital lending has become a cornerstone of financial inclusion, allowing small businesses ...",
      href: "/case-studies/loan-default-resolved-via-digital-adr-process",
      category: "Institutions"
    },
    {
      title: "Rs. 4.31L Digital Loan Default Resolved Through Ex-Parte Arbitration",
      description: "With the growing reach of digital lending, structured loan agreements have become commonplace ...",
      href: "/case-studies/digital-loan-default-resolved-through-ex-parte-arbitration",
      category: "Banks"
    },
    {
      title: "Digital Loan Default Settled Ex-Parte in Rs. 6.99L Arbitration",
      description: "In the expanding digital credit economy, small businesses and entrepreneurs benefit from fast disbursal loans ...",
      href: "/case-studies/digital-loan-default-settled-ex-parte-in-arbitration",
      category: "NBFCs"
    },
    {
      title: "One-Time Closure of a Technology Equipment Loan Default",
      description: "Technology-based businesses often operate in high-risk, high-investment ...",
      href: "/case-studies/one-time-closure-of-a-technology-equipment-loan-default",
      category: "Professionals"
    },
    {
      title: "Three-Part Resolution for a Distribution Business Loan",
      description: "In regional distribution networks, working capital gaps can emerge ...",
      href: "/case-studies/three-part-resolution-for-a-distribution-business-loan",
      category: "Contractors"
    },
    {
      title: "Fast-Track Resolution for a Small Enterprise Loan",
      description: "Micro and small enterprises form the economic backbone of many regional...",
      href: "/case-studies/fast-track-resolution-for-a-small-enterprise-loan",
      category: "Institutions"
    },
    {
      title: "Structured Resolution of a Textile Manufacturing Loan",
      description: "In textile manufacturing, where margins are thin and supply chains...",
      href: "/case-studies/structured-resolution-of-a-textile-manufacturing-loan",
      category: "Contractors"
    },
    {
      title: "Retail Recovery through Split-Installment Resolution",
      description: "Retail entrepreneurs often rely on micro-loans to fund seasonal inventory...",
      href: "/case-studies/retail-recovery-through-split-installment-resolution",
      category: "Freelancers"
    },
    {
      title: "Amicable Closure of Engineering Loan Default",
      description: "When traditional recovery efforts yield limited results, a strategic shift toward neutral ...",
      href: "/case-studies/amicable-closure-of-engineering-loan-default",
      category: "Institutions"
    },
    {
      title: "What Happened After a Rs. 28L Loan Went Into Default",
      description: "This case study illustrates how a financial institution resolved a loan default...",
      href: "/case-studies/what-happened-after-a-rs-28l-loan-went-into-default",
      category: "Banks"
    },
    {
      title: "Finance Company V. Bakery Owner",
      description: "In the vibrant locality of Trikuta Nagar, Jammu, a non-governmental finance...",
      href: "/case-studies/finance-company-v-bakery-owner",
      category: "NBFCs"
    }
  ];

  const caseStudies = caseStudiesProp && caseStudiesProp.length > 0 ? caseStudiesProp : fallbackCaseStudies;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-cream overflow-hidden border-b border-cream-300">
        <EditorialHeroDecor />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-medium mb-8">
                <Briefcase className="w-4 h-4" />
                <span>Our Portfolio</span>
              </div>
              <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                Evaluating <br/> <span className="gold-text">Real Outcomes.</span>
              </h1>
              <p className="text-lg md:text-xl text-ink-60 leading-relaxed font-light mb-10 max-w-lg border-l-4 border-primary pl-6 py-2">
                Gain a comprehensive perspective of PDR COURT. Our team efficiently manages real-life cases delivering precise, measurable results that reflect our commitment to innovation.
              </p>
              
              <div className="flex gap-4">
                <a href="#case-studies" className="btn-primary">
                  Explore Case Studies
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative z-10">
              <div className="bg-white/70 backdrop-blur-xl border border-cream-300 rounded-3xl p-8 shadow-2xl relative overflow-hidden max-w-md mx-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                <img src="/images/pdr-court-app.png" alt="Mobile Application" className="w-48 mx-auto mb-6 hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <h3 className="text-2xl font-bold text-dark mb-2 text-center">Get all your Deals Secured!</h3>
                <p className="text-ink-60 mb-8 text-center">Sign up today and experience secure agreements.</p>
                <Link href="/register" className="btn-primary w-full flex items-center justify-center gap-2">
                  Sign up Today <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries & Categories */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-cream-300 relative">
                <img src="/images/team-members-on-discussion.jpg" alt="Team Discussion" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Target Demographics</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-8">Serving Diverse Sectors</h2>
              <p className="text-ink-70 text-lg mb-10 leading-relaxed">
                We provide dispute resolution services tailored to a wide array of professional domains.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {categories.map((cat, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-cream rounded-2xl border border-cream-300 hover:border-primary/50 hover:bg-white transition-colors group text-center cursor-default">
                    <cat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-dark group-hover:text-primary transition-colors">{cat.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 lg:py-32 bg-cream border-t border-cream-300 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label">Case Archives</span>
              <h2 className="heading-lg text-dark mt-4">Review, Read & Analyse</h2>
              <p className="text-lg text-ink-60 mt-4 max-w-2xl">Dive deep into our extensive portfolio of resolutions across various industries and scenarios.</p>
            </div>
            <div className="relative">
               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                 <Search className="h-5 w-5 text-ink-40" />
               </div>
               <input type="text" placeholder="Search case studies..." className="bg-white border border-cream-300 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary w-full md:w-64 transition-all" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}>
                <Link href={study.href} className="group flex flex-col h-full bg-white p-8 rounded-3xl border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cream border border-cream-300 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                      {study.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {study.title}
                  </h4>
                  
                  <p className="text-ink-60 leading-relaxed text-sm mb-8 flex-1 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-dark uppercase tracking-widest mt-auto group-hover:text-primary transition-colors pt-6 border-t border-cream-300">
                    Read Study <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-secondary">Load More Case Studies</button>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Beginner's Guide", route: "/beginner-guide", description: "Step-by-step instructions." },
            { title: "Our Ethos", route: "/ethos", description: "Core principles." },
            { title: "Member Stories", route: "/member-stories", description: "Client experiences." }
          ]} 
          parentRoute="/information" 
          currentRoute="/case-studies" 
          kind="Information" 
        />
      </div>
    </div>
  );
}
