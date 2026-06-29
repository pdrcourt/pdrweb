'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Phone, Mail, CheckCircle2, ArrowRight, 
  ShieldCheck, FileText, Award, BookOpen, Users, 
  HelpCircle, ChevronRight, Check, CheckCircle
} from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function IndividualsClientPage() {
  const [formData, setFormData] = useState({
    SingleLine: '', // First Name
    SingleLine1: '', // Last Name
    Email: '', // Email
    PhoneNumber_countrycode: '', // Tel/Mobile
    SingleLine2: '', // Name of Business
    SingleLine3: '', // Your Position
    SingleLine4: '', // Type of Industry
    SingleLine5: '', // Serving Customer Size
    Dropdown: '-Select-', // Contracts size
    DecisionBox: true // Consent
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const steps = [
    { title: "Purchase", desc: "Select and acquire standard dispute paper online or offline." },
    { title: "Mutually Agreed", desc: "All contracting parties sign and accept institutional ODR terms." },
    { title: "Legally Enforced", desc: "Dispute clause legally integrated, binding under the Arbitration Act." },
    { title: "Dispute Resolution", desc: "PDR COURT neutral panel handles all disputes seamlessly." },
    { title: "Award", desc: "Enforceable award issued under the Arbitration and Conciliation Act, 1996." }
  ];

  const perks = [
    {
      title: "Case Review",
      desc: "Our PDR COURT-appointed line-up of experts will review your case meticulously to create a precise overview."
    },
    {
      title: "Supporting Documents",
      desc: "Provide supporting documents with pre-formats and in-depth training so you don't have to hire expensive experts."
    },
    {
      title: "Training",
      desc: "We provide practical exposure and training on how to present your case in front of appointed neutrals."
    },
    {
      title: "Applicability",
      desc: "Look at industry standard practices and analyze the applicability of the same in your specific case."
    },
    {
      title: "Preparation",
      desc: "Prepare all documentation required under the specific law, depending on the region of arbitration selected."
    },
    {
      title: "Expert Help",
      desc: "Leverage cutting-edge technology and software solutions to enhance your dispute resolution experience."
    }
  ];

  const reasons = [
    "Free from S.16 Arbitration and Conciliation Act and jurisdiction issues.",
    "Old disputes are resolved at the lowest price.",
    "Immense trust due to our strong brand reputation.",
    "No cost for conciliation and arbitration proceedings until the award is issued.",
    "No formal legal education is required to file and attend sessions.",
    "60-day timeline to resolve all arbitration cases.",
    "Timely Management Information System (MIS) and reporting through our advanced software.",
    "Technology-driven processes enhance efficiency and transparency.",
    "Comprehensive support until the execution of the award.",
    "User-friendly platform designed for ease of access and navigation.",
    "Digital records and documentation ensure secure and organized case management.",
    "Continuous updates and notifications keep clients informed throughout the process.",
    "48 Hours Service Level Agreement (SLA).",
    "12 Indian Languages supported.",
    "International Coverage for cross-border issues."
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const urlParams = new URLSearchParams(Object.entries(formData).map(([k, v]) => [k, String(v)]));
      await fetch("https://forms.zohopublic.in/PDR Court/form/ServiceRequests/formperma/ucpNHJZgM2sujeWHSVOseDgInftYsUnFfwcYBl7U4uw/htmlRecords/submit", {
        method: "POST",
        body: urlParams,
        mode: 'no-cors'
      });
      setStatus('success');
      setFormData({
        SingleLine: '',
        SingleLine1: '',
        Email: '',
        PhoneNumber_countrycode: '',
        SingleLine2: '',
        SingleLine3: '',
        SingleLine4: '',
        SingleLine5: '',
        Dropdown: '-Select-',
        DecisionBox: true
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>ADR Services for Individuals & Freelancers</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Individuals.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
                We specialize in Alternate Dispute Resolution tailored for individuals, providing a seamless experience for sole proprietors and independent contractors to navigate business challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#sales" className="btn-primary py-3 px-8 text-sm">Consult an Expert</a>
                <a href="#perks" className="px-6 py-3 border border-white/25 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">Explore Perks</a>
              </div>
            </motion.div>

            <div className="relative flex justify-center items-center lg:h-[450px]">
              <div className="w-72 h-96 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl relative z-20 hover:scale-105 transition-transform duration-300">
                <img decoding="async" src="/images/businesswoman-smiling.jpg" alt="Businesswoman Smiling" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl absolute left-8 top-16 z-10 hover:scale-105 transition-transform duration-300 hidden md:block">
                <img loading="lazy" decoding="async" src="/images/man-working-in-laptop.jpg" alt="Man working on laptop" className="w-full h-full object-cover opacity-70" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Screen Callout */}
      <section className="py-16 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-[2.5rem] p-8 lg:p-12 border border-cream-300 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl hidden md:block">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-dark leading-tight">Safeguard Your Business from Future Conflicts</h3>
                <p className="text-ink-60 font-semibold text-sm mt-1">Get custom corporate legal setups tailored specifically for independent consultants.</p>
              </div>
            </div>
            <a href="#sales" className="btn-primary py-3.5 px-8 text-sm whitespace-nowrap">Contact Sales Team</a>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 lg:py-32 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="section-label">Tailored Protection</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark leading-tight">
                Designed for Freelancers, Consultants, & Landlords
              </h2>
              <div className="space-y-6 text-ink-70 font-medium leading-relaxed">
                <p>
                  You may be successfully freelancing for international clients, managing real estate transactions, or providing consultancy. Yet, when transactional disputes or payment defaults arise, finding fair representation can become overwhelming.
                </p>
                <p>
                  We are a premier ADR platform at PDR COURT that leverages the latest technology to simplify dispute resolution, ensuring you receive the institutional representation and outcomes you deserve.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-cream-300 shadow-xl">
              <img loading="lazy" decoding="async" src="/images/freelancer-sipping-tea.jpg" alt="Freelancer sipping tea" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Simple Steps */}
      <section className="py-20 lg:py-32 bg-white border-t border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
            <div className="space-y-8">
              <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden border-4 border-cream-200 shadow-lg mb-8">
                <img loading="lazy" decoding="async" src="/images/bold-young-businessman.jpg" alt="Young Businessman" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-6xl lg:text-8xl font-display font-extrabold text-primary/30 leading-none">5</span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark">Simple Steps</h3>
                  <p className="text-ink-60 font-bold text-sm">towards rapid ODR resolution</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
                {steps.map((st, idx) => (
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-cream border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-dark mb-1">{st.title}</h4>
                    <p className="text-sm text-ink-70 font-semibold leading-relaxed">{st.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section id="perks" className="py-20 lg:py-32 bg-cream border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Value Proposition</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Dispute Paper Perks</h2>
            <p className="text-ink-60 max-w-2xl mx-auto mt-4 font-semibold">What are the perks of PDR COURT&apos;s Dispute Resolution Paper?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((pk, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.05 }} 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-cream-300 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">{pk.title}</h3>
                  <p className="text-sm text-ink-70 font-semibold leading-relaxed">{pk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing & Peace of Mind Banner */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="section-label">Affordable Legal Integrity</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark leading-tight">
                At PDR COURT, securing your rights is our prime concern.
              </h2>
              <p className="text-ink-70 font-medium leading-relaxed">
                We understand, in this scenario, &apos;Securing and Safeguarding&apos; your rights is not only important but an absolute necessity. PDR COURT brings together legal professionals, industry experts, and technology specialists to deliver a neutral and unbiased platform.
              </p>
              <p className="text-xs text-ink-60 font-bold">
                Experience the peace of mind that comes with our cutting-edge technology, designed to streamline your dispute resolution process while you focus on your key objectives.
              </p>
            </div>

            <div className="bg-cream rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-xl space-y-6 text-center lg:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <span className="section-label mx-auto lg:mx-0 text-primary">Simple Pricing</span>
              <div className="py-6 border-t border-b border-cream-300 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-5xl font-display font-extrabold text-primary">₹500</span>
                  <span className="text-xs text-ink-60 font-bold block mt-1">per agreement / invoice / PO / contract</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-base font-bold text-dark block">For contracts worth up to</span>
                  <span className="text-xl font-bold text-primary block">₹5,00,000</span>
                </div>
              </div>
              <p className="text-xs text-ink-60 font-semibold leading-relaxed">
                Start with our dispute resolution paper which begins as low as Rs. 500 per agreement/invoice/purchase order/work order/contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Reasons Why */}
      <section className="py-20 lg:py-32 bg-cream border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start mb-16">
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-dark mt-4 leading-tight">
                15 Reasons <span className="text-primary font-serif block">Why PDR COURT</span>
              </h2>
            </div>
            <div className="relative h-[250px] rounded-[2.5rem] overflow-hidden border border-cream-300 shadow-md">
              <img loading="lazy" decoding="async" src="/images/man-with-mobilephone.jpg" alt="Man with Mobile Phone" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((rs, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: (idx % 3) * 0.05 }} 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-cream-300 hover:border-primary/30 transition-all duration-200 flex gap-3 items-start shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-ink-80 font-bold leading-relaxed">{rs}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nyaya Panchayats Insights */}
      <section className="py-20 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-cream-300 pb-6 md:pb-0 md:pr-12">
              <span className="section-label mx-auto md:mx-0">PDR Insights</span>
              <h3 className="text-2xl font-display font-bold text-dark mt-2">Nyaya Panchayats Proposal</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-ink-70 font-semibold text-sm leading-relaxed">
                PDR COURT utilizes advanced technology and cloud infrastructure to reinforce the historical community value of Nyaya Panchayats, delivering accessible, grass-roots justice and efficient dispute resolution directly via our state-of-the-art digital platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sales Form Section */}
      <section id="sales" className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Consulting Desk</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mt-4 mb-6">Talk to our Experts</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-8">
                Have specific invoicing parameters or high-volume international contract structures? Reach our institutional team for customized setups.
              </p>
              
              <div className="bg-cream rounded-[2.5rem] border border-cream-300 p-8 space-y-6 shadow-sm">
                <div className="space-y-4 text-sm font-semibold text-ink-70">
                  <p className="flex items-center gap-2 text-dark font-bold"><Phone className="w-4 h-4 text-primary" /> +91 8976955540</p>
                  <p className="flex items-center gap-2 text-primary font-bold"><Mail className="w-4 h-4 text-primary" /> legal@pdrcourt.com</p>
                </div>
              </div>
              
              <div className="relative h-[200px] rounded-[2rem] overflow-hidden border border-cream-300 shadow-md mt-8 hidden lg:block">
                <img loading="lazy" decoding="async" src="/images/professionals-at-work.jpg" alt="Professionals at work" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-cream rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> Personal Details</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">First Name</label>
                    <input type="text" name="SingleLine" value={formData.SingleLine} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Last Name</label>
                    <input type="text" name="SingleLine1" value={formData.SingleLine1} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Email Address</label>
                    <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-70 mb-2">Tel / Mobile</label>
                    <input type="tel" name="PhoneNumber_countrycode" value={formData.PhoneNumber_countrycode} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <h5 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Business Details</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Name of Business</label>
                      <input type="text" name="SingleLine2" value={formData.SingleLine2} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Your Position</label>
                      <input type="text" name="SingleLine3" value={formData.SingleLine3} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Type of Industry</label>
                      <input type="text" name="SingleLine4" value={formData.SingleLine4} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-70 mb-2">Serving Customer Size</label>
                      <input type="text" name="SingleLine5" value={formData.SingleLine5} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="block text-sm font-medium text-ink-70 mb-2">How much Average Contracts done Monthly</label>
                  <select name="Dropdown" value={formData.Dropdown} onChange={handleInputChange} className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium">
                    <option value="-Select-">Select your Contracts size</option>
                    <option value="Less than 5,000 per month">Less than 5,000 per month</option>
                    <option value="More than 5,000 per month">More than 5,000 per month</option>
                    <option value="More than 10,000 per month">More than 10,000 per month</option>
                    <option value="More than 20,000 per month">More than 20,000 per month</option>
                  </select>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="DecisionBox" checked={formData.DecisionBox} onChange={handleInputChange} className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-cream-300 rounded" />
                    <span className="text-xs text-ink-70 leading-relaxed">I provide my consent to PDR COURT to contact me through email or Telephone.</span>
                  </label>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                    Your service request has been submitted successfully! Our legal experts will reach out soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full btn-primary py-4 text-base">
                  {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Services", route: "/services", description: "Our institutional solutions." },
            { title: "MSMEs", route: "/msmes", description: "SME resolution plans." },
            { title: "Financial Institutions", route: "/financial-institutions", description: "High-volume claims." },
            { title: "Enterprise", route: "/enterprise", description: "Corporate ecosystems." },
            { title: "Pricing", route: "/pricing", description: "Clawback plans & caps." }
          ]} 
          parentRoute="/services" 
          currentRoute="/individuals" 
          kind="General" 
        />
      </div>
    </div>
  );
}
