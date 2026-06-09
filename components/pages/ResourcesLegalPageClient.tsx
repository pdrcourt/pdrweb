'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Lock, Scale, Cookie, ArrowRight } from 'lucide-react';

const resources = [
  { title: 'Rules', desc: 'Guidelines for Arbitration, Conciliation & Mediation using the PDR COURT platform.', icon: Scale, href: '/rules' },
  { title: 'Terms & Conditions', desc: 'Terms on which users may make use of our website as a guest or account holder.', icon: FileText, href: '/terms' },
  { title: 'Privacy Policy', desc: 'How we protect your personal information when accessing our website.', icon: Lock, href: '/privacy' },
  { title: 'Disclaimer', desc: 'Legal disclaimers about responsibility for damages from use of our services.', icon: ShieldCheck, href: '/disclaimer' },
  { title: 'Cookie Policy', desc: 'Our cookie policy, what data we collect, and how it is used.', icon: Cookie, href: '/cookies' },
];

export default function ResourcesLegalPageClient() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-cream text-dark">
        <HeroBanner variant="overlay" title="Resources & Legal" badge="Policies, Rules & Compliance"
          description="PDR COURT believes that everyone must get the best judgement and follow a just system for society & businesses to remain dispute-free. Read our Rules, Policies, Terms and Legal Disclaimers."
          breadcrumb={['Resources & Legal']} image="/images/arbitration.png"
          accentColor="from-primary-800 via-stone-800 to-stone-950" />

        <section id="content" className="py-20 lg:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Legal Framework</span>
              <h2 className="heading-lg mb-4">Our Governance Documents</h2>
              <p className="body-lg max-w-2xl mx-auto">Access all rules, policies, terms and legal documentation governing the PDR COURT platform.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {resources.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.a key={r.title} href={r.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl bg-cream border border-cream-300 p-7 transition-all hover:-translate-y-2 hover:shadow-gold-lg hover:border-primary/30 hover:bg-white">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="text-sm text-ink-60 leading-relaxed mb-4">{r.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-20 lg:py-28 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(131,64,9,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-6">Compliance</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">100% Compliant with Digital Personal Data Protection Act, 2023</h2>
                <p className="text-paper-60 leading-relaxed">PDR COURT is a neutral platform facilitating alternative dispute resolution through arbitration and conciliation. It is not an arbitral institution, tribunal, or adjudicatory authority.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="grid grid-cols-2 gap-4">
                {[{ v: 'DPDPA', l: 'Compliant' }, { v: 'ADR/ODR', l: 'Focused' }, { v: '18+', l: 'Min Age' }, { v: '256-bit', l: 'SSL Encrypted' }].map((s, i) => (
                  <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
                    <div className="text-xl font-display font-bold text-primary">{s.v}</div>
                    <div className="text-xs text-paper-50 mt-1">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ContactForm title="Ask Us" subtitle="Write to us at legal@pdrcourt.com" showInformationType informationTypes={['Rules', 'Terms', 'Privacy', 'Disclaimer', 'Cookies', 'General']} />
          </div>
        </section>

        <CtaBanner title="Transparency is Our Promise" subtitle="Legal framework" description="Every process is governed by clear rules and policies." variant="dark" />
      </main>
      <Footer />
    </>
  );
}
