'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const underglowRef = useRef(null)
  const posRef = useRef({ x: -1000, y: -1000 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const { x, y } = posRef.current
          if (glowRef.current) {
            glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
          }
          if (underglowRef.current) {
            underglowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
          }
          rafRef.current = null
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dynamic Molten Hearth Core Follower - GPU accelerated */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-[500px] h-[500px] rounded-full mix-blend-multiply dark:mix-blend-screen hidden md:block opacity-60 dark:opacity-90 will-change-transform"
        style={{
          transform: 'translate3d(-1000px, -1000px, 0) translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(255, 100, 0, 0.08) 0%, rgba(255, 160, 0, 0.03) 40%, transparent 70%)',
          transition: 'opacity 0.2s ease',
        }}
      />
      {/* Warm Ambient Underglow */}
      <div
        ref={underglowRef}
        className="pointer-events-none fixed top-0 left-0 z-[99] w-[260px] h-[260px] rounded-full mix-blend-multiply dark:mix-blend-screen hidden md:block opacity-40 dark:opacity-75 will-change-transform"
        style={{
          transform: 'translate3d(-1000px, -1000px, 0) translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 120, 0, 0.06) 0%, transparent 65%)',
        }}
      />

      {/* Floating Forge Ember Particles - Lightweight hardware-accelerated */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden hidden md:block">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500/80 dark:bg-orange-400/80 animate-ember-rise will-change-transform"
            style={{
              width: `${(i % 2) * 1.5 + 2}px`,
              height: `${(i % 2) * 1.5 + 2}px`,
              left: `${(i * 16 + 8) % 100}%`,
              bottom: `${-20 - (i % 3) * 10}px`,
              animationDelay: `${(i * 1.2) % 5}s`,
              animationDuration: `${6 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
