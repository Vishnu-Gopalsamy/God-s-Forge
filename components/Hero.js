'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Flame, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

function FloatingOrb({ size, x, y, color, delay, duration }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none will-change-transform animate-float"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: color,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

export default function Hero() {
  const [isLoaded] = useState(true)

  return (
    <section
      className="relative min-h-[95vh] pt-36 pb-24 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* ── BACKGROUND LAYER ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb size={520} x={25} y={-5} color="radial-gradient(circle, rgba(242,82,14,0.14) 0%, transparent 70%)" delay={0} duration={9} />
        <FloatingOrb size={620} x={55} y={5} color="radial-gradient(circle, rgba(40,63,215,0.12) 0%, transparent 70%)" delay={1.5} duration={11} />

        {/* Ambient Grid */}
        <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-35" />

        {/* Edge Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 65%, rgba(250,247,242,0.7) 100%)',
          }}
        />
        <div
          className="dark:block hidden absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 65%, rgba(6,9,17,0.8) 100%)',
          }}
        />
      </div>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center z-10">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-mono-tech tracking-[0.24em] uppercase mb-8 shadow-sm font-semibold bg-white/90 dark:bg-[#0B101D]/90 border-[#283FD7]/30 text-[#283FD7] dark:text-[#93C5FD]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#F2520E] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F2520E]" />
          </span>
          God&apos;s Forge Technologies
        </motion.div>

        {/* Hero Title */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-serif tracking-[-0.03em] leading-[0.95] text-slate-900 dark:text-white"
          >
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                God&apos;s
              </motion.span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block italic text-brand-gradient font-normal"
                initial={{ y: '110%' }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Forge.
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Pitch Tagline from Brief */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-slate-800 dark:text-slate-100 leading-snug font-serif text-balance"
        >
          Building practical technology for{' '}
          <span className="text-[#283FD7] dark:text-[#60A5FA] font-semibold underline decoration-[#283FD7]/30 decoration-2 underline-offset-4">everyday businesses</span> and
          the <span className="text-[#F2520E] font-semibold underline decoration-[#F2520E]/30 decoration-2 underline-offset-4">farms that feed them</span>.
        </motion.p>

        {/* Brief Sub-pitch */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed"
        >
          Ground-level software tools that solve immediate pain points, channeling momentum into sustainable hardware & automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5"
        >
          <MagneticButton primary href="#products" className="!px-9 !py-4 !text-base sm:!text-lg">
            <Flame className="w-5 h-5 fill-white text-white" />
            Explore Products <ArrowUpRight className="w-5 h-5" />
          </MagneticButton>
          <MagneticButton href="#what-we-do" className="!px-8 !py-4 !text-base sm:!text-lg">
            How We Build
          </MagneticButton>
        </motion.div>

        {/* Quick Product Badges preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-sm sm:text-base font-mono-tech tracking-wider uppercase text-slate-600 dark:text-slate-300"
        >
          <Link
            href="/suvai"
            className="px-4 py-2 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] hover:text-[#283FD7] transition-all flex items-center gap-2.5 shadow-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Suvai &bull; Dining Experience
          </Link>
          <Link
            href="/moneylender"
            className="px-4 py-2 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] hover:text-[#283FD7] transition-all flex items-center gap-2.5 shadow-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Moneylender &bull; Ledger
          </Link>
          <Link
            href="/thimil"
            className="px-4 py-2 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] hover:text-[#283FD7] transition-all flex items-center gap-2.5 shadow-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Thimil &bull; Field Robotics
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <span className="text-[9px] font-mono-tech tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-[#F2520E]/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 'top' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
