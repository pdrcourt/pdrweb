'use client';

import { motion } from 'framer-motion';
import { FooterExperiencePage } from '@/lib/footer-content';
import { ChevronDown, Download, FileText, ArrowRight } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import { useState } from 'react';

export default function MediaDetailTemplate({ page }: { page: FooterExperiencePage }) {
  const hasSections = page.sections && page.sections.length > 0;
  
  // Accordion state for FAQ-style sections
  const [openSection, setOpenSection] = useState<number | null>(0);

  const isMediaKit = page.route.includes('media-kit');
  const isFAQ = page.route.includes('faq');

  return (
    <div className="bg-cream min-h-screen">
      {/* Editorial Style Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{page.eyebrow}</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark leading-tight">
              {page.title}
            </h1>
            <p className="text-xl md:text-2xl text-dark/60 font-light max-w-3xl mx-auto leading-relaxed">
              {page.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Variable based on route type */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {isFAQ ? (
            // FAQ Layout - Accordions
            <div className="space-y-4">
              {hasSections ? (
                page.sections.map((section, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <button 
                      onClick={() => setOpenSection(openSection === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left bg-white p-6 rounded-2xl shadow-sm border border-cream-300 hover:border-primary/30 transition-colors"
                    >
                      <span className="text-xl font-bold text-dark pr-8">{section.heading || `Question ${idx + 1}`}</span>
                      <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${openSection === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openSection === idx && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-white/50 px-6 pb-6 pt-2 border-x border-b border-cream-300 rounded-b-2xl -mt-2">
                        <div className="space-y-4 pt-4 border-t border-cream-300">
                          {section.content.map((p, pIdx) => (
                            <p key={pIdx} className="text-dark/70 leading-relaxed">{p}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-cream-300">
                  <div className="space-y-6">
                    {page.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-lg text-dark/70 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : isMediaKit ? (
            // Media Kit Layout - Asset Grid
            <div className="space-y-16">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-cream-300">
                <h2 className="text-3xl font-display font-bold text-dark mb-8">Brand Assets</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Mock Assets based on content */}
                  {[
                    { title: "PDR COURT Logo (Dark)", type: "SVG, PNG", icon: Download },
                    { title: "PDR COURT Logo (Light)", type: "SVG, PNG", icon: Download },
                    { title: "Brand Guidelines", type: "PDF", icon: FileText },
                    { title: "Executive Headshots", type: "ZIP", icon: Download }
                  ].map((asset, i) => (
                    <div key={i} className="group flex items-center justify-between p-6 rounded-2xl bg-cream border border-cream-300 hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <asset.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-bold text-dark">{asset.title}</h4>
                          <span className="text-sm text-dark/50">{asset.type}</span>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-dark/20 group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
              
              {hasSections && (
                <div className="space-y-12">
                  {page.sections.map((section, idx) => (
                    <div key={idx}>
                      {section.heading && <h2 className="text-2xl font-display font-bold text-dark mb-4">{section.heading}</h2>}
                      <div className="space-y-4">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx} className="text-dark/70 leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Article / News Layout - Blog Roll Style
            <div className="space-y-12">
              {hasSections ? (
                page.sections.map((section, idx) => (
                  <motion.article key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-cream-300 group">
                    {section.heading && (
                      <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                        {section.heading}
                      </h2>
                    )}
                    <div className="flex items-center gap-4 text-sm text-dark/40 mb-6">
                      <span>Press Release</span>
                      <span>•</span>
                      <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="space-y-4 prose prose-p:text-dark/70 max-w-none mb-8">
                      {section.content.slice(0, 3).map((p, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">{p}</p>
                      ))}
                    </div>
                    <button className="text-primary font-bold uppercase tracking-wider text-sm flex items-center hover:text-primary-600 transition-colors">
                      Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </motion.article>
                ))
              ) : (
                <div className="prose prose-lg max-w-none">
                  {page.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-dark/70 leading-relaxed">{p}</p>
                  ))}
                </div>
              )}
            </div>
          )}
          
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection links={page.siblingLinks} parentRoute={page.parentRoute} currentRoute={page.route} kind="Media" />
      </div>
    </div>
  );
}
