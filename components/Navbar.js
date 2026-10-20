'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHome = pathname === '/' || pathname === '/home'
  const isProductPage = pathname === '/suvai' || pathname === '/moneylender' || pathname === '/thimil'

  const productsList = [
    {
      name: 'Suvai',
      tag: 'Digital Dining Experience',
      desc: 'Interactive animated QR menu for restaurants & cafes',
      href: '/suvai',
      color: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Moneylender App',
      tag: 'Field Ledger',
      desc: 'Specialized accounting for moneylenders & micro-financiers',
      href: '/moneylender',
      color: 'from-blue-600 to-indigo-500',
    },
    {
      name: 'Thimil',
      tag: 'Autonomous Robotics',
      desc: 'Chemical-free field weeding robot',
      href: '/thimil',
      badge: 'In Development',
      color: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#060911]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-blue-950/40 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Logo size={42} />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className={`text-[13px] font-medium transition-colors relative group py-1 ${
                isHome
                  ? 'text-[#283FD7] dark:text-[#60A5FA] font-semibold'
                  : 'text-slate-700 hover:text-[#283FD7] dark:text-slate-200 dark:hover:text-[#60A5FA]'
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#F2520E] to-[#283FD7] transition-all duration-300 shadow-[0_0_8px_rgba(40,63,215,0.4)] ${
                  isHome ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>

            {/* Products Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => setProductsOpen((prev) => !prev)}
                className={`text-[13px] font-medium transition-colors inline-flex items-center gap-1.5 py-1 ${
                  isProductPage
                    ? 'text-[#283FD7] dark:text-[#60A5FA] font-semibold'
                    : 'text-slate-700 hover:text-[#283FD7] dark:text-slate-200 dark:hover:text-[#60A5FA]'
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180 text-[#F2520E]' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-6 mt-2 w-80 rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 p-3 shadow-xl backdrop-blur-2xl z-50"
                  >
                    <div className="text-[10px] font-mono-tech tracking-wider uppercase text-slate-400 px-3 py-1 font-semibold flex items-center justify-between">
                      <span>Our Technologies</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2520E]" />
                    </div>
                    <div className="space-y-1 mt-1">
                      {productsList.map((p) => {
                        const isActive = pathname === p.href
                        return (
                          <Link
                            key={p.name}
                            href={p.href}
                            onClick={() => setProductsOpen(false)}
                            className={`flex flex-col p-2.5 rounded-xl transition-all group/item ${
                              isActive
                                ? 'bg-[#283FD7]/10 dark:bg-[#283FD7]/20 border border-[#283FD7]/30'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-sm font-semibold transition-colors ${
                                  isActive
                                    ? 'text-[#283FD7] dark:text-[#93C5FD]'
                                    : 'text-slate-900 dark:text-white group-hover/item:text-[#283FD7] dark:group-hover/item:text-[#60A5FA]'
                                }`}
                              >
                                {p.name}
                              </span>
                              {p.badge && (
                                <span className="text-[9px] font-mono-tech uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-bold">
                                  {p.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {p.desc}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#what-we-do"
              className="text-[13px] font-medium text-slate-700 hover:text-[#283FD7] dark:text-slate-200 dark:hover:text-[#60A5FA] transition-colors relative group py-1"
            >
              What We Do
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F2520E] to-[#283FD7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(40,63,215,0.4)]" />
            </Link>

            <Link
              href="/#mission"
              className="text-[13px] font-medium text-slate-700 hover:text-[#283FD7] dark:text-slate-200 dark:hover:text-[#60A5FA] transition-colors relative group py-1"
            >
              Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F2520E] to-[#283FD7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(40,63,215,0.4)]" />
            </Link>

            <Link
              href="/#contact"
              className="text-[13px] font-medium text-slate-700 hover:text-[#283FD7] dark:text-slate-200 dark:hover:text-[#60A5FA] transition-colors relative group py-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F2520E] to-[#283FD7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(40,63,215,0.4)]" />
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-[#283FD7] dark:text-[#93C5FD] border border-[#283FD7]/30 hover:border-[#283FD7] hover:bg-[#283FD7]/10 dark:hover:bg-[#283FD7]/20 hover:shadow-[0_0_20px_rgba(40,63,215,0.2)] rounded-full px-5 py-2 transition-all duration-300"
            >
              Explore Products <ArrowUpRight className="w-3.5 h-3.5 text-[#F2520E]" />
            </Link>
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
            className="fixed inset-0 z-[60] bg-white/98 dark:bg-[#060911]/98 backdrop-blur-2xl md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-white/10">
              <Link href="/" onClick={() => setOpen(false)}>
                <Logo size={36} />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-8 gap-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`text-xl font-serif transition-colors ${
                  isHome ? 'text-[#283FD7] dark:text-[#60A5FA] font-bold' : 'text-slate-900 dark:text-white'
                }`}
              >
                Home
              </Link>

              <div className="pt-2 pb-2 border-y border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-mono-tech tracking-wider uppercase text-slate-400 mb-3 font-semibold">
                  Products
                </div>
                <div className="space-y-3 pl-2">
                  {productsList.map((p) => {
                    const isActive = pathname === p.href
                    return (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between text-base font-medium transition-colors ${
                          isActive
                            ? 'text-[#283FD7] dark:text-[#60A5FA] font-semibold'
                            : 'text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <span>{p.name}</span>
                        {p.badge ? (
                          <span className="text-[9px] font-mono-tech uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold">
                            {p.badge}
                          </span>
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-[#F2520E]" />
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <Link
                href="/#what-we-do"
                onClick={() => setOpen(false)}
                className="text-xl font-serif text-slate-900 dark:text-white hover:text-[#283FD7]"
              >
                What We Do
              </Link>
              <Link
                href="/#mission"
                onClick={() => setOpen(false)}
                className="text-xl font-serif text-slate-900 dark:text-white hover:text-[#283FD7]"
              >
                Mission
              </Link>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="text-xl font-serif text-slate-900 dark:text-white hover:text-[#283FD7]"
              >
                Contact
              </Link>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                <Link
                  href="/#products"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold shadow-[0_4px_20px_rgba(242,82,14,0.4)]"
                >
                  Explore Products <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
