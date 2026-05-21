"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Building2,
  Navigation,
  ShieldCheck,
  Network,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const SECTION = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

interface Office {
  city: string;
  tag: string;
  address: string;
  x: number; // map coordinates (viewBox 0 0 460 470)
  y: number;
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "middle" | "end";
}

const OFFICES: Office[] = [
  {
    city: "Mumbai",
    tag: "Corporate Office",
    address:
      "Unit No. 208, 2nd Floor, Globe Business Park, Khuntavali, Ambernath, Thane, Kalyan, Maharashtra — 421501.",
    x: 218,
    y: 372,
    labelDx: -14,
    labelDy: 5,
    anchor: "end",
  },
  {
    city: "Thane",
    tag: "Regional Office",
    address:
      "208, 2nd Floor, Globe Business Park, Ambernath West, Near Railway Station, Ambernath — 421505.",
    x: 226,
    y: 354,
    labelDx: -14,
    labelDy: -2,
    anchor: "end",
  },
  {
    city: "Delhi",
    tag: "Regional Office",
    address:
      "A-19, Guru Nanak Pura, Street No. 3, Laxmi Nagar, Delhi — 110092. Landmark: V3S Mall.",
    x: 258,
    y: 182,
    labelDx: 14,
    labelDy: 4,
    anchor: "start",
  },
  {
    city: "Patna",
    tag: "Regional Office · Bihar",
    address:
      "Drowsy Monks Co-Working, 6th Floor, DS Business Park, Saguna More, Bailey Road, Danapur Nizamat, Patna — 801503.",
    x: 432,
    y: 252,
    labelDx: 14,
    labelDy: 4,
    anchor: "start",
  },
  {
    city: "Hyderabad",
    tag: "Regional Office",
    address:
      "F.No. 205, Hiline Complex, Road No. 12, Banjara Hills, Hyderabad — 500034, Telangana.",
    x: 300,
    y: 446,
    labelDx: 14,
    labelDy: 4,
    anchor: "start",
  },
  {
    city: "Bengaluru",
    tag: "Regional Office",
    address:
      "3rd Floor, Akshay Tech Park, Plot No. 72 & 73, EPIP Zone, Whitefield, Bengaluru, Karnataka — 560066.",
    x: 288,
    y: 524,
    labelDx: 14,
    labelDy: 4,
    anchor: "start",
  },
];

export default function OfficesPageClient() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-hero-gradient pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(189,107,32,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(189,107,32,.5) 1px,transparent 1px)",
              backgroundSize: "76px 76px",
            }}
          />
          <div className={`relative ${SECTION}`}>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span className="eyebrow mb-6">Our Offices</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-[1.05] tracking-tight">
                  Online everywhere —{" "}
                  <span className="gold-text">in person where it counts</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-dark/55 leading-relaxed max-w-xl">
                  We are widening our ADR platform&apos;s reach — enhancing
                  infrastructure and building stronger connections so we&apos;re
                  accessible in every business hub across India.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Visit or contact us
                  </Link>
                  <a href="tel:8976955540" className="btn-outline">
                    Call +91 89769 55540
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] bg-dark text-white p-8 md:p-10 shadow-gold-lg overflow-hidden">
                  <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                    <Network className="w-4 h-4" />
                    Our Presence
                  </span>
                  <p className="mt-4 text-xl font-display font-semibold leading-snug">
                    A nationwide network of conciliation centres and offices.
                  </p>
                  <div className="mt-7 grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10">
                    {[
                      { v: "6", l: "City Offices" },
                      { v: "100+", l: "City Coverage" },
                      { v: "12k+", l: "PIN codes" },
                    ].map((s) => (
                      <div key={s.l} className="bg-dark px-3 py-5 text-center">
                        <div className="text-2xl font-display font-bold gold-text">
                          {s.v}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-white/45 mt-1">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ MAP + OFFICES ════════ */}
        <section className="py-20 lg:py-28">
          <div className={SECTION}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Find Us</span>
              <h2 className="heading-lg mt-3">
                Six offices, <span className="accent-serif">one mission</span>
              </h2>
              <p className="mt-4 text-dark/55 leading-relaxed">
                Sure, we&apos;re online — but you can also meet us in Delhi,
                Hyderabad, Bengaluru, Bihar, Thane, or Mumbai.
              </p>
            </div>

            <div>
              {/* Office cards */}
              <div className="grid md:grid-cols-2 gap-5">
                {OFFICES.map((o, i) => (
                  <motion.div
                    key={o.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    className={`rounded-2xl border p-6 transition-all duration-300 ${
                      active === i
                        ? "border-primary/50 bg-white shadow-gold -translate-y-0.5"
                        : "border-cream-300 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          i === 0
                            ? "bg-gold-gradient text-white"
                            : active === i
                              ? "bg-primary/15 text-primary"
                              : "bg-cream-200 text-primary"
                        }`}
                      >
                        {i === 0 ? (
                          <Building2 className="w-5 h-5" />
                        ) : (
                          <MapPin className="w-5 h-5" />
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-lg font-display font-bold text-dark">
                            {o.city}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                            {o.tag}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-dark/60 leading-relaxed">
                          {o.address}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-dark text-white px-6 py-5">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Prefer to call? Reach any office at{" "}
                  <a
                    href="tel:8976955540"
                    className="font-semibold text-white hover:text-primary-300 transition-colors"
                  >
                    +91 89769 55540
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ COMMITMENT ════════ */}
        <section className="py-20 lg:py-24 bg-white border-y border-cream-300">
          <div className={`${SECTION} max-w-4xl text-center`}>
            <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 text-primary items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-7 h-7" />
            </span>
            <h2 className="heading-md">
              Committed to protect <span className="accent-serif">your interests</span>
            </h2>
            <p className="mt-5 text-lg text-dark/65 leading-relaxed">
              Everyone here is aligned and under oath to fulfil our vision of
              providing services par excellence — with integrity, honesty, and
              agility. Wherever you meet us, that pledge travels with us.
            </p>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-20 lg:py-24">
          <div className={SECTION}>
            <div className="rounded-[2rem] bg-cream-200 border border-cream-300 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-md flex items-center gap-3">
                  <Navigation className="w-7 h-7 text-primary" />
                  Plan a visit
                </h3>
                <p className="text-dark/55 mt-2">
                  Schedule a meeting at your nearest PDR COURT office, or resolve
                  your dispute entirely online.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointment" className="btn-primary">
                  Book appointment
                </Link>
                <Link href="/lodge-dispute" className="btn-outline">
                  Lodge a dispute
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
