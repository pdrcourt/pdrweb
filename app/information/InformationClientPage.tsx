'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Info, BookOpen, Scale, FileText, Quote, Book, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function InformationClientPage() {
  const sections = [
    {
      title: "How it Works?",
      description: "Connect with us for more information, to get guidance and to know more about our comprehensive dispute resolution services.",
      icon: BookOpen,
      href: "/how-it-works",
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Beginner's Guide",
      description: "Our beginner's guide highlights a step-by-step approach outlining the processes required to successfully avail of our ADR services.",
      icon: Book,
      href: "/beginner-guide",
      color: "from-amber-500/20 to-transparent"
    },
    {
      title: "Our Ethos",
      description: "Our Constitution lays down how we exercise our power and remain deeply accountable to the people and businesses we serve.",
      icon: Scale,
      href: "/ethos",
      color: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Case Studies",
      description: "Review our detailed case studies to evaluate how we manage and resolve complex, real-life commercial disputes.",
      icon: FileText,
      href: "/case-studies",
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "Member Stories",
      description: "Each case is unique in its own way. Explore member stories that highlight the flexibility and exposure of our services.",
      icon: Quote,
      href: "/member-stories",
      color: "from-rose-500/20 to-transparent"
    }
  ];

  const processPillars = [
    { title: "Our Process", desc: "Comprehend and grasp all the essential elements of our business process.", icon: CheckCircle2 },
    { title: "Your Guide", desc: "Decide with a well-researched mindset. Highlights a step-by-step approach.", icon: BookOpen },
    { title: "Our Constitution", desc: "Lays down how we exercise our power and are accountable to the people.", icon: Scale },
    { title: "Cases & Stories", desc: "Get a broad perspective with our demonstrative quantifiable results.", icon: FileText }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-cream-300 text-primary font-bold tracking-widest text-xs uppercase mb-8 shadow-sm">
                <Info className="w-4 h-4" />
                <span>Information Center</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-8 leading-[1.1]">
                Knowledge & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Guidance.</span>
              </h1>
              <div className="p-6 bg-cream border border-cream-300 rounded-2xl mb-8 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
                <p className="text-dark/80 font-medium leading-relaxed">
                  For any inquiries, guidance, or to schedule a personalized demo of our ADR process, feel free to contact our support and sales team.
                </p>
              </div>
              <p className="text-lg text-dark/60 font-light leading-relaxed mb-10">
                Our dedicated team of professionals will respond to your requests within two working days, ensuring you receive the highest level of support tailored to your needs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#info-sections" className="btn-primary">
                  Explore Documentation
                </a>
                <a href="mailto:legal@pdrcourt.com" className="btn-secondary">
                  Contact Support
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-amber-200 rounded-[3rem] rotate-3 opacity-50 blur-lg" />
              <div className="relative h-full rounded-[3rem] overflow-hidden border border-cream-300 shadow-2xl">
                <img src="/images/happy-manager.jpg" alt="Support" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Sections Grid */}
      <section id="info-sections" className="py-20 lg:py-32 bg-cream relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Documentation Map</span>
            <h2 className="heading-lg text-dark mt-4">Discover Our Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className={`${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <Link href={section.href} className="group relative block bg-white p-8 lg:p-10 rounded-[2rem] border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${section.color} rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-cream border border-cream-300 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                      <section.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-dark/70 leading-relaxed flex-1 mb-8">
                      {section.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-dark uppercase tracking-widest group-hover:text-primary transition-colors mt-auto">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 lg:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/40 via-dark to-dark opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl font-display font-light italic text-white/90 mb-6">Ask us</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Do you have any vital information that you may like to ask us? <br/><br/>
                Write to us at legal@pdrcourt.com; or, use the form to send us a quick inquiry.
              </p>
              <div className="w-full h-64 rounded-3xl overflow-hidden mt-8 hidden lg:block">
                <img src="/images/man-clapping.jpg" alt="Contact Us" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
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
                    <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-dark" />
                    <span className="text-white/60 group-hover:text-white transition-colors text-sm">I provide my consent to PDR COURT to contact me.</span>
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

      {/* How Platform Works - Pillars */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Ecosystem Structure</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark mt-4">How the Platform Works</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPillars.map((pillar, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-cream border border-cream-300 hover:border-primary/50 transition-colors text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-white border border-cream-300 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{pillar.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "How it Works", route: "/how-it-works", description: "Process breakdown." },
            { title: "Beginner's Guide", route: "/beginner-guide", description: "Step-by-step instructions." },
            { title: "Case Studies", route: "/case-studies", description: "Real-world results." }
          ]} 
          parentRoute="/" 
          currentRoute="/information" 
          kind="Information" 
        />
      </div>
    </div>
  );
}
