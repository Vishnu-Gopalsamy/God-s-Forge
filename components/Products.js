'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Check, Sparkles, ArrowUpRight, ArrowRight } from 'lucide-react'
import SectionLabel from './SectionLabel'

/* =============================================================
   PRODUCT PREVIEWS  (animated mock UIs shown on hover)
============================================================= */
function ChronoFluxPreview({ active }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-5 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <div className="text-[9px] font-mono text-orange-400 tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
          FORECAST · LIVE
        </div>
      </div>
      {/* Attack graph */}
      <div className="relative h-32 rounded-md bg-black/30 border border-white/10 p-2 mb-3 overflow-hidden">
        <svg viewBox="0 0 200 80" className="w-full h-full">
          {/* Grid */}
          {[...Array(4)].map((_, i) => (
            <line key={i} x1="0" y1={20 * (i + 1)} x2="200" y2={20 * (i + 1)} stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
          ))}
          {/* Past line */}
          <polyline
            points="0,60 20,55 40,50 60,45 80,42 100,35 120,25"
            fill="none" stroke="#3b82f6" strokeWidth="1.5"
            className={active ? 'animate-draw' : ''}
          />
          {/* Forecast (orange dashed) */}
          <polyline
            points="120,25 140,20 160,15 180,8 200,5"
            fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 2"
            className={active ? 'animate-draw' : ''}
            style={{ animationDelay: '0.5s' }}
          />
          {/* Threat markers */}
          {active && [40, 80, 120, 160].map((x, i) => (
            <circle key={i} cx={x} cy={[50, 42, 25, 15][i]} r="2" fill="#f97316" className="animate-pulse-dot" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </svg>
        <div className="absolute top-2 left-2 text-[8px] font-mono text-white/50">THREAT LEVEL</div>
        <div className="absolute bottom-1 right-2 text-[8px] font-mono text-orange-400">+87% next stage</div>
      </div>
      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Nodes', v: '1,284' },
          { l: 'Anomalies', v: '23', accent: true },
          { l: 'Confidence', v: '94%' },
        ].map((s, i) => (
          <div key={i} className={`rounded-md border border-white/10 p-2 ${active ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${0.8 + i * 0.15}s` }}>
            <div className="text-[8px] uppercase tracking-wider text-white/40 mb-0.5">{s.l}</div>
            <div className={`text-sm font-bold ${s.accent ? 'text-orange-400' : 'text-white'}`}>{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhishingHunterPreview({ active }) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!active) { setStep(0); return }
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [active])

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/60">
          <Shield className="w-3 h-3 text-orange-400" />
          PHISHING HUNTER
        </div>
        <div className="text-[9px] font-mono text-orange-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
          SCANNING
        </div>
      </div>

      {/* URL input */}
      <div className="rounded-md border border-white/15 bg-black/30 p-2 mb-2 relative overflow-hidden">
        <div className="text-[8px] uppercase tracking-wider text-white/40 mb-1">Analyzing URL</div>
        <div className="text-[11px] font-mono text-white truncate">
          {active && <span className="animate-type inline-block">https://paypaI-secure-verify.tk/login</span>}
          {!active && <span className="text-white/40">https://...</span>}
        </div>
        {active && step >= 1 && step < 2 && (
          <div className="absolute inset-x-0 h-8 top-0 pointer-events-none">
            <div className="h-full w-full animate-scan bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />
          </div>
        )}
      </div>

      {/* Checks */}
      <div className="space-y-1.5 mb-3">
        {[
          { l: 'Domain age check', bad: true, delay: 1.5 },
          { l: 'SSL certificate', bad: true, delay: 1.8 },
          { l: 'Brand impersonation', bad: true, delay: 2.1 },
        ].map((c, i) => (
          <div key={i} className={`flex items-center justify-between text-[10px] font-mono ${active && step >= 2 ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${c.delay}s` }}>
            <span className="text-white/60">{c.l}</span>
            <span className="text-orange-400 font-bold">FAILED</span>
          </div>
        ))}
      </div>

      {/* Verdict */}
      {active && step >= 3 && (
        <div className="animate-slide-up rounded-md bg-orange-500 text-white p-2 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <div className="flex-1">
            <div className="text-[8px] uppercase tracking-wider opacity-80">Verdict</div>
            <div className="text-xs font-bold">Phishing Attempt Blocked</div>
          </div>
          <div className="text-lg font-bold">99%</div>
        </div>
      )}
    </div>
  )
}

function VasulePreview({ active }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 p-5 overflow-hidden flex items-center justify-center gap-4">
      {/* Phone frame */}
      <div className={`relative w-32 h-56 rounded-[18px] border-[3px] border-slate-700 bg-white shadow-2xl overflow-hidden ${active ? '' : ''}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-800 rounded-b-lg z-10" />
        <div className="p-2 pt-5 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[7px] text-slate-400">Today</div>
              <div className="text-[9px] font-bold text-slate-900">Collections</div>
            </div>
            <div className="w-4 h-4 rounded-full bg-orange-500" />
          </div>
          {/* Total */}
          <div className="rounded-md bg-blue-900 text-white p-2 mb-2">
            <div className="text-[6px] uppercase tracking-wider opacity-70">Collected</div>
            <div className="text-sm font-bold">₹ 48,320</div>
            <div className="text-[7px] text-orange-300">12 of 18 stops</div>
          </div>
          {/* Stops */}
          <div className="space-y-1 flex-1">
            {[
              { n: 'R. Kumar', a: '₹ 2,400', ok: true },
              { n: 'A. Sharma', a: '₹ 1,800', ok: true },
              { n: 'S. Patel', a: '₹ 3,200', ok: false },
            ].map((s, i) => (
              <div key={i} className={`flex items-center justify-between rounded-sm bg-slate-50 px-1.5 py-1 ${active ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
                <div>
                  <div className="text-[7px] font-bold text-slate-900">{s.n}</div>
                  <div className="text-[6px] text-slate-500">{s.a}</div>
                </div>
                <div className={`w-3 h-3 rounded-full flex items-center justify-center ${s.ok ? 'bg-green-500' : 'bg-slate-200'}`}>
                  {s.ok && <Check className="w-2 h-2 text-white" strokeWidth={4} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side info */}
      <div className="flex-1 space-y-2">
        <div className={`rounded-md border border-white/10 bg-black/20 p-2 ${active ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <div className="text-[8px] uppercase tracking-wider text-white/40 mb-1">Route Optimized</div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="text-[10px] font-bold text-white">Offline · Synced</div>
          </div>
        </div>
        {active && (
          <div className="animate-coin flex justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)] flex items-center justify-center text-white font-bold text-sm">₹</div>
          </div>
        )}
        <div className={`rounded-md bg-orange-500/20 border border-orange-500/40 p-2 ${active ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="text-[8px] uppercase tracking-wider text-orange-300 mb-0.5">Daily Rate</div>
          <div className="text-xs font-bold text-white">67% collected</div>
        </div>
      </div>
    </div>
  )
}

function FuturePreview({ active }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-5 overflow-hidden flex items-center justify-center">
      {/* Rings */}
      <motion.div
        animate={active ? { rotate: 360 } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-56 h-56 rounded-full border border-white/10"
      />
      <motion.div
        animate={active ? { rotate: -360 } : {}}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-40 h-40 rounded-full border border-orange-500/30"
      />
      {/* Core */}
      <div className={`relative w-20 h-20 ${active ? 'animate-forge-glow' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl rotate-45 shadow-[0_0_50px_rgba(249,115,22,0.7)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white -rotate-0" strokeWidth={2} />
        </div>
      </div>
      {/* Sparks */}
      {active && [...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-400"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: Math.cos(a) * 110,
              y: Math.sin(a) * 110,
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        )
      })}
      <div className="absolute bottom-4 left-5 right-5">
        <div className="text-[9px] font-mono text-orange-400 tracking-wider mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
          IN THE FORGE
        </div>
        <div className="text-xs text-white/70 font-medium">New ideas are being shaped.</div>
      </div>
    </div>
  )
}

const PREVIEWS = {
  ChronoFlux: ChronoFluxPreview,
  'Phishing Hunter': PhishingHunterPreview,
  Vasule: VasulePreview,
  'Future Product': FuturePreview,
}

/* =============================================================
   PRODUCTS
============================================================= */
function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const Preview = PREVIEWS[product.name]

  return (
    <motion.a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative block rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-blue-900 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
    >
      {/* Preview area */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-slate-900">
        {/* Static poster */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(249,115,22,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.4), transparent 40%)',
            }} />
            <div className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
                Hover to preview
              </div>
            </div>
          </div>
        </div>
        {/* Live animated preview */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          {Preview && <Preview active={hovered} />}
        </div>
        {/* Live badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur text-[9px] font-bold tracking-wider uppercase text-white transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
          Live Preview
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-orange-600 dark:text-orange-400">{product.category}</div>
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-900 dark:group-hover:bg-blue-600 flex items-center justify-center transition-all">
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">{product.name}</h3>
        <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">{product.title}</div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{product.description}</p>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-sm font-bold text-blue-900 dark:text-blue-400 group-hover:gap-3 transition-all">
          {product.cta} <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  )
}

export default function Products() {
  const products = [
    { name: 'ChronoFlux', category: 'AI · Cybersecurity', title: 'AI-Powered Network Attack Forecasting', description: 'Analyzing temporal attack patterns to forecast the next potential stage of a network attack.', cta: 'Explore ChronoFlux' },
    { name: 'Phishing Hunter', category: 'AI · Security', title: 'Real-Time Phishing & Scam Detection', description: 'Intelligent detection designed to identify malicious URLs and scam messages before they cause harm.', cta: 'Explore Phishing Hunter' },
    { name: 'Vasule', category: 'FinTech · Mobile', title: 'Offline-First Collection Management', description: 'A field collection platform designed for employees managing customers, locations, routes and daily payments.', cta: 'Explore Vasule' },
    { name: 'Future Product', category: 'In The Forge', title: 'Something new is being forged.', description: 'New ideas are already entering the forge.', cta: 'Stay Tuned' },
  ]

  return (
    <section id="products" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#060911]/60 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel>Our Products</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-[-0.02em] leading-tight">
              Built for the <span className="text-orange-500">real world.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
              Hover any product to watch it come alive.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 md:text-lg max-w-sm">
            We turn difficult problems into focused, usable products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => <ProductCard key={p.name} product={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
