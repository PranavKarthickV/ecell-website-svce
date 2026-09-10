"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:py-36 bg-[#050505] border-t border-white/10">
      {/* Subtle Ambient Radial Accent Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Small Label */}
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">
            READY TO BUILD?
          </span>

          {/* Main Heading */}
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
            START SOMETHING
            <span className="block text-slate-300 mt-1">THAT MATTERS.</span>
          </h2>

          {/* Supporting Text */}
          <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400 font-normal">
            Join E-Cell SVCE and turn your ideas, curiosity, and ambition into action.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-indigo-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>JOIN E-CELL</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur-md"
            >
              <span>EXPLORE E-CELL</span>
              <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
