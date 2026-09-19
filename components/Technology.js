'use client'

import { motion } from 'framer-motion'
import { Sparkles, Shield, Cpu, Database, Terminal } from 'lucide-react'
import SectionLabel from './SectionLabel'

/* =============================================================
   TECHNOLOGY — High-Precision Engineering (Flame & Anvil)
============================================================= */
export default function Technology() {
  const areas = [
    {
      icon: Sparkles,
      name: 'Applied Machine Intelligence',
      badge: 'THE FLAME',
      badgeColor: 'text-[#F2520E] bg-orange-50 dark:bg-orange-950/40 border-[#F2520E]/20',
      iconColor: 'text-[#F2520E]',
      desc: 'High-dimensional feature representations, temporal predictive transformers, and explainable neural anomaly detection.',
    },
    {
      icon: Shield,
      name: 'Adversarial Cybersecurity',
      badge: 'THE ANVIL',
      badgeColor: 'text-[#283FD7] bg-blue-50 dark:bg-blue-950/40 border-[#283FD7]/20',
      iconColor: 'text-[#283FD7]',
      desc: 'Active cyber defense architectures, temporal attack path mapping, zero-day mitigation, and hardened protocol encryption.',
    },
    {
      icon: Cpu,
      name: 'Hardened Distributed Systems',
      badge: 'DEFENSE GRADE',
      badgeColor: 'text-[#283FD7] bg-blue-50 dark:bg-blue-950/40 border-[#283FD7]/20',
      iconColor: 'text-[#283FD7]',
      desc: 'Fault-tolerant distributed micro-kernels, memory-safe low-level systems, high-throughput RPCs, and edge telemetry.',
    },
    {
      icon: Database,
      name: 'Edge & Offline Intelligence',
      badge: 'ZERO-CONNECTIVITY',
      badgeColor: 'text-[#F2520E] bg-orange-50 dark:bg-orange-950/40 border-[#F2520E]/20',
      iconColor: 'text-[#F2520E]',
      desc: 'Decentralized cryptographic stores, local vector indexing, resilient conflict-free replicated data types (CRDTs), and dynamic synching.',
    },
  ]

  const tech = ['Python', 'C++', 'Rust', 'Node.js', 'Go', 'Flutter', 'PostgreSQL', 'PyTorch / CUDA']

  return (
    <section className="relative py-32 md:py-44 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <SectionLabel>High-Precision Systems</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif tracking-[-0.02em] leading-[1.05] text-balance text-slate-900 dark:text-white"
          >
            Engineered at the convergence of <span className="italic text-brand-gradient">flame and steel.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-8 md:p-12 bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none rounded-2xl hover:border-[#283FD7]/60 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(40,63,215,0.25)] transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-[#283FD7] transition-all">
                  <a.icon className={`w-6 h-6 ${a.iconColor} group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
                </div>
                <span className={`text-[10px] font-mono-tech tracking-[0.2em] uppercase px-2.5 py-1 rounded border font-semibold ${a.badgeColor}`}>
                  {a.badge}
                </span>
              </div>

              <h3 className="text-2xl font-serif mb-3 text-slate-900 dark:text-white group-hover:text-[#283FD7] dark:group-hover:text-[#60A5FA] transition-colors">
                {a.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base font-light">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-x-4 gap-y-3 justify-center items-center"
        >
          <span className="text-[11px] font-mono-tech tracking-[0.24em] uppercase text-[#283FD7] dark:text-[#60A5FA] mr-2 flex items-center gap-1.5 font-bold">
            <Terminal className="w-3.5 h-3.5 text-[#F2520E]" /> STACK:
          </span>
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono-tech tracking-[0.2em] uppercase text-slate-700 dark:text-slate-200 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#283FD7] hover:text-[#283FD7] dark:hover:text-[#60A5FA] transition-colors"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
