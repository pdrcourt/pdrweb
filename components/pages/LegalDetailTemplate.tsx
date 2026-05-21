'use client';

import { motion } from 'framer-motion';
import { FooterExperiencePage } from '@/lib/footer-content';
import { ShieldCheck, Scale } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function LegalDetailTemplate({ page }: { page: FooterExperiencePage }) {
  // Extract a table of contents from the sections or use simple scrolling text
  const hasSections = page.sections && page.sections.length > 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Authoritative, clean Legal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark text-white border-b-8 border-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-start">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-8">
              <ShieldCheck className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {page.title}
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
              {page.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reading Optimized Content Layout */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Table of Contents / Sidebar navigation */}
            <div className="hidden lg:block sticky top-32">
              <h4 className="text-sm font-bold text-dark/40 uppercase tracking-widest mb-6">In this document</h4>
              <nav className="space-y-3 border-l-2 border-cream-300">
                {hasSections ? (
                  page.sections.map((s, idx) => (
                    s.heading && (
                      <a key={idx} href={`#section-${idx}`} className="block pl-4 text-sm text-dark/60 hover:text-primary hover:border-l-2 hover:border-primary -ml-[2px] transition-all">
                        {s.heading.slice(0, 40)}{s.heading.length > 40 ? '...' : ''}
                      </a>
                    )
                  ))
                ) : (
                  <a href="#content" className="block pl-4 text-sm text-primary font-bold border-l-2 border-primary -ml-[2px]">
                    Document Body
                  </a>
                )}
              </nav>
              <div className="mt-12 p-6 bg-white rounded-2xl border border-cream-300 shadow-sm">
                <Scale className="w-6 h-6 text-primary mb-4" />
                <h5 className="font-bold text-dark mb-2">Legal Support</h5>
                <p className="text-xs text-dark/60 mb-4">Need help understanding our policies?</p>
                <a href="mailto:legal@pdrcourt.com" className="text-sm text-primary font-bold hover:underline">Contact Legal Team</a>
              </div>
            </div>

            {/* Document Content */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-cream-300" id="content">
              {hasSections ? (
                <div className="space-y-12">
                  {page.sections.map((section, idx) => (
                    <motion.div key={idx} id={`section-${idx}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      {section.heading && (
                        <h2 className="text-2xl font-bold text-dark mb-6 pb-4 border-b border-cream-300">
                          {section.heading}
                        </h2>
                      )}
                      <div className="space-y-4 prose prose-p:text-dark/70 prose-li:text-dark/70 max-w-none">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 prose prose-lg prose-p:text-dark/70 max-w-none">
                  {page.lines.map((line, i) => {
                    if (!line.trim()) return null;
                    const isHeading = line.length < 100 && !line.endsWith('.') && !line.endsWith(',') && !line.endsWith(';');
                    if (isHeading && line.length > 3) {
                      return <h2 key={i} className="text-xl font-bold text-dark mt-8 mb-4">{line}</h2>;
                    }
                    return <p key={i} className="text-dark/70 leading-relaxed mb-4">{line}</p>;
                  })}
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection links={page.siblingLinks} parentRoute={page.parentRoute} currentRoute={page.route} kind="Legal Resources" />
      </div>
    </div>
  );
}
