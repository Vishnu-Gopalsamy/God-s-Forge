'use client'

import { Linkedin, Github, Twitter } from 'lucide-react'
import Logo from './Logo'

/* =============================================================
   FOOTER — The Foundry Colophon
============================================================= */
export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800 py-18 md:py-24 bg-slate-50/80 dark:bg-[#04060B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="mb-6">
              <Logo size={46} />
            </div>
            <p className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white leading-tight max-w-md">
              We Forge <span className="italic text-brand-gradient font-normal">What&rsquo;s</span> Next.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-sm font-light leading-relaxed">
              An applied deep-tech company building hardened machine intelligence, cyber defense, and edge operations platforms.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] mb-6 font-semibold">
              Navigation
            </div>
            <ul className="space-y-3.5">
              {['Products', 'Research', 'Philosophy', 'About', 'Contact', 'Crucible Careers'].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-[#283FD7] dark:text-slate-300 dark:hover:text-[#60A5FA] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F2520E] group-hover:w-2 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] mb-6 font-semibold">
              Transmission
            </div>
            <div className="flex gap-3 mb-6">
              {[
                { i: Linkedin, l: 'LinkedIn' },
                { i: Github, l: 'GitHub' },
                { i: Twitter, l: 'X' },
              ].map(({ i: Icon, l }) => (
                <a
                  key={l}
                  href="#"
                  aria-label={l}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-[#283FD7] hover:text-[#283FD7] text-slate-700 dark:text-slate-300 shadow-sm transition-all"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=godsforgetech@gmail.com&su=God's%20Forge%20Engagement%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-mono-tech text-slate-800 dark:text-slate-200 hover:text-[#283FD7] dark:hover:text-[#60A5FA] underline underline-offset-4 decoration-[#F2520E]/40 transition-colors mb-3 font-medium"
            >
              godsforgetech@gmail.com
            </a>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono-tech leading-relaxed">
              DEFENSE &bull; ENTERPRISE &bull; INTELLIGENCE
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-slate-500 dark:text-slate-400">
          <div>&copy; 2026 God&rsquo;s Forge Technologies. All rights reserved.</div>
          <div className="flex items-center gap-2 font-mono-tech text-[#283FD7] dark:text-[#60A5FA] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2520E] animate-pulse" />
            Tempered in India.
          </div>
        </div>
      </div>
    </footer>
  )
}
