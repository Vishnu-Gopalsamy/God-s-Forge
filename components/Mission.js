'use client'

import { motion } from 'framer-motion'
import { Leaf, Cpu, Shield, Sparkles } from 'lucide-react'
import SectionLabel from './SectionLabel'

export default function Mission() {
  const pillars = [
    {
      title: 'Pragmatic Engineering',
      desc: 'We start where work actually happens. Software that works offline, handles spotty networks, and respects the operator.',
      icon: Cpu,
      color: 'text-[#283FD7]',
    },
    {
      title: 'Economic Independence',
      desc: 'Building sustainable small business revenue lets us invest patiently in deep technology without short-term VC pressures.',
      icon: Shield,
      color: 'text-[#F2520E]',
    },
    {
      title: 'Environmental Health',
      desc: 'Channeling engineering directly into chemical-free agriculture, protecting soil vitality, clean water, and farm workers.',
      icon: Leaf,
      color: 'text-emerald-500',
    },
  ]

  return (
    <section id="mission" className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-40 pointer-events-none" />

      {/* Radiant Seam Line */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#F2520E] to-[#283FD7] opacity-60"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center z-10">
        <div className="flex justify-center">
          <SectionLabel>Why Us &bull; Our Mission</SectionLabel>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight mx-auto max-w-4xl text-slate-900 dark:text-white mt-4"
        >
          Practical engineering today. <br />
          <span className="italic text-brand-gradient font-normal">Ecological health tomorrow.</span>
        </motion.h2>

        {/* Short line tying back engineering + sustainability + environmental health */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-light text-balance"
        >
          Technology shouldn&rsquo;t live in an ivory tower. Whether designing digital menus that energize local diners or autonomous robotics that restore farmland without chemicals, our work bridges everyday commerce with long-term environmental sustainability.
        </motion.p>

        {/* 3 Mission Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left"
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#283FD7]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-slate-400 font-bold">
                    Pillar 0{idx + 1}
                  </span>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="text-lg font-serif text-slate-900 dark:text-white mb-2">{item.title}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.desc}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
