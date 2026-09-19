'use client'

import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Dynamic Molten Hearth Core Follower */}
      <div
        className="pointer-events-none fixed z-[100] w-[550px] h-[550px] rounded-full mix-blend-multiply dark:mix-blend-screen -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-60 dark:opacity-100"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            'radial-gradient(circle, rgba(255, 100, 0, 0.09) 0%, rgba(255, 160, 0, 0.04) 35%, transparent 70%)',
          transition: 'left 0.12s ease-out, top 0.12s ease-out',
        }}
      />
      {/* Warm Ambient Underglow */}
      <div
        className="pointer-events-none fixed z-[99] w-[300px] h-[300px] rounded-full mix-blend-multiply dark:mix-blend-screen -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-40 dark:opacity-80"
        style={{
          left: pos.x,
          top: pos.y,
          background: 'radial-gradient(circle, rgba(255, 120, 0, 0.06) 0%, transparent 60%)',
          transition: 'left 0.08s ease-out, top 0.08s ease-out',
        }}
      />

      {/* Floating Forge Ember Particles */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500 dark:bg-orange-400 shadow-[0_0_8px_1px_rgba(255,100,0,0.4)] dark:shadow-[0_0_8px_1px_rgba(255,120,0,0.8)] animate-ember-rise"
            style={{
              width: `${(i % 3) * 1.5 + 2}px`,
              height: `${(i % 3) * 1.5 + 2}px`,
              left: `${(i * 6.25 + 3) % 100}%`,
              bottom: `${-20 - (i % 5) * 10}px`,
              animationDelay: `${(i * 0.85) % 6}s`,
              animationDuration: `${5 + (i % 4) * 1.8}s`,
              opacity: 0.65,
            }}
          />
        ))}
      </div>
    </>
  )
}
