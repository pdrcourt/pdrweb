'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Phone, Mail, CheckCircle2, ArrowRight, 
  ShieldCheck, FileText, Award, BarChart3, HelpCircle, 
  TrendingUp, AlertTriangle, Scale, Check, CheckCircle
} from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function FinancialInstitutionsClientPage() {
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

  const analysisSteps = [
    { title: "Study", desc: "A complete study of all documents related to the defaults." },
    { title: "Assessment", desc: "Assessment of the payment history of the client to establish intent." },
    { title: "Negotiation", desc: "Negotiations based on legal grounds applicable on a case-to-case basis." },
    { title: "Discussions", desc: "Pre-negotiation discussions with both sides to assess possible settlement terms." },
    { title: "Documentation", desc: "Professional teams that ensure proper documentation and acceptance of settlement awarded." },
    { title: "Award", desc: "Follow-up and implementation of the final institutional award." }
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
                <span>ODR Integration for Banks & NBFCs</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Fin. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Institutions.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
                Efficient Debt Resolution/Settlement via Our Software-Driven Conciliation & Arbitration Solutions at Competitive Prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#sales" className="btn-primary py-3 px-8 text-sm">Consult an Expert</a>
                <a href="#challenge" className="px-6 py-3 border border-white/25 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">Explore Challenges</a>
              </div>
            </motion.div>

            <div className="relative flex justify-center items-center lg:h-[450px]">
              <div className="w-72 h-96 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl relative z-20 hover:scale-105 transition-transform duration-300">
                <img src="/images/midaged-businessman.jpg" alt="Midaged Businessman" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl absolute left-8 top-16 z-10 hover:scale-105 transition-transform duration-300 hidden md:block">
                <img src="/images/indian-professional-shaking-hands.jpg" alt="Indian professional shaking hands" className="w-full h-full object-cover opacity-70" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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
                <h3 className="text-2xl font-display font-bold text-dark leading-tight">Stay one step ahead in the business landscape</h3>
                <p className="text-dark/60 font-semibold text-sm mt-1">Gain an edge in the business landscape with our ADR platform, reinforcing your enterprise against future challenges.</p>
              </div>
            </div>
            <a href="#sales" className="btn-primary py-3.5 px-8 text-sm whitespace-nowrap">Contact Sales Team</a>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 lg:py-32 bg-cream overflow-hidden border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="section-label">Credit Frameworks</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark leading-tight">
                Enhancing Access to Consumer & Commercial Credit
              </h2>
              <div className="space-y-6 text-dark/70 font-medium leading-relaxed">
                <p>
                  In the modern world, access to credit has become critical to the development of any society. May it be consumer credit, mortgage loans or commercial loans and credit lines, desired growth is impossible without the financial framework provided by financial institutions like Banks & Non-Banking Financial Companies (NBFCs).
                </p>
                <p>
                  Our cutting-edge software-aided solutions enhance the efficiency of dispute resolution, making justice accessible and timely for all parties involved.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-cream-300 shadow-xl">
              <img src="/images/banking-professionals.jpg" alt="Banking Professionals" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Simple Steps & Negotiation Workflow */}
      <section className="py-20 lg:py-32 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            
            {/* Steps Timeline Left */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden border-4 border-cream-200 shadow-lg mb-8">
                <img src="/images/smiling-woman.jpg" alt="Smiling Woman" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-6xl lg:text-8xl font-display font-extrabold text-primary/30 leading-none">5</span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark">Simple Steps</h3>
                  <p className="text-dark/60 font-bold text-sm">towards rapid dispute resolution</p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30 space-y-6 mt-8">
                {steps.map((st, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-cream border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-dark">{st.title}</h4>
                    <p className="text-xs text-dark/60 leading-relaxed font-semibold">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Negotiation Assistance Right */}
            <div className="space-y-12">
              <div className="bg-cream p-8 rounded-[2rem] border border-cream-300">
                <span className="section-label">Institutional Recovery</span>
                <h3 className="text-2xl font-bold text-dark mt-4 mb-4">Dedicated Negotiation Assistance</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  Our dedicated team provides assistance in negotiations with customers who have defaulted on payments, ensuring institutional integrity and legal standards.
                </p>
              </div>

              <div className="grid gap-6">
                {analysisSteps.map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    key={idx} 
                    className="flex gap-4 p-5 bg-cream border border-cream-300 rounded-2xl items-start"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-dark/70 font-semibold leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem & Solution Panel */}
      <section className="py-20 lg:py-32 bg-cream border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left: Problem */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-cream-300 shadow-sm space-y-6">
              <span className="section-label text-red-600 bg-red-50">Retail Default Risks</span>
              <h3 className="text-2xl font-bold text-dark">We know the Problem</h3>
              <div className="border-l-4 border-red-500 pl-6 py-2">
                <h4 className="text-lg font-bold text-dark">Unresponsive Borrowers, Lengthy Collection Processes, and High Costs of Collections</h4>
              </div>
              <p className="text-sm text-dark/70 leading-relaxed font-semibold">
                Traditional legal methods generate massive overheads and prolonged lead times that hurt working capital cycles.
              </p>
            </div>

            {/* Right: Solution */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-cream-300 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <span className="section-label">ODR Recovery</span>
                <h3 className="text-2xl font-bold text-dark">Our Solution</h3>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-lg font-bold text-dark">Debt Recovery via Conciliation & Arbitration at a minimal cost.</h4>
                </div>
                <p className="text-sm text-dark/70 leading-relaxed font-semibold mt-4">
                  Experience Debt Recovery with Affordable Solutions through Our Innovative Conciliation & Arbitration Platform.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges & Quantitative Indicators */}
      <section id="challenge" className="py-20 lg:py-32 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
            
            <div className="space-y-8">
              <span className="section-label">Quantitative Challenges</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark leading-tight">
                Macro-Economic Credit Recoveries Breakdown
              </h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-red-50 text-red-600 rounded-xl mt-1">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-dark mb-1">RBI Quantitative Fact</h4>
                    <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                      Banks have written off double the amount recovered in the last 5 years, according to verified RBI quantitative reports.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-red-50 text-red-600 rounded-xl mt-1">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-dark mb-1">NBFC Recovery Bottlenecks</h4>
                    <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                      The most challenging operational phase for any NBFC represents the timely recovery of Loans along with interest.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-red-50 text-red-600 rounded-xl mt-1">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-dark mb-1">CRISIL Rating Debt Reset Analysis</h4>
                    <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                      A CRISIL rating analysis of NBFCs shows <span className="text-primary font-bold">₹15 Lakh Crore of debt</span> (65% of outstanding debt as of March 31st, 2022) is due for pre-pricing this fiscal owing to interest resets or maturity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[350px] rounded-[2.5rem] overflow-hidden border border-cream-300 shadow-md">
              <img src="/images/law-balance.jpg" alt="Law Balance" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>

          </div>
        </div>
      </section>

      {/* Our Belief Block */}
      <section className="py-20 lg:py-32 bg-cream relative border-b border-cream-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="section-label mx-auto">Our Belief</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mt-4">We believe in the Sanctity of Law, Trust and Honesty</h2>
          
          <div className="pt-8 border-t border-cream-300 text-sm text-dark/70 font-semibold leading-relaxed space-y-6 max-w-2xl mx-auto">
            <p>
              We at PDR COURT believe that our team can add value and deliver much better results in settling customer disputes and debt collection woes. We have set best practices with regard to dispute resolution to nurture customer confidence and long-term relationships. We practice standards of fairness, transparency in documentation and communication, and impartial evaluation.
            </p>
            <p>
              We believe that our team can bring in much more value additions to the process of settlement as compared to the contemporary route of collection agencies, and we also bring about a strong cost advantage.
            </p>
            <p className="text-xs text-primary font-bold uppercase tracking-wider">
              PDR COURT is an ADR platform that utilizes the latest technology to reshape dispute resolution. Our commitment to digital innovation guarantees a seamless process for achieving the best outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 360-Degree Process */}
      <section className="py-20 lg:py-32 bg-white border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="section-label">Empathetic Resolution</span>
              <h3 className="text-3xl font-display font-bold text-dark">Our 360-Degree Resolution/Settlement Process</h3>
              <p className="text-dark/70 font-semibold text-sm leading-relaxed">
                We understand that resolving disputes involves complex, multifaceted strategies that prioritize human needs. After thorough research, the PDR COURT team has developed a unique, step-by-step recovery process designed for quick and effective settlements.
              </p>
              <p className="text-xs text-dark/60 leading-relaxed font-bold">
                Our solution-based methodology consists of three to five stages, tailored to each dispute&apos;s specifics. With intensive training, our team cultivates empathetic insights to address complex scenarios, enabling us to identify core issues from various perspectives for efficient resolution.
              </p>
              <p className="text-xs text-dark/60 leading-relaxed font-bold">
                Leveraging advanced technology and software solutions, our platform enhances the recovery process, providing seamless support and transparency at every stage. With PDR COURT, you experience a modern, efficient approach to dispute resolution, all in a digital format.
              </p>
            </div>
            <div className="relative h-[350px] rounded-[2.5rem] overflow-hidden border border-cream-300 shadow-md">
              <img src="/images/professional-woman-holding-paper.jpg" alt="Professional Woman holding paper" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Panel */}
      <section className="py-20 bg-cream border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 lg:p-12 border border-cream-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-cream-300 pb-6 md:pb-0 md:pr-12">
              <span className="section-label mx-auto md:mx-0">PDR Insights</span>
              <h3 className="text-2xl font-display font-bold text-dark mt-2">PDR COURT Insights</h3>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-dark/70 font-semibold text-sm leading-relaxed">
                While the competitive landscape offers great opportunities, it also poses challenges, particularly in acquiring customers responsibly. As demand grows, companies often resort to outdated methods for collections and recovery, such as lengthy arbitration and court battles.
              </p>
              <p className="text-dark/70 font-semibold text-sm leading-relaxed">
                Current recovery tools are either expensive or ineffective, resulting in long turnaround times that hinder the dispute resolution process. The industry must embrace tech-savvy alternatives that prioritize efficiency and speed.
              </p>
              <p className="text-dark/70 font-semibold text-sm leading-relaxed">
                Furthermore, it is essential to consider human factors, supporting customers facing tough times. PDR COURT aims to partner with financial institutions to address these issues effectively. As a leading ADR platform, PDR COURT is committed to revolutionizing dispute resolution through innovative technology.
              </p>
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
                <p className="text-sm text-dark/80 font-bold leading-relaxed">{rs}</p>
              </motion.div>
            ))}
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
              <p className="text-lg text-dark/70 leading-relaxed mb-8">
                Connect with our institutional panel to structure robust conciliation frameworks or customize API integrations.
              </p>
              
              <div className="bg-cream rounded-[2.5rem] border border-cream-300 p-8 space-y-6 shadow-sm">
                <div className="space-y-4 text-sm font-semibold text-dark/70">
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
                    <label className="block text-sm font-medium text-dark/70 mb-2">First Name</label>
                    <input type="text" name="SingleLine" value={formData.SingleLine} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-2">Last Name</label>
                    <input type="text" name="SingleLine1" value={formData.SingleLine1} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-2">Email Address</label>
                    <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-2">Tel / Mobile</label>
                    <input type="tel" name="PhoneNumber_countrycode" value={formData.PhoneNumber_countrycode} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <h5 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Business Details</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark/70 mb-2">Name of Business</label>
                      <input type="text" name="SingleLine2" value={formData.SingleLine2} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark/70 mb-2">Your Position</label>
                      <input type="text" name="SingleLine3" value={formData.SingleLine3} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark/70 mb-2">Type of Industry</label>
                      <input type="text" name="SingleLine4" value={formData.SingleLine4} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark/70 mb-2">Serving Customer Size</label>
                      <input type="text" name="SingleLine5" value={formData.SingleLine5} onChange={handleInputChange} required className="w-full bg-white border border-cream-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-dark font-medium" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-cream-300 pt-6">
                  <label className="block text-sm font-medium text-dark/70 mb-2">How much Average Contracts done Monthly</label>
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
                    <span className="text-xs text-dark/70 leading-relaxed">I provide my consent to PDR COURT to contact me through email or Telephone.</span>
                  </label>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                    Your service request has been submitted successfully! Our default recovery experts will reach out soon.
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
            { title: "MSMEs", route: "/msmes", description: "SME resolution plans." },
            { title: "Enterprise", route: "/enterprise", description: "Corporate ecosystems." },
            { title: "Pricing", route: "/pricing", description: "Clawback plans & caps." }
          ]} 
          parentRoute="/services" 
          currentRoute="/financial-institutions" 
          kind="General" 
        />
      </div>
    </div>
  );
}
