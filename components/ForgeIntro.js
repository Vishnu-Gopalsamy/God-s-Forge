'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* =============================================================
   FORGE INTRO — White Canvas Forge Sequence
   - White background matches site (no contrast shock on exit)
   - Pendulum hammer swings naturally onto anvil billet
   - Adaptive particle count (mobile: 10, tablet: 16, desktop: 22)
   - GPU-composited transforms (will-change, translateZ(0))
   - prefers-reduced-motion: auto-skip
   - Iris exit: white→white, seamless reveal
============================================================= */

// Deterministic ember mote — GPU-composited for smooth perf on all devices
function ForgeMote({ index }) {
  const s1 = (index * 7919 + 4231) % 10000
  const s2 = (index * 3571 + 8191) % 10000
  const s3 = (index * 5003 + 1597) % 10000
  const xPct = 30 + (s1 / 10000) * 40
  const size = 2 + (s2 % 4)
  const dur = 2.5 + (s3 % 5) * 0.4
  const delay = (index * 0.13) % 2.5
  const isGold = index % 3 !== 2

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${xPct}%`,
        bottom: '34%',
        background: isGold
          ? 'radial-gradient(circle, #FFD060 0%, #F2520E 70%, transparent 100%)'
          : 'radial-gradient(circle, #93C5FD 0%, #283FD7 70%, transparent 100%)',
        boxShadow: isGold
          ? `0 0 ${size * 2}px rgba(242,82,14,0.5)`
          : `0 0 ${size * 2}px rgba(40,63,215,0.4)`,
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, -(120 + (s2 % 80))],
        x: [0, (s3 % 50) - 25],
        opacity: [0, 0.85, 0.6, 0],
      }}
      transition={{ duration: dur, delay, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }}
    />
  )
}

// Single spark particle
function Spark({ angle, distance, color, delay: d }) {
  const rad = (angle * Math.PI) / 180
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{
        background: color,
        boxShadow: `0 0 6px 2px ${color}`,
        left: 0,
        top: 0,
        willChange: 'transform, opacity',
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * (distance * 0.6),
        opacity: [1, 1, 0],
        scale: [1, 0.8, 0],
      }}
      transition={{ duration: 0.5 + d * 0.07, ease: [0.1, 0.8, 0.2, 1] }}
    />
  )
}

// Spark burst on hammer impact — 14 sparks (perf-optimised)
function SparkBurst({ active, strikeIndex }) {
  if (!active) return null
  const count = 14
  const sparks = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360
    const dist = 45 + (i % 3) * 26
    const color = i % 4 === 0 ? '#FFFFFF' : i % 4 === 1 ? '#FFD060' : i % 4 === 2 ? '#F2520E' : '#FF8C3A'
    return { angle, dist, color, d: i % 4 }
  })

  return (
    <div className="absolute pointer-events-none" style={{ left: 0, top: 0 }}>
      {/* Shockwave ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          border: '2px solid rgba(242,82,14,0.7)',
          boxShadow: '0 0 20px 6px rgba(242,82,14,0.3)',
          willChange: 'transform, opacity',
        }}
        initial={{ width: 10, height: 10, x: -5, y: -5, opacity: 1 }}
        animate={{ width: 180, height: 180, x: -90, y: -90, opacity: 0 }}
        transition={{ duration: 0.48, ease: 'easeOut' }}
      />
      {/* Secondary cobalt ring on later strikes */}
      {strikeIndex >= 2 && (
        <motion.div
          className="absolute rounded-full"
          style={{
            border: '1.5px solid rgba(40,63,215,0.5)',
            willChange: 'transform, opacity',
          }}
          initial={{ width: 14, height: 14, x: -7, y: -7, opacity: 0.85 }}
          animate={{ width: 260, height: 260, x: -130, y: -130, opacity: 0 }}
          transition={{ duration: 0.62, ease: 'easeOut', delay: 0.05 }}
        />
      )}
      {/* Radial sparks */}
      {sparks.map((s, i) => (
        <Spark key={i} angle={s.angle} distance={s.dist} color={s.color} delay={s.d} />
      ))}
    </div>
  )
}

// Pulse ring — for final reveal
function PulseRing({ delay, color, baseSize }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        border: `1.5px solid ${color}`,
        width: baseSize,
        height: baseSize,
        willChange: 'transform, opacity',
      }}
      initial={{ scale: 0.5, opacity: 0.7 }}
      animate={{ scale: 3.5, opacity: 0 }}
      transition={{ duration: 2.4, delay, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }}
    />
  )
}

const CHARS = ['G', 'O', 'D', "'", 'S', ' ', 'F', 'O', 'R', 'G', 'E']
const TOTAL_STRIKES = 3

export default function ForgeIntro({ onComplete }) {
  const [phase, setPhase] = useState('blank')  // blank → glow → strike → reveal → text → rings → exit
  const [strikeCount, setStrikeCount] = useState(0)
  const [hammerDown, setHammerDown] = useState(false)
  const [sparksActive, setSparksActive] = useState(false)
  const [screenFlash, setScreenFlash] = useState(false)
  const [charsVisible, setCharsVisible] = useState(0)
  const [exiting, setExiting] = useState(false)
  // Adaptive mote count — fewer particles on smaller screens
  const moteCount = useRef(22)

  const handleComplete = useCallback(() => { onComplete?.() }, [onComplete])

  const triggerExit = useCallback(() => {
    if (exiting) return
    setExiting(true)
    setPhase('exit')
    setTimeout(handleComplete, 900)
  }, [exiting, handleComplete])

  // Detect device width + prefers-reduced-motion on mount
  useEffect(() => {
    moteCount.current = window.innerWidth < 640 ? 10 : window.innerWidth < 1024 ? 16 : 22
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleComplete()
    }
  }, [handleComplete])

  // ESC to skip
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') triggerExit() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [triggerExit])

  // Main choreography sequence
  useEffect(() => {
    if (exiting) return
    let cancelled = false
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

    const run = async () => {
      await sleep(300)
      if (cancelled) return
      setPhase('glow')

      await sleep(700)
      if (cancelled) return
      setPhase('strike')

      // Three hammer strikes
      for (let i = 0; i < TOTAL_STRIKES; i++) {
        if (cancelled) return
        await sleep(i === 0 ? 400 : 280 + i * 50)

        setHammerDown(true)
        await sleep(120)
        if (cancelled) return

        // Impact
        setSparksActive(true)
        setScreenFlash(true)
        setStrikeCount(i + 1)
        setTimeout(() => setScreenFlash(false), 80)
        setTimeout(() => setSparksActive(false), 180)

        await sleep(80)
        setHammerDown(false)
      }

      // Logo reveal
      await sleep(400)
      if (cancelled) return
      setPhase('reveal')

      // Letter forge
      await sleep(500)
      if (cancelled) return
      setPhase('text')

      for (let i = 1; i <= CHARS.length; i++) {
        if (cancelled) return
        setCharsVisible(i)
        await sleep(i === 6 ? 160 : 70)
      }

      // Pulse rings
      await sleep(400)
      if (cancelled) return
      setPhase('rings')
      await sleep(900)

      if (cancelled) return
      triggerExit()
    }

    run()
    return () => { cancelled = true }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Billet heat state
  const billetColor = strikeCount === 0 ? '#FFD060'
    : strikeCount === 1 ? '#FF9A3C'
    : strikeCount === 2 ? '#F2520E'
    : '#283FD7'

  const billetGlow = strikeCount === 0
    ? 'drop-shadow(0 0 8px rgba(255,208,96,0.6))'
    : strikeCount === 1
    ? 'drop-shadow(0 0 14px rgba(255,154,60,0.8))'
    : strikeCount === 2
    ? 'drop-shadow(0 0 20px rgba(242,82,14,1)) drop-shadow(0 0 40px rgba(242,82,14,0.5))'
    : 'drop-shadow(0 0 25px rgba(40,63,215,0.9)) drop-shadow(0 0 50px rgba(40,63,215,0.4))'

  return (
    <AnimatePresence onExitComplete={handleComplete}>
      {!exiting && (
        <motion.div
          key="forge-intro"
          className="fixed inset-0 z-[99999] overflow-hidden select-none flex items-center justify-center"
          style={{ background: '#FAF7F2', willChange: 'opacity' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* ── INCANDESCENT FLASH ON STRIKE ─────────────────────── */}
          <motion.div
            className="absolute inset-0 z-50 pointer-events-none"
            animate={{ opacity: screenFlash ? 0.5 : 0 }}
            transition={{ duration: 0.07 }}
            style={{
              background: 'radial-gradient(ellipse at 50% 52%, rgba(255,220,120,0.9) 0%, rgba(242,82,14,0.45) 40%, transparent 75%)',
              willChange: 'opacity',
            }}
          />

          {/* ── IRIS EXIT ────────────────────────────────────────── */}
          {phase === 'exit' && (
            <motion.div
              className="absolute inset-0 z-40 pointer-events-none"
              style={{ background: '#FAF7F2', willChange: 'clip-path' }}
              initial={{ clipPath: 'circle(100% at 50% 50%)' }}
              animate={{ clipPath: 'circle(0% at 50% 50%)' }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            />
          )}

          {/* ── SKIP BUTTON ──────────────────────────────────────── */}
          <motion.button
            onClick={triggerExit}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase !== 'blank' ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-6 right-6 z-40 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-[11px] font-mono-tech tracking-[0.2em] text-slate-500 hover:text-slate-800 transition-all backdrop-blur-sm flex items-center gap-2 cursor-pointer shadow-sm"
          >
            SKIP <kbd className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 font-sans">ESC</kbd>
          </motion.button>

          {/* ── BRAND HAIRLINES ──────────────────────────────────── */}
          <motion.div
            className="absolute top-0 inset-x-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent 5%, #F2520E 30%, #283FD7 70%, transparent 95%)', willChange: 'transform' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase !== 'blank' ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute bottom-0 inset-x-0 h-[1.5px]"
            style={{ background: 'linear-gradient(90deg, transparent 5%, #283FD7 30%, #F2520E 70%, transparent 95%)', willChange: 'transform' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase !== 'blank' ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* ── STATUS LINE ──────────────────────────────────────── */}
          <motion.div
            className="absolute top-6 left-6 z-10 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: phase !== 'blank' ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#F2520E] opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F2520E]" />
            </span>
            <span className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-slate-500">
              FORGE INIT · GF-01
            </span>
          </motion.div>

          {/* ── WARM AMBIENT BLOOM ───────────────────────────────── */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 600, height: 400,
              background: 'radial-gradient(ellipse, rgba(242,82,14,0.10) 0%, rgba(255,180,60,0.06) 40%, transparent 70%)',
              filter: 'blur(40px)',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -30%) translateZ(0)',
              willChange: 'opacity',
            }}
            animate={{ opacity: phase === 'blank' ? 0 : 0.4 + strikeCount * 0.18 }}
            transition={{ duration: 0.6 }}
          />

          {/* ── RISING EMBER MOTES ───────────────────────────────── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {['glow', 'strike', 'reveal', 'text', 'rings'].includes(phase) &&
              Array.from({ length: moteCount.current }, (_, i) => <ForgeMote key={i} index={i} />)
            }
          </div>

          {/* ── SUBTLE GRID ──────────────────────────────────────── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase !== 'blank' ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(40,63,215,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,82,14,0.04) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 65%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 65%)',
            }}
          />

          {/* ═══ CENTRAL FORGE STAGE ════════════════════════════ */}
          <div className="relative flex flex-col items-center z-10">

            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: ['glow', 'strike', 'reveal', 'text', 'rings', 'exit'].includes(phase) ? 1 : 0,
                y: 0,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── PENDULUM HAMMER ──────────────────────────────
                   Geometry: at +15° strike angle, head tip lands
                   108px × sin(15°) ≈ 28px RIGHT of pivot.
                   Billet center at 50%, so pivot at 50% − 28px.
                   left:50% + marginLeft:−33px + origin:5px → pivot at 50%−28px ✓
              ─────────────────────────────────────────────────── */}
              {['glow', 'strike'].includes(phase) && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    top: '-118px',
                    left: '50%',
                    marginLeft: '-33px',
                    transformOrigin: '5px 0px',
                    zIndex: 20,
                    willChange: 'transform',
                  }}
                  animate={{ rotate: hammerDown ? 15 : -65 }}
                  transition={{
                    duration: hammerDown ? 0.11 : 0.28,
                    ease: hammerDown ? [0.55, 0, 1, 0.75] : [0.16, 1, 0.36, 1],
                  }}
                >
                  <svg width="62" height="108" viewBox="0 0 62 108" fill="none">
                    {/* Handle — grip end at top (pivot) */}
                    <rect x="26" y="0" width="10" height="68" rx="5" fill="#7A5810" />
                    <rect x="29" y="2" width="2.5" height="62" rx="1.2" fill="#C8A84B" opacity="0.4" />
                    <rect x="26" y="10" width="10" height="3" rx="1.5" fill="#5A3E08" opacity="0.6" />
                    <rect x="26" y="18" width="10" height="3" rx="1.5" fill="#5A3E08" opacity="0.6" />
                    <rect x="26" y="26" width="10" height="3" rx="1.5" fill="#5A3E08" opacity="0.5" />
                    {/* Head — at bottom, this is what strikes */}
                    <rect x="4" y="65" width="54" height="32" rx="6" fill="#3C3C4E" />
                    <rect x="4" y="65" width="54" height="10" rx="5" fill="#56566A" />
                    <rect x="7" y="87" width="48" height="7" rx="2" fill="#28283A" />
                    <circle cx="31" cy="78" r="3.5" fill="#F2520E" opacity="0.65" />
                    <rect x="22" y="62" width="18" height="6" rx="3" fill="#2A2A38" />
                    {/* Strike face — very bottom, hits the billet */}
                    <rect
                      x="4" y="95" width="54" height="5" rx="2.5"
                      fill={strikeCount >= 2 ? '#60A5FA' : strikeCount === 1 ? '#FFD060' : '#F2520E'}
                      style={{
                        filter: `drop-shadow(0 2px ${10 + strikeCount * 6}px ${
                          strikeCount >= 2 ? 'rgba(40,63,215,0.9)' : 'rgba(242,82,14,0.9)'
                        })`,
                      }}
                    />
                  </svg>
                </motion.div>
              )}

              {/* Sparks burst at impact */}
              <div className="absolute pointer-events-none" style={{ top: '-4px', zIndex: 25 }}>
                <SparkBurst active={sparksActive} strikeIndex={strikeCount} />
              </div>

              {/* ── ANVIL + BILLET ────────────────────────────── */}
              <div className="relative flex flex-col items-center">

                {/* Heated metal billet */}
                <motion.div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    width: 110,
                    height: 18,
                    background: `linear-gradient(90deg, rgba(0,0,0,0.08) 0%, ${billetColor} 20%, ${billetColor} 80%, rgba(0,0,0,0.08) 100%)`,
                    filter: billetGlow,
                    marginBottom: -2,
                    zIndex: 10,
                    willChange: 'filter',
                  }}
                  animate={{ filter: billetGlow }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Heat shimmer */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.45) 50%, transparent 80%)',
                      backgroundSize: '200% 100%',
                      willChange: 'background-position',
                    }}
                    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                {/* SVG Anvil */}
                <svg width="180" height="70" viewBox="0 0 180 70" fill="none" style={{ zIndex: 5 }}>
                  <rect x="20" y="44" width="140" height="18" rx="4" fill="#D1D5DB" />
                  <rect x="20" y="44" width="140" height="4" rx="2" fill="#E5E7EB" />
                  <rect x="55" y="30" width="70" height="16" rx="2" fill="#C4C8D0" />
                  <rect x="10" y="18" width="160" height="14" rx="3" fill="#D1D5DB" />
                  <rect x="10" y="18" width="160" height="4" rx="2" fill="#E9EAEE" />
                  <path d="M170 21 Q195 25 192 31 L170 31 Z" fill="#C4C8D0" />
                  <motion.rect
                    x="10" y="18" width="160" height="14" rx="3"
                    fill={`${billetColor}22`}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                  <rect x="28" y="60" width="30" height="10" rx="2" fill="#B8BCC6" />
                  <rect x="122" y="60" width="30" height="10" rx="2" fill="#B8BCC6" />
                </svg>

                {/* Anvil glow bloom */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: 220, height: 80,
                    background: `radial-gradient(ellipse, ${billetColor}28 0%, transparent 70%)`,
                    filter: 'blur(18px)',
                    top: 0, left: '50%',
                    transform: 'translateX(-50%) translateZ(0)',
                    transition: 'background 0.3s',
                  }}
                />
              </div>

              {/* ── LOGO REVEAL ──────────────────────────────────── */}
              <motion.div
                className="relative mt-8 mb-6"
                initial={{ opacity: 0, scale: 0.75, y: 10 }}
                animate={{
                  opacity: ['reveal', 'text', 'rings', 'exit'].includes(phase) ? 1 : 0,
                  scale: 1,
                  y: 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Pulse rings */}
                {phase === 'rings' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <PulseRing delay={0}   color="rgba(242,82,14,0.45)" baseSize={120} />
                    <PulseRing delay={0.7} color="rgba(40,63,215,0.30)"  baseSize={120} />
                    <PulseRing delay={1.4} color="rgba(242,82,14,0.20)" baseSize={120} />
                  </div>
                )}

                {/* Logo */}
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white"
                  style={{
                    boxShadow: '0 8px 40px -8px rgba(242,82,14,0.30), 0 0 0 1px rgba(242,82,14,0.14), 0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  <img src="/logo.jpg" alt="God's Forge" className="w-full h-full object-contain" />
                  {/* Sheen sweep */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.65) 50%, transparent 80%)', willChange: 'transform' }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>

              {/* ── BRAND NAME CHARACTER REVEAL ────────────────── */}
              <div className="h-10 sm:h-14 flex items-center overflow-hidden mb-2">
                {CHARS.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }}
                    animate={i < charsVisible
                      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                      : { opacity: 0, y: 16, filter: 'blur(5px)' }
                    }
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="font-cinzel font-bold text-2xl sm:text-4xl"
                    style={{
                      color: '#19110B',
                      letterSpacing: '0.18em',
                      display: 'inline-block',
                      minWidth: char === ' ' ? '0.5em' : undefined,
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>

              {/* Tagline */}
              <motion.div
                className="text-[10px] font-mono-tech tracking-[0.42em] uppercase flex items-center gap-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: charsVisible >= CHARS.length ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#F2520E]" />
                <span className="text-slate-500">Flame · Anvil · Systems</span>
                <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#283FD7]" />
              </motion.div>

              {/* Strike progress bar */}
              <motion.div
                className="flex items-center gap-1.5 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: ['glow', 'strike'].includes(phase) ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {Array.from({ length: TOTAL_STRIKES }, (_, i) => (
                  <div key={i} className="h-1 w-8 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.08)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: i < 2
                          ? 'linear-gradient(90deg, #F2520E, #FF8C3A)'
                          : 'linear-gradient(90deg, #FF8C3A, #283FD7)',
                        willChange: 'width',
                      }}
                      animate={{ width: i < strikeCount ? '100%' : '0%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ))}
                <span className="ml-1 text-[9px] font-mono-tech tracking-[0.25em] uppercase text-slate-400">
                  {strikeCount < TOTAL_STRIKES ? `STRIKE ${strikeCount + 1}/${TOTAL_STRIKES}` : 'TEMPERED'}
                </span>
              </motion.div>

            </motion.div>
          </div>

          {/* ── CORNER BRACKETS ──────────────────────────────────── */}
          {['text', 'rings', 'exit'].includes(phase) && (
            <>
              {[
                { top: '8%', left: '5%', rotate: '0deg' },
                { top: '8%', right: '5%', rotate: '90deg' },
                { bottom: '8%', left: '5%', rotate: '-90deg' },
                { bottom: '8%', right: '5%', rotate: '180deg' },
              ].map((style, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 pointer-events-none"
                  style={{ ...style }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${style.rotate})` }}>
                    <path d="M0 8 L0 0 L8 0" stroke="#F2520E" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              ))}
            </>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  )
}
