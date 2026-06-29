'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Scale, Users, FileText, Database, Code, Award, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import ReasonsWhySection from '@/components/sections/ReasonsWhySection';

export default function JoinUsClientPage() {
  const roles = [
    {
      title: "Arbitrator",
      description: "At PDR COURT, our expert arbitrators utilize advanced technology tools to enhance the efficiency of dispute resolution, gaining global trust and recognition.",
      icon: Scale,
      href: "/careers/arbitrator"
    },
    {
      title: "Conciliator",
      description: "Conciliators at PDR COURT leverage their expertise and our innovative software tools to facilitate settlements, providing valuable insights and guidance.",
      icon: Users,
      href: "/careers/conciliator"
    },
    {
      title: "Case Manager",
      description: "Our Case Managers (CM) play a crucial role in the dispute resolution process, utilizing our platform to ensure streamlined and effective case management.",
      icon: FileText,
      href: "/careers/case-manager"
    },
    {
      title: "ERP Management",
      description: "PDR COURT's software-driven ERP Management optimizes resource allocation, ensuring efficient and cost-effective operations for enhanced service delivery.",
      icon: Database,
      href: "/careers/erp-management"
    },
    {
      title: "IT Developer",
      description: "Our IT Developers create innovative software solutions that empower organizations to enhance operational efficiency and drive seamless digital transformation.",
      icon: Code,
      href: "/careers/it-developers"
    }
  ];

  const values = [
    { title: "Inclusive Culture", desc: "Committed to fostering an inclusive and positive culture powered by promoting a genuine, unbiased, and impactful working environment.", icon: Heart },
    { title: "Highest Standards", desc: "We celebrate our diversity, ensuring everyone is respected and inspired to deliver their best while upholding quality.", icon: Award },
    { title: "Pillars of Trust", desc: "We forge lasting connections built on the pillars of Trust, Honesty, Integrity, Transparency, and Empathy.", icon: ShieldCheck }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <img decoding="async" src="/images/work-culture.jpg" alt="Work Culture" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Users className="w-4 h-4" />
                <span>Careers & Opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Shape the Future of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Dispute Resolution</span>
              </h1>
              
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-lg">
                We hire professionals who believe in the purpose of delivering independent thinking and talent development. If you think like us, then come join us.
              </p>
              
              <a href="#roles-section" className="btn-primary">
                Explore Open Roles
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">Got any Questions?</h3>
                <p className="text-paper-60 mb-6 relative z-10">Reach out to our recruitment and legal teams directly.</p>
                <a href="mailto:careers@pdrcourt.com" className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors relative z-10 font-bold tracking-widest uppercase text-sm border-b border-primary-300/30 pb-1">
                  careers@pdrcourt.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles Grid Section */}
      <section id="roles-section" className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Opportunities</span>
            <h2 className="heading-lg text-dark mt-4">Find Your Place at PDR COURT</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Link href={role.href} className="group flex flex-col h-full bg-white p-8 rounded-3xl border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-cream border border-cream-300 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <role.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  
                  <p className="text-ink-60 leading-relaxed flex-1 mb-8">
                    {role.description}
                  </p>
                  
                  <div className="flex items-center justify-between w-full mt-auto pt-6 border-t border-cream-300">
                    <span className="text-sm font-bold text-dark uppercase tracking-widest group-hover:text-primary transition-colors">
                      View Role
                    </span>
                    <div className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white text-ink-30 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-20 lg:py-32 bg-white relative border-y border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label mb-4">Life at PDR COURT</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6 leading-tight">
                An environment <br/> built on <span className="text-primary italic font-light">Empathy</span>
              </h2>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl mt-8">
                <img loading="lazy" decoding="async" src="/images/corporate-woman-smiling.jpg" alt="Culture" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {values.map((val, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl hover:bg-cream transition-colors">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-cream border border-cream-300 flex items-center justify-center">
                    <val.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{val.title}</h3>
                    <p className="text-ink-70 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15 Reasons Why */}
      <div className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReasonsWhySection showTitle={true} columns={3} variant="numbered" />
        </div>
      </div>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Arbitrator", route: "/careers/arbitrator", description: "Review and resolve disputes." },
            { title: "IT Developers", route: "/careers/it-developers", description: "Build robust ADR systems." },
            { title: "Case Manager", route: "/careers/case-manager", description: "Orchestrate resolutions." }
          ]} 
          parentRoute="/" 
          currentRoute="/join-us" 
          kind="Careers" 
        />
      </div>
    </div>
  );
}
