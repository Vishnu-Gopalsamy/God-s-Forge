'use client'

export default function Logo({ size = 40, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* GF Emblem */}
      <div
        className="relative rounded-xl overflow-hidden bg-white shadow-sm border border-neutral-200/80 dark:border-white/10 flex items-center justify-center p-0.5 flex-shrink-0"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img
          src="/logo.jpg"
          alt="God's Forge Logo"
          className="w-full h-full object-cover object-center transform scale-110"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-[15px] font-cinzel font-bold tracking-[0.18em] uppercase text-[#283FD7] dark:text-[#60A5FA]">
            God&rsquo;s Forge
          </span>
          <span className="text-[9px] font-mono-tech tracking-[0.24em] uppercase text-[#F2520E] dark:text-[#FB923C] -mt-0.5 font-semibold">
            Flame &bull; Anvil &bull; Systems
          </span>
        </div>
      )}
    </div>
  )
}
