'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cpu,
  Leaf,
  Sun,
  Eye,
  Calendar,
  Handshake,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Layers,
  Sprout,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import ZigzagSection from '@/components/ZigzagSection'
import InquiryModal from '@/components/InquiryModal'

export default function ThimilPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const partnerEmailUrl = 'mailto:godsforgetech@gmail.com?subject=Partnering%20with%20Thimil%20—%20Agricultural%20Robotics'

  const zigzagItems = [
    {
      title: 'The Cost of Weeding Today',
      subtitle: 'Soil & Human Toll',
      text: "Manual weeding is backbreaking and slow. Chemical weeding harms soil and the people who work it.",
      highlight: 'Toxic runoff into groundwater & rising farm labor shortages',
      image: '/images/thimil/manual_weeding.jpg',
      tag: 'Ecological Crisis',
    },
    {
      title: 'Autonomous Precision Robotics',
      subtitle: 'Chemical-Free Clearing',
      text: "Thimil works the field autonomously, clearing weeds without chemicals or manual labor.",
      highlight: 'Solar-electric chassis with micro-tine weed cultivation',
      image: '/images/thimil/robot_concept.jpg',
      tag: 'Thimil Concept',
    },
    {
      title: 'Restored Farmland & Safe Workers',
      subtitle: 'Long-Term Health',
      text: "Cleaner fields, lower cost, and no exposure risk for workers.",
      highlight: 'Preserves soil biology and reduces recurring operating costs',
      image: '/images/thimil/healthy_crops.jpg',
      tag: 'Sustainable Future',
    },
  ]

  const engineeringPillars = [
    {
      title: 'Camera-Guided Weed Identification',
      desc: 'Edge vision sensors trained on regional crops distinguish tender crops from unwanted invasive weeds in real time under changing natural sunlight.',
      icon: Eye,
      status: 'Algorithm Training',
    },
    {
      title: 'Micro-Mechanical Uprooting',
      desc: 'Instead of indiscriminate chemical sprays, Thimil uses high-precision physical micro-tines to uproot weeds right at the root collar with zero synthetic residue.',
      icon: Cpu,
      status: 'Mechanism Prototyping',
    },
    {
      title: 'Solar-Electric Lightweight Drive',
      desc: 'Lightweight chassis designed to traverse delicate furrows without compacting the topsoil, recharging continuously under daylight.',
      icon: Sun,
      status: 'Chassis Modeling',
    },
  ]

  const roadmap = [
    {
      phase: 'Phase 01 &bull; Active Now',
      title: 'Simulation & Subsystem Bench Testing',
      desc: 'Testing vision models, micro-actuation tines, and field obstacle detection in controlled laboratory plots.',
      current: true,
    },
    {
      phase: 'Phase 02 &bull; Late 2026',
      title: 'First Outdoor Bed Prototypes',
      desc: 'Fabricating the full alpha chassis for autonomous navigation trials in designated pilot test beds.',
      current: false,
    },
    {
      phase: 'Phase 03 &bull; Early 2027',
      title: 'Working Farm Pilot Deployment',
      desc: 'Deploying operational pilot units to partner agricultural plots for continuous real-world field validation.',
      current: false,
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] dark:bg-[#060911] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#283FD7]/15 selection:text-[#283FD7] dark:selection:bg-[#F2520E]/30 dark:selection:text-[#FFB280] transition-colors duration-300">
      <CursorGlow />
      <Navbar />

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="thimil"
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-35 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-mono-tech tracking-[0.2em] uppercase mb-6 font-semibold"
          >
            <Leaf className="w-4 h-4 text-emerald-500" />
            DEEPTECH &bull; FIELD AUTOMATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-6xl sm:text-8xl md:text-9xl font-serif text-slate-900 dark:text-white tracking-tight leading-[0.95]"
          >
            Thimil.
          </motion.h1>

          {/* Hero pitch from brief */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-2xl sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-100 font-serif max-w-4xl mx-auto leading-snug text-balance"
          >
            An autonomous robot that weeds fields without chemicals or manual labor.
          </motion.p>

          {/* Development Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-mono-tech tracking-wider uppercase font-semibold"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            Project Status: In Development &bull; Pre-Prototype R&amp;D
          </motion.div>

          {/* Problem Callout from brief */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 p-7 sm:p-9 rounded-3xl bg-white/90 dark:bg-[#0B101D]/90 border border-slate-200 dark:border-slate-800 shadow-lg max-w-4xl mx-auto backdrop-blur-md text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono-tech tracking-wider uppercase text-emerald-600 dark:text-emerald-400 font-bold mb-1.5">
                  Why Thimil Matters
                </div>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                  Manual weeding is backbreaking, slow, and increasingly unaffordable as agricultural labor shifts to cities. Chemical herbicides poison beneficial soil biology, leach into rural water tables, and expose farm workers to severe health risks. Thimil restores the field mechanically — clean, autonomous, and sustainable.
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
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-[#283FD7] text-white font-semibold text-base sm:text-lg shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <Handshake className="w-5 h-5" />
              Partner With Us <ArrowUpRight className="w-5 h-5" />
            </button>
            <a
              href="#technology"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 text-base font-medium hover:border-emerald-500 transition-all"
            >
              View R&amp;D Roadmap
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ZIGZAG SECTION (3 Sets) ────────────────────────────── */}
      <ZigzagSection
        badge="Field Evolution"
        title="Transforming the Agricultural Furrow"
        subtitle="Addressing the harsh realities of farm work with honest, grounded robotics."
        items={zigzagItems}
      />

      {/* ── HOW IT WORKS / R&D SUBSYSTEMS ──────────────────────── */}
      <section id="technology" className="relative py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-[#080C16]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-emerald-600 dark:text-emerald-400 font-semibold">
              Pre-Prototype Engineering
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 dark:text-white mt-3">
              How Thimil Operates
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-light">
              We are honest about our current development stage: these are the active engineering systems under bench validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringPillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-slate-400">Current Phase:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{p.status}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT STATUS & ROADMAP ────────────────────────── */}
      <section className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-orange-500 font-semibold">
              Transparent Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 dark:text-white mt-3">
              Field Pilot Roadmap
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-light">
              Clear timelines for our prototype progress toward farm testing.
            </p>
          </div>

          <div className="space-y-6">
            {roadmap.map((item) => (
              <div
                key={item.title}
                className={`p-7 rounded-3xl border transition-all ${
                  item.current
                    ? 'bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/20'
                    : 'bg-white dark:bg-[#0B101D] border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono-tech uppercase font-bold text-emerald-600 dark:text-emerald-400">
                    <span dangerouslySetInnerHTML={{ __html: item.phase }} />
                  </span>
                  {item.current && (
                    <span className="text-[10px] font-mono-tech uppercase px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold w-fit">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: PARTNER WITH US / BACK THIS PROJECT ────────────── */}
      <section id="partner" className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono-tech tracking-wider uppercase mb-6 font-semibold">
            <Handshake className="w-3.5 h-3.5" />
            FOR FARMS, RESEARCHERS &amp; INVESTORS
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 dark:text-white">
            Partner with us or back this project.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light max-w-xl mx-auto">
            We are actively looking for farm owners interested in pilot field trials, agricultural research institutes, and mission-aligned grant reviewers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-[#283FD7] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <Handshake className="w-4 h-4" />
              Discuss Farm Pilot / Grant Inquiry <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:godsforgetech@gmail.com?subject=Inquiry%20Regarding%20Thimil%20Project"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B101D] text-slate-800 dark:text-slate-200 text-sm font-medium hover:border-emerald-500 transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              Direct Email (godsforgetech@gmail.com)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
