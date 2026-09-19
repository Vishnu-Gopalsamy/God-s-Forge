'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from './SectionLabel'

/* =============================================================
   RESEARCH — Flame & Anvil Laboratory
============================================================= */
function Pattern({ type }) {
  if (type === 'ml') {
    return (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <defs>
          <linearGradient id="mlHeat" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F2520E" />
            <stop offset="100%" stopColor="#283FD7" />
          </linearGradient>
        </defs>
        {[...Array(3)].map((_, l) =>
          [...Array(4)].map((_, n) => (
            <circle
              key={`${l}-${n}`}
              cx={20 + l * 40}
              cy={15 + n * 18}
              r="3"
              fill={l === 2 ? '#283FD7' : l === 1 ? '#7C3AED' : '#F2520E'}
              className="filter drop-shadow-[0_0_6px_rgba(40,63,215,0.4)]"
            />
          ))
        )}
        {[...Array(2)].map((_, l) =>
          [...Array(4)].map((_, n1) =>
            [...Array(4)].map((_, n2) => (
              <line
                key={`${l}-${n1}-${n2}`}
                x1={20 + l * 40}
                y1={15 + n1 * 18}
                x2={60 + l * 40}
                y2={15 + n2 * 18}
                stroke="url(#mlHeat)"
                strokeOpacity="0.4"
                strokeWidth="0.8"
              />
            ))
          )
        )}
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <defs>
          <linearGradient id="shieldHeat" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#283FD7" />
            <stop offset="100%" stopColor="#F2520E" />
          </linearGradient>
        </defs>
        <path
          d="M60 8 L92 22 L90 56 Q60 74 60 74 Q60 74 30 56 L28 22 Z"
          fill="none"
          stroke="url(#shieldHeat)"
          strokeWidth="1.5"
          className="filter drop-shadow-[0_0_8px_rgba(40,63,215,0.4)]"
        />
        <path
          d="M60 18 L84 28 L82 52 Q60 65 60 65 Q60 65 38 52 L36 28 Z"
          fill="none"
          stroke="#283FD7"
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />
        <circle cx="60" cy="42" r="4" fill="#F2520E" className="filter drop-shadow-[0_0_10px_#F2520E]" />
      </svg>
    )
  }

  if (type === 'nodes') {
    return (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="60" cy="40" r="5" fill="#283FD7" className="filter drop-shadow-[0_0_10px_#283FD7]" />
        {[...Array(6)].map((_, i) => {
          const a = (i / 6) * Math.PI * 2
          const x = 60 + Math.cos(a) * 30
          const y = 40 + Math.sin(a) * 26
          const isOrange = i % 2 === 0
          return (
            <g key={i}>
              <line
                x1="60"
                y1="40"
                x2={x}
                y2={y}
                stroke={isOrange ? '#F2520E' : '#283FD7'}
                strokeOpacity="0.5"
                strokeWidth="0.8"
              />
              <circle
                cx={x}
                cy={y}
                r="2.5"
                fill={isOrange ? '#F2520E' : '#283FD7'}
                className="filter drop-shadow-[0_0_6px_rgba(40,63,215,0.4)]"
              />
            </g>
          )
        })}
      </svg>
    )
  }

  if (type === 'wave') {
    return (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M 0 ${18 + i * 11} Q 30 ${12 + i * 9} 60 ${18 + i * 11} T 120 ${18 + i * 11}`}
            fill="none"
            stroke={i % 2 === 0 ? '#F2520E' : '#283FD7'}
            strokeOpacity={0.8 - i * 0.12}
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_6px_rgba(40,63,215,0.3)]"
          />
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 120 80" className="w-full h-full">
      {[...Array(6)].map((_, i) =>
        [...Array(4)].map((_, j) => (
          <rect
            key={`${i}-${j}`}
            x={10 + i * 18}
            y={8 + j * 16}
            width="14"
            height="12"
            fill="none"
            stroke="#283FD7"
            strokeOpacity={0.25 + (i + j) * 0.03}
            strokeWidth="0.6"
          />
        ))
      )}
      <rect
        x={10 + 3 * 18}
        y={8 + 1 * 16}
        width="14"
        height="12"
        fill="#F2520E"
        fillOpacity="0.85"
        className="filter drop-shadow-[0_0_10px_#F2520E]"
      />
    </svg>
  )
}

export default function Research() {
  const cards = [
    { title: 'Temporal Predictive AI', pattern: 'ml', code: 'RES-01' },
    { title: 'Adversarial Defense Metallurgy', pattern: 'shield', code: 'RES-02' },
    { title: 'Explainable Symbolic Intelligence', pattern: 'nodes', code: 'RES-03' },
    { title: 'Signal & Waveform Telemetry', pattern: 'wave', code: 'RES-04' },
    { title: 'Disaster-Proof Edge Mesh', pattern: 'grid', code: 'RES-05' },
  ]

  return (
    <section id="research" className="relative py-32 md:py-44 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Research & Innovation</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif tracking-[-0.02em] leading-[1.05] mb-6 text-slate-900 dark:text-white"
          >
            Where frontier theory strikes <span className="italic text-brand-gradient">the anvil.</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Our labs isolate emerging frontiers in intelligence and security to synthesize practical, unyielding defensive technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B101D] shadow-sm dark:shadow-none hover:border-[#283FD7]/60 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(40,63,215,0.25)] transition-all duration-500 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] font-semibold">
                  {c.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2520E] group-hover:scale-125 transition-transform" />
              </div>

              <div className="h-28 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <Pattern type={c.pattern} />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-lg md:text-xl font-serif text-slate-900 dark:text-white group-hover:text-[#283FD7] dark:group-hover:text-[#60A5FA] transition-colors">
                  {c.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center border border-[#283FD7]/20 group-hover:border-[#283FD7] group-hover:bg-[#283FD7] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#283FD7] group-hover:text-white group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
