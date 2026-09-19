'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({
  children,
  className = '',
  primary = false,
  href = '#',
  ...props
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  const handleMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.25)
    y.set((e.clientY - r.top - r.height / 2) * 0.25)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`relative group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
        primary
          ? 'bg-gradient-to-r from-[#F2520E] via-[#FF6B26] to-[#283FD7] text-white font-semibold shadow-[0_4px_20px_rgba(242,82,14,0.3)] hover:shadow-[0_6px_28px_rgba(40,63,215,0.4)] hover:brightness-105 active:scale-95'
          : 'bg-white/95 dark:bg-[#0B101D]/90 border border-slate-200 dark:border-blue-900/40 text-slate-800 dark:text-slate-100 backdrop-blur-md shadow-sm hover:border-[#283FD7] hover:text-[#283FD7] dark:hover:border-[#60A5FA] dark:hover:text-[#60A5FA]'
      } ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}
