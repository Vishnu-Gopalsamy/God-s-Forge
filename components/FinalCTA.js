'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Flame, Mail, Copy, Check, MessageSquare, MessageCircle } from 'lucide-react'
import InquiryModal from './InquiryModal'

export default function FinalCTA() {
  const [copied, setCopied] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const email = 'godsforgetech@gmail.com'
  const phoneDisplay = '+91 93618 05714'
  const whatsappUrl = 'https://wa.me/919361805714?text=Hello%20God%27s%20Forge%2C%20I%20would%20like%20to%20get%20in%20touch.'

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent("Partnership & Product Inquiry — God's Forge")}`

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden">
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="general"
      />

      {/* Radiant Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#F2520E]/10 via-[#283FD7]/15 to-transparent blur-[120px] animate-flame-pulse" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-slate-200/60 dark:border-slate-800/80 animate-spin-forge" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 dark:bg-[#0B101D] border border-slate-200 dark:border-blue-900/40 text-[#283FD7] dark:text-[#93C5FD] text-[11px] font-mono-tech tracking-[0.24em] uppercase mb-8 shadow-sm font-semibold">
          <Flame className="w-3.5 h-3.5 text-[#F2520E] fill-[#F2520E]" />
          CONNECT WITH GOD&apos;S FORGE
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.05] text-balance text-slate-900 dark:text-white"
        >
          Let&rsquo;s build practical tools <br />
          that <span className="italic text-brand-gradient font-normal">make an impact.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light max-w-xl mx-auto"
        >
          Whether you run a restaurant, manage lending operations, or want to pilot agricultural automation, we&rsquo;d love to talk.
        </motion.p>

        {/* Actions — 2-row layout for clean alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          {/* Row 1: Primary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold text-sm shadow-[0_6px_25px_rgba(242,82,14,0.35)] hover:scale-105 active:scale-95 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Us
            </a>
          </div>

          {/* Row 2: Secondary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B101D] text-slate-700 dark:text-slate-200 text-sm font-medium hover:border-[#283FD7] transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#F2520E]" />
              Direct Email
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 text-sm font-mono-tech hover:text-slate-900 dark:hover:text-white transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> {email}
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
