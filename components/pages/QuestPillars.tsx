"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, LineChart, Crosshair } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    icon: Eye,
    title: "Digital Transparency",
    text: "With state-of-the-art tech tools and clear communication, we keep our members informed about every detail of the process. With us, transparency is a promise you can trust.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "A fair and unbiased outcome is vital for acceptance and long-term success. Integrity is the foundation of every operation we run.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Prudence",
    text: "Our experts read every scenario and use technology to analyse its potential impact on your business — prioritising informed decision-making at every step.",
  },
  {
    icon: Crosshair,
    title: "Precision Meticulousness",
    text: "Every detail counts. We ensure each facet of a transaction is carefully examined and clearly understood for optimal results.",
  },
];

export default function QuestPillars() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-cream-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center">Our Values</span>
          <h2 className="heading-lg mt-3">
            Pillars of our <span className="accent-serif">Quest</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="surface-card p-7 h-full"
            >
              <span className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-5">
                <p.icon className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-display font-bold text-dark mb-2.5">
                {p.title}
              </h3>
              <p className="text-sm text-dark/60 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
