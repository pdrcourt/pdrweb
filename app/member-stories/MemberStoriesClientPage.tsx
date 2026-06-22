'use client';

import { motion } from 'framer-motion';
import { Download, Star, Quote, Building, Users, Briefcase, HandshakeIcon } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function MemberStoriesClientPage() {
  const testimonials = [
    {
      title: "Comforting",
      role: "Interior Designer",
      quote: "My experience with PDR COURT has been so comforting, to say the least. A completely professional team with an eye for detail and an understanding of the term 'Time is Money'.",
      featured: false
    },
    {
      title: "Trust PDR COURT",
      role: "Land Dealer",
      quote: "Appreciate the efforts and the constant support extended through the course of the tough negotiations. I have come to trust the team at PDR COURT, absolutely!",
      featured: false
    },
    {
      title: "Well Advised",
      role: "Cycle Manufacturer",
      quote: "As a cycle manufacturer, we have a variety of partners and distributors that we deal with... The wide array of distributors spread over large geographical areas also brings its own challenges. Another factor they are aware of, and at certain times, advised us on, was to focus on the continuity of the business... find creative solutions so that the business relationship could be maintained and capitalized upon in the long run. This, we think, would not have happened if the case was approached by a typical legal expert.",
      featured: true
    },
    {
      title: "Commendable",
      role: "Export Import Business Owner",
      quote: "The attention to detail and the way the team went above and beyond to understand and solve my dispute are commendable and truly appreciated.",
      featured: false
    },
    {
      title: "Quick Resolution",
      role: "Textile Business Owner",
      quote: "The quick resolution achieved on a long-standing disagreement was pleasantly surprising.",
      featured: false
    },
    {
      title: "Fair & Quick",
      role: "Computer Engineer",
      quote: "While the closure was fair and quick, I was amazed at the follow-up post-agreement.",
      featured: false
    },
    {
      title: "Thorough Documentation",
      role: "Food & Beverages Business",
      quote: "The arbitrator was thorough in his documentation process and used a lot of industry information to help come to an acceptable conclusion.",
      featured: false
    },
    {
      title: "Fantastic Team",
      role: "Retail Business",
      quote: "A fantastic team and an expansive pool of well-experienced and qualified arbitrators to opt from to help address multiple situations.",
      featured: false
    },
    {
      title: "Business Continuity",
      role: "Electronics Manufacturer",
      quote: "The one thing I am happy with is that not only did PDR COURT settle the dispute, but they ensured business continuity with the same client. Thank You, PDR COURT.",
      featured: false
    },
    {
      title: "Deep Dive",
      role: "Civil Contractor",
      quote: "The team took a deep dive and studied the relationship over a few years before they came up with a plan for a negotiation. This, I think, was special.",
      featured: false
    },
    {
      title: "Settlement with a Bank",
      role: "Media Consultant",
      quote: "Never thought a company could help me negotiate a settlement with a bank and still keep my credit score intact.",
      featured: false
    },
    {
      title: "Attention to Details",
      role: "Healthcare Center",
      quote: "We have employed PDR COURT to settle a good chunk of disputes that were pending for a long time. While the service provided was more than adequate, what stood out to us was the attention that was given to details.",
      featured: false
    },
    {
      title: "Adept at Understanding",
      role: "Hotelier",
      quote: "While there were quite a few complex scenarios that they had to handle, the team was adept at understanding each case and its demands, then operating to draw a suitable solution accordingly.",
      featured: false
    },
    {
      title: "Budget-Friendly",
      role: "Small Business Owner",
      quote: "A partner who can come to your rescue in case of delinquencies and resolve such issues swiftly and yet remain budget-friendly is a boon much needed.",
      featured: false
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40" />
          <img src="/images/happy-girld-using-phone.jpg" alt="Happy Client" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Star className="w-4 h-4" fill="currentColor" />
                <span>Client Experiences</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Our Members <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Matter.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-2xl border-l-4 border-primary pl-6 py-2">
                {"The invaluable experience we've gained through our ADR platform has strengthened our connections and credibility with users. Explore what our esteemed members have to say about us."}
              </p>
              
              <div className="flex gap-4">
                <a href="#stories" className="btn-primary">
                  Read Stories
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
                 <h3 className="text-2xl font-display font-bold mb-8 text-primary-300">Trusted By Diverse Sectors</h3>
                 <div className="grid grid-cols-2 gap-6">
                   <div className="flex items-center gap-3 text-paper-80"><Building className="w-5 h-5 text-primary" /> Banks & NBFCs</div>
                   <div className="flex items-center gap-3 text-paper-80"><Briefcase className="w-5 h-5 text-primary" /> Professionals</div>
                   <div className="flex items-center gap-3 text-paper-80"><Users className="w-5 h-5 text-primary" /> Institutions</div>
                   <div className="flex items-center gap-3 text-paper-80"><HandshakeIcon className="w-5 h-5 text-primary" /> Freelancers</div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Philosophy */}
      <section className="py-20 bg-white relative border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light text-dark leading-relaxed">
            By choosing PDR COURT for Alternate Dispute Resolution, you gain access to <span className="font-bold text-primary">affordable and efficient solutions.</span> Our technology simplifies the dispute process, ensuring timely and fair resolutions.
          </h2>
          <p className="text-lg text-ink-60 mt-8 max-w-3xl mx-auto">
            You will experience how our process-oriented platform effectively streamlines the dispute resolution process. Everyone has a successful story to tell.
          </p>
        </div>
      </section>

      {/* Masonry Grid of Testimonials */}
      <section id="stories" className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((test, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}
                className={`break-inside-avoid bg-white rounded-3xl border border-cream-300 p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group ${test.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-24 h-24 text-primary" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-ink-80 leading-relaxed font-light italic mb-8 flex-1">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                  
                  <div className="border-t border-cream-300 pt-6 mt-auto">
                    <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{test.title}</h4>
                    <p className="text-ink-60 text-sm uppercase tracking-wider font-bold mt-1">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-500/20 rounded-[3rem] rotate-3 blur-xl opacity-50" />
              <div className="relative h-full rounded-[3rem] overflow-hidden border border-cream-300 shadow-2xl">
                <img src="/images/smiling-holding-phone.jpg" alt="Using App" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
            
            <div>
              <span className="section-label">Mobile Experience</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mt-4 mb-6">The App</h2>
              <p className="text-lg text-ink-70 leading-relaxed mb-10">
                As an arbitrator, you will be reviewing testimony and evidence presented by the disputed parties at a hearing and resolves the dispute by issuing a decision right from the app.
              </p>
              
              <div className="bg-cream border border-cream-300 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-dark mb-6">Download the app for Android & iOS</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-4 bg-dark text-white px-6 py-3 rounded-2xl hover:bg-dark/90 transition-colors shadow-lg shadow-dark/20 hover:shadow-xl hover:shadow-dark/30">
                    <Download className="w-8 h-8" />
                    <div className="flex flex-col">
                      <span className="text-xs text-paper-70">Download on the</span>
                      <span className="text-lg font-bold leading-none">App Store</span>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-4 bg-dark text-white px-6 py-3 rounded-2xl hover:bg-dark/90 transition-colors shadow-lg shadow-dark/20 hover:shadow-xl hover:shadow-dark/30">
                    <Download className="w-8 h-8" />
                    <div className="flex flex-col">
                      <span className="text-xs text-paper-70">GET IT ON</span>
                      <span className="text-lg font-bold leading-none">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            // { title: "Case Studies", route: "/case-studies", description: "Real-world results." },
            { title: "Beginner's Guide", route: "/beginner-guide", description: "Step-by-step instructions." },
            { title: "Media Center", route: "/media-center", description: "News and updates." }
          ]}
          parentRoute="/information" 
          currentRoute="/member-stories" 
          kind="Information" 
        />
      </div>
    </div>
  );
}
