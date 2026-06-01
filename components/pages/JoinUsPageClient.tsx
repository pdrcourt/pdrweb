'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import ReasonsWhySection from '@/components/sections/ReasonsWhySection';
import WorkCultureSection from '@/components/sections/WorkCultureSection';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { Gavel, Handshake, FolderKanban, Settings, Code, ArrowRight } from 'lucide-react';

const roles = [
  { title: 'Arbitrator', desc: 'Join our Expert Panel of Arbitrators and gain global recognition through our platform.', icon: Gavel, href: '/careers/arbitrator' },
  { title: 'Conciliator', desc: 'Facilitate settlements by providing valuable suggestions and insights to both parties.', icon: Handshake, href: '/careers/conciliator' },
  { title: 'Case Manager', desc: 'Play a crucial role in dispute resolution — manage case files and drive business development.', icon: FolderKanban, href: '/careers/case-manager' },
  { title: 'ERP Management', desc: 'Optimize resource allocation for efficient and cost-effective operations.', icon: Settings, href: '/careers/erp-manager' },
  { title: 'IT Developer', desc: 'Create innovative software solutions that empower organizations and drive digital transformation.', icon: Code, href: '/careers/it-developers' },
];

export default function JoinUsPageClient() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-cream text-dark">
        <HeroBanner variant="centered" title="Join Us" titleAccent="Be Part of the Mission" badge="Careers & Member Network"
          description="We are on a journey to drive towards the realm of Nyaya, where everything is rooted in truth. We hire professionals who believe in delivering independent thinking and talent development."
          breadcrumb={['Join Us']} accentColor="from-stone-900 via-primary-700 to-primary-400" />

        <section id="content" className="py-20 lg:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Open Positions</span>
              <h2 className="heading-lg mb-4">If You Think Like Us, Come Join Us</h2>
              <p className="body-lg max-w-2xl mx-auto">PDR COURT is committed to fostering an inclusive and positive culture. We celebrate diversity, ensuring everyone is respected and inspired to deliver their best.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.a key={r.title} href={r.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl bg-cream border border-cream-300 p-7 transition-all hover:-translate-y-2 hover:shadow-gold-lg hover:border-primary/30 hover:bg-white">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="text-sm text-dark/60 leading-relaxed mb-4">{r.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture Values */}
        <section className="py-20 lg:py-28 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(131,64,9,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(131,64,9,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-6">Our Values</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">We Build Connections on Trust</h2>
              <p className="text-lg text-white/65 max-w-3xl mx-auto leading-relaxed mb-10">
                By continuously challenging ourselves, we aim to reach new heights. We believe in forging lasting connections built on the pillars of Trust, Honesty, Integrity, Transparency, and Empathy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['Trust', 'Honesty', 'Integrity', 'Transparency', 'Empathy'].map((v, i) => (
                  <motion.div key={v} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-primary/30 transition-all">
                    <div className="text-2xl font-display font-bold text-primary mb-2">{String(i + 1).padStart(2, '0')}</div>
                    <p className="text-sm font-semibold text-white">{v}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <WorkCultureSection />
        <ReasonsWhySection columns={5} />

        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ContactForm title="Got any Questions?" subtitle="Write to us" showInformationType informationTypes={['Career Inquiry', 'Role Information', 'Membership', 'General']} />
          </div>
        </section>

        <CtaBanner title="Ready to Make a Difference?" subtitle="Join the team" description="Join PDR COURT and contribute to building a trusted platform for fair dispute resolution." variant="dark" />
      </main>
      <Footer />
    </>
  );
}
