"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EditorialHeroDecor from "@/components/ui/EditorialHeroDecor";
import ContactForm from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  Ticket,
  MapPin,
  Building2,
  ArrowRight,
  Headphones,
  CalendarClock,
  Briefcase,
  Handshake,
  Newspaper,
  Sparkles,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const OFFICES = [
  {
    city: "Mumbai",
    tag: "Corporate Office",
    address:
      "Unit No. 208, 2nd Floor, Globe Business Park, Khuntavali, Ambernath, Thane, Kalyan, Maharashtra — 421501.",
  },
  {
    city: "Delhi",
    tag: "Regional Office",
    address:
      "A-19, Guru Nanak Pura, Street No. 3, Laxmi Nagar, Delhi — 110092. Landmark: V3S Mall.",
  },
  {
    city: "Bengaluru",
    tag: "Regional Office",
    address:
      "3rd Floor, Akshay Tech Park, Plot No. 72 & 73, EPIP Zone, Whitefield, Bengaluru, Karnataka — 560066.",
  },
  {
    city: "Hyderabad",
    tag: "Regional Office",
    address:
      "F.No. 205, Hiline Complex, Road No. 12, Banjara Hills, Hyderabad — 500034, Telangana.",
  },
  {
    city: "Thane",
    tag: "Regional Office",
    address:
      "208, 2nd Floor, Globe Business Park, Ambernath West, Near Railway Station, Ambernath — 421505.",
  },
  {
    city: "Patna",
    tag: "Regional Office · Bihar",
    address:
      "Drowsy Monks Co-Working, 6th Floor, DS Business Park, Saguna More, Bailey Road, Danapur Nizamat, Patna — 801503.",
  },
];

const SEGMENTS = [
  { icon: Briefcase, title: "Enterprises", text: "Customised ADR solutions for corporates.", href: "/enterprise" },
  { icon: Handshake, title: "Partners", text: "Collaborate and grow alongside PDR COURT.", href: "/partners" },
  // { icon: Newspaper, title: "Media", text: "Press enquiries, assets, and announcements.", href: "/media-kit" },
];

