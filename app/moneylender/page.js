'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Wallet,
  ShieldCheck,
  Lock,
  Calendar,
  AlertTriangle,
  TrendingUp,
  FileSpreadsheet,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Flame,
  CheckCircle2,
  Database,
  Smartphone,
  Check,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import ZigzagSection from '@/components/ZigzagSection'
import InquiryModal from '@/components/InquiryModal'

export default function MoneylenderPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const emailUrl = 'mailto:godsforgetech@gmail.com?subject=Demo%20Request%20—%20Moneylender%20App'

  const zigzagItems = [
    {
      title: 'Scattered Physical Ledgers',
      subtitle: 'The Paper Trap',
      text: "Loan records, interest, and repayments scattered across notebooks are easy to lose and hard to trust.",
      highlight: 'Manual tallying leads to lost money and disputes',
      image: '/images/moneylender/paper_ledger.jpg',
      tag: 'Current Reality',
    },
    {
      title: 'Instant Loan Entries',
      subtitle: 'Fast Disbursals',
      text: "Quick borrower entries and loan disbursals in seconds, replacing cumbersome physical ledgers.",
      highlight: 'Set principal, interest rate, and tenure with one tap',
      image: '/images/moneylender/loan_entry.jpg',
      tag: 'Field Entry',
    },
    {
      title: 'Automated Repayments & Interest',
      subtitle: 'Live Tracking',
      text: "Real-time interest calculation, scheduled repayments, and clear balance tracking in one place.",
      highlight: 'Automatic daily, weekly, or monthly recovery tally',
      image: '/images/moneylender/repayment_tracking.jpg',
      tag: 'Financial Accuracy',
    },
    {
      title: 'Defaulter Alerts & Reminders',
      subtitle: 'Active Recovery',
      text: "Timely alerts and overdue notifications so no collection or payment slips through the cracks.",
      highlight: 'Automated WhatsApp borrower reminders & color-coded urgency',
      image: '/images/moneylender/defaulter_alert.jpg',
      tag: 'Risk Protection',
    },
  ]

  const features = [
    {
      title: 'Specialized Loan Ledger',
      desc: 'Log principle sums, compounding or simple interest rates, custom collection frequencies, and collateral notes tailored to field finance.',
      icon: FileSpreadsheet,
      badge: 'Tailored Logic',
    },
    {
      title: 'Automatic Interest Tracking',
      desc: 'Eliminate calculation errors. The engine calculates accrued interest day by day, factoring in partial repayments and penal interest.',
      icon: TrendingUp,
      badge: 'Zero Math Errors',
    },
    {
      title: 'Repayment & Recovery Schedules',
      desc: 'Track daily field recovery rates, see who is due today, and log cash collections offline even when there is no mobile reception.',
      icon: Calendar,
      badge: 'Offline-First',
    },
    {
      title: 'Comprehensive Borrower Profiles',
      desc: 'Keep complete borrower contact details, historical repayment fidelity scores, outstanding balances, and guarantors in one tap.',
      icon: Smartphone,
      badge: 'KYC & History',
    },
  ]

  const trustHighlights = [
    {
      title: 'Device-Level Data Encryption',
      desc: 'All borrower records and financial balances are encrypted locally using AES-256 before syncing.',
      icon: Lock,
    },
    {
      title: 'Offline-First Reliability',
      desc: 'Record collections on the road without cell signal. Data syncs seamlessly once connectivity returns.',
      icon: Database,
    },
    {
      title: 'Private & Confidential',
      desc: 'Your borrower ledger belongs exclusively to you. No third-party data scraping or external sharing.',
      icon: ShieldCheck,
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] dark:bg-[#060911] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#283FD7]/15 selection:text-[#283FD7] dark:selection:bg-[#F2520E]/30 dark:selection:text-[#FFB280] transition-colors duration-300">
      <CursorGlow />
      <Navbar />

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="moneylender"
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-35 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#283FD7] dark:text-[#60A5FA] text-xs sm:text-sm font-mono-tech tracking-[0.2em] uppercase mb-6 font-semibold"
          >
            <Wallet className="w-4 h-4 text-[#283FD7] dark:text-[#60A5FA]" />
            FINTECH &bull; FIELD ACCOUNTING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-slate-900 dark:text-white tracking-tight leading-[0.95]"
          >
            Moneylender App.
          </motion.h1>

          {/* Hero pitch from brief */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-2xl sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-100 font-serif max-w-4xl mx-auto leading-snug text-balance"
          >
            Accounting built specifically for moneylenders, not generic bookkeeping software.
          </motion.p>

          {/* Problem Callout from brief */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 p-7 sm:p-9 rounded-3xl bg-white/90 dark:bg-[#0B101D]/90 border border-slate-200 dark:border-slate-800 shadow-lg max-w-4xl mx-auto backdrop-blur-md text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono-tech tracking-wider uppercase text-amber-600 dark:text-amber-400 font-bold mb-1.5">
                  Why Standard Software Fails
                </div>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                  Moneylenders&rsquo; records — loans, interest calculations, weekly collections, and defaulter tracking — simply don&rsquo;t fit standard accounting tools built for retail shops or inventory businesses. We engineered a dedicated system for how field lending actually happens.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#283FD7] via-[#3B52E8] to-[#F2520E] text-white font-semibold text-base sm:text-lg shadow-[0_4px_20px_rgba(40,63,215,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              Request a Demo <ArrowUpRight className="w-5 h-5" />
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 text-base font-medium hover:border-[#283FD7] transition-all"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ZIGZAG SECTION (4 Sets) ────────────────────────────── */}
      <ZigzagSection
        badge="Field Workflow"
        title="Replacing Chaos With Precision"
        subtitle="Designed for moneylenders and micro-financiers collecting in the real world."
        items={zigzagItems}
      />

      {/* ── CORE FEATURES SECTION ───────────────────────────────── */}
      <section id="features" className="relative py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-[#080C16]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] font-semibold">
              Purpose-Built Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 dark:text-white mt-3">
              Core Ledger Features
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-light">
              Built for speed on mobile devices, offline collection routes, and exact interest accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="p-8 rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#283FD7] dark:text-[#60A5FA] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] font-mono-tech uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {f.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-mono-tech text-[#283FD7] dark:text-[#60A5FA]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered for field operations</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TRUST & DATA SECURITY NOTE ─────────────────────────── */}
      <section className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0B101D] text-white border border-slate-800 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono-tech tracking-wider uppercase mb-6 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
                SECURITY &amp; PRIVACY COMPLIANCE
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-4">
                Because this touches people&rsquo;s money, security comes first.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-10">
                Financial records demand absolute trust and uncompromising privacy. The Moneylender app is designed with bank-grade encryption and a strict zero-leakage policy — ensuring only you have access to your borrower books.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {trustHighlights.map((t) => (
                  <div key={t.title}>
                    <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2520E]" />
                      {t.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA: REQUEST A DEMO ─────────────────────────────────── */}
      <section id="demo" className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-[#283FD7] dark:text-[#60A5FA] text-xs font-mono-tech tracking-wider uppercase mb-6 font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#F2520E]" />
            MODERNIZE YOUR LENDING OPERATIONS
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 dark:text-white">
            Request a demo today.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light max-w-xl mx-auto">
            Experience how the app organizes your borrowers, calculates interest automatically, and tracks daily collections effortlessly.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#283FD7] via-[#3B52E8] to-[#F2520E] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(40,63,215,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              Schedule a Walkthrough <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:godsforgetech@gmail.com?subject=Inquiry%20Regarding%20Moneylender%20App"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B101D] text-slate-800 dark:text-slate-200 text-sm font-medium hover:border-[#283FD7] transition-all"
            >
              <Mail className="w-4 h-4 text-[#F2520E]" />
              Contact Sales (godsforgetech@gmail.com)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
