'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Flame, Zap, Shield } from 'lucide-react'
import MagneticButton from './MagneticButton'
import HeroReactor from './HeroReactor'

/* =============================================================
   HERO — Cinematic, dramatic, wow-factor entrance
============================================================= */

// Floating particle in Hero background
function FloatingOrb({ size, x, y, color, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: color,
        filter: `blur(${size / 2}px)`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const WORD_VARIANTS = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delay hero animation to after intro
    const t = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const heroWords = ['We', 'Forge']

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-28 pb-24 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* ── BACKGROUND LAYER ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dual-bloom ambience */}
        <FloatingOrb size={600} x={20} y={-10} color="radial-gradient(circle, rgba(242,82,14,0.18) 0%, transparent 70%)" delay={0} duration={8} />
        <FloatingOrb size={700} x={55} y={-5} color="radial-gradient(circle, rgba(40,63,215,0.16) 0%, transparent 70%)" delay={1.5} duration={10} />
        <FloatingOrb size={400} x={70} y={40} color="radial-gradient(circle, rgba(242,82,14,0.1) 0%, transparent 70%)" delay={3} duration={12} />
        <FloatingOrb size={350} x={10} y={50} color="radial-gradient(circle, rgba(40,63,215,0.1) 0%, transparent 70%)" delay={2} duration={9} />

        {/* Grid */}
        <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-50" />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(250,247,242,0.6) 100%)',
          }}
        />
        <div className="dark:block hidden absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(6,9,17,0.7) 100%)',
          }}
        />
      </div>

      {/* ── QUANTUM CRUCIBLE REACTOR BACKDROP ────────────────── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]), opacity }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <HeroReactor />
      </motion.div>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center z-10 perspective-1000"
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-[10px] font-mono-tech tracking-[0.26em] uppercase mb-10 shadow-lg"
          style={{
            background: 'rgba(255,255,255,0.9)',
            borderColor: 'rgba(40,63,215,0.2)',
            color: '#283FD7',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#F2520E] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F2520E]" />
          </span>
          God&apos;s Forge · DeepTech Systems
        </motion.div>

        {/* HERO HEADLINE — word by word reveal */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif tracking-[-0.035em] leading-[0.92] text-slate-900 dark:text-white text-balance"
            style={{ perspective: '1000px' }}
          >
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                We Forge
              </motion.span>
            </span>
            <br />
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block italic text-brand-gradient font-normal"
                initial={{ y: '110%' }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              >
                What&apos;s Next.
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light"
        >
          A product-focused technology company engineering{' '}
          <span className="text-[#283FD7] dark:text-[#60A5FA] font-medium">intelligent</span>,{' '}
          <span className="text-[#F2520E] font-medium">resilient systems</span> for
          complex real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton primary href="#products">
            <Flame className="w-4 h-4 fill-white text-white" />
            Upcoming Systems <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton href="#about">
            Discover Our Story
          </MagneticButton>
        </motion.div>

        {/* Foundry Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#0B101D]/80 backdrop-blur-sm shadow-sm"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#F2520E] animate-pulse" />
          <span className="text-[11px] font-mono-tech tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
            Foundry Status: <strong className="text-slate-900 dark:text-white font-semibold">Active Stealth R&D</strong> // Inaugural Projects In Development
          </span>
        </motion.div>

        {/* Lifecycle flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[10px] font-mono-tech tracking-[0.26em] uppercase text-slate-400 dark:text-slate-500"
        >
          {['Discovery', 'Research', 'Engineering', 'Product', 'Impact'].map((s, i) => (
            <div key={s} className="flex items-center gap-5">
              <span className="hover:text-[#283FD7] dark:hover:text-[#60A5FA] transition-colors cursor-default font-medium">
                {s}
              </span>
              {i < 4 && (
                <span className="w-1 h-1 rounded-full bg-[#F2520E]/40 hidden sm:inline-block" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[9px] font-mono-tech tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">Scroll</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-[#F2520E]/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 'top' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