export default function ContactPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
          <EditorialHeroDecor />
          <div className={`relative ${SECTION}`}>
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="eyebrow mb-6">
                  <Mail className="w-3.5 h-3.5" />
                  Contact Us
                </span>
                <h1 className="font-editorial font-medium text-ink-85 leading-[1.0] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
                  We&apos;re here <span className="gold-text">for you</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-55 leading-relaxed max-w-xl">
                  PDR COURT&apos;s Customer Service team is dedicated to giving
                  you the information you need — quickly, clearly, and with care.
                  Below are multiple ways to connect with us.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#ways" className="btn-primary">
                    Ways to reach us
                  </a>
                  <a href="tel:8976955540" className="btn-outline">
                    Call +91 8976955540
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ WAYS TO CONNECT ════════ */}
        <section id="ways" className="py-20 lg:py-28 scroll-mt-20">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Get in Touch</span>
              <h2 className="heading-lg mt-3">
                Multiple ways to <span className="accent-serif">connect</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Check our important contact information and pick whatever works
                best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Ticket support — featured */}
              <motion.a
                href="#message"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="group relative overflow-hidden rounded-3xl bg-dark text-white p-7 flex flex-col md:col-span-2 lg:col-span-1"
              >
                <div className="pointer-events-none absolute -top-16 -right-12 w-56 h-56 rounded-full bg-primary/25 blur-[80px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <span className="inline-flex w-12 h-12 rounded-2xl bg-gold-gradient text-white items-center justify-center mb-5">
                  <Ticket className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-2">
                  Fastest Response
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Ticket Support
                </h3>
                <p className="text-sm text-paper-60 leading-relaxed flex-1">
                  For a quick and thorough response, raise a request through our
                  advanced Ticketing Support System.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-300">
                  Raise a ticket
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              {/* Support helpline */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.08 }}
                className="surface-card p-7 flex flex-col"
              >
                <span className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-5">
                  <Headphones className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  Support Helpline
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  Our support is open{" "}
                  <span className="font-semibold text-dark">
                    Monday – Friday, 10 am – 5 pm
                  </span>
                  . We are off on public holidays.
                </p>
              </motion.div>

              {/* Call */}
              <motion.a
                href="tel:8976955540"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.16 }}
                className="surface-card p-7 flex flex-col group"
              >
                <span className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-5">
                  <Phone className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  Call Us
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  Speak directly with our team.
                </p>
                <span className="mt-4 font-semibold text-primary group-hover:underline">
                  +91 8976955540
                </span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:legal@pdrcourt.com"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.24 }}
                className="surface-card p-7 flex flex-col group"
              >
                <span className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-5">
                  <Mail className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  Email Us
                </h3>
                <p className="text-sm text-ink-60 leading-relaxed flex-1">
                  Write to us and we&apos;ll respond within a business day.
                </p>
                <span className="mt-4 font-semibold text-primary group-hover:underline break-all">
                  legal@pdrcourt.com
                </span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* ════════ OFFICES ════════ */}
        <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Visit Us</span>
              <h2 className="heading-lg mt-3">
                Our <span className="accent-serif">offices</span>
              </h2>
              <p className="mt-4 text-ink-55 leading-relaxed">
                Sure, we&apos;re online — but you can also meet us in person
                across India.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFICES.map((o, i) => (
                <motion.div
                  key={o.city}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: (i % 3) * 0.08 }}
                  className="surface-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                        i === 0
                          ? "bg-gold-gradient text-white"
                          : "bg-cream-200 text-primary"
                      }`}
                    >
                      {i === 0 ? (
                        <Building2 className="w-5 h-5" />
                      ) : (
                        <MapPin className="w-5 h-5" />
                      )}
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-dark">
                        {o.city}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {o.tag}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-60 leading-relaxed">
                    {o.address}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ NEW CUSTOMER ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-[2rem] bg-gold-subtle border border-primary/15 p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
              <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                <div>
                  <span className="eyebrow mb-5">
                    <Sparkles className="w-3.5 h-3.5" />
                    New Customer
                  </span>
                  <h2 className="heading-md">
                    New to PDR COURT?{" "}
                    <span className="accent-serif">We&apos;ll guide you.</span>
                  </h2>
                  <p className="mt-4 text-ink-70 leading-relaxed max-w-xl">
                    Are you an individual new to PDR COURT and need to know more
                    about Arbitration and its benefits? Don&apos;t worry — our
                    team of experts will guide you every step of the way.
                    Schedule a call with us now.
                  </p>
                </div>
                <div className="lg:text-right">
                  <div className="inline-flex flex-col items-start lg:items-end gap-4">
                    <span className="inline-flex items-center gap-2 text-sm text-ink-55">
                      <CalendarClock className="w-4 h-4 text-primary" />
                      Free expert consultation
                    </span>
                    <Link href="/appointment" className="btn-primary">
                      Schedule a Call
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ SEGMENT QUICK LINKS ════════ */}
        <section className="pb-8">
          <div className={SECTION}>
            <div className="grid md:grid-cols-3 gap-6">
              {SEGMENTS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease, delay: i * 0.08 }}
                >
                  <Link
                    href={s.href}
                    className="surface-card group flex items-center gap-4 p-6"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <s.icon className="w-6 h-6" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-dark group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs text-ink-55 mt-0.5">{s.text}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CONTACT FORM ════════ */}
        <section id="message" className="py-20 lg:py-28 scroll-mt-20">
          <div className={`${SECTION} max-w-3xl`}>
            <div className="text-center mb-10">
              <span className="eyebrow justify-center">Write to Us</span>
              <h2 className="heading-md mt-3">Send us a message</h2>
              <p className="mt-3 text-ink-55">
                Tell us what you need — we&apos;ll get back to you within one
                business day.
              </p>
            </div>
            <ContactForm
              title="Got any questions?"
              subtitle="We'd love to hear from you"
              showOrganization
              buttonText="Send message"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
