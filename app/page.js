'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ForgeIntro from '@/components/ForgeIntro'
import CursorGlow from '@/components/CursorGlow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Philosophy from '@/components/Philosophy'
import ForgeTimeline from '@/components/ForgeTimeline'
import Technology from '@/components/Technology'
import Research from '@/components/Research'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <AnimatePresence mode="wait">
        {!introComplete && (
          <ForgeIntro onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <main className="relative min-h-screen bg-[#FAF7F2] dark:bg-[#060911] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#283FD7]/15 selection:text-[#283FD7] dark:selection:bg-[#F2520E]/30 dark:selection:text-[#FFB280] transition-colors duration-300">
        <CursorGlow />
        <Navbar />
        <Hero />
        <Products />
        <Philosophy />
        <ForgeTimeline />
        <Technology />
        <Research />
        <About />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
