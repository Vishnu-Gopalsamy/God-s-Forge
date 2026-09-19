'use client'

import { motion } from 'framer-motion'

/* =============================================================
   HERO REACTOR — Quantum Crucible Arc Reactor Background Visual
   Engineered with soft ambient opacity to provide rich depth
   and technological atmosphere WITHOUT interfering with typography.
============================================================= */

export default function HeroReactor() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
      {/* Dynamic Reactor Canvas Container */}
      <div className="relative w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] lg:w-[860px] lg:h-[860px] flex items-center justify-center opacity-30 dark:opacity-45 transition-opacity duration-700">
        
        {/* ── 1. AMBIENT REACTOR CORE BLOOM (Subtle & Diffuse) ────── */}
        <div 
          className="absolute inset-0 rounded-full opacity-40 dark:opacity-55"
          style={{
            background: 'radial-gradient(circle, rgba(242,82,14,0.12) 0%, rgba(40,63,215,0.1) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Pulsing singularity core glow */}
        <motion.div
          className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full"
          animate={{
            scale: [0.95, 1.08, 0.95],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,140,58,0.2) 0%, rgba(40,63,215,0.12) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* ── 2. SVG VECTOR STATORS & KINETIC ARCS ──────────────── */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="reactorOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2520E" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#FF7A29" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F2520E" stopOpacity="0.02" />
            </linearGradient>

            <linearGradient id="reactorBlueGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#283FD7" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#4361EE" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#283FD7" stopOpacity="0.02" />
            </linearGradient>

            <linearGradient id="reactorDualRing" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#F2520E" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#F2520E" stopOpacity="0.05" />
              <stop offset="60%" stopColor="#283FD7" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#283FD7" stopOpacity="0.35" />
            </linearGradient>

            <radialGradient id="reactorSingularity" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#FF8C3A" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#283FD7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ── LAYER A: OUTERMOST CALIBRATION RING (Rotates slowly) ── */}
          <g className="origin-center animate-spin-forge" style={{ transformOrigin: '400px 400px', animationDuration: '90s' }}>
            {/* Outer dotted rim */}
            <circle
              cx="400"
              cy="400"
              r="370"
              stroke="#283FD7"
              strokeWidth="1"
              strokeDasharray="2 12"
              className="opacity-20 dark:opacity-30"
            />
            {/* Outer segmented gauge lines */}
            <circle
              cx="400"
              cy="400"
              r="355"
              stroke="url(#reactorDualRing)"
              strokeWidth="1.2"
              strokeDasharray="30 20 10 20"
              className="opacity-25 dark:opacity-35"
            />
            {/* Compass calibration tickmarks */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180
              const x1 = Math.round((400 + Math.cos(rad) * 342) * 10) / 10
              const y1 = Math.round((400 + Math.sin(rad) * 342) * 10) / 10
              const x2 = Math.round((400 + Math.cos(rad) * 365) * 10) / 10
              const y2 = Math.round((400 + Math.sin(rad) * 365) * 10) / 10
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={idx % 2 === 0 ? '#F2520E' : '#283FD7'}
                  strokeWidth="1"
                  className="opacity-30 dark:opacity-45"
                />
              )
            })}
          </g>

          {/* ── LAYER B: HEXAGONAL CRUCIBLE HOUSING (Counter-rotates) ── */}
          <g className="origin-center animate-spin-forge-reverse" style={{ transformOrigin: '400px 400px', animationDuration: '65s' }}>
            <polygon
              points="400,90 668,245 668,555 400,710 132,555 132,245"
              stroke="#F2520E"
              strokeWidth="1"
              strokeDasharray="12 24"
              fill="none"
              className="opacity-15 dark:opacity-25"
            />
            <polygon
              points="400,110 651,255 651,545 400,690 149,545 149,255"
              stroke="#283FD7"
              strokeWidth="0.8"
              fill="none"
              className="opacity-10 dark:opacity-20"
            />

            {/* Corner containment nodes */}
            {[
              [400, 90],
              [668, 245],
              [668, 555],
              [400, 710],
              [132, 555],
              [132, 245],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill={i % 2 === 0 ? '#F2520E' : '#283FD7'}
                className="opacity-30 dark:opacity-50"
              />
            ))}
          </g>

          {/* ── LAYER C: KINETIC ACCELERATOR STATOR (Clockwise) ── */}
          <g className="origin-center animate-spin-forge" style={{ transformOrigin: '400px 400px', animationDuration: '38s' }}>
            <circle
              cx="400"
              cy="400"
              r="270"
              stroke="url(#reactorOrangeGrad)"
              strokeWidth="1.8"
              strokeDasharray="100 50 20 50"
              className="opacity-35 dark:opacity-50"
            />
            <circle
              cx="400"
              cy="400"
              r="245"
              stroke="url(#reactorBlueGrad)"
              strokeWidth="1.5"
              strokeDasharray="50 40 140 60"
              className="opacity-30 dark:opacity-45"
            />
            {/* Stator teeth */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
              const rad = (deg * Math.PI) / 180
              const x1 = Math.round((400 + Math.cos(rad) * 238) * 10) / 10
              const y1 = Math.round((400 + Math.sin(rad) * 238) * 10) / 10
              const x2 = Math.round((400 + Math.cos(rad) * 252) * 10) / 10
              const y2 = Math.round((400 + Math.sin(rad) * 252) * 10) / 10
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#283FD7"
                  strokeWidth="1"
                  className="opacity-20 dark:opacity-35"
                />
              )
            })}
          </g>

          {/* ── LAYER D: INNER HIGH-FREQUENCY CORE ARCS (Fast reverse) ── */}
          <g className="origin-center animate-spin-forge-reverse" style={{ transformOrigin: '400px 400px', animationDuration: '22s' }}>
            <circle
              cx="400"
              cy="400"
              r="175"
              stroke="#F2520E"
              strokeWidth="1.2"
              strokeDasharray="60 30 30 30"
              className="opacity-30 dark:opacity-45"
            />
            <circle
              cx="400"
              cy="400"
              r="150"
              stroke="#283FD7"
              strokeWidth="1"
              strokeDasharray="10 20"
              className="opacity-20 dark:opacity-35"
            />
          </g>

          {/* ── LAYER E: PRECISION OPTICAL CROSSHAIRS (Subtle dashed) ── */}
          <g className="opacity-15 dark:opacity-25">
            <line x1="160" y1="400" x2="340" y2="400" stroke="#F2520E" strokeWidth="0.8" strokeDasharray="4 6" />
            <line x1="460" y1="400" x2="640" y2="400" stroke="#283FD7" strokeWidth="0.8" strokeDasharray="4 6" />
            <line x1="400" y1="160" x2="400" y2="340" stroke="#283FD7" strokeWidth="0.8" strokeDasharray="4 6" />
            <line x1="400" y1="460" x2="400" y2="640" stroke="#F2520E" strokeWidth="0.8" strokeDasharray="4 6" />
          </g>

          {/* ── LAYER F: CENTRAL CRUCIBLE SINGULARITY (Soft Core) ── */}
          <g className="origin-center" style={{ transformOrigin: '400px 400px' }}>
            <circle
              cx="400"
              cy="400"
              r="85"
              stroke="#F2520E"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="opacity-30 dark:opacity-45"
            />
            <circle
              cx="400"
              cy="400"
              r="62"
              stroke="#283FD7"
              strokeWidth="1.2"
              fill="none"
              className="opacity-25 dark:opacity-40"
            />
            <circle
              cx="400"
              cy="400"
              r="40"
              fill="url(#reactorSingularity)"
              className="opacity-40 dark:opacity-60"
            />
          </g>
        </svg>

        {/* ── 3. ORBITAL PLASMA STREAM PARTICLES (Soft Ambient Motes) ── */}
        {/* Flame Orange Orbital Stream */}
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-transparent pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full opacity-60"
            style={{
              background: 'radial-gradient(circle, #FFFFFF 0%, #FF7A29 50%, #F2520E 100%)',
              boxShadow: '0 0 10px 2px rgba(242,82,14,0.6)',
            }}
          />
        </motion.div>

        {/* Cobalt Blue Counter-Orbital Stream */}
        <motion.div
          className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full border border-transparent pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full opacity-55"
            style={{
              background: 'radial-gradient(circle, #FFFFFF 0%, #60A5FA 50%, #283FD7 100%)',
              boxShadow: '0 0 10px 2px rgba(40,63,215,0.6)',
            }}
          />
        </motion.div>

      </div>
    </div>
  )
}
