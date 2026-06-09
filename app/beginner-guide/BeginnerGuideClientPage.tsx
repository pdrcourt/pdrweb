'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, PlayCircle, Download, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function BeginnerGuideClientPage() {
  const articles = [
    {
      title: "Movie Studio V. Production House",
      description: "The claimant in this case is a movie studio based in Mumbai offering services of private screening and post-production works like editing, sound recording, etc.",
      href: "/articles/movie-studio-vs-production-house"
    },
    {
      title: "Shipping Company V. Manufacturing Business",
      description: "Brief facts giving rise to this dispute of Non-payment of the invoice: a dispute arose between the parties, who..",
      href: "/articles/shipping-company-vs-manufacturing-business"
    },
    {
      title: "Post Production Studio V. Entertainment Company",
      description: "Cras nec lectus non leo consequat sagittis. Mauris dignissim urna vitae odio hendrerit, vel tincidunt elit facilisis...",
      href: "/articles/post-production-studio-vs-entertainment-company"
    },
    {
      title: "Textile Manufacturer V. Wholesaler of Textile",
      description: "Financial disputes need to be resolved as quickly as possible. The claimant (a Private Limited Company engaged...",
      href: "/articles/textile-manufacturer-vs-textile-wholesaler"
    },
    {
      title: "NBFC V. A self-employed resident of India",
      description: "Arbitration is a part of any dispute arising between parties to an agreement. Courts also encourage this practice...",
      href: "/articles/nbfc-vs-individual"
    },
    {
      title: "NBFC V. Businessman",
      description: "A self-employed businessman (the respondent) from Andhra Pradesh, India, entered into a financial loan ...",
      href: "/articles/nbfc-vs-businessman"
    },
    {
      title: "NBFC V. Small Businessman",
      description: "PDR COURT has been impanelled as the Arbitrator for a Pvt. Ltd. incorporated under the Companies Act, 1956...",
      href: "/articles/nbfc-vs-small-businessman"
    },
    {
      title: "Private Limited Company V. Textile Wholesaler",
      description: "Invoice Settlement Mediation was entered into by the claimant, a Private Limited Company engaged in ...",
      href: "/articles/private-limited-company-vs-textile-wholesaler"
    },
    {
      title: "Movie Studio V. Movie Production House",
      description: "This case of disagreement is between a Private studio based in Mumbai and a Movie production house..",
      href: "/articles/movie-studio-vs-movie-production-house"
    },
    {
      title: "Private Ltd. Company V. Plastic Manufacturer",
      description: "This dispute arose between a Private Limited company that was engaged in the manufacturing of plastic ...",
      href: "/articles/private-limited-company-vs-plastic-manufacturer"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-900/40" />
          <img src="/images/young-boy-smiling.jpg" alt="Smiling Boy" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-luminosity mask-image-gradient-l" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <BookOpen className="w-4 h-4" />
                <span>{"Beginner's Guide"}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Decide with a <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Well-Researched Mindset.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 max-w-lg">
                {"Our beginner's guide highlights a step-by-step approach outlining the processes required to avail of our ADR services."}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="#video-guide" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Watch Guide
                </a>
                <a href="mailto:legal@pdrcourt.com" className="group flex items-center gap-2 text-paper-70 hover:text-white transition-colors">
                  <span className="font-bold">Got Questions?</span>
                  <span className="text-primary-300 underline underline-offset-4 group-hover:text-primary-200">legal@pdrcourt.com</span>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative z-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center max-w-md mx-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <img src="/images/pdr-court-app.png" alt="Mobile Application" className="w-48 mx-auto mb-6 hover:scale-105 transition-transform duration-500 drop-shadow-2xl" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <h3 className="text-2xl font-bold text-white mb-2">Get all your Deals Secured!</h3>
                <p className="text-paper-60 mb-8">Sign up today and protect your business.</p>
                <Link href="/register" className="btn-primary w-full flex items-center justify-center gap-2">
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Guide Section */}
      <section id="video-guide" className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-cream-300 bg-dark shadow-2xl group mb-12">
            <img src="/images/vidposter.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
              <button className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group-hover:bg-primary group-hover:text-white group-hover:border-primary text-primary">
                <PlayCircle className="w-12 h-12" />
              </button>
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-display font-light text-dark leading-relaxed max-w-4xl mx-auto">
            {"Watch our comprehensive video to gain a full understanding of how PDR COURT's ADR platform and state-of-the-art software streamline dispute resolution."}
          </h3>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-32 bg-cream border-t border-cream-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Real-world Context</span>
            <h2 className="heading-lg text-dark mt-4">In-Depth Case Studies</h2>
            <p className="text-lg text-ink-60 mt-4">For an indepth understanding, please refer to the articles below detailing real arbitration cases.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}>
                <Link href={article.href} className="group h-full flex flex-col bg-white p-8 rounded-[2rem] border border-cream-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cream border border-cream-300 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-ink-60 leading-relaxed text-sm mb-8 flex-1 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-dark uppercase tracking-widest mt-auto group-hover:text-primary transition-colors">
                    Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
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
                With PDR COURT as their ADR platform, arbitrators can efficiently review testimony and evidence presented by the parties in dispute, whether during in-person hearings or through our advanced digital tools.
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
            { title: "How it Works", route: "/how-it-works", description: "Process breakdown." },
            { title: "Our Ethos", route: "/ethos", description: "Core principles." },
            { title: "Case Studies", route: "/case-studies", description: "Real-world results." }
          ]} 
          parentRoute="/information" 
          currentRoute="/beginner-guide" 
          kind="Information" 
        />
      </div>
    </div>
  );
}
