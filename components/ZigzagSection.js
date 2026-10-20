'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function ZigzagSection({ title, subtitle, badge, items }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-blue-900/40 text-[#283FD7] dark:text-[#93C5FD] text-[11px] font-mono-tech tracking-[0.24em] uppercase mb-4 shadow-sm font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2520E]" />
              {badge}
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 dark:text-white tracking-tight"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Vertical Zigzag Sets */}
        <div className="space-y-20 md:space-y-32">
          {items.map((item, idx) => {
            const isReversed = idx % 2 === 1

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center`}
              >
                {/* Photo Column - On mobile, always on top */}
                <div
                  className={`md:col-span-7 ${
                    isReversed ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="relative group rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-900 shadow-xl dark:shadow-2xl">
                    {/* Top ambient highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2520E] to-[#283FD7] z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                      <Image
                        src={item.image}
                        alt={item.title || `Set ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Pill Tag */}
                      {item.tag && (
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono-tech tracking-wider uppercase text-white/90 border border-white/15">
                          {item.tag}
                        </div>
                      )}

                      {/* Step Indicator */}
                      <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-[#0B101D]/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-mono-tech font-bold text-[#F2520E]">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column - On mobile, always below */}
                <div
                  className={`md:col-span-5 ${
                    isReversed ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="text-[11px] font-mono-tech tracking-[0.22em] uppercase text-[#F2520E] font-semibold">
                      Phase 0{idx + 1} &bull; {item.subtitle || 'Insight'}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    {/* Short text per set: one punchy sentence on problem, one on solution */}
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                      {item.text}
                    </p>

                    {item.highlight && (
                      <div className="inline-flex items-center gap-2 pt-2 text-xs font-mono-tech text-[#283FD7] dark:text-[#60A5FA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#283FD7] dark:bg-[#60A5FA]" />
                        {item.highlight}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
