'use client'

import { Linkedin, Instagram, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const email = 'godsforgetech@gmail.com'
  const phoneDisplay = '+91 93618 05714'
  const phoneRaw = '919361805714'
  const linkedinUrl = 'https://www.linkedin.com/company/gods-forge'
  const instagramUrl = 'https://www.instagram.com/gods.forge'
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=Hello%20God%27s%20Forge%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent("Inquiry — God's Forge")}`

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800 pt-16 pb-10 md:pt-20 md:pb-12 bg-slate-50/80 dark:bg-[#04060B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="mb-6">
              <Link href="/">
                <Logo size={46} />
              </Link>
            </div>
            <p className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white leading-tight max-w-md">
              Building practical technology for{' '}
              <span className="italic text-brand-gradient font-normal">everyday businesses</span> and the{' '}
              <span className="italic text-brand-gradient font-normal">farms that feed them</span>.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-sm font-light leading-relaxed">
              Ground-level software today &bull; autonomous robotics and environmental sustainability tomorrow.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] mb-6 font-semibold">
              Products &amp; Navigation
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Suvai (Digital Menu)', href: '/suvai' },
                { label: 'Moneylender App', href: '/moneylender' },
                { label: 'Thimil (Field Robot)', href: '/thimil' },
                { label: 'What We Do', href: '/#what-we-do' },
                { label: 'Our Mission', href: '/#mission' },
                { label: 'Contact', href: '/#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-[#283FD7] dark:text-slate-300 dark:hover:text-[#60A5FA] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F2520E] group-hover:w-2 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] mb-6 font-semibold">
              Direct Contact &amp; Channels
            </div>

            <div className="space-y-3 mb-6">
              {/* Phone / Call */}
              <div>
                <a
                  href={`tel:+${phoneRaw}`}
                  className="inline-flex items-center gap-2.5 text-sm font-mono-tech text-slate-800 dark:text-slate-200 hover:text-[#283FD7] dark:hover:text-[#60A5FA] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#F2520E]" />
                  <span>{phoneDisplay}</span>
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-mono-tech text-slate-800 dark:text-slate-200 hover:text-[#283FD7] dark:hover:text-[#60A5FA] transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-[#F2520E]" />
                  <span>{email}</span>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-[#283FD7] hover:text-[#283FD7] text-slate-700 dark:text-slate-300 shadow-sm transition-all"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.75} />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-[#F2520E] hover:text-[#F2520E] text-slate-700 dark:text-slate-300 shadow-sm transition-all"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.75} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] text-slate-700 dark:text-slate-300 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp {phoneDisplay} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-slate-500 dark:text-slate-400">
          <div>&copy; {new Date().getFullYear()} God&rsquo;s Forge Technologies. All rights reserved.</div>
          <div className="flex items-center gap-2 font-mono-tech text-[#283FD7] dark:text-[#60A5FA] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2520E] animate-pulse" />
            Tempered in India.
          </div>
        </div>
      </div>
    </footer>
  )
}
