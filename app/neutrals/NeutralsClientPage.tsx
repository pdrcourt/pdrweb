'use client';

import { motion } from 'framer-motion';
import { Users, Gavel, Scale, HandshakeIcon, Eye, ShieldCheck, Database, Target } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function NeutralsClientPage() {
  const pillars = [
    {
      title: "Digital Transparency",
      description: "With our state-of-the-art tech tools and clear communication, we ensure our members are informed about every detail involved in the process. With us, transparency is a promise you can trust.",
      icon: Eye
    },
    {
      title: "Integrity",
      description: "We believe that achieving a fair and unbiased outcome is vital for both acceptance and long-term success in today's world. Integrity is the foundation of our operations.",
      icon: ShieldCheck
    },
    {
      title: "Data-Driven Prudence",
      description: "Our expert team understands the various scenarios and utilizes technology to analyze the potential impact on your business outcomes. We prioritize informed decision-making at every step.",
      icon: Database
    },
    {
      title: "Precision Meticulousness",
      description: "For us, every detail counts in our landscape. Our team ensures that every facet of a transaction is carefully examined and clearly understood for optimal results.",
      icon: Target
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40 z-10" />
          <img src="/images/confident-businesswoman.jpg" alt="Confident Professional" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Users className="w-4 h-4" />
                <span>Our Panel of Experts</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Our Team, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Our Pride.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Our panel of Neutrals is comprised of highly skilled professionals with years of experience in law and business, both domestic and international.
              </p>
              
              <div className="flex gap-4">
                <a href="#pillars" className="btn-primary">
                  Our Core Pillars
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Team Composition</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Capable & Integrous</h2>
            <p className="mt-6 text-lg text-ink-70 max-w-3xl mx-auto leading-relaxed">
              Working alongside experts catering to various industries, our team is highly capable of managing the varied and multi-faceted needs of our members to facilitate fair outcomes for all parties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream p-10 rounded-[2.5rem] border border-cream-300 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-cream-300">
                <Gavel className="w-8 h-8" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">25</h3>
              <p className="text-ink-70 font-bold uppercase tracking-wider text-sm mt-4">Arbitrators</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-cream p-10 rounded-[2.5rem] border border-cream-300 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-cream-300">
                <HandshakeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">24</h3>
              <p className="text-ink-70 font-bold uppercase tracking-wider text-sm mt-4">Conciliators</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-dark p-10 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-primary-300 mb-6 backdrop-blur-md border border-white/20">
                  <Scale className="w-8 h-8" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200 mb-2">64</h3>
                <p className="text-paper-80 font-bold uppercase tracking-wider text-sm mt-4">Case Managers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section id="pillars" className="py-20 lg:py-32 bg-cream relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mt-4">
              <span className="text-primary italic">4 Pillars</span> of our Quest
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group relative">
                <div className="absolute inset-0 bg-white rounded-3xl border border-cream-300 shadow-sm group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300" />
                <div className="relative p-8 lg:p-10 flex gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-cream border border-cream-300 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="text-2xl font-display font-bold opacity-20 absolute">{idx + 1}</span>
                      <pillar.icon className="w-8 h-8 relative z-10" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-dark mb-4">{pillar.title}</h3>
                    <p className="text-ink-70 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Offices", route: "/offices", description: "Our locations." },
            { title: "Partners", route: "/partners", description: "Our network." }
          ]} 
          parentRoute="/about" 
          currentRoute="/neutrals" 
          kind="General" 
        />
      </div>
    </div>
  );
}
