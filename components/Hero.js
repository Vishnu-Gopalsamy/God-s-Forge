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
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const [isLoaded] = useState(true)

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] pt-32 pb-24 overflow-hidden flex flex-col justify-center items-center"
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
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-5xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center z-10"
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-[11px] font-mono-tech tracking-[0.24em] uppercase mb-8 shadow-sm"
          style={{
            background: 'rgba(255,255,255,0.85)',
            borderColor: 'rgba(40,63,215,0.2)',
            color: '#283FD7',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#F2520E] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F2520E]" />
          </span>
          God&apos;s Forge Technologies
        </motion.div>

        {/* Hero Title */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-[-0.03em] leading-[0.95] text-slate-900 dark:text-white"
          >
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                God&apos;s
              </motion.span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block italic text-brand-gradient font-normal"
                initial={{ y: '110%' }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              >
                Forge.
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Pitch Tagline from Brief */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-3xl text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-200 leading-relaxed font-light text-balance"
        >
          Building practical technology for{' '}
          <span className="text-[#283FD7] dark:text-[#60A5FA] font-medium">everyday businesses</span> and
          the <span className="text-[#F2520E] font-medium">farms that feed them</span>.
        </motion.p>

        {/* Brief Sub-pitch */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 max-w-xl text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light"
        >
          Ground-level software tools that solve immediate pain points, channeling momentum into sustainable hardware & automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton primary href="#products">
            <Flame className="w-4 h-4 fill-white text-white" />
            Explore Products <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton href="#what-we-do">
            How We Build
          </MagneticButton>
        </motion.div>

        {/* Quick Product Badges preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/suvai"
            className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] hover:text-[#283FD7] transition-all flex items-center gap-2 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Suvai &bull; Dining Experience
          </Link>
          <Link
            href="/moneylender"
            className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] hover:text-[#283FD7] transition-all flex items-center gap-2 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Moneylender &bull; Ledger
          </Link>
          <Link
            href="/thimil"
            className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] hover:text-[#283FD7] transition-all flex items-center gap-2 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Thimil &bull; Field Robotics
          </Link>
        </motion.div>
      </motion.div>

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
