'use client';

import { motion } from 'framer-motion';
import { FooterExperiencePage } from '@/lib/footer-content';
import { ArrowRight, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';
import CareerApplicationForm from '@/components/sections/CareerApplicationForm';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function CareerDetailTemplate({ page }: { page: FooterExperiencePage }) {
  const hasSections = page.sections && page.sections.length > 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Tech-Focused Dark Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark text-white overflow-hidden">
        {/* Animated glowing orbs background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000" />
        
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.2 }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-paper-80 rounded-full text-xs font-semibold tracking-wider uppercase">Open Role</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-primary-300 text-sm font-medium">{page.eyebrow}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              {page.title}
            </h1>
            <p className="text-lg md:text-xl text-paper-60 leading-relaxed mb-8">
              {page.description}
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#apply" className="btn-primary hover:scale-105 transition-transform">
                Apply for this role
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <div className="flex items-center gap-2 text-sm text-paper-50">
                <Briefcase className="w-4 h-4" /> Full Time / Contract
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Screen Layout for Content */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            
            {/* Left Content Column */}
            <div className="space-y-16">
              {hasSections ? (
                page.sections.map((section, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    {section.heading && (
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-6 flex items-center gap-3">
                        <FileCheck className="w-6 h-6 text-primary" />
                        {section.heading}
                      </h2>
                    )}
                    <div className="space-y-4 prose prose-lg prose-p:text-ink-70 prose-li:text-ink-70 max-w-none">
                      {section.content.map((p, pIdx) => {
                        // If line is short and looks like a list item, render it nicely
                        if (p.length < 120 && !p.endsWith('.')) {
                          return (
                            <div key={pIdx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-cream transition-colors">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </div>
                          );
                        }
                        return <p key={pIdx} className="leading-relaxed">{p}</p>;
                      })}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="space-y-6">
                  {page.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-lg text-ink-70 leading-relaxed">{p}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sticky Column - Application Form */}
            <div className="lg:sticky lg:top-32 space-y-8" id="apply">
              <div className="bg-cream rounded-3xl p-6 border border-cream-300 shadow-sm">
                <div className="mb-6 border-b border-cream-300 pb-6">
                  <h3 className="text-xl font-bold text-dark mb-2">Submit Application</h3>
                  <p className="text-sm text-ink-60">Join the {page.title} team at PDR COURT.</p>
                </div>
                
                {/* Embedded simplified form or use the full component */}
                <CareerApplicationForm 
                  role={page.title} 
                  description="Fast-track your application by filling out this form."
                  responsibilities={
                    page.sections
                      ?.find(s => s.heading?.toLowerCase().includes('responsibilities') || s.heading?.toLowerCase().includes('roles'))
                      ?.content.map(r => r.replace(/^•\s*/, '')) || []
                  }
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Sibling Links / Other Roles */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection links={page.siblingLinks} parentRoute={page.parentRoute} currentRoute={page.route} kind="Careers" />
      </div>
    </div>
  );
}
