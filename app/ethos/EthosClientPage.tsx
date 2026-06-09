'use client';

import { motion } from 'framer-motion';
import { Scale, Shield, Award, Download, Leaf } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function EthosClientPage() {
  const pledges = [
    {
      title: "Transparency",
      description: "At PDR COURT, we believe trust is built on transparency. Our platform, powered by advanced technology, ensures both online and offline processes remain clear and accessible, upheld by the expertise of our professionals.",
      icon: Shield
    },
    {
      title: "Fairness",
      description: "PDR COURT's technology-driven platform facilitates unbiased dispute resolutions. With expert professionals overseeing every case, we ensure fairness is achieved, whether through our online systems or offline processes.",
      icon: Scale
    },
    {
      title: "Justice",
      description: "With PDR COURT's cutting-edge software and skilled professionals, we ensure justice is delivered effectively in both online and offline ADR services, rooted in ethics and innovation to contribute positively to society.",
      icon: Award
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <img src="/images/smiling-excutive-boss.jpg" alt="Leadership" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
              <Leaf className="w-4 h-4" />
              <span>Corporate Philosophy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              We Carry a <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Promise.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-paper-70 leading-relaxed font-light">
              Our Constitution lays down how we exercise our power and remain deeply accountable to the people we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative text-center p-12 bg-cream rounded-[3rem] border border-cream-300 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <img src="/images/pdr-court-graphic.png" alt="Emblem" className="w-48 mx-auto mb-8 drop-shadow-2xl relative z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <h3 className="text-3xl font-display font-light text-primary mb-2 relative z-10">|| धर्मेण न्यायः स्थाप्यते ||</h3>
              <h3 className="text-2xl font-bold text-dark tracking-widest uppercase relative z-10">Truth Shall Prevail</h3>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Our Core</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-8">Our DNA</h2>
              <div className="space-y-8">
                <p className="text-xl text-ink-70 leading-relaxed border-l-4 border-primary pl-6 py-2">
                  {"The DNA of PDR COURT is instilled around Jan Hus' phrase:"}
                  <span className="font-bold text-dark italic block mt-2">{"\"Seek the truth, hear the truth, learn the truth, love the truth, speak the truth, hold the truth and defend the truth until death.\""}</span>
                </p>
                
                <div className="bg-dark text-white p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                  <QuoteIcon className="w-10 h-10 text-primary-400 mb-4 opacity-50" />
                  <p className="text-xl font-light italic leading-relaxed relative z-10">
                    {"\"One who speaks the truth even in the state of renunciation is evident in living beings. He overcomes the crisis.\""}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Constitution Pledge */}
      <section className="py-20 lg:py-32 bg-cream border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Our Constitution</span>
            <h2 className="heading-lg text-dark mt-4">Our Solemn Pledge</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pledges.map((pledge, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-cream-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-20 h-20 mx-auto rounded-2xl bg-cream border border-cream-300 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <pledge.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-dark tracking-widest uppercase mb-6 relative z-10">{pledge.title}</h3>
                
                <p className="text-ink-70 leading-relaxed relative z-10">
                  {pledge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 rounded-[3rem] -rotate-3 blur-xl opacity-50" />
              <div className="relative h-full rounded-[3rem] overflow-hidden border border-cream-300 shadow-2xl">
                <img src="/images/smiling-holding-phone.jpg" alt="Using App" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
            
            <div>
              <span className="section-label">Mobile Experience</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mt-4 mb-6">The App</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-10">
                With PDR COURT as their ADR platform, arbitrators can efficiently review testimony and evidence presented by the parties in dispute, whether during in-person hearings or through our advanced digital tools, ensuring effective resolution of the matter.
              </p>
              
              <div className="bg-cream border border-cream-300 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-dark mb-6">Download the app for Android & iOS</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-4 bg-dark text-white px-6 py-3 rounded-2xl hover:bg-dark/90 transition-colors shadow-lg shadow-dark/20">
                    <Download className="w-8 h-8" />
                    <div className="flex flex-col">
                      <span className="text-xs text-paper-70">Download on the</span>
                      <span className="text-lg font-bold leading-none">App Store</span>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-4 bg-dark text-white px-6 py-3 rounded-2xl hover:bg-dark/90 transition-colors shadow-lg shadow-dark/20">
                    <Download className="w-8 h-8" />
                    <div className="flex flex-col">
                      <span className="text-xs text-paper-70">GET IT ON</span>
                      <span className="text-lg font-bold leading-none">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Beginner's Guide", route: "/beginner-guide", description: "Step-by-step instructions." },
            { title: "Case Studies", route: "/case-studies", description: "Real-world results." },
            { title: "Member Stories", route: "/member-stories", description: "Client experiences." }
          ]} 
          parentRoute="/information" 
          currentRoute="/ethos" 
          kind="Information" 
        />
      </div>
    </div>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
