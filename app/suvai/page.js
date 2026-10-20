'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  QrCode,
  Sparkles,
  Smartphone,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Flame,
  Layers,
  UtensilsCrossed,
  Check,
  Disc,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import ZigzagSection from '@/components/ZigzagSection'
import InquiryModal from '@/components/InquiryModal'

export default function SuvaiPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const whatsappUrl = 'https://wa.me/919361805714?text=Hello%20God%27s%20Forge%2C%20I%20am%20interested%20in%20getting%20Suvai%20for%20my%20restaurant.'
  const emailUrl = 'mailto:godsforgetech@gmail.com?subject=Get%20Suvai%20for%20our%20Restaurant'

  const zigzagItems = [
    {
      title: 'The Outdated Paper Problem',
      subtitle: 'Static Menus',
      text: "Paper menus go stale the day they're printed — price changes mean reprints, and offers get missed.",
      highlight: 'Zero reprints &bull; No smeared or dog-eared menus',
      image: '/images/suvai/paper_menu.jpg',
      tag: 'Pain Point',
    },
    {
      title: 'Real-Time Admin Control',
      subtitle: 'Instant Updates',
      text: "Owners update dishes, prices, and offers themselves, anytime, no reprinting.",
      highlight: 'Change prices in 10 seconds from any phone',
      image: '/images/suvai/admin_app.jpg',
      tag: 'Owner Experience',
    },
    {
      title: 'Instant Table Scanning',
      subtitle: 'Zero App Installs',
      text: "One scan, and the full menu — live, current, and yours — opens on their phone.",
      highlight: 'Lightning-fast load over 4G/5G/Wi-Fi',
      image: '/images/suvai/qr_scan.jpg',
      tag: 'Diner Experience',
    },
    {
      title: 'TV-Ad-Style Food Animations',
      subtitle: 'Visual Appetite Boost',
      text: "At higher tiers, dishes come alive with TV-ad-style animation that makes people order more.",
      highlight: 'Promote high-margin specials & combos with motion',
      image: '/images/suvai/animated_dish.jpg',
      tag: 'Tier Advantage',
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Owner updates admin app',
      desc: 'Quickly input dishes, update seasonal pricing, toggle out-of-stock items, and set daily combo offers from your phone.',
      icon: Smartphone,
    },
    {
      num: '02',
      title: 'Customer scans table QR',
      desc: 'Diners simply point their phone camera at the table QR decor. No app download, no account signup, zero friction.',
      icon: QrCode,
    },
    {
      num: '03',
      title: 'Diner sees live, vibrant menu',
      desc: 'A gorgeous responsive menu opens instantly — featuring live prices, daily specials, and steaming animations at higher tiers.',
      icon: Eye,
    },
  ]

  const tiers = [
    {
      name: 'Basic',
      tag: 'Essential Modern Menu',
      desc: 'Ideal for small cafes, juice bars, and ice cream parlors wanting a spotless, contactless digital menu.',
      features: [
        'Instant QR menu access on any smartphone',
        'Mobile-friendly live admin dashboard',
        'Real-time price editing & out-of-stock toggles',
        'Item categories, veg/non-veg tags, & spice levels',
        'Basic QR table stickers included',
      ],
      popular: false,
    },
    {
      name: 'Animated',
      tag: 'Highest Order Conversion',
      desc: 'Designed for casual & fine dining restaurants to increase average ticket size with visual dish motion.',
      features: [
        'Everything included in Basic',
        'TV-ad-style dish animations & mid-steam visuals',
        'Special combo & daily chef recommendation banners',
        'Multi-lingual menu support (English + Regional)',
        'Table stand decor options included',
        'Diner item search and allergen filters',
      ],
      popular: true,
    },
    {
      name: 'Custom',
      tag: 'Multi-Outlet & Bespoke',
      desc: 'Tailored for restaurant chains, resort dining, and luxury dining spaces requiring unique brand integration.',
      features: [
        'Everything included in Animated',
        'Bespoke custom UI tailored to brand palette',
        'Premium engraved brass/wood table discs',
        'Multi-branch menu sync & regional pricing',
        'Dedicated account onboarding & priority support',
        'Custom POS & billing integrations on demand',
      ],
      popular: false,
    },
  ]

  const decorOptions = [
    {
      name: 'Weatherproof Sticker',
      desc: 'Durable, matte laminated vinyl sticker with strong water and scratch resistance. Perfect for quick setup on cafe tables.',
      image: '/images/suvai/decor_sticker.jpg',
      badge: 'Easy Setup',
      type: 'photo',
    },
    {
      name: 'Acrylic & Aluminum Stand',
      desc: 'Upright contemporary tabletop stand featuring brushed dark metal base and transparent scratch-resistant acrylic sleeve.',
      image: '/images/suvai/decor_stand.jpg',
      badge: 'Popular Choice',
      type: 'photo',
    },
    {
      name: 'Premium Engraved Disc',
      desc: 'Solid laser-etched circular disc with timeless tabletop presence, crafted from brushed brass or finished hardwood.',
      image: '/images/suvai/decor_sticker.jpg',
      badge: 'Luxury Finish',
      type: 'custom',
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] dark:bg-[#060911] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#283FD7]/15 selection:text-[#283FD7] dark:selection:bg-[#F2520E]/30 dark:selection:text-[#FFB280] transition-colors duration-300">
      <CursorGlow />
      <Navbar />

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="suvai"
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-brand radial-fade-furnace opacity-35 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F2520E] text-xs font-mono-tech tracking-[0.2em] uppercase mb-6"
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            HOSPITALITY TECHNOLOGY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-serif text-slate-900 dark:text-white tracking-tight"
          >
            Suvai.
          </motion.h1>

          {/* Hero pitch from brief */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-200 font-light max-w-3xl mx-auto leading-relaxed text-balance"
          >
            A QR-based digital menu for restaurants, cafes, and ice cream parlors.
          </motion.p>

          {/* Problem / Solution Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0B101D]/90 border border-slate-200 dark:border-slate-800 shadow-lg max-w-3xl mx-auto backdrop-blur-md text-left"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-800 pb-4 sm:pb-0 sm:pr-6">
                <div className="text-[10px] font-mono-tech tracking-wider uppercase text-red-500 font-semibold mb-2">
                  The Problem
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Paper menus are static and can&rsquo;t show offers or combos in real time. Reprinting costs money, and dish availability changes daily.
                </p>
              </div>
              <div className="sm:pl-2">
                <div className="text-[10px] font-mono-tech tracking-wider uppercase text-emerald-500 font-semibold mb-2">
                  The Suvai Solution
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Suvai updates instantly with one tap from the owner&rsquo;s phone, and makes dishes look irresistible with rich food animation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(242,82,14,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              Get Suvai for Your Restaurant <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#zigzag"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 text-sm font-medium hover:border-[#283FD7] transition-all"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ZIGZAG SECTION (4 Sets) ────────────────────────────── */}
      <div id="zigzag">
        <ZigzagSection
          badge="Product Experience"
          title="From Outdated Paper to Live Motion"
          subtitle="A visual progression of how Suvai transforms the dining experience."
          items={zigzagItems}
        />
      </div>

      {/* ── HOW IT WORKS (3 Steps) ─────────────────────────────── */}
      <section className="relative py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-[#080C16]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-[#F2520E] font-semibold">
              Simple 3-Step Flow
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 dark:text-white mt-3">
              How Suvai Works
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-light">
              Designed for zero friction — for both the busy kitchen and the hungry diner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.num}
                  className="relative p-8 rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono-tech font-bold text-[#F2520E]">
                        Step {s.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TIERS SECTION ───────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] font-semibold">
              Flexible Packages
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 dark:text-white mt-3">
              Suvai Tiers
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-light">
              Choose the package that fits your establishment — upgrade seamlessly anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl p-8 bg-white dark:bg-[#0B101D] border transition-all duration-300 flex flex-col justify-between ${
                  t.popular
                    ? 'border-[#283FD7] dark:border-[#3B52E8] shadow-xl ring-2 ring-[#283FD7]/20'
                    : 'border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F2520E] to-[#283FD7] text-white text-[10px] font-mono-tech tracking-wider uppercase font-bold shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-mono-tech uppercase text-[#F2520E] font-semibold mb-2">
                    {t.tag}
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-2">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                    {t.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                    {t.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setModalOpen(true)}
                    className={`w-full inline-flex justify-center items-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      t.popular
                        ? 'bg-[#283FD7] hover:bg-[#1E32B8] text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    Select {t.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QR DECOR OPTIONS ────────────────────────────────────── */}
      <section className="relative py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-[#080C16]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-[#F2520E] font-semibold">
              Tabletop Aesthetics
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 dark:text-white mt-3">
              QR Decor Options
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-light">
              Table decor crafted to complement your interior ambiance — from fast-casual to fine dining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {decorOptions.map((d) => (
              <div
                key={d.name}
                className="group rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                  {d.type === 'custom' ? (
                    <div className="relative w-full h-full bg-gradient-to-br from-[#1C160F] via-[#2A1F13] to-[#0F0B06] flex items-center justify-center p-6">
                      {/* Brass & Walnut Disc Mockup */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#9B7137] via-[#DFB268] to-[#FCE8B3] p-1.5 shadow-[0_10px_35px_rgba(223,178,104,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-full bg-[#181109] border border-[#DFB268]/40 flex flex-col items-center justify-center p-3 text-center">
                          <Disc className="w-8 h-8 text-[#DFB268] mb-1 animate-spin-forge" style={{ animationDuration: '18s' }} />
                          <div className="text-[8px] font-mono-tech tracking-widest uppercase text-[#DFB268] font-bold">
                            BRASS &amp; WALNUT
                          </div>
                          <div className="text-[6px] font-mono-tech text-[#DFB268]/70">
                            LASER ETCHED QR
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] font-mono-tech uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {d.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif text-slate-900 dark:text-white mb-2">
                    {d.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────── */}
      <section id="cta" className="relative py-28 md:py-36 border-t border-slate-200/80 dark:border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-mono-tech tracking-wider uppercase mb-6 font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#F2520E]" />
            TRANSFORM YOUR DINING ROOM
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 dark:text-white">
            Get Suvai for your restaurant.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light max-w-xl mx-auto">
            Ready to upgrade from static paper to an interactive live menu? Contact us today for a live demo and custom quote.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Get Suvai Now <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
