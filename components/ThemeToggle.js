'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full border border-orange-500/20" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Light / Dark Forge Theme"
      className="relative w-9 h-9 rounded-full flex items-center justify-center border border-orange-500/30 hover:border-orange-500 bg-orange-500/5 hover:bg-orange-500/15 text-orange-600 dark:text-orange-400 transition-all duration-300 shadow-[0_0_12px_rgba(255,85,0,0.15)]"
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12 text-orange-600" />
      )}
    </button>
  )
}
