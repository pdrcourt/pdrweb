'use client';

import { motion } from 'framer-motion';
import { FooterExperiencePage } from '@/lib/footer-content';
import { Building2, TrendingUp, Users } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import TimelineSection from '@/components/sections/TimelineSection';

export default function AboutDetailTemplate({ page }: { page: FooterExperiencePage }) {
  const hasSections = page.sections && page.sections.length > 0;
  const isCompany = page.route === '/company';

  // Icon mapper based on page key
  const getHeroIcon = () => {
    if (page.route.includes('investors')) return <TrendingUp className="w-8 h-8 text-primary" />;
    if (page.route.includes('partners')) return <Users className="w-8 h-8 text-primary" />;
    return <Building2 className="w-8 h-8 text-primary" />;
  };

  // Timeline items parsed dynamically or statically from company data
  const timelineItems = [
    { date: 'MAR 2019', title: 'Bootstrapped with ad hoc investment of 15 Lac. Invested in idea creation and brand.' },
    { date: 'JAN 2020', title: 'Reached break-even and sustained the earnings. Executed the plan for SOP formation and training with experts to create a better environment.' },
    { date: 'MAR 2020', title: 'Worked on creating the final packaging plans and their execution. Hired our first full-time arbitrator. Started working in 11 Languages.' },
    { date: 'OCT 2020', title: 'Applied for Company Registration with successful market research and basic market implementation. Started company with communication offices in Mumbai, Delhi, Hyderabad & Bangalore.' },
    { date: 'DEC 2020', title: 'Our website went live. Started implementing long-term plans for applicants with Membership options.' },
    { date: 'MAR 2021', title: 'Received multiple disputes of INR 9 Cr. We set a target to resolve in 60 days, and we did it.' },
    { date: 'AUG 2021', title: 'Started publishing our Dispute Resolution paper that will change this domain.' },
    { date: 'DEC 2021', title: 'Crossed 20 Cr monthly volume average of 10000 disputes a month.' },
    { date: 'JAN 2022', title: 'Started physical conciliation centers in Mumbai & Delhi.' },
    { date: 'SEP 2022', title: 'Published our first book “Dispute Resolution Via Negotiation“.' },
    { date: 'DEC 2022', title: 'Published our new website.' },
    { date: 'Nov 2023', title: 'Received cases from more than 30 NBFCs & Banks.' },
    { date: 'Mar 2024', title: 'Released multiple automations in our Software.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Clean, Typography-Driven Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-cream overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-cream-300 flex items-center justify-center mb-8">
              {getHeroIcon()}
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-display font-bold text-dark mb-8 leading-[1.1] tracking-tight">
              {page.title}
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-dark/60 leading-relaxed font-light max-w-2xl">
              {isCompany ? "Building India's leading online dispute resolution infrastructure on modern software, robust processes, and deep ethics." : page.description}
            </motion.p>
          </div>
        </div>
      </section>

      {isCompany ? (
        /* ==================== CUSTOM HIGH-FIDELITY COMPANY PAGE LAYOUT ==================== */
        <div className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Stats Bento Grid */}
            <div className="text-center mb-10">
              <span className="section-label">Performance Metrics</span>
              <h2 className="heading-lg text-dark mt-2">PDR COURT Growth Metrics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream rounded-3xl p-8 border border-cream-300 hover:shadow-gold hover:-translate-y-1 transition-all text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-dark/50">Cases Reported in 2024</span>
                <div className="text-5xl font-display font-bold mt-4 text-primary">12.7 Lac</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-cream rounded-3xl p-8 border border-cream-300 hover:shadow-gold hover:-translate-y-1 transition-all text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-dark/50">Settled Cases in 2024</span>
                <div className="text-5xl font-display font-bold mt-4 text-primary">8.6 Lac</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-cream rounded-3xl p-8 border border-cream-300 hover:shadow-gold hover:-translate-y-1 transition-all text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-dark/50">Success Record</span>
                <div className="text-5xl font-display font-bold mt-4 text-primary">67%</div>
              </motion.div>
            </div>

            {/* Philosophy Sanskrit Quote Block */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="bg-cream border border-cream-300 rounded-[2.5rem] p-8 lg:p-14 max-w-4xl mx-auto mb-24 text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-6">
                Our Philosophy
              </span>
              <blockquote className="text-xl md:text-2xl font-display font-semibold text-dark italic mb-6 leading-relaxed">
                {"\"नास्ति सत्यसमो धर्मो न सत्याद्विद्यते परम्।"}
                <br />
                {"न हि तीव्रतरं किञ्चिद् नृतादिह विद्यते।।\""}
              </blockquote>
              <p className="text-xs font-semibold text-dark/45 uppercase tracking-wider mb-6">Nāsti Satyasamo Dharmo Na Satyādvidyate Paraṁ. Na hi Tīvrataraṁ Kiñchid Nr̥tādih Vidyate.</p>
              <div className="h-px w-20 bg-primary/20 mx-auto mb-6" />
              <p className="text-base md:text-lg text-dark/70 leading-relaxed max-w-2xl mx-auto italic">
                {"\"There is no other religion like truth. nothing but the truth. Nothing is more intense than a lie.\""}
              </p>
              <p className="text-xs text-dark/40 mt-3 font-semibold">सत्य जैसा अन्य धर्म नहीं। सत्य से पर कुछ नहीं। असत्य से ज्यादा तीव्रतर कुछ नहीं।</p>
            </motion.div>

            {/* Timeline Growth Story */}
            <div className="relative mb-24 -mx-4 sm:-mx-6 lg:-mx-8">
              <TimelineSection items={timelineItems} title="Our Growth Story" subtitle="Journey" />
            </div>

            {/* Management Executives */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="section-label">Our Leadership</span>
                <h2 className="heading-lg text-dark mt-2">Executive Management</h2>
                <p className="body-lg text-dark/60 max-w-xl mx-auto mt-3">Empowering businesses with modern legal-tech and strategic operational agility.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* the team */}
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="bg-cream rounded-[2rem] border border-cream-300 p-8 lg:p-10 shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-cream-300">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-dark mb-1">the team</h3>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-6">CEO / Founder / Promoter</span>
                    <p className="text-sm text-dark/70 leading-relaxed mb-4">
                      {"Meet the team, the dynamic CEO at the helm of PDR COURT, India's pioneering online dispute resolution platform. Ankit's strategic vision, fortified by an MBA in Business Management and a Computer Science Engineering degree, positions him as a quintessential leader blending visionary acumen with technical prowess."}
                    </p>
                    <p className="text-sm text-dark/70 leading-relaxed">
                      {"With over a decade in Legal-Tech product development, including roles at the United Nations and global legal publishers, Ankit excels in shaping PDR COURT's trajectory."}
                    </p>
                  </div>
                </motion.div>
                
                {/* Mahadev Gitte */}
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="bg-cream rounded-[2rem] border border-cream-300 p-8 lg:p-10 shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-cream-300">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-dark mb-1">Mahadev Gitte</h3>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-6">Chief Operating Officer (COO)</span>
                    <p className="text-sm text-dark/70 leading-relaxed mb-4">
                      Mr. Mahadev Gitte is an accomplished professional serving as the Chief Operating Officer (COO) at PDR COURT. With a proven track record in operational leadership, he meticulously oversees day-to-day activities, ensuring seamless processes and optimal efficiency.
                    </p>
                    <p className="text-sm text-dark/70 leading-relaxed">
                      A seasoned team manager, he fosters a positive and collaborative work culture, building and leading high-performing teams with a keen eye for financial management and quality assurance.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* ==================== ORIGINAL MASONRY LAYOUT FOR OTHER PAGES ==================== */
        <section className="py-20 lg:py-32 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
              {/* Feature Image Block */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-12 lg:col-span-5 h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden relative group">
                <img src={page.image} alt={page.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="px-4 py-2 bg-primary/90 backdrop-blur text-white text-sm font-bold rounded-full mb-4 inline-block">
                    {page.eyebrow}
                  </span>
                </div>
              </motion.div>

              {/* Content Blocks */}
              <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-6 lg:gap-8">
                {hasSections ? (
                  page.sections.map((section, idx) => {
                    const isFeatured = idx === 0;
                    return (
                      <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                        className={`bg-cream rounded-[2rem] border border-cream-300 p-8 lg:p-12 ${isFeatured ? 'flex-1' : ''}`}>
                        {section.heading && (
                          <h2 className={`font-display font-bold text-dark mb-6 ${isFeatured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                            {section.heading}
                          </h2>
                        )}
                        <div className="space-y-4">
                          {section.content.map((p, pIdx) => (
                            <p key={pIdx} className={`text-dark/70 leading-relaxed ${isFeatured ? 'text-lg' : 'text-base'}`}>
                              {p}
                            </p>
                          ))}
                        </div>
                        {isFeatured && (
                          <div className="mt-10 pt-10 border-t border-cream-300 grid grid-cols-2 gap-8">
                            <div>
                              <div className="text-3xl font-display font-bold text-primary mb-1">100+</div>
                              <div className="text-sm font-semibold text-dark/50 uppercase tracking-wider">Global Partners</div>
                            </div>
                            <div>
                              <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
                              <div className="text-sm font-semibold text-dark/50 uppercase tracking-wider">Support Available</div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="bg-cream rounded-[2rem] border border-cream-300 p-8 lg:p-12 flex-1">
                    <div className="space-y-6">
                      {page.paragraphs.map((p, idx) => (
                        <p key={idx} className="text-lg text-dark/70 leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection links={page.siblingLinks} parentRoute={page.parentRoute} currentRoute={page.route} kind="About" />
      </div>
    </div>
  );
}
