'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Flame, Mail, Copy, Check } from 'lucide-react'
import MagneticButton from './MagneticButton'

/* =============================================================
   FINAL CTA — Entering The Crucible
============================================================= */
export default function FinalCTA() {
  const [copied, setCopied] = useState(false)
  const email = 'godsforgetech@gmail.com'

  // Direct Gmail web composer URL
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent("God's Forge — Foundry Engagement Inquiry")}`

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-36 md:py-52 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden">
      {/* Radiant Crucible Hearth Ambient Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#F2520E]/10 via-[#283FD7]/15 to-transparent blur-[120px] animate-flame-pulse" />
        <div
          className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-bl from-[#283FD7]/15 via-[#F2520E]/15 to-transparent blur-[70px] animate-flame-pulse"
          style={{ animationDelay: '2.5s' }}
        />
        <div className="absolute w-[950px] h-[950px] rounded-full border border-slate-200/60 dark:border-slate-800/80 animate-spin-forge" />
        <div className="absolute w-[680px] h-[680px] rounded-full border border-dashed border-[#283FD7]/20 dark:border-[#283FD7]/30 animate-spin-forge-reverse" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 dark:bg-[#0B101D] border border-slate-200 dark:border-blue-900/40 text-[#283FD7] dark:text-[#93C5FD] text-[11px] font-mono-tech tracking-[0.24em] uppercase mb-8 shadow-sm font-semibold">
          <Flame className="w-3.5 h-3.5 text-[#F2520E] fill-[#F2520E]" />
          INITIATE A FORGE ENGAGEMENT
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-[-0.02em] leading-[0.98] text-balance text-slate-900 dark:text-white"
        >
          Have a challenge <br /> worth <span className="italic text-brand-gradient font-normal">forging?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-xl mx-auto"
        >
          Bring us your hardest real-world problem. We will temper it into a decisive product.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-5"
        >
          {/* Main Direct Email Redirect Button */}
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              primary
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-9 py-4"
            >
              <Flame className="w-5 h-5 fill-white text-white" />
              Compose in Gmail <ArrowUpRight className="w-4.5 h-4.5" />
            </MagneticButton>

            <MagneticButton
              href={`mailto:${email}?subject=God's%20Forge%20Engagement%20Inquiry`}
              className="text-base px-7 py-4"
            >
              <Mail className="w-4.5 h-4.5 text-[#283FD7] dark:text-[#60A5FA]" />
              Default Mail Client
            </MagneticButton>
          </div>

          {/* Quick Copy Email Pill */}
          <button
            onClick={copyEmail}
            className="group mt-3 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 hover:border-[#283FD7] text-xs font-mono-tech text-slate-600 dark:text-slate-300 hover:text-[#283FD7] dark:hover:text-[#60A5FA] transition-all shadow-sm"
            title="Click to copy email address"
          >
            <span className="text-[#283FD7] dark:text-[#60A5FA] font-semibold">Direct:</span>
            <span className="text-slate-900 dark:text-white underline underline-offset-2 decoration-[#283FD7]/40 font-medium">
              {email}
            </span>
            {copied ? (
              <span className="inline-flex items-center gap-1 text-[#283FD7] dark:text-amber-300 font-semibold">
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" /> Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#283FD7] transition-colors" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
