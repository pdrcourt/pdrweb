'use client';

import { motion } from 'framer-motion';
import { MapPin, Shield, Navigation } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function OfficesClientPage() {
  const offices = [
    {
      city: "MUMBAI",
      type: "Corporate Office",
      address: "Unit No. 208, 2nd Floor, Globe Business Park, Khuntavali, Ambernath, Thane, Kalyan, Maharashtra, India, 421501."
    },
    {
      city: "DELHI",
      type: "Regional Office",
      address: "A-19, Guru Nanak Pura, Street No. 3, Laxmi Nagar, Delhi-110092. Landmark - V3S Mall"
    },
    {
      city: "BENGALURU",
      type: "Regional Office",
      address: "3rd Floor, Akshay Tech Park, Plot No. 72 & 73, EPIP Zone, Whitefield, Bengaluru, Karnataka - 560066"
    },
    {
      city: "HYDERABAD",
      type: "Regional Office",
      address: "F.No. 205, Hiline Complex, Road No. 12, Banjara Hills, Hyderabad - 500034, Telangana"
    },
    {
      city: "THANE",
      type: "Regional Office",
      address: "208, 2nd Floor, Globe Business Park, Ambernath West, Near Railway station, Ambernath - 421505"
    },
    {
      city: "BIHAR",
      type: "Regional Office",
      address: "Drowsy Monks Co-Working, 6th Floor, DS Business Park, Saguna More, Bailey Road, Danapur Nizamat, Patna - 801503"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40 z-10" />
          <img decoding="async" src="/images/business-people-in-a-meeting.jpg" alt="Business Meeting" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <MapPin className="w-4 h-4" />
                <span>Our Locations</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                National <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Presence.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                Sure we are online, but you could meet us at our physical offices in major business hubs across India.
              </p>
              
              <div className="flex gap-4">
                <a href="#locations" className="btn-primary">
                  View Locations
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & Reach Section */}
      <section className="py-20 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-label">Expansion Plans</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mt-4 mb-6">
                Widening Our ADR Platform Reach
              </h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-6">
                We are broadening our reach by enhancing our infrastructure and fostering stronger business connections. With cutting-edge software solutions and exceptional responsiveness, we aim to be accessible in every business hub.
              </p>
              <p className="text-lg text-ink-70 leading-relaxed">
                Our plans include expanding both domestically and globally in the coming months, ensuring robust physical presence coupled with advanced digital dispute resolution capabilities.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-cream p-10 rounded-[3rem] shadow-xl border border-cream-300 relative overflow-hidden">
              <span className="section-label mx-auto mb-8">Our Presence</span>
              <div className="space-y-8 mt-8">
                <div className="flex flex-col border-l-2 border-primary pl-6">
                  <span className="text-4xl font-display font-bold text-primary mb-2">7</span>
                  <span className="text-ink-80 font-medium">Regional Offices</span>
                </div>
                <div className="flex flex-col border-l-2 border-primary pl-6">
                  <span className="text-4xl font-display font-bold text-primary mb-2">2</span>
                  <span className="text-ink-80 font-medium">Conciliation Centres</span>
                </div>
                <div className="flex flex-col border-l-2 border-primary pl-6">
                  <span className="text-4xl font-display font-bold text-primary mb-2">100+</span>
                  <span className="text-ink-80 font-medium">City Coverage</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section id="locations" className="py-20 lg:py-32 bg-cream relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Physical Presence</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mt-4">Our Offices</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}
                className={`bg-white border p-8 rounded-3xl transition-shadow ${office.type === 'Corporate Office' ? 'border-primary shadow-lg shadow-primary/10' : 'border-cream-300 hover:shadow-xl'}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${office.type === 'Corporate Office' ? 'bg-primary text-white' : 'bg-cream-300 text-ink-70'}`}>
                    {office.type}
                  </div>
                  <Navigation className={`w-5 h-5 ${office.type === 'Corporate Office' ? 'text-primary' : 'text-ink-40'}`} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{office.city}</h3>
                <p className="text-ink-70 leading-relaxed font-medium">
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-dark text-white rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 opacity-50" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <Shield className="w-8 h-8 text-primary-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Committed to Protect your Interests</h4>
                <p className="text-paper-70 max-w-2xl">Everyone here is aligned and under oath to fulfill our vision of providing services par excellence with Integrity, Honesty, and Agility.</p>
              </div>
            </div>
            <div className="relative z-10 shrink-0">
               <a href="tel:+918976955540" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-dark font-bold hover:bg-cream transition-colors shadow-lg">
                 Call +91 89769 55540
               </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Investors", route: "/investors", description: "Investment opportunities." },
            { title: "Company", route: "/company", description: "Our overview." },
            { title: "Neutrals", route: "/neutrals", description: "Our professionals." }
          ]} 
          parentRoute="/about" 
          currentRoute="/offices" 
          kind="General" 
        />
      </div>
    </div>
  );
}
