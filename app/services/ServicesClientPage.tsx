'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Briefcase, Landmark, User, Download, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import ReasonsWhySection from '@/components/sections/ReasonsWhySection';

export default function ServicesClientPage() {
  const services = [
    {
      title: "Individuals",
      description: "We specialize in Dispute Resolution tailored for individuals, providing a seamless experience for sole proprietors and independent contractors to navigate business challenges.",
      icon: User,
      href: "/solutions/individuals",
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "MSMEs",
      description: "PDR COURT is a platform that empowers MSMEs with seamless, software-driven dispute resolution, enhancing their productivity while catering to the sector’s vast contribution to the economy.",
      icon: Briefcase,
      href: "/solutions/msmes",
      color: "from-amber-500/20 to-transparent"
    },
    {
      title: "Financial Institutions",
      description: "Our platform ensures that financial institutions like banks and NBFCs can resolve disputes quickly and efficiently, supporting the essential financial framework needed for growth in loans and credit.",
      icon: Landmark,
      href: "/solutions/financial-institutions",
      color: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Enterprises",
      description: "PDR COURT as an ADR platform enables enterprises to work together seamlessly, fostering collaboration and extending their market presence while safeguarding brand identity.",
      icon: Building2,
      href: "/solutions/enterprise",
      color: "from-purple-500/20 to-transparent"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-dark via-dark/90 to-primary-900/40 z-10" />
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                <span>ADR Services & Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
                Your Trusted <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">ADR Platform</span>
              </h1>
              
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-lg">
                We drive success by addressing your Alternative Dispute Resolution needs through our cutting-edge, technology-powered ecosystem.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#services-list" className="btn-primary">
                  Explore Services
                </a>
                <Link href="mailto:legal@pdrcourt.com" className="btn-secondary bg-white/10 text-white hover:bg-white/20 border-white/20">
                  Contact Legal Team
                </Link>
              </div>
            </motion.div>
            
            {/* Right Side Video/Image Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/30 to-amber-500/30 blur-2xl rounded-[3rem] opacity-50" />
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/20 bg-dark/50 backdrop-blur-xl group">
                <img src="/images/business-meeting.jpg" alt="Business Meeting" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
                     onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group-hover:scale-110">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <h4 className="text-white font-bold mb-1">Explainer Video</h4>
                    <p className="text-sm text-paper-70">{"See how PDR COURT's ADR platform transforms dispute resolution."}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section id="services-list" className="py-20 lg:py-32 bg-white relative z-20 -mt-10 rounded-t-[3rem] border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Tailored Solutions</span>
            <h2 className="heading-lg text-dark mt-4">Dispute Resolution for Everyone</h2>
            <p className="body-lg text-ink-60 mt-4">
              From individual independent contractors to large-scale enterprises and financial institutions, our platform is engineered to scale with your specific recovery needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="group relative bg-cream border border-cream-300 p-8 lg:p-10 rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-cream-300 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-ink-70 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  
                  <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-bold text-dark group-hover:text-primary transition-colors uppercase tracking-widest mt-auto">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Block inside Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 bg-dark rounded-[2.5rem] p-8 lg:p-12 border border-dark overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-primary-300 font-bold uppercase tracking-wider text-sm mb-2 block">Transparent Pricing</span>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Top-Tier Services at Competitive Prices</h3>
              <p className="text-paper-70 leading-relaxed">By harnessing cutting-edge software and a streamlined platform, we deliver optimal value without compromising quality.</p>
            </div>
            <Link href="/pricing" className="relative z-10 btn-primary flex-shrink-0 whitespace-nowrap">
              View Pricing Structure
            </Link>
          </motion.div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-20 lg:py-32 bg-cream border-y border-cream-300 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Mobile Experience</span>
              <h2 className="heading-lg text-dark mt-4 mb-6">Take the Courtroom With You</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-8">
                {"Manage cases, upload evidence, and attend hearings directly from your smartphone. Our secure mobile application ensures you're never out of touch with your dispute resolution process."}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#" className="flex items-center gap-4 bg-dark text-white px-6 py-3 rounded-2xl hover:bg-dark/90 transition-colors">
                  <Download className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-xs text-paper-70">Download on the</span>
                    <span className="text-lg font-bold leading-none">App Store</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 bg-dark text-white px-6 py-3 rounded-2xl hover:bg-dark/90 transition-colors">
                  <Download className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-xs text-paper-70">GET IT ON</span>
                    <span className="text-lg font-bold leading-none">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 rounded-full blur-3xl opacity-50" />
              <img src="/images/pdr-court-app.png" alt="PDR COURT Mobile App" className="relative z-10 w-full h-auto" 
                   onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 15 Reasons Why - Reuse the specialized component */}
      <div className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReasonsWhySection showTitle={true} columns={3} variant="numbered" />
        </div>
      </div>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Individuals", route: "/solutions/individuals", description: "Solutions for sole proprietors." },
            { title: "Enterprise", route: "/solutions/enterprise", description: "Corporate vendor dispute solutions." },
            { title: "Pricing", route: "/pricing", description: "Our transparent fee structure." }
          ]} 
          parentRoute="/" 
          currentRoute="/services" 
          kind="Services" 
        />
      </div>
    </div>
  );
}
