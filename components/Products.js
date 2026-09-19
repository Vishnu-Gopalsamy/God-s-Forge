'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, ArrowUpRight, ArrowRight, Wallet, Radio, Navigation, Clock } from 'lucide-react'
import SectionLabel from './SectionLabel'

/* =============================================================
   PRODUCT PREVIEWS  (Ultra-smooth interactive mock UIs)
============================================================= */

function MoneyLenderPreview({ active }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#060D1F] via-[#0A1633] to-[#040814] p-5 sm:p-6 overflow-hidden flex items-center justify-center gap-5 sm:gap-7 select-none">
      {/* Ambient background glow */}
      <div
        className={`absolute -top-16 -left-16 w-56 h-56 rounded-full bg-blue-600/20 blur-[60px] pointer-events-none transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-40'
        }`}
      />
      <div
        className={`absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-orange-600/15 blur-[60px] pointer-events-none transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-30'
        }`}
      />

      {/* Phone chassis */}
      <div
        className={`relative w-36 sm:w-40 h-60 sm:h-64 rounded-[22px] border-2 border-slate-700/80 bg-slate-950/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden flex-shrink-0 transition-transform duration-500 ${
          active ? 'scale-100 ring-1 ring-orange-500/30' : 'scale-[0.98] opacity-90'
        }`}
      >
        {/* Dynamic Island / Speaker */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-center gap-1.5 px-2">
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>

        {/* Screen Content */}
        <div className="pt-6 px-2.5 pb-2.5 h-full flex flex-col justify-between text-slate-100">
          <div>
            {/* App Header */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-[7px] font-mono text-slate-400 uppercase tracking-wider">Field Ledger</div>
                <div className="text-[10px] font-bold text-white tracking-tight flex items-center gap-1">
                  Money Lender
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center shadow-sm">
                <Wallet className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            {/* Total Collected Card */}
            <div className="rounded-lg bg-gradient-to-br from-blue-900/90 to-blue-950/90 border border-blue-500/30 p-2 mb-2 shadow-inner">
              <div className="flex items-center justify-between text-[6px] text-blue-200/80 uppercase font-mono tracking-wider mb-0.5">
                <span>Today&apos;s Recovery</span>
                <span className="text-emerald-400 font-semibold">94.2%</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight">₹ 48,320</div>
              
              {/* Animated Progress Bar */}
              <div className="mt-1 w-full h-1 bg-black/40 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    active ? 'w-[67%] animate-shimmer-progress' : 'w-[67%] bg-orange-500'
                  }`}
                />
              </div>
              <div className="mt-1 flex items-center justify-between text-[6px] text-slate-300">
                <span>12 / 18 borrowers</span>
                <span className="text-orange-300 font-medium">₹ 14,200 due</span>
              </div>
            </div>

            {/* Borrower List */}
            <div className="space-y-1">
              {[
                { name: 'R. Kumar', amount: '₹ 2,400', time: '09:12 AM', paid: true },
                { name: 'A. Sharma', amount: '₹ 1,800', time: '09:28 AM', paid: true },
                { name: 'S. Patel', amount: '₹ 3,200', time: 'Next Stop', paid: false },
              ].map((borrower, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between rounded-md px-1.5 py-1 text-[7px] border transition-all duration-300 ${
                    borrower.paid
                      ? 'bg-slate-900/80 border-slate-800 text-slate-200'
                      : 'bg-orange-500/10 border-orange-500/30 text-white'
                  }`}
                >
                  <div className="truncate pr-1">
                    <div className="font-semibold leading-tight">{borrower.name}</div>
                    <div className="text-[6px] text-slate-400">{borrower.time}</div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="font-mono font-bold text-white">{borrower.amount}</span>
                    <div
                      className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        borrower.paid ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-orange-400 border border-orange-500/40'
                      }`}
                    >
                      {borrower.paid ? (
                        <Check className="w-2 h-2" strokeWidth={3} />
                      ) : (
                        <Clock className="w-1.5 h-1.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick status bar at bottom */}
          <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[6px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              GPS Active
            </span>
            <span>Offline Sync OK</span>
          </div>
        </div>
      </div>

      {/* Side Telemetry Controls */}
      <div className="flex-1 space-y-2.5 max-w-[190px]">
        {/* Route Optimization */}
        <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-2.5 transition-all duration-300">
          <div className="text-[8px] uppercase tracking-wider font-mono text-slate-400 mb-1 flex items-center gap-1.5">
            <Navigation className="w-2.5 h-2.5 text-blue-400" />
            Route Intelligent
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold text-white">Zone 4 · Active</div>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Sync 100%
            </span>
          </div>
        </div>

        {/* Currency Medal */}
        <div className="flex justify-center py-1">
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-br from-[#FFA25B] via-[#F2520E] to-[#C93B00] shadow-[0_0_24px_rgba(242,82,14,0.6)] flex items-center justify-center text-white font-serif font-bold text-base border border-orange-300/40 ${
              active ? 'animate-coin' : ''
            }`}
          >
            ₹
          </div>
        </div>

        {/* Recovery stats */}
        <div className="rounded-xl bg-orange-500/15 border border-orange-500/30 backdrop-blur-md p-2.5 transition-all duration-300">
          <div className="text-[8px] uppercase tracking-wider font-mono text-orange-300 mb-0.5">
            Daily Recovery Rate
          </div>
          <div className="text-xs font-bold text-white flex items-center justify-between">
            <span>67% Collected</span>
            <span className="text-[9px] font-mono text-orange-400 font-normal">+18% vs avg</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FuturePreview({ active }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#060D1F] via-[#081126] to-[#040814] p-5 sm:p-6 overflow-hidden flex items-center justify-center select-none">
      {/* Background ambient radiance */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,63,215,0.2)_0%,transparent_70%)] pointer-events-none transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-40'
        }`}
      />

      {/* Orbital Ring 1 (Outer - Slow Counter-Clockwise) */}
      <motion.div
        animate={active ? { rotate: -360 } : { rotate: 0 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className={`absolute w-64 h-64 rounded-full border border-white/10 transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-30'
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]" />
      </motion.div>

      {/* Orbital Ring 2 (Middle - Clockwise) */}
      <motion.div
        animate={active ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className={`absolute w-44 h-44 rounded-full border border-orange-500/35 transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-40'
        }`}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#F2520E]" />
      </motion.div>

      {/* Orbital Ring 3 (Inner - Counter Clockwise) */}
      <motion.div
        animate={active ? { rotate: -360 } : { rotate: 0 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className={`absolute w-28 h-28 rounded-full border border-blue-400/40 border-dashed transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-30'
        }`}
      />

      {/* Glowing Core Prism */}
      <div
        className={`relative w-20 h-20 transition-all duration-700 flex items-center justify-center ${
          active ? 'animate-forge-glow scale-105' : 'scale-95 opacity-85'
        }`}
      >
        {/* Diamond Outer Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFA25B] via-[#F2520E] to-[#283FD7] rounded-2xl rotate-45 shadow-[0_0_60px_rgba(242,82,14,0.7)]" />
        {/* Inner Diamond Core */}
        <div className="absolute inset-1.5 bg-[#080D1A] rounded-xl rotate-45 flex items-center justify-center border border-white/20">
          <Sparkles className="w-7 h-7 text-orange-400 -rotate-45" strokeWidth={2.2} />
        </div>
      </div>

      {/* Floating Sparkles & Sparks */}
      {active &&
        [...Array(10)].map((_, i) => {
          const a = (i / 10) * Math.PI * 2
          const distance = 95 + (i % 3) * 20
          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-orange-300 shadow-[0_0_8px_rgba(255,162,91,0.9)]"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: Math.cos(a) * distance,
                y: Math.sin(a) * distance,
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.2],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.22,
                ease: 'easeOut',
              }}
            />
          )
        })}

      {/* Bottom Telemetry HUD */}
      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono text-orange-400 tracking-wider mb-0.5 flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full bg-orange-500 ${active ? 'animate-pulse-dot' : ''}`} />
            IN THE FORGE // R&D
          </div>
          <div className="text-xs text-white/80 font-medium">Next system in stealth prototyping.</div>
        </div>
        <div className="text-[9px] font-mono uppercase text-blue-300/70 border border-blue-500/20 px-2 py-0.5 rounded bg-blue-950/40">
          CONFIDENTIAL
        </div>
      </div>
    </div>
  )
}

const PREVIEWS = {
  'Money Lender': MoneyLenderPreview,
  'Future Product': FuturePreview,
}

/* =============================================================
   PRODUCT CARD
============================================================= */
function ProductCard({ product, index, isActive, onActivate }) {
  const Preview = PREVIEWS[product.name]

  return (
    <motion.div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl bg-white dark:bg-[#0B101D] border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
        isActive
          ? 'border-[#283FD7] dark:border-[#3B52E8] shadow-[0_20px_60px_-15px_rgba(40,63,215,0.2)] dark:shadow-[0_25px_60px_-15px_rgba(40,63,215,0.35)]'
          : 'border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Top ambient active border highlight */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2520E] to-[#283FD7] transition-opacity duration-500 z-10 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div>
        {/* Preview area with live UI */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            {Preview && <Preview active={isActive} />}
          </div>

          {/* Live playback status badge */}
          <div
            className={`absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md text-[9px] font-bold tracking-wider uppercase transition-all duration-300 z-10 ${
              isActive
                ? 'bg-black/80 border border-orange-500/50 text-orange-400 shadow-[0_0_15px_rgba(242,82,14,0.3)]'
                : 'bg-black/50 border border-white/10 text-white/70'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive ? 'bg-orange-500 animate-pulse-dot' : 'bg-slate-400'
              }`}
            />
            {isActive ? 'Playing Live' : 'Hover to Activate'}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-7 sm:p-9">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[11px] font-mono-tech font-semibold tracking-[0.16em] uppercase text-[#F2520E] dark:text-[#FF8A3D]">
              {product.category}
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-[#283FD7] text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-[#283FD7] group-hover:text-white'
              }`}
            >
              <ArrowUpRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isActive ? 'rotate-45' : 'group-hover:rotate-45'
                }`}
              />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white mb-2 tracking-tight">
            {product.name}
          </h3>
          <div className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-3">
            {product.title}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer CTA link */}
      <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-0">
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-sm font-semibold text-[#283FD7] dark:text-[#60A5FA] group-hover:gap-3 transition-all duration-300">
          <span>{product.cta}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const [activeProductIndex, setActiveProductIndex] = useState(0) // Default: Money Lender plays continuously from load

  const products = [
    {
      name: 'Money Lender',
      category: 'FinTech · Lending & Recovery',
      title: 'Offline-First Collection & Field Ledger Management',
      description:
        'A field-ready collection and ledger platform built for money lenders, agents, and micro-financiers to manage borrowers, calculate recovery rates, and track offline repayments seamlessly.',
      cta: 'Explore Money Lender',
    },
    {
      name: 'Future Product',
      category: 'Crucible · Active R&D',
      title: 'Next-Generation Autonomous Systems',
      description:
        'New intelligent systems and engineering frontiers are actively being tempered in the forge. Stay tuned as our stealth innovations approach public disclosure.',
      cta: 'Stay Tuned',
    },
  ]

  return (
    <section id="products" className="relative py-28 md:py-36 bg-[#FAF7F2]/60 dark:bg-[#060911]/80 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <SectionLabel>Our Products</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 dark:text-white tracking-[-0.02em] leading-tight">
              Built for the <span className="italic text-brand-gradient">real world.</span>
            </h2>
            <p className="mt-4 text-sm font-mono-tech text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
              Live interactive mockups — hover cards to transfer live playback.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 md:text-lg max-w-sm font-light leading-relaxed">
            We forge difficult, real-world problems into focused, highly resilient intelligent products.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((p, i) => (
            <ProductCard
              key={p.name}
              product={p}
              index={i}
              isActive={activeProductIndex === i}
              onActivate={() => setActiveProductIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
