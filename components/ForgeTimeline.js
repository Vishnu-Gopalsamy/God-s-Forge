'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

/* =============================================================
   FORGE TIMELINE — The Smelting Lifecycle
============================================================= */
export default function ForgeTimeline() {
  const stages = [
    {
      n: '01',
      phase: 'ORE / DISCOVERY',
      name: 'Discover',
      desc: 'Isolating structural problems that are catastrophically expensive, overlooked, or deemed unsolvable by conventional systems.',
    },
    {
      n: '02',
      phase: 'THE FLAME',
      name: 'Research',
      desc: 'Subjecting the domain to algorithmic experimentation, mathematical modeling, and adversarial constraint mapping.',
    },
    {
      n: '03',
      phase: 'THE ANVIL',
      name: 'Engineer',
      desc: 'Hammering scalable software architecture, distributed edge protocols, and fault-tolerant micro-kernels into form.',
    },
    {
      n: '04',
      phase: 'THE TEMPERING',
      name: 'Forge',
      desc: 'Deploying battle-hardened, production-ready systems directly into active hostile operational environments.',
    },
  ]

  return (
    <section className="relative py-32 md:py-44 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-24">
          <SectionLabel>The Lifecycle</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif tracking-[-0.02em] leading-[1.02] text-balance max-w-3xl text-slate-900 dark:text-white"
          >
            Raw ideas enter. <br />
            <span className="italic text-brand-gradient">Invulnerable systems emerge.</span>
          </motion.h2>
        </div>

        {/* Desktop Horizontal Molten Pipeline */}
        <div className="hidden md:block relative">
          {/* Base Seam Channel */}
          <div className="absolute top-9 left-0 right-0 h-[2px] bg-slate-200 dark:bg-slate-800" />

          {/* Glowing Flame-to-Cobalt Magma Flow */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            className="absolute top-9 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F2520E] via-[#FF7A29] to-[#283FD7] shadow-[0_0_15px_rgba(40,63,215,0.4)]"
          />

          <div className="grid grid-cols-4 gap-8">
            {stages.map((s, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Node Spark */}
                  <div className="relative flex items-center justify-center w-5 h-5 mb-8">
                    <div
                      className={`absolute w-5 h-5 rounded-full ${
                        isEven ? 'bg-[#F2520E]' : 'bg-[#283FD7]'
                      } shadow-[0_0_20px_4px_rgba(40,63,215,0.4)] group-hover:scale-125 transition-transform`}
                    />
                    <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                  </div>

                  <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#F2520E] dark:text-[#FB923C] mb-1.5 font-semibold">
                    {s.phase}
                  </div>
                  <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-slate-400 dark:text-slate-500 mb-2">
                    STAGE {s.n}
                  </div>
                  <div className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white mb-3 group-hover:text-[#283FD7] dark:group-hover:text-[#60A5FA] transition-colors">
                    {s.name}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Vertical Molten Pipeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F2520E] to-[#283FD7] shadow-[0_0_15px_rgba(40,63,215,0.5)]"
          />
          <div className="flex flex-col gap-12">
            {stages.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-[#F2520E] to-[#283FD7] shadow-[0_0_20px_4px_rgba(40,63,215,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#F2520E] dark:text-[#FB923C] mb-1 font-semibold">
                  {s.phase}
                </div>
                <div className="text-2xl font-serif text-slate-900 dark:text-white mb-2">{s.name}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
