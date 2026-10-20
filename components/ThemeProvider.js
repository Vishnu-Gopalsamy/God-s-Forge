'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { useEffect } from 'react'

function ResponsiveThemeSync() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // Only auto-switch on breakpoint change if the user has NOT explicitly chosen a theme via the toggle
    const mql = window.matchMedia('(max-width: 767px)')

    const updateThemeBasedOnViewport = (e) => {
      try {
        const userExplicit = localStorage.getItem('theme-user-set')
        if (!userExplicit) {
          const isMobile = e.matches
          setTheme(isMobile ? 'dark' : 'light')
        }
      } catch (err) {}
    }

    try {
      const userExplicit = localStorage.getItem('theme-user-set')
      if (!userExplicit) {
        setTheme(mql.matches ? 'dark' : 'light')
      }
    } catch (err) {}

    if (mql.addEventListener) {
      mql.addEventListener('change', updateThemeBasedOnViewport)
      return () => mql.removeEventListener('change', updateThemeBasedOnViewport)
    } else if (mql.addListener) {
      mql.addListener(updateThemeBasedOnViewport)
      return () => mql.removeListener(updateThemeBasedOnViewport)
    }
  }, [setTheme])

  return null
}

export default function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <ResponsiveThemeSync />
      {children}
    </NextThemesProvider>
  )
}

