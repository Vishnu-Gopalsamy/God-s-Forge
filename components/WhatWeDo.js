'use client'

import { motion } from 'framer-motion'
import { Store, ShieldCheck, Cpu, ArrowRight, Sparkles } from 'lucide-react'
import SectionLabel from './SectionLabel'

export default function WhatWeDo() {
  const stages = [
    {
      stage: 'Phase 01',
      title: 'Tools for Small Businesses Today',
      icon: Store,
      color: 'from-[#F2520E] to-[#FF8A3D]',
      borderColor: 'border-orange-500/30',
      description:
        'We build targeted digital products for everyday local enterprises — from digital restaurant menus to moneylender ledgers. High-utility software that solves real bottlenecks on day one.',
      tag: 'Active Deployment',
    },
    {
      stage: 'Phase 02',
      title: 'Self-Funded Engineering Engine',
      icon: ShieldCheck,
      color: 'from-[#283FD7] to-[#60A5FA]',
      borderColor: 'border-blue-500/30',
      description:
        'By generating sustainable commercial revenue from our everyday business tools, we retain complete engineering independence — free to build deep, patient technology without outside compromise.',
      tag: 'Sustainable Model',
    },
    {
      stage: 'Phase 03',
      title: 'Automation & Sustainability for Tomorrow',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-400',
      borderColor: 'border-emerald-500/30',
      description:
        'We channel that momentum directly into ecological and agricultural breakthroughs — like autonomous weeding robotics that eliminate toxic chemicals and protect farmers.',
      tag: 'Pre-Prototype R&D',
    },
  ]

  return (
    <section id="what-we-do" className="relative py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <SectionLabel>Our Model</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white tracking-tight leading-tight mt-3"
          >
            A practical, stage-based approach to <br className="hidden sm:block" />
            <span className="italic text-brand-gradient font-normal">deep technology.</span>
          </motion.h2>

          {/* Exact 2-3 line pitch from the brief */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-light leading-relaxed max-w-3xl text-balance"
          >
            We build high-utility tools for small businesses today, and use that revenue to fund real-world automation and sustainability technology for tomorrow.
          </motion.p>
        </div>

        {/* 3 Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-9 bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Ambient Top Glow */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${stage.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs sm:text-sm font-mono-tech tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-bold">
                      {stage.stage}
                    </span>
                    <span className="text-xs font-mono-tech tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {stage.tag}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white mb-3 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-sm font-mono-tech text-slate-500 dark:text-slate-400 font-medium">
                  <span>Step 0{idx + 1} of 03</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
