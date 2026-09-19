'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Upcoming', href: '#products' },
    { label: 'Research', href: '#research' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#060911]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-blue-950/40 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <Logo size={42} />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-slate-700 hover:text-[#283FD7] dark:text-slate-200 dark:hover:text-[#60A5FA] transition-colors relative group py-1"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F2520E] to-[#283FD7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(40,63,215,0.4)]" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-[#283FD7] dark:text-[#93C5FD] border border-[#283FD7]/30 hover:border-[#283FD7] hover:bg-[#283FD7]/10 dark:hover:bg-[#283FD7]/20 hover:shadow-[0_0_20px_rgba(40,63,215,0.2)] rounded-full px-5 py-2 transition-all duration-300"
            >
              Enter The Forge <ArrowUpRight className="w-3.5 h-3.5 text-[#F2520E]" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg bg-black/5 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dual-tone gradient hairline when scrolled */}
        {scrolled && (
          <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#F2520E] to-[#283FD7] opacity-60" />
        )}
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white/98 dark:bg-[#060911]/98 backdrop-blur-2xl md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-white/10">
              <Logo size={36} />
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-8 gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-serif text-slate-900 dark:text-white hover:text-[#283FD7] dark:hover:text-[#60A5FA] transition-colors flex items-center justify-between"
                >
                  {l.label}
                  <ArrowUpRight className="w-4 h-4 text-[#F2520E]" />
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
                <a
                  href="#products"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold shadow-[0_4px_20px_rgba(242,82,14,0.4)]"
                >
                  Explore Products <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
