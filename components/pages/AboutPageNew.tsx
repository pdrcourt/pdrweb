'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, MapPin, Users, Handshake, Download, ArrowRight, Scale, Shield, Zap, Clock } from 'lucide-react';

const aboutLinks = [
  { title: 'Company', desc: "India's first Indic Digital Court with robust digital infrastructure.", icon: Building2, href: '/company' },
  { title: 'Investors', desc: 'Investing in PDR COURT is investing in success, bottom line & profit.', icon: TrendingUp, href: '/investors' },
  { title: 'Offices', desc: 'Present in Delhi, Hyderabad, Bangalore, Mumbai, and more cities.', icon: MapPin, href: '/offices' },
  { title: 'Neutrals', desc: 'Highly skilled professionals with years of experience in law and business.', icon: Users, href: '/neutrals' },
  { title: 'Partners', desc: 'Partner with us and join our journey in modernizing dispute resolution.', icon: Handshake, href: '/partners' },
];

const features = [
  { icon: Shield, title: 'Get Legally Protected', text: 'We help individuals & organisations secure their business against future conflict.' },
  { icon: Scale, title: 'Impartial & Unbiased Justice', text: 'Parties select the arbitrator together ensuring impartial and unbiased decisions.' },
  { icon: Zap, title: 'Secure Your Deals', text: 'Arbitration clauses resolve future disputes in a timely and cost-effective manner.' },
  { icon: Clock, title: 'Business Continuity', text: 'Preserve & protect your business relations. Stay organised & keep out of disputes.' },
];

export default function AboutPageClient() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-cream text-dark">
        <HeroBanner variant="diagonal" title="About Us" titleAccent="Trust & Transparency" badge="Company, People & Presence"
          description="PDR COURT is building a place of trust that can ensure that everything will be established in truth. Know more about us and our associations."
          breadcrumb={['About Us']} image="/images/about-team.png" accentColor="from-primary-500 via-stone-700 to-stone-950"
          tags={['Trusted', 'Digital', 'Ethical', 'Global']} />

        {/* About Links Grid */}
        <section id="content" className="py-20 lg:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Explore</span>
              <h2 className="heading-lg mb-4">Know More About Us</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a key={link.title} href={link.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl bg-cream border border-cream-300 p-7 transition-all hover:-translate-y-2 hover:shadow-gold-lg hover:border-primary/30 hover:bg-white">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{link.title}</h3>
                    <p className="text-sm text-ink-60 leading-relaxed mb-4">{link.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                );
              })}
              {/* Download Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="rounded-2xl bg-dark text-white p-7 flex flex-col justify-between">
                <div>
                  <Download className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Brand Presentation</h3>
                  <p className="text-sm text-paper-60 leading-relaxed">Download our brand presentation to learn more about PDR COURT.</p>
                </div>
                <button className="mt-6 btn-primary w-full justify-center">Download PDF</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div key={f.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="rounded-2xl bg-white border border-cream-300 p-6 transition-all hover:shadow-gold hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-dark mb-2">{f.title}</h4>
                      <p className="text-xs text-ink-55 leading-relaxed">{f.text}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="section-label">Our Platform</span>
                <h2 className="heading-lg mb-6">PDR COURT has carved a unique place in Dispute Resolution</h2>
                <p className="text-ink-60 leading-relaxed mb-4">Aligned with technological advancement, PDR COURT is a forerunner in the digital space, providing faster and higher-quality resolutions.</p>
                <p className="text-ink-60 leading-relaxed">PDR COURT is on the journey to drive to the place of Nyaya on the world scaffold with the robust framework of seeking justice.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why PDR COURT */}
        <section className="py-20 lg:py-28 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(131,64,9,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Why PDR COURT?</h2>
              <p className="text-lg text-paper-65 max-w-3xl mx-auto leading-relaxed mb-10">
                Pitching the words and according to actions with proper care and responsibility, PDR COURT stands on the pillars of ethics and commitment to perform the just in society.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[{ val: '12.7L', label: 'Cases Reported' }, { val: '8.6L', label: 'Cases Settled' }, { val: '67%', label: 'Success Rate' }, { val: '100+', label: 'City Coverage' }].map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                    <div className="text-3xl font-display font-bold text-primary">{s.val}</div>
                    <div className="text-xs text-paper-50 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ContactForm title="Got any Questions?" subtitle="Write to us" showInformationType informationTypes={['Company Info', 'Investor Relations', 'Partnership', 'General']} />
          </div>
        </section>

        <CtaBanner title="Partner with PDR COURT" subtitle="Let's connect" description="Join our mission to make justice accessible, transparent, and efficient for everyone." variant="gradient" />
      </main>
      <Footer />
    </>
  );
}
