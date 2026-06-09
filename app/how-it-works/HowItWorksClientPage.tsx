'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CreditCard, Cloud, Smartphone, ShoppingCart, PenTool, Scale, Gavel, Award, PlayCircle, Download } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function HowItWorksClientPage() {
  const appFeatures = [
    { title: "Safe & Secure", desc: "With 256-bit SSL encryption, all data and payments are perfectly secure.", icon: ShieldCheck },
    { title: "Digital & Print", desc: "Purchase Digital as well as print Agreements. The print copy will be sent to address.", icon: FileText },
    { title: "Online Payments", desc: "Make payments online: UPI/Credit Cards from over 65+ banks.", icon: CreditCard },
    { title: "Saved to Cloud", desc: "All online proceedings and interactions are securely saved to the cloud.", icon: Cloud },
    { title: "One Point Management", desc: "The application acts as a one point mode for every process you make.", icon: Smartphone }
  ];

  const steps = [
    { title: "Purchase", desc: "Choose to purchase the Agreement via Online/Offline options", icon: ShoppingCart },
    { title: "Mutually Agreed", desc: "All parties involved must sign and accept the mutually agreed terms", icon: PenTool },
    { title: "Legally Enforced", desc: "Both parties are legally bound by the Dispute Resolution Clause", icon: Scale },
    { title: "Dispute Resolution", desc: "In case of a dispute, PDR COURT intervenes to attain resolution amicably", icon: Gavel },
    { title: "Award", desc: "The Award holder can enforce the Award as per the provisions of the Arbitration Act.", icon: Award }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-900/40 via-dark to-dark" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                <span>Process Overview</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Quick & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Easy.</span>
              </h1>
              <p className="text-xl text-paper-70 font-light leading-relaxed mb-10 border-l-4 border-primary pl-6 py-2">
                Every process from Buying an Agreement to Filing a Dispute to Proceedings, all done seamlessly within the app.
              </p>
              <div className="flex gap-4">
                <a href="#app-features" className="btn-primary">
                  Explore App Features
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[600px] hidden lg:block rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <img src="/images/woman-using-mobilephone.jpg" alt="Quick & Easy" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section id="app-features" className="py-20 lg:py-32 bg-white relative z-10 border-y border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 rounded-full blur-3xl opacity-50" />
              <img src="/images/pdr-court-app.png" alt="Mobile App" className="relative z-10 w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </motion.div>
            
            <div className="space-y-6">
              <div className="mb-10">
                <span className="section-label">Platform Ecosystem</span>
                <h2 className="text-3xl font-display font-bold text-dark mt-4">Everything You Need, In One Place.</h2>
              </div>
              
              {appFeatures.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-6 bg-cream border border-cream-300 rounded-3xl hover:bg-white hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-cream-300 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-ink-60 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 Simple Steps */}
      <section className="py-20 lg:py-32 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-dark mb-6">
              <span className="font-bold text-primary text-6xl block mb-4">5</span>
              Simple Steps towards <br/> <span className="font-bold italic">Dispute Resolution</span>
            </h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line for Desktop */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-400 to-transparent hidden md:block opacity-20" />
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
                  
                  {/* Step Number Indicator */}
                  <div className="flex items-center md:items-start gap-6 md:gap-0 relative z-10 md:w-32 shrink-0">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-cream shadow-xl flex items-center justify-center relative md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                      <span className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                      <span className="text-3xl font-display font-black text-primary">{idx + 1}</span>
                    </div>
                    <div className="md:hidden w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                       <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-white p-8 lg:p-10 rounded-[2rem] border border-cream-300 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="hidden md:flex w-20 h-20 shrink-0 rounded-2xl bg-cream border border-cream-300 items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10">
                      <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-ink-60 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video */}
      <section className="py-20 lg:py-32 bg-dark text-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-light mb-12">
            Watch our Explainer Video to get a <br/> <span className="font-bold text-primary-300">complete overview of our services.</span>
          </h2>
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/20 bg-black group shadow-2xl">
            <img src="/images/vidposter.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all shadow-xl">
                <PlayCircle className="w-12 h-12 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-y border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 rounded-[3rem] -rotate-6 blur-xl" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Information", route: "/information", description: "Resource hub." },
            { title: "Beginner's Guide", route: "/beginner-guide", description: "Step-by-step instructions." },
            { title: "Our Ethos", route: "/ethos", description: "Core principles." }
          ]} 
          parentRoute="/information" 
          currentRoute="/how-it-works" 
          kind="Information" 
        />
      </div>
    </div>
  );
}
