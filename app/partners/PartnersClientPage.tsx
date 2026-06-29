'use client';

import { motion } from 'framer-motion';
import { Handshake, Users, ShieldCheck, TrendingUp, Lightbulb, Zap, Crosshair, BarChart } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function PartnersClientPage() {
  const possibilities = [
    {
      title: "Co-partnering",
      desc: "Co-partnering with us will enable untapping the opportunities to increase your business avenues, expertise and resources available to broaden your reach and upskill service.",
      icon: Users
    },
    {
      title: "Brand-Partnering",
      desc: "Double your reach by joining hands with us to diversify your services and cater to unchartered territories. Get yourself in front of a broader audience in the most cost-effective manner.",
      icon: TrendingUp
    },
    {
      title: "Sponsorship",
      desc: "Leverage commercial advantage by taking up our 'Company Sponsorship' offer and being a part of our events, webinars, activities, seminars, and conferences.",
      icon: Lightbulb
    }
  ];

  const pillars = [
    {
      title: "Digital Transparency",
      desc: "With our state-of-the-art tech tools and clear communication, we ensure our members are informed about every detail involved in the process.",
      icon: Zap
    },
    {
      title: "Integrity",
      desc: "We believe that achieving a fair and unbiased outcome is vital for both acceptance and long-term success in today's world.",
      icon: ShieldCheck
    },
    {
      title: "Data-Driven Prudence",
      desc: "Our expert team understands the various scenarios and utilizes technology to analyze the potential impact on your business outcomes.",
      icon: BarChart
    },
    {
      title: "Precision Meticulousness",
      desc: "For us, every detail counts in our landscape. Our team ensures that every facet of a transaction is carefully examined and clearly understood.",
      icon: Crosshair
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-cream-300 text-primary font-bold tracking-widest text-xs uppercase mb-8 shadow-sm">
                <Handshake className="w-4 h-4" />
                <span>Join Our Ecosystem</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-8 leading-[1.1]">
                Partner in Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Growth Story.</span>
              </h1>
              <p className="text-xl text-ink-60 font-light leading-relaxed mb-10 max-w-lg">
                Partner with us to transform dispute resolution. Harness advanced ADR technology and innovative solutions to reshape conflict management for sustainable success.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cream-300">
                <div>
                  <h3 className="text-3xl font-display font-bold text-primary mb-1">60%</h3>
                  <p className="text-xs uppercase tracking-wider text-ink-40 font-bold">Growth Y21-22</p>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-primary mb-1">3 Lac</h3>
                  <p className="text-xs uppercase tracking-wider text-ink-40 font-bold">Existing Users</p>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-primary mb-1">25+</h3>
                  <p className="text-xs uppercase tracking-wider text-ink-40 font-bold">Enterprise Clients</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-amber-200 rounded-[3rem] rotate-3 opacity-50 blur-lg" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-cream-300 shadow-2xl">
                <img decoding="async" src="/images/smiling-business-members.jpg" alt="Partnerships" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Possibilities Block */}
      <section className="py-20 lg:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-light mb-6">{"Let's find "}<span className="font-bold text-primary-300">Possibilities</span>{" together"}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {possibilities.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-paper-60 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 lg:py-32 bg-white border-y border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center mb-20">
            <div className="md:w-1/3">
              <div className="flex items-center gap-6">
                <span className="text-7xl font-display font-black text-primary/20">4</span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark leading-tight">
                  Pillars of <br/>our Quest
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-ink-70 leading-relaxed border-l-4 border-primary pl-6">
                PDR COURT has carved a unique place in the space of Dispute Resolution via Trust & Sincerity. Aligned with technological advancement, we are a forerunner in the digital space.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-cream border border-cream-300 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-display font-black text-ink-10 group-hover:text-primary/20 transition-colors">0{idx + 1}</span>
                  <pillar.icon className="w-8 h-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{pillar.title}</h3>
                <p className="text-ink-60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <span className="section-label mb-4">Application</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                Interested <br/> Businesses
              </h2>
              <p className="text-lg text-ink-60 leading-relaxed mb-10">
                Join our network to leverage cutting edge ADR tools. Please provide your details and partnership interests below.
              </p>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-cream-300 hidden lg:block">
                <img loading="lazy" decoding="async" src="/images/business-group.jpg" alt="Business Group" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-cream-300">
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Partnership Application Submitted Successfully."); }}>
                
                {/* Personal Details */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest border-b border-cream-300 pb-2">Personal Details</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 text-dark placeholder-dark/40 focus:border-primary outline-none transition-all" required />
                    <input type="text" placeholder="Last Name" className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 text-dark placeholder-dark/40 focus:border-primary outline-none transition-all" required />
                    <input type="email" placeholder="Email Address" className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 text-dark placeholder-dark/40 focus:border-primary outline-none transition-all" required />
                    <input type="tel" placeholder="Tel/Mobile" className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 text-dark placeholder-dark/40 focus:border-primary outline-none transition-all" required />
                  </div>
                </div>

                {/* Entity Type */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest border-b border-cream-300 pb-2">Entity Type</h3>
                  <div className="flex flex-wrap gap-6">
                    {["Individual", "Business", "Financial Institution"].map((type, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="entityType" value={type} className="w-5 h-5 text-primary border-cream-300 focus:ring-primary focus:ring-offset-white" required />
                        <span className="text-ink-80 font-medium group-hover:text-dark transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Partnership Interest */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest border-b border-cream-300 pb-2">Partnership Interest</h3>
                  <div className="space-y-4">
                    {[
                      "I am looking for Co-Partnering with PDR COURT",
                      "I wish to establish a Brand Partnering",
                      "I am looking for sponsoring and promoting my business"
                    ].map((interest, i) => (
                      <label key={i} className="flex items-start gap-3 cursor-pointer group bg-cream/50 p-4 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                        <input type="checkbox" value={interest} className="w-5 h-5 mt-0.5 rounded border-cream-300 text-primary focus:ring-primary focus:ring-offset-white" />
                        <span className="text-ink-80 text-sm font-medium group-hover:text-dark transition-colors leading-relaxed">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Meeting Preference */}
                <label className="flex items-center gap-3 cursor-pointer group p-4 border border-cream-300 rounded-xl bg-white hover:border-primary/50 transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-cream-300 text-primary focus:ring-primary focus:ring-offset-white" />
                  <span className="text-dark font-bold text-sm">I am also looking for an online meeting</span>
                </label>

                {/* Consent & Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-cream-300">
                  <label className="flex items-start gap-3 cursor-pointer group max-w-sm">
                    <input type="checkbox" required className="w-5 h-5 mt-0.5 shrink-0 rounded border-cream-300 text-primary focus:ring-primary focus:ring-offset-white" />
                    <span className="text-ink-60 text-xs leading-relaxed group-hover:text-dark transition-colors">I provide my consent to PDR COURT to contact me through email or telephone.</span>
                  </label>
                  <button type="submit" className="btn-primary shrink-0 w-full sm:w-auto">
                    Submit Application
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
            { title: "Neutrals", route: "/neutrals", description: "Our expert panel." },
            { title: "Information", route: "/information", description: "General guides." },
            { title: "Investors", route: "/investors", description: "Financial details." }
          ]} 
          parentRoute="/about" 
          currentRoute="/partners" 
          kind="About Us" 
        />
      </div>
    </div>
  );
}
