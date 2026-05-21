'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, ShieldCheck, Mail } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function CookiePolicyClientPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Cookie className="w-4 h-4" />
                <span>Resources & Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Policy.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
                PDR COURT website is strictly compliant; we forthrightly announce to the website users our cookie policy, what data we collect, and how that data is used.
              </p>
            </motion.div>

            <div className="relative flex justify-center items-center lg:h-[400px]">
              <div className="bg-cream/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/10 shadow-2xl max-w-sm space-y-6 relative z-20">
                <div className="p-3 bg-primary/20 rounded-2xl w-fit">
                  <ShieldCheck className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Got any Questions?</h3>
                <p className="text-sm text-white/70 font-semibold leading-relaxed">
                  Our legal desk is here to clarify details about our terms and policies.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-white/60 font-bold block mb-1">Write to us</span>
                  <a href="mailto:legal@pdrcourt.com" className="text-lg font-bold text-primary hover:underline block">legal@pdrcourt.com</a>
                </div>
              </div>
              
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl absolute left-8 top-16 z-10 hover:scale-105 transition-transform duration-300 hidden md:block">
                <img src="/images/happy-woman-showing-thumbsup.jpg" alt="Happy Woman Smiling" className="w-full h-full object-cover opacity-30" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-primary max-w-none text-dark/80">
            
            {/* Header Callout */}
            <div className="bg-cream border border-cream-300 p-8 rounded-3xl mb-12 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-dark mb-4 flex items-center gap-3">
                <Info className="w-6 h-6 text-primary" />
                Transparency & User Consent
              </h3>
              <p className="font-semibold text-dark/70 text-sm leading-relaxed m-0">
                PDR COURT website is strictly compliant; we forth-rightly announce to the website users our cookie policy, what data we collect, and how that data is used for users to give consent or opt-out of cookies before using them.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">What are Cookies?</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enable the sites or service provider systems to recognize your browser and capture and remember certain information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">How We Use Cookies</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  We use cookies to help us remember and process the dispute resolution services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Google Cookies</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  Google, as a third-party vendor, uses cookies to serve ads on websites. Users may opt-out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Terms & Conditions", route: "/terms-conditions", description: "Our platform terms." },
            { title: "Privacy Policy", route: "/privacy-policy", description: "Data privacy regulations." },
            { title: "Cookie Policy", route: "/cookie-policy", description: "Cookie preference rules." }
          ]} 
          parentRoute="/resources" 
          currentRoute="/cookie-policy" 
          kind="Legal" 
        />
      </div>
    </div>
  );
}
