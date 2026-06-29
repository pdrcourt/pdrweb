'use client';

import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, ChevronRight, Eye, Briefcase, Building, FileBarChart, Clock } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function InvestorsClientPage() {
  const timelineEvents = [
    {
      date: "Mar 2019",
      description: "Bootstrapped with ad hoc investment of 15 Lac.",
      icon: Briefcase
    },
    {
      date: "Mar 2020",
      description: "Hired our first full-time arbitrator & Started working in 11 Languages.",
      icon: Briefcase
    },
    {
      date: "Mar 2021",
      description: "Received multiple disputes of INR 9 Cr. We set a target to resolve in 60 days, and we did it.",
      icon: Briefcase
    },
    {
      date: "Jan 2022",
      description: "Started physical conciliation centers in Mumbai & Delhi.",
      icon: Building
    },
    {
      date: "Feb 2023",
      description: "Release of 'Negotiation Techniques for NBFCs', offering specialized insights.",
      icon: FileBarChart
    },
    {
      date: "June 2023",
      description: "Knowledge Centre published on its website, offering a wealth of specialized resources.",
      icon: FileBarChart
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40 z-10" />
          <img decoding="async" src="/images/midaged-businessman.jpg" alt="Businessman" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <TrendingUp className="w-4 h-4" />
                <span>Investment Opportunity</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Investing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Success.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Tap into this investment opportunity by trusting our technological expertise to expand your business horizons.
              </p>
              
              <div className="flex gap-4">
                <a href="#investor-form" className="btn-primary">
                  Connect with Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Stats */}
      <section className="py-20 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                Investing in PDR COURT is Investing in Success, Bottom Line & Profit
              </h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-6">
                With a proven track record of high performance, PDR COURT stands at the forefront of technology in the ADR space. Furthermore, our state-of-the-art software, designed for user-friendliness, enhances the Online Dispute Resolution experience and positions us as industry leaders.
              </p>
              <p className="text-lg text-ink-70 leading-relaxed">
                Investors benefit from our commitment to transparency, with access to comprehensive financial reports, business plans, and P&L sheets that outline our trajectory. By investing in PDR COURT, you align with a forward-thinking platform dedicated to efficient dispute resolution.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <span className="section-label-light">We Are Growing</span>
              <div className="space-y-8 mt-8">
                <div className="flex flex-col border-l-2 border-primary pl-6">
                  <span className="text-4xl font-display font-bold text-primary-300 mb-2">75%</span>
                  <span className="text-paper-80">{"Growth in Y22-23 "}<br/>{"Tied up with > 33 NBFCs & > 1000+ MSMEs"}</span>
                </div>
                <div className="flex flex-col border-l-2 border-primary pl-6">
                  <span className="text-4xl font-display font-bold text-primary-300 mb-2">5 Lac+</span>
                  <span className="text-paper-80">Disputes successfully resolved</span>
                </div>
                <div className="flex flex-col border-l-2 border-primary pl-6">
                  <span className="text-4xl font-display font-bold text-primary-300 mb-2">1000+</span>
                  <span className="text-paper-80">Active enterprise customers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mx-auto">Our Vision</span>
          <h3 className="text-2xl md:text-3xl font-light text-dark mt-8 leading-relaxed italic">
            "At PDR COURT, we are dedicated to establishing a global platform of trust that revolutionizes the justice-seeking process through state-of-the-art technology. We believe justice should be a fundamental right, easily accessible to everyone. By harnessing advanced software, we aim to enhance transparency, streamline dispute resolution, and empower individuals, creating a more equitable society."
          </h3>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-white relative border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mt-4">The Story So Far</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineEvents.map((event, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-cream border border-cream-300 p-8 rounded-3xl hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-cream-300 flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{event.date}</h3>
                </div>
                <p className="text-ink-70 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-2 lg:col-span-3 bg-dark text-white p-8 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 opacity-50" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">PDR COURT 2.0</h3>
                  <div className="flex flex-wrap gap-4 text-primary-200">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Enhanced security</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> User-centric interface</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Unparalleled support for MSMEs</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                  <span className="block text-sm text-paper-70 uppercase tracking-widest font-bold mb-1">Upcoming Book</span>
                  <span className="block text-lg font-bold">"How to Reduce Loan Write Off"</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="investor-form" className="py-20 lg:py-32 bg-cream border-t border-cream-300 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Interested?</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-6">Invest in the Future</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-10">
                Join us in our journey to make justice accessible, transparent, and efficient globally. Fill out the form to request our investor pitch deck or financial details.
              </p>
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                 <img loading="lazy" decoding="async" src="/images/business-people-converstation.jpg" alt="Business Conversation" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-cream-300">
              <form action="https://webhook.pdrcourt.com/getFormData" method="POST" className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Eye className="w-5 h-5 text-primary" /> Personal Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">First Name</label>
                      <input type="text" name="firstName" required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Last Name</label>
                      <input type="text" name="lastName" required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Email Address</label>
                      <input type="email" name="email" required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Phone Number</label>
                      <input type="tel" name="phone" required className="w-full bg-cream border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-8">
                  <h4 className="text-xl font-bold text-dark mb-6">Are you an:</h4>
                  <div className="flex flex-wrap gap-6">
                    {['Individual', 'Business', 'Venture Capitalist'].map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="investorType" value={type} className="w-5 h-5 text-primary focus:ring-primary border-cream-300" required />
                        <span className="text-ink-80 group-hover:text-primary transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-8">
                  <h4 className="text-xl font-bold text-dark mb-6">What information are you looking for?</h4>
                  <div className="space-y-4">
                    {[
                      "I need to see your Sales/Investor Pitch Deck",
                      "I need to know/understand financial details",
                      "Your Business needs and journey so far"
                    ].map((info) => (
                      <label key={info} className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" name="requestedInfo" value={info} className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-cream-300 rounded" />
                        <span className="text-ink-80 group-hover:text-primary transition-colors">{info}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-8 space-y-6">
                  <label className="flex items-center gap-3 cursor-pointer bg-cream border border-cream-300 p-4 rounded-xl group">
                    <input type="checkbox" name="requestMeeting" value="Yes" className="w-5 h-5 text-primary focus:ring-primary border-cream-300 rounded" />
                    <span className="text-dark font-medium group-hover:text-primary transition-colors">I am also looking for an online meeting</span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="consent" required defaultChecked className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-cream-300 rounded" />
                    <span className="text-sm text-ink-70 leading-relaxed">I provide my consent to PDR COURT to contact me through email or Telephone.</span>
                  </label>
                </div>

                <input type="hidden" name="source" value="Investors Inquiry" />
                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Offices", route: "/offices", description: "Our locations." },
            { title: "Neutrals", route: "/neutrals", description: "Our professionals." }
          ]} 
          parentRoute="/about" 
          currentRoute="/investors" 
          kind="General" 
        />
      </div>
    </div>
  );
}
