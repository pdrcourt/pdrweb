'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Phone, Mail, CheckCircle2, ArrowRight, 
  ShieldCheck, FileText, Award, BarChart3, HelpCircle, 
  TrendingUp, AlertTriangle, Scale, Check
} from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function MsmesClientPage() {
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

  const workflowTriggers = [
    "In-depth research and verification of all documentation before proceeding to the next stage.",
    "Complex strategies are dissected to reveal fundamental contractual obligations.",
    "Empathetic inputs are gathered from all parties to establish real dispute parameters.",
    "A detailed custom questionnaire is completed to outline every facet of the issue.",
    "A careful review of all facts and records is conducted by specialized industry experts.",
    "Neutral, unbiased assessments and suggestions are drawn from legal and human perspectives.",
    "Quick and highly effective dispute resolution timelines of up to 60 days.",
    "Persistent follow-up on the physical and digital implementation of the awarded settlement."
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
                <span>ODR & Delayed Payment Resolution for MSMEs</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">MSMEs.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
                PDR COURT’s ADR platform leverages advanced technology to facilitate effective dispute resolution for MSMEs, driving productivity and highlighting their significant contribution to the economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#sales" className="btn-primary py-3 px-8 text-sm">Consult an Expert</a>
                <a href="#facts" className="px-6 py-3 border border-white/25 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">Delayed Payment Facts</a>
              </div>
            </motion.div>

            <div className="relative flex justify-center items-center lg:h-[450px]">
              <div className="w-72 h-96 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl relative z-20 hover:scale-105 transition-transform duration-300">
                <img src="/images/midaged-businessman.jpg" alt="Midaged Businessman" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl absolute left-8 top-16 z-10 hover:scale-105 transition-transform duration-300 hidden md:block">
                <img src="/images/indian-professional-shaking-hands.jpg" alt="Indian Shaking Hands" className="w-full h-full object-cover opacity-70" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Screen */}
      <section className="py-16 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-[2.5rem] p-8 lg:p-12 border border-cream-300 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl hidden md:block">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-dark leading-tight">Safeguard Your Business from Future Conflicts</h3>
                <p className="text-ink-60 font-semibold text-sm mt-1">With a focus on technological innovation, we empower users with advanced software tools that simplify resolution.</p>
              </div>
            </div>
            <a href="#sales" className="btn-primary py-3.5 px-8 text-sm whitespace-nowrap">Contact Sales Team</a>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 lg:py-32 bg-cream border-b border-cream-300 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="section-label">Empathetic ODR Blueprint</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark leading-tight">
                We Practice What We Preach
              </h2>
              <div className="space-y-6 text-ink-70 font-medium leading-relaxed">
                <p>
                  A quick review of our case studies for MSME owners highlights the fact that PDR COURT acts strictly on execution. Our expert line-up, utilizing a structured multi-layered recovery workflow, goes the extra mile to reach secure settlements.
                </p>
                <p>
                  Our platform leverages cutting-edge technology to enhance operational efficiency. These modern software-driven solutions empower MSME owners to resolve outstanding disputes seamlessly without disrupting daily commercial operations.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-cream-300 shadow-xl">
              <img src="/images/business-meeting.jpg" alt="Business Meeting" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Simple Steps & Why PDR COURT */}
      <section className="py-20 lg:py-32 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            
            {/* 5 Steps Panel */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden border-4 border-cream-200 shadow-lg mb-8">
                <img src="/images/smiling-woman.jpg" alt="Smiling Woman" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-6xl lg:text-8xl font-display font-extrabold text-primary/30 leading-none">5</span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark">Simple Steps</h3>
                  <p className="text-ink-60 font-bold text-sm">towards rapid ODR resolution</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 pt-6 border-t border-cream-300 text-center">
                {steps.map((st, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] uppercase font-bold text-primary block">{st.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why PDR Panel & Detailed triggers */}
            <div className="space-y-12">
              <div>
                <span className="section-label">Institutional Integration</span>
                <h3 className="text-3xl font-display font-bold text-dark mt-2 mb-4">Why you need to Choose PDR COURT</h3>
                <p className="text-ink-70 font-semibold text-sm leading-relaxed">
                  PDR COURT’s ADR platform integrates the latest technology to empower MSMEs, providing highly efficient dispute resolution that boosts productivity and supports their vital role in the national economy.
                </p>
              </div>

              <div className="grid gap-6">
                {workflowTriggers.map((tr, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    key={idx} 
                    className="flex gap-4 p-5 rounded-2xl bg-cream border border-cream-300 items-start"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-ink-80 font-bold leading-relaxed">{tr}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="py-20 lg:py-32 bg-cream border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">Macro-Economic Indicators</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">Delayed Payments Facts</h2>
            <p className="text-ink-60 font-semibold text-sm mt-2 max-w-2xl mx-auto">Understanding the structural capital lock bottlenecks facing Indian MSEs.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-cream-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-6">
                  <AlertTriangle className="w-3.5 h-3.5" /> Economic Times Analysis
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">Economic Times Quantitative Analysis</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  A recent quantitative analysis by Economic Times estimates that approximately <span className="text-primary font-bold">₹10.7 Lakh Crore</span> is stuck as delayed payments to MSMEs in India, amounting to 6% of India’s GVA (Gross Value Added) for FY 2020-21. 
                </p>
              </div>
              <p className="text-xs text-ink-60 font-bold mt-6 border-t border-cream-300 pt-4">
                This report indicates that though MSMEs have regulatory safeguards for delayed payments, a tremendous amount still remains to be solved at the ground level.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-cream-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                  <TrendingUp className="w-3.5 h-3.5" /> Govt. Samadhan Portal
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">Samadhan Portal Limitations</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  Samadhan (the government-appointed platform launched for MSMEs to raise disputes over non-payment of dues) had complaints raised by over <span className="text-primary font-bold">1.08 Lakh MSE applications</span> with delayed capital totaling <span className="text-primary font-bold">₹28,085 Crore</span> since its launch in October 2017.
                </p>
              </div>
              <p className="text-xs text-ink-60 font-bold mt-6 border-t border-cream-300 pt-4">
                This serves as a sure-shot indicator of the extreme structural limitations of formal litigious remedies, requiring rapid institutional private ODR alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section (Narayan Rane Quote) */}
      <section className="py-20 lg:py-32 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="section-label mx-auto">Cabinet Insights</span>
          <blockquote className="text-2xl lg:text-3xl font-display font-bold text-dark leading-tight italic">
            &ldquo;The Micro, Small and Medium Enterprises (MSME) sector contributes one-third to India&apos;s gross domestic product and has the potential to grow further.&rdquo;
          </blockquote>
          <span className="block text-sm font-bold text-primary">— Minister Narayan Rane</span>
          
          <div className="pt-8 border-t border-cream-300 text-sm text-ink-70 font-semibold leading-relaxed space-y-6 max-w-2xl mx-auto">
            <p>
              The MSME sector is evidently gaining priority in the economic development of the country. This sector not only represents the maximum workforce of the country but also contributes more than half of the country&apos;s output.
            </p>
            <p>
              Moreover, MSME entrepreneurs often lack knowledge related to finance and legal issues that crop up recurrently, which can have an impeding effect on sustaining their businesses over the long term. Perennially stuck in a dilemma where at one end, they have to keep borrowing money to pay off the loans borrowed at high-interest rates from informal sources, while on the other hand, they face a taut capital resource crunch caused mainly by difficulties in account receivables.
            </p>
          </div>
        </div>
      </section>

      {/* Balance Illustration CTA */}
      <section className="py-20 bg-cream border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden border border-cream-300 shadow-md">
              <img src="/images/law-balance.jpg" alt="Law Balance" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="space-y-6">
              <span className="section-label">Continuous Commitment</span>
              <h3 className="text-2xl font-bold text-dark">Minimal Impact, Maximum Continuity</h3>
              <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                At PDR COURT, we understand these core capital locks, and our teams work relentlessly to achieve smooth and timely settlement of any disagreements or disputes so that businesses are minimally impacted.
              </p>
              <p className="text-xs text-ink-60 font-bold">
                Our advanced platform streamlines the resolution process, ensuring efficiency and transparency. Leveraging state-of-the-art software solutions, we empower businesses to resolve conflicts effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 360-Degree Process */}
      <section className="py-20 lg:py-32 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="section-label">Empathetic Resolution</span>
              <h3 className="text-3xl font-display font-bold text-dark">Our 360-Degree Recovery Process</h3>
              <p className="text-ink-70 font-semibold text-sm leading-relaxed">
                We understand that resolving disputes involves complex, multifaceted strategies that prioritize human needs. After thorough research, the PDR COURT team has developed a unique, step-by-step recovery process designed for quick and effective settlements.
              </p>
              <p className="text-xs text-ink-60 leading-relaxed font-bold">
                Our solution-based methodology consists of three to five stages, tailored to each dispute&apos;s specifics. With intensive training, our team cultivates empathetic insights to address complex scenarios, enabling us to identify core issues from various perspectives for efficient resolution.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-cream border border-cream-300 rounded-2xl">
                <span className="text-xs font-bold text-primary block mb-1">STAGE 01</span>
                <span className="text-sm font-bold text-dark">Initial Document Study & Case Fact Overview Mapping</span>
              </div>
              <div className="p-5 bg-cream border border-cream-300 rounded-2xl">
                <span className="text-xs font-bold text-primary block mb-1">STAGE 02</span>
                <span className="text-sm font-bold text-dark">Pre-Mediation Advisory & Empathetic Insight Counseling</span>
              </div>
              <div className="p-5 bg-cream border border-cream-300 rounded-2xl">
                <span className="text-xs font-bold text-primary block mb-1">STAGE 03</span>
                <span className="text-sm font-bold text-dark">Digital Conciliation Proceedings & Fast-Track Arbitration Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PDR COURT - 15 Reasons Grid */}
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
              <img src="/images/man-with-mobilephone.jpg" alt="Man with Mobile Phone" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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

      {/* PDR COURT Insights */}
      <section className="py-20 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-cream-300 pb-6 md:pb-0 md:pr-12">
              <span className="section-label mx-auto md:mx-0">PDR Insights</span>
              <h3 className="text-2xl font-display font-bold text-dark mt-2">Impartial Counseling</h3>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-ink-70 font-semibold text-sm leading-relaxed">
                We understand that disputes take a lot of time and effort to resolve, and often, there is a question of losing business relationships. PDR COURT acts as a completely impartial counsel to guide you through intense negotiation situations.
              </p>
              <p className="text-ink-70 font-semibold text-sm leading-relaxed">
                PDR COURT serves as an ADR platform that employs the latest technology to improve Nyaya Panchayat operations, ensuring justice is accessible and efficient via our state-of-the-art digital tools.
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
                Request a dedicated custom consultation on delayed payments, structural contract locks, or invoice dispute resolution mechanisms.
              </p>
              
              <div className="bg-cream rounded-[2.5rem] border border-cream-300 p-8 space-y-6 shadow-sm">
                <div className="space-y-4 text-sm font-semibold text-ink-70">
                  <p className="flex items-center gap-2 text-dark font-bold"><Phone className="w-4 h-4 text-primary" /> +91 8976955540</p>
                  <p className="flex items-center gap-2 text-primary font-bold"><Mail className="w-4 h-4 text-primary" /> legal@pdrcourt.com</p>
                </div>
              </div>
              
              <div className="relative h-[200px] rounded-[2rem] overflow-hidden border border-cream-300 shadow-md mt-8 hidden lg:block">
                <img src="/images/professionals-at-work.jpg" alt="Professionals at work" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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
                    Your service request has been submitted successfully! Our delayed payment experts will reach out soon.
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
            { title: "Individuals", route: "/individuals", description: "Freelancer support." },
            { title: "Financial Institutions", route: "/financial-institutions", description: "High-volume claims." },
            { title: "Enterprise", route: "/enterprise", description: "Corporate ecosystems." },
            { title: "Pricing", route: "/pricing", description: "Clawback plans & caps." }
          ]} 
          parentRoute="/services" 
          currentRoute="/msmes" 
          kind="General" 
        />
      </div>
    </div>
  );
}
