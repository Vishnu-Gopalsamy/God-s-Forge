'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Sparkles, QrCode, Wallet, Cpu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from './SectionLabel'

export default function Products() {
  const products = [
    {
      id: 'suvai',
      name: 'Suvai',
      category: 'Hospitality Tech &bull; Digital Dining',
      tagline: 'A digital menu that turns a QR scan into a full dining experience.',
      description:
        'Live dish updating, promotional combo highlights, and mouthwatering animated food visuals that eliminate outdated paper menus forever.',
      href: '/suvai',
      cta: 'Explore Suvai',
      image: '/images/suvai/animated_dish.jpg',
      icon: QrCode,
      gradient: 'from-orange-500 to-amber-500',
      badge: 'Live Product',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      id: 'moneylender',
      name: 'Moneylender App',
      category: 'FinTech &bull; Field Ledger',
      tagline: 'Simple accounting built for how moneylenders actually work.',
      description:
        'An offline-first collection ledger engineered for moneylenders, agents, and micro-financiers to disburse loans, track daily recovery, and eliminate chaotic paper notebooks.',
      href: '/moneylender',
      cta: 'Explore Moneylender',
      image: '/images/moneylender/loan_entry.jpg',
      icon: Wallet,
      gradient: 'from-blue-600 to-indigo-500',
      badge: 'Field Ready',
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
    {
      id: 'thimil',
      name: 'Thimil',
      category: 'DeepAgri &bull; Autonomous Robotics',
      tagline: 'An autonomous robot that weeds fields without chemicals or manual labor.',
      description:
        'A solar-electric autonomous field robot that identifies and mechanically uproots weeds between crop rows, protecting farm soil health and ending backbreaking manual labor.',
      href: '/thimil',
      cta: 'Explore Thimil',
      image: '/images/thimil/robot_concept.jpg',
      icon: Cpu,
      gradient: 'from-emerald-500 to-teal-500',
      badge: 'In Development',
      badgeColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 font-bold',
    },
  ]

  return (
    <section id="products" className="relative py-20 md:py-28 bg-[#FAF7F2]/60 dark:bg-[#060911]/80 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <SectionLabel>Product Portfolio</SectionLabel>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white tracking-[-0.02em] leading-tight">
              Tools built for the <span className="italic text-brand-gradient">real world.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg font-mono-tech text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-dot" />
              Three distinct frontiers &bull; from local dining and micro-finance to robotics.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl md:text-2xl max-w-md font-light leading-relaxed">
            Every product addresses an acute real-world friction point with uncompromising engineering.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Top ambient highlight hairline */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.gradient} opacity-70 group-hover:opacity-100 transition-opacity z-10`} />

                <div>
                  {/* Image Cover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-xs font-mono-tech uppercase tracking-wider px-3.5 py-1.5 rounded-full border backdrop-blur-md font-semibold ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                      <div className="text-xs sm:text-sm font-mono-tech tracking-wider uppercase opacity-90 font-semibold">
                        {p.name}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="text-xs sm:text-sm font-mono-tech font-semibold tracking-[0.2em] uppercase text-[#F2520E] mb-2">
                      <span dangerouslySetInnerHTML={{ __html: p.category }} />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#283FD7] dark:group-hover:text-[#60A5FA] transition-colors leading-snug">
                      {p.name}
                    </h3>

                    {/* Exact One-line description from Brief */}
                    <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 mb-3 leading-snug">
                      &ldquo;{p.tagline}&rdquo;
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-8 pt-0">
                  <Link
                    href={p.href}
                    className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-base font-bold text-[#283FD7] dark:text-[#60A5FA] group-hover:text-[#F2520E] transition-colors"
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
