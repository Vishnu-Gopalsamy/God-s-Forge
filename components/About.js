'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

/* =============================================================
   ABOUT — The Forge Heritage
============================================================= */
export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <SectionLabel>Foundry Origins</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-[-0.02em] leading-[1.05] text-slate-900 dark:text-white"
            >
              Born from fire. <br />
              <span className="italic text-brand-gradient font-normal">Tempered</span> on the anvil of craft.
            </motion.h2>
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg font-light">
            <p>
              God&rsquo;s Forge was inaugurated on an uncompromising tenet: high-stakes challenges require more than brittle software — they demand impenetrable, tempered systems.
            </p>
            <p>
              Represented by the ascending flame of machine intelligence and the indomitable anvil of engineering, we build systems designed to operate where conventional technology fails: from temporal cyber warfare and zero-day threat interception to offline-first edge environments.
            </p>

            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 mt-10">
              {[
                { label: 'Origin', value: 'Foundry India' },
                { label: 'Classification', value: 'DeepTech Product Co.' },
                { label: 'Core Philosophy', value: 'Adversarial Rigor' },
              ].map((m) => (
                <div key={m.label} className="pt-4">
                  <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] mb-1.5 font-semibold">
                    {m.label}
                  </div>
                  <div className="text-sm md:text-base font-medium text-slate-900 dark:text-white">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
