'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building, MapPin, Scale, Handshake, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function AboutClientPage() {
  const categories = [
    {
      title: "Company",
      description: "PDR COURT is building a place of trust that can ensure that everything will be established in truth. India's first working on a robust digital system and infrastructure for effective dispute resolution.",
      icon: Building,
      href: "/company"
    },
    {
      title: "Investors",
      description: "Our experience, business management plans and growth have set a record of high performance. Investing in PDR COURT is Investing In Success, Bottom Line & Profit.",
      icon: CheckCircle2,
      href: "/investors"
    },
    {
      title: "Offices",
      description: "We look at being present in every city of business. In keeping with this approach, we plan to expand our presence domestically and globally over the next few months.",
      icon: MapPin,
      href: "/offices"
    },
    {
      title: "Neutrals",
      description: "Our highly skilled and diligent panel of neutrals are highly skilled professionals with years of experience in law and business (Domestic & International).",
      icon: Scale,
      href: "/neutrals"
    },
    {
      title: "Partners",
      description: "Become a part of the new dispute resolution avenue which is set to disrupt the industry. Partner with us and join our sojourn in modernising the way the world does business.",
      icon: Handshake,
      href: "/partners"
    }
  ];

  const valueProps = [
    { title: "Get Legally Protected", desc: "We help Individuals & Organisations to Secure their Business against any Future Conflict." },
    { title: "Impartial & Unbiased Justice", desc: "The platform provides parties involved in the dispute to select the arbitrator together ensuring an impartial and unbiased decision." },
    { title: "Secure your Deals", desc: "Adding an Arbitration Clause to your contract Agreement helps resolve future disputes in a timely and cost-effective manner." },
    { title: "Business Continuity", desc: "Do what's correct to preserve & protect your business relations. Stay organised & keep out of disputes." },
    { title: "Trust & Conviction", desc: "We manage the process wherein effective results match the Claims. This increases the trust factor within the community." }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Editorial Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-cream-300 text-primary font-bold tracking-widest text-xs uppercase mb-8 shadow-sm">
                <span>Who We Are</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-8 leading-[1.1]">
                Building a Place of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Absolute Trust.</span>
              </h1>
              <p className="text-xl text-ink-60 font-light leading-relaxed max-w-lg mb-10">
                PDR COURT is building a foundation of truth. We ensure that everything is established through a robust digital system for effective dispute resolution and efficient enforcement.
              </p>
              <a href="#about-categories" className="btn-primary">
                Explore Our Foundation
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[500px] rounded-[3rem] overflow-hidden border border-cream-300 shadow-2xl">
              <img src="/images/happy-woman-posing.jpg" alt="About PDR Court" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%2301142D"/%3E%3C/svg%3E'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl">
                  <p className="text-white font-medium text-lg leading-snug">&ldquo;Everyone must get the best judgement and follow a just system for society & businesses to remain dispute-free.&rdquo;</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories / Organization Structure */}
      <section id="about-categories" className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Our Organization</span>
            <h2 className="heading-lg text-dark mt-4">Discover Our Divisions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Link href={cat.href} className="group block bg-white p-8 rounded-3xl border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <cat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-ink-60 leading-relaxed flex-1 mb-8">{cat.description}</p>
                  <div className="flex items-center text-sm font-bold text-dark uppercase tracking-widest group-hover:text-primary transition-colors mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-20 lg:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/30 via-transparent to-transparent opacity-50" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-5xl font-display font-light mb-6">
                Carving a unique place in <span className="text-primary-300 font-bold">Dispute Resolution</span>
              </h2>
              <p className="text-paper-60 leading-relaxed text-lg">
                Aligned with technological advancement, we are a forerunner in the digital space, providing faster and higher-quality resolutions through trust & sincerity.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {valueProps.map((prop, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-md">
                  <h3 className="text-xl font-bold text-primary-300 mb-3">{prop.title}</h3>
                  <p className="text-paper-60 text-sm leading-relaxed">{prop.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Company", route: "/company", description: "Learn about our mission." },
            { title: "Investors", route: "/investors", description: "Financial and growth plans." },
            { title: "Partners", route: "/partners", description: "Join our ecosystem." }
          ]} 
          parentRoute="/" 
          currentRoute="/about" 
          kind="About Us" 
        />
      </div>
    </div>
  );
}
