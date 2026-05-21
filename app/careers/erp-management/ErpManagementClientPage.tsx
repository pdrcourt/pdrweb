'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Award, ArrowRight, Settings } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';
import ReasonsWhySection from '@/components/sections/ReasonsWhySection';
import CareerApplicationForm from '@/components/sections/CareerApplicationForm';

export default function ErpManagementClientPage() {
  const responsibilities = [
    "Implementing new technologies and processes to improve efficiency, productivity, and profitability.",
    "Developing organizational strategies for achieving business goals.",
    "Managing employee performance to ensure that they are meeting job requirements.",
    "Ensuring that the company complies with all applicable laws and regulations.",
    "Overseeing the implementation of new software or systems to ensure that they are compatible with existing technology.",
    "Communicating with customers to resolve issues or complaints regarding products or services.",
    "Creating and managing budgets to ensure that costs do not exceed income.",
    "Developing and implementing strategic plans to achieve business goals.",
    "Providing leadership and guidance to employees, including training new staff members on company policies and procedures."
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Settings className="w-4 h-4" />
                <span>Careers & vacancies</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                ERP Management <br/> at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">PDR COURT</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10 max-w-lg">
                {"Managing PDR COURT's core resources to be utilized most cost-effectively and efficiently through automated software systems and integrated operations."}
              </p>
              
              <a href="#apply-section" className="btn-primary">
                Join us as ERP Manager
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">Scale & Optimize</h3>
                <p className="text-white/60 mb-6 relative z-10 leading-relaxed">
                  Provide guidance, coordinate integrations, design systems, and manage performance across all divisions using modern CRM and specialized custom applications.
                </p>
                <a href="#apply-section" className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors relative z-10 font-bold tracking-widest uppercase text-sm border-b border-primary-300/30 pb-1">
                  Apply Today <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-20 lg:py-32 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Career Opportunities</h3>
              <p className="text-dark/70 leading-relaxed font-light mb-6 flex-1">
                At PDR COURT, we cultivate an inclusive culture powered by our innovative solutions, fostering a genuine and impactful work environment. We celebrate diversity, ensuring everyone is respected and inspired to excel.
              </p>
              <span className="text-sm font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-4">
                Driven by teamwork
              </span>
            </motion.div>

            {/* Column 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col border-y lg:border-y-0 lg:border-x border-cream-300 py-10 lg:py-0 lg:px-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">We are growing</h3>
              <p className="text-dark/70 leading-relaxed font-light mb-6 flex-1">
                Join us at PDR COURT, where career opportunities align with your development, allowing you to thrive in a tech-driven environment. We view our experts as invaluable assets, offering growth alongside our collective success.
              </p>
              <span className="text-sm font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-4">
                Committed to talent development
              </span>
            </motion.div>

            {/* Column 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">The Place of Nyaya</h3>
              <p className="text-dark/70 leading-relaxed font-light mb-6 flex-1">
                We are on a journey to the realm of Nyaya, where truth is the foundation, enhanced by our ADR platform. If you share our vision of delivering reliable, accessible, and fast dispute resolution, join us!
              </p>
              <span className="text-sm font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-4">
                Upholding institutional trust
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Form & Info section */}
      <div id="apply-section">
        <CareerApplicationForm 
          role="ERP Manager"
          description="In your role in ERP Management at PDR COURT, you will focus on implementing innovative technologies and processes to enhance organizational efficiency and profitability."
          responsibilities={responsibilities}
        />
      </div>

      {/* Work Culture values */}
      <section className="py-20 lg:py-32 bg-white border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Work Culture</span>
            <h2 className="heading-lg text-dark mt-4">Built on Core Value Pillars</h2>
            <p className="text-dark/60 mt-4 leading-relaxed font-light">
              At PDR COURT, our work culture thrives on collaboration, innovation, and inclusivity, driven by our commitment to technology and software-based solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 rounded-3xl border border-cream-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-cream-300 flex items-center justify-center text-primary mb-6 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Highest Quality Standards</h3>
              <p className="text-dark/70 leading-relaxed font-light">
                PDR COURT strives to establish the highest standard of quality in everything we do. We constantly challenge ourselves to improve and break new ground.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-3xl border border-cream-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-cream-300 flex items-center justify-center text-primary mb-6 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Pillars of Trust</h3>
              <p className="text-dark/70 leading-relaxed font-light">
                We believe in making lasting connections built on the pillars of Trust, Honesty, Integrity, Transparency, and Empathy.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-3xl border border-cream-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-cream-300 flex items-center justify-center text-primary mb-6 shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Upholding Justice &amp; Learning</h3>
              <p className="text-dark/70 leading-relaxed font-light">
                Our dedication to justice drives us to attempt ingenious and unconventional methods. An honest failure is viewed as a learning opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Reasons Why */}
      <div className="py-20 lg:py-32 bg-cream border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReasonsWhySection showTitle={true} columns={3} variant="numbered" />
        </div>
      </div>

      {/* Sibling Navigation */}
      <div className="bg-white border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Case Manager", route: "/careers/case-manager", description: "Coordinate and manage cases." },
            { title: "IT Developer", route: "/careers/it-developers", description: "Design next-gen dispute resolution tech." }
          ]} 
          parentRoute="/" 
          currentRoute="/careers/erp-management" 
          kind="Careers" 
        />
      </div>
    </div>
  );
}
