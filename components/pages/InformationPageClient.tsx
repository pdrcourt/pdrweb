'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { Settings, BookOpen, Heart, FileCheck, Star, ArrowRight, Shield, Scale, Zap, Clock, Smartphone } from 'lucide-react';

const infoLinks = [
  { title: 'How it Works', desc: 'Connect with us for more information, guidance and to know more about our services.', icon: Settings, href: '/how-it-works' },
  { title: "Beginner's Guide", desc: 'Step-by-step approach outlining the steps & processes to avail our services.', icon: BookOpen, href: '/beginner-guide' },
  { title: 'Our Ethos', desc: 'Our Constitution lays down how we exercise our power and accountability.', icon: Heart, href: '/ethos' },
  // { title: 'Case Studies', desc: 'Review our case studies to evaluate how we deal with actual real-life cases.', icon: FileCheck, href: '/case-studies' },
  // { title: 'Member Stories', desc: 'Each case is unique, adding flexibility and exposure to our services.', icon: Star, href: '/member-stories' },
];

const features = [
  { icon: Shield, title: 'Get Legally Protected', text: 'Secure your business against any future conflict.' },
  { icon: Scale, title: 'Impartial Justice', text: 'Parties select the arbitrator together for unbiased decisions.' },
  { icon: Zap, title: 'Secure Your Deals', text: 'Arbitration clauses help resolve future disputes effectively.' },
  { icon: Clock, title: 'Business Continuity', text: 'Preserve & protect your business relations.' },
];

const platformCards = [
  { title: 'Our Process', desc: 'Comprehend all essential elements of our business process.', icon: Settings },
  { title: 'Your Guide', desc: 'Step-by-step approach outlining the steps & processes.', icon: BookOpen },
  { title: 'Our Constitution', desc: 'How we exercise our power and accountability.', icon: Heart },
  { title: 'Cases & Stories', desc: 'Demonstrative quantifiable results from real-life cases.', icon: FileCheck },
];

export default function InformationPageClient() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-cream text-dark">
        <HeroBanner variant="split" title="Information" titleAccent="Guides, Stories & Model" badge="Knowledge Base"
          description="For any inquiries, guidance, or to schedule a personalized demo of our ADR process, feel free to contact our support and sales team. Our dedicated team will respond within two working days."
          breadcrumb={['Information']} image="/images/hero_slide_2.png"
          accentColor="from-primary-600 via-amber-500 to-stone-900"
          stats={[{ value: '2 Days', label: 'Response Time' }, { value: '24/7', label: 'Platform Access' }, { value: '12', label: 'Languages' }, { value: '100+', label: 'Cities' }]}
          tags={['Guided', 'Transparent', 'Digital', 'Accessible']} />

        {/* Info Links */}
        <section id="content" className="py-20 lg:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Explore</span>
              <h2 className="heading-lg mb-4">Know More About Our Platform</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {infoLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a key={link.title} href={link.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl bg-cream border border-cream-300 p-7 transition-all hover:-translate-y-2 hover:shadow-gold-lg hover:border-primary/30 hover:bg-white">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{link.title}</h3>
                    <p className="text-sm text-ink-60 leading-relaxed mb-4">{link.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Zig-Zag */}
        <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="section-label">Our Platform</span>
                <h2 className="heading-lg mb-6">PDR COURT: Trust & Sincerity</h2>
                <p className="text-ink-60 leading-relaxed mb-6">PDR COURT has carved a unique place in the space of Dispute Resolution and arrived at a clear positioning of the digital platform.</p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        className="rounded-xl bg-white border border-cream-300 p-4 hover:shadow-gold transition-all">
                        <Icon className="w-5 h-5 text-primary mb-2" />
                        <h4 className="font-semibold text-sm text-dark mb-1">{f.title}</h4>
                        <p className="text-xs text-ink-55">{f.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="rounded-2xl bg-dark text-white p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Platform Highlights</span>
                  <h3 className="text-2xl font-bold mt-4 mb-6">How the PDR COURT Platform Works</h3>
                  <div className="space-y-4">
                    {platformCards.map((c, i) => {
                      const Icon = c.icon;
                      return (
                        <div key={i} className="flex items-start gap-4 rounded-xl bg-white/5 border border-white/10 p-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">{c.title}</h4>
                            <p className="text-xs text-paper-50">{c.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Section */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="heading-lg mb-4">The PDR COURT App</h2>
              <p className="body-lg max-w-2xl mx-auto mb-8">Review testimony and evidence, attend hearings, and resolve disputes — all within our mobile application.</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="btn-primary">Google Play</a>
                <a href="#" className="btn-outline">App Store</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ContactForm title="Got any Questions?" subtitle="Write to us" showInformationType informationTypes={['Process Info', 'Case Study Request', 'Demo Request', 'General']} />
          </div>
        </section>

        <CtaBanner title="Explore, Learn & Resolve" subtitle="Start your journey" description="Discover how PDR COURT makes dispute resolution simple, accessible, and trustworthy." variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
