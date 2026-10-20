'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, MessageCircle, Mail, Sparkles, Building, Phone, MapPin, User } from 'lucide-react'

export default function InquiryModal({ isOpen, onClose, type = 'suvai' }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    city: '',
    option: '',
    notes: '',
  })

  const config = {
    suvai: {
      title: 'Get Suvai for Your Restaurant',
      subtitle: 'Modernize your dining room with interactive QR menus and animated dishes.',
      orgLabel: 'Restaurant or Cafe Name',
      optionLabel: 'Preferred Package',
      options: ['Basic Menu', 'Animated Menu (Recommended)', 'Custom Chain Package'],
      whatsappNumber: '919361805714',
      subject: "Suvai Restaurant Onboarding Inquiry — God's Forge",
    },
    moneylender: {
      title: 'Request a Moneylender App Demo',
      subtitle: 'Schedule an interactive walkthrough tailored to your field collection workflow.',
      orgLabel: 'Agency or Business Name',
      optionLabel: 'Borrower Portfolio Size',
      options: ['10 – 100 Borrowers', '100 – 500 Borrowers', '500+ Borrowers (Multi-Agent)'],
      whatsappNumber: '919361805714',
      subject: "Moneylender App Demo Request — God's Forge",
    },
    thimil: {
      title: 'Partner with Thimil / Back This Project',
      subtitle: 'Join our pilot field testing program or collaborate on autonomous robotics R&D.',
      orgLabel: 'Farm or Institution Name',
      optionLabel: 'Partnership Category',
      options: ['Farm Owner (Pilot Trials)', 'Agricultural University / Researcher', 'Sustainability Grant / Investor', 'Robotics Engineer'],
      whatsappNumber: '919361805714',
      subject: "Thimil Pilot Partnership Inquiry — God's Forge",
    },
  }[type] || {
    title: "Get in Touch with God's Forge",
    subtitle: 'Send us your requirements or inquiry.',
    orgLabel: 'Company / Organization',
    optionLabel: 'Interest Area',
    options: ['Suvai', 'Moneylender App', 'Thimil Robotics', 'General Engagement'],
    whatsappNumber: '919999999999',
    subject: "Engagement Inquiry — God's Forge",
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    // Prepare dispatch text
    const text = `*New Inquiry — God's Forge (${type.toUpperCase()})*
• Name: ${formData.name}
• Organization: ${formData.organization}
• City: ${formData.city}
• Contact: ${formData.contact}
• Selection: ${formData.option || config.options[0]}
• Message: ${formData.notes || 'Interested in getting started.'}`

    const mailtoUrl = `mailto:godsforgetech@gmail.com?subject=${encodeURIComponent(
      config.subject
    )}&body=${encodeURIComponent(text)}`

    // Open mailto client after brief confirmation
    setTimeout(() => {
      window.location.href = mailtoUrl
    }, 1200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-2xl p-7 sm:p-9 z-10 my-8 overflow-hidden"
          >
            {/* Top radiant line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-mono-tech tracking-wider uppercase font-semibold mb-2">
                    <Sparkles className="w-3 h-3 text-[#F2520E]" />
                    Direct Engagement
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white">
                    {config.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {config.subtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#283FD7] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                        {config.orgLabel} *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Business / Farm name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#283FD7] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#283FD7] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                        City / Location *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Coimbatore, TN"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#283FD7] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                      {config.optionLabel}
                    </label>
                    <select
                      value={formData.option}
                      onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#283FD7] transition-colors"
                    >
                      {config.options.map((opt) => (
                        <option key={opt} value={opt} className="dark:bg-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                      Specific Notes or Questions
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any details about your current operations..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#283FD7] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold text-xs tracking-wider uppercase shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-slate-900 dark:text-white">
                  Inquiry Dispatched!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light max-w-sm mx-auto">
                  Thank you, {formData.name}. Opening your email client to transmit your details directly to the foundry engineering team...
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-mono-tech tracking-wider uppercase text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
