'use client';

import { motion } from 'framer-motion';
import { FooterExperiencePage } from '@/lib/footer-content';
import { BookOpen, Search, ArrowRight, Lightbulb } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import Link from 'next/link';

export default function KnowledgeBaseTemplate({ page }: { page: FooterExperiencePage }) {
  const hasSections = page.sections && page.sections.length > 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Gradient Overlay Hero with Search aesthetic */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 via-transparent to-amber-500/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-8">
              <Lightbulb className="w-8 h-8 text-primary-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {page.title}
            </h1>
            
            <p className="text-xl text-paper-70 leading-relaxed mb-10 max-w-2xl mx-auto">
              {page.description}
            </p>
            
            {/* Fake Search Bar for Aesthetic */}
            <div className="w-full max-w-xl relative mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-paper-40" />
              <input type="text" placeholder={`Search ${page.title.toLowerCase()}...`} readOnly
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none backdrop-blur-md cursor-default" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Card Content Layout */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {hasSections ? (
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l border-primary/20 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16 py-8">
                {page.sections.map((section, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-0 w-8 h-8 rounded-full bg-cream border-2 border-primary flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-300 hover:shadow-md transition-shadow">
                      {section.heading && (
                        <h2 className="text-2xl font-display font-bold text-dark mb-4 flex items-center justify-between">
                          {section.heading}
                          <span className="text-primary/30 text-4xl font-black">{(idx + 1).toString().padStart(2, '0')}</span>
                        </h2>
                      )}
                      
                      <div className="space-y-4 prose prose-p:text-ink-70 max-w-none">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.paragraphs.map((p, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} 
                  className="bg-white rounded-2xl p-8 shadow-sm border border-cream-300 hover:shadow-md transition-shadow flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-ink-70 leading-relaxed mb-6 flex-1">{p}</p>
                  <Link href="#" className="text-primary font-semibold flex items-center group mt-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection links={page.siblingLinks} parentRoute={page.parentRoute} currentRoute={page.route} kind="Information" />
      </div>
    </div>
  );
}
