'use client';

import { motion } from 'framer-motion';
import { FooterExperiencePage } from '@/lib/footer-content';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import ProcessFlowSection from '@/components/sections/ProcessFlowSection';
import RecoveryProcessSection from '@/components/sections/RecoveryProcessSection';
import ReasonsWhySection from '@/components/sections/ReasonsWhySection';
import EditorialHeroDecor from '@/components/ui/EditorialHeroDecor';

export default function ServiceDetailTemplate({ page }: { page: FooterExperiencePage }) {
  const hasSections = page.sections && page.sections.length > 0;
  const isEnterprise = page.route === '/solutions/enterprise';

  return (
    <div className="bg-cream min-h-screen">
      {/* Immersive Service Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream">
        <EditorialHeroDecor />
        <div className="pointer-events-none absolute -top-24 -right-20 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[140px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Shield className="w-4 h-4" />
                <span>{page.eyebrow}</span>
              </div>
              <h1 className="font-editorial font-medium text-[clamp(2.6rem,7vw,5rem)] text-ink-85 mb-6 leading-[1.0] tracking-tight">
                {page.title}
              </h1>
              <p className="text-lg md:text-xl text-ink-60 leading-relaxed mb-10 max-w-xl">
                {page.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#details" className="btn-outline">
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {isEnterprise ? (
        /* ==================== CUSTOM HIGH-FIDELITY ENTERPRISE PAGE LAYOUT ==================== */
        <div className="bg-cream">
          {/* Side-by-Side Problem vs Solution Comparative Grid */}
          <section id="details" className="py-20 lg:py-28 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <span className="section-label">Enterprise Solutions</span>
                <h2 className="heading-lg text-dark mt-2">Vendor & Contract Dispute Resolution</h2>
                <p className="body-lg text-ink-60 max-w-2xl mx-auto mt-3">{"Maximize your enterprise's operational efficiency and protect cashflows against long legal bottlenecks."}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="bg-red-50/40 rounded-3xl p-8 border border-red-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-4">The Challenge</span>
                    <h3 className="text-2xl font-display font-bold text-dark mb-4">Unresponsive Borrowers & High NPA</h3>
                    <p className="text-sm text-ink-60 leading-relaxed mb-6">
                      Traditional recovery and dispute methods suffer from massive legal backlogs, non-cooperative counterparties, rising litigation expenses, and a continuous drain on company resources.
                    </p>
                    <ul className="space-y-3 text-sm text-ink-70">
                      <li className="flex items-center gap-2">❌ Delays of 3-5 years in traditional civil courts</li>
                      <li className="flex items-center gap-2">❌ Exploding legal and operational overheads</li>
                      <li className="flex items-center gap-2">❌ Strained business relations and broken contract values</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="bg-primary/5 rounded-3xl p-8 border border-primary/20 shadow-sm hover:shadow-gold transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Our Methodology</span>
                    <h3 className="text-2xl font-display font-bold text-dark mb-4">Indic PDR COURT ADR Solution</h3>
                    <p className="text-sm text-ink-60 leading-relaxed mb-6">
                      Leverage our modern digital legal-tech platform to fast-track debt collections, handle employee/vendor conflicts, and secure legally binding awards in less than 60 days.
                    </p>
                    <ul className="space-y-3 text-sm text-ink-70">
                      <li className="flex items-center gap-2">✨ Legally binding awards enforceable as a court decree</li>
                      <li className="flex items-center gap-2">✨ 100% digital case filing, notification, and hearings</li>
                      <li className="flex items-center gap-2">✨ Empaneled legal experts across multiple industries</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 5 Simple Steps towards Dispute Resolution */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <ProcessFlowSection variant="cards" bgColor="white" title="5 Simple Steps to Dispute Resolution" subtitle="Process Stepper" />
          </div>

          {/* Our 360-Degree Recovery Process */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <RecoveryProcessSection title="Our 360-Degree Recovery Process" subtitle="Our Methodology" />
          </div>

          {/* 15 Reasons Why PDR COURT */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <ReasonsWhySection variant="numbered" columns={3} showTitle={true} />
          </div>

          {/* Sales CTA Block */}
          <section className="py-20 bg-cream border-t border-cream-300">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <span className="section-label">Partner With Us</span>
              <h2 className="heading-lg text-dark mt-2">Have Custom Enterprise Needs?</h2>
              <p className="body-lg text-ink-60 mt-3 max-w-xl mx-auto">Contact our enterprise sales desk today to design custom arbitration protocols, setup automated API reporting, or empanel dedicated neutrals for your sector.</p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Sales Team
                </Link>
                <Link href="mailto:sales@pdrcourt.com" className="btn-secondary bg-white hover:bg-cream-100">
                  Email Sales
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* ==================== ORIGINAL ZIG ZAG LAYOUT FOR OTHER PAGES ==================== */
        <section id="details" className="py-20 lg:py-32 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {hasSections ? (
              <div className="space-y-24">
                {page.sections.map((section, idx) => (
                  <div key={idx} className={`flex flex-col gap-12 lg:items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    {/* Text Side */}
                    <div className="flex-1 space-y-6">
                      {section.heading && (
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold text-dark">
                          {section.heading}
                        </motion.h2>
                      )}
                      <div className="space-y-4">
                        {section.content.map((p, pIdx) => (
                          <motion.p key={pIdx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: pIdx * 0.1 }} className="text-lg text-ink-70 leading-relaxed">
                            {p}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual Side (Decorative box / Image block) */}
                    <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden group">
                      <div className="absolute inset-0 bg-dark/5 group-hover:bg-transparent transition-colors z-10" />
                      <img src={page.image} alt={section.heading || 'Service Feature'} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {/* Glassmorphic overlay badge */}
                      <div className="absolute bottom-6 left-6 right-6 p-6 glass-card bg-white/80 backdrop-blur-md rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="font-bold text-dark flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" /> {page.title} Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback generic layout if no structured sections */
              <div className="max-w-4xl mx-auto space-y-6">
                {page.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-lg text-ink-70 leading-relaxed">{p}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Sibling Links / Related Services */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection links={page.siblingLinks} parentRoute={page.parentRoute} currentRoute={page.route} kind="Services" />
      </div>
    </div>
  );
}
