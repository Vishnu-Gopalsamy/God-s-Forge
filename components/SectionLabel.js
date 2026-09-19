'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function SectionLabel({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`inline-flex items-center gap-2.5 text-[11px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#93C5FD] font-semibold mb-6 ${className}`}
    >
      <span className="w-6 h-px bg-gradient-to-r from-transparent via-[#F2520E] to-[#283FD7]" />
      <Flame className="w-3.5 h-3.5 text-[#F2520E] fill-[#F2520E]/20 animate-pulse" />
      <span>{children}</span>
      <span className="w-6 h-px bg-gradient-to-l from-transparent via-[#F2520E] to-[#283FD7]" />
    </motion.div>
  )
}
