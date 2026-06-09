'use client';

import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Scale, Award } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function CompanyClientPage() {
  const timelineEvents = [
    { date: "MAR 2019", description: "Bootstrapped with ad hoc investment of 15 Lac. Invested in idea creation and brand." },
    { date: "JAN 2020", description: "Reached break-even and sustained the earnings. Executed the plan for SOP formation and training." },
    { date: "MAR 2020", description: "Worked on creating the final packaging plans and their execution. Hired our first full-time arbitrator. Started working in 11 Languages." },
    { date: "OCT 2020", description: "Applied for Company Registration. Started company with communication offices in Mumbai, Delhi, Hyderabad & Bangalore." },
    { date: "DEC 2020", description: "Our website went live. Started implementing long-term plans for applicants with Membership options." },
    { date: "MAR 2021", description: "Received multiple disputes of INR 9 Cr. We set a target to resolve in 60 days, and we did it." },
    { date: "AUG 2021", description: "Started publishing our Dispute Resolution paper that will change this domain." },
    { date: "DEC 2021", description: "Crossed 20 Cr monthly volume average of 10000 disputes a month." },
    { date: "JAN 2022", description: "Started physical conciliation centers in Mumbai & Delhi." }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40 z-10" />
          <img src="/images/explaining-to-team.jpg" alt="Team Discussion" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                <span>Our Organization</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Overview.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                {"PDR COURT is cultivating a trustworthy platform that ensures clarity and efficiency. As India's first \"Indic Digital Court,\" we harness cutting-edge software solutions."}
              </p>
              
              <div className="flex gap-4">
                <a href="#timeline" className="btn-primary">
                  Our Journey
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
            <span className="section-label mx-auto">Our Impact</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Partner in Seamless Resolutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream p-10 rounded-[2.5rem] border border-cream-300 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-cream-300">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">12.7 Lac</h3>
              <p className="text-ink-70 font-medium">Cases Reported in 2024</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-cream p-10 rounded-[2.5rem] border border-cream-300 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-cream-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">8.6 Lac</h3>
              <p className="text-ink-70 font-medium">Settled Cases in 2024</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-dark p-10 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-primary-300 mb-6 backdrop-blur-md border border-white/20">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200 mb-2">67%</h3>
                <p className="text-paper-80 font-medium">Success Record</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 lg:py-32 bg-cream relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky top-32 h-max">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6 leading-tight">Our growth over the last 5 years</h2>
              <p className="text-lg text-ink-70 leading-relaxed">
                We created a one-of-a-kind tech platform with Dispute Resolution at its core. Empaneled a plethora of experts and legal professionals to help our members find quick and effective resolutions. We have now evolved as a company that caters to multiple verticals with an unbiased and honest approach.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[27px] md:left-8 top-4 bottom-4 w-px bg-cream-300" />

              <div className="space-y-12">
                {timelineEvents.map((event, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1 }} className="relative pl-16 md:pl-24">
                    {/* Circle */}
                    <div className="absolute left-[19px] md:left-[23px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-sm" />
                    
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-cream-300 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                        <span className="text-sm font-bold text-primary tracking-widest uppercase">{event.date.split(' ')[0]}</span>
                        <span className="text-2xl font-display font-bold text-dark">{event.date.split(' ')[1]}</span>
                      </div>
                      <p className="text-ink-80 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Investors", route: "/investors", description: "Investment opportunities." },
            { title: "Offices", route: "/offices", description: "Our locations." },
            { title: "Neutrals", route: "/neutrals", description: "Our professionals." }
          ]} 
          parentRoute="/about" 
          currentRoute="/company" 
          kind="General" 
        />
      </div>
    </div>
  );
}
