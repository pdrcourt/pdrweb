"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/data/content";

interface AccordionProps {
  items: FAQ[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="rounded-2xl border border-cream-300 dark:border-white/10 bg-white dark:bg-dark-800 overflow-hidden shadow-sm hover:shadow-gold transition-shadow duration-300"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
        >
          <button
            id={`faq-btn-${item.id}`}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left group cursor-pointer"
            onClick={() => toggle(item.id)}
            aria-expanded={openId === item.id}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="font-semibold text-dark dark:text-white text-base md:text-lg pr-4 group-hover:text-primary transition-colors duration-200">
              {item.question}
            </span>
            <motion.span
              className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg ml-auto"
              animate={{ rotate: openId === item.id ? 45 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openId === item.id && (
              <motion.div
                id={`faq-answer-${item.id}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="h-px bg-cream-300 dark:bg-white/10 mb-4" />
                  <p className="text-dark/60 dark:text-white/60 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default Accordion;
