'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

/* =============================================================
   PHILOSOPHY — The Creed of the Forge
============================================================= */
export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-36 md:py-48 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-60 pointer-events-none" />

      {/* Central Flame & Anvil Seam Beam */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#F2520E] to-[#283FD7] shadow-[0_0_20px_2px_rgba(40,63,215,0.3)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center z-10">
        <div className="flex justify-center">
          <SectionLabel>Foundry Doctrine</SectionLabel>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-[-0.02em] text-balance mx-auto max-w-4xl text-slate-900 dark:text-white"
        >
          Never chase the hype.<br />
          <span className="italic text-brand-gradient font-normal">Quench the fire in truth.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-light"
        >
          Technology is ephemeral unless hammered into purpose. At God&rsquo;s Forge, we ignite the fire of research and strike it against the anvil of engineering — casting solutions that never yield under real-world pressure.
        </motion.p>

        {/* Forge Creed Triad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { title: 'The Flame', subtitle: 'Creative Machine Intelligence', color: 'text-[#F2520E]' },
            { title: 'The Anvil', subtitle: 'Rock-Solid Systems Engineering', color: 'text-[#283FD7]' },
            { title: 'The Temper', subtitle: 'Resilient Battle-Ready Longevity', color: 'text-slate-900 dark:text-white' },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-[#283FD7]/60 transition-colors"
            >
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500 mb-1 font-semibold">
                Pillar {idx + 1}
              </div>
              <div className={`text-xl font-serif ${item.color}`}>{item.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
