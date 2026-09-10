"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import ParticleDrift from "@/components/ui/particle-drift"

export default function Hero() {
  const nodeSteps = [
    {
      id: "01",
      label: "IDEA",
      sub: "Validation",
      color: "bg-amber-400",
      glow: "shadow-[0_0_20px_rgba(251,191,36,0.3)]",
      border: "border-amber-400/40",
      text: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      id: "02",
      label: "BUILD",
      sub: "Prototyping",
      color: "bg-indigo-400",
      glow: "shadow-[0_0_20px_rgba(129,140,248,0.35)]",
      border: "border-indigo-400/40",
      text: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      id: "03",
      label: "CONNECT",
      sub: "Mentorship",
      color: "bg-purple-400",
      glow: "shadow-[0_0_20px_rgba(192,132,252,0.3)]",
      border: "border-purple-400/40",
      text: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      id: "04",
      label: "LAUNCH",
      sub: "Incubation",
      color: "bg-emerald-400",
      glow: "shadow-[0_0_20px_rgba(52,211,153,0.35)]",
      border: "border-emerald-400/40",
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ]

  return (
    <section className="relative min-h-[550px] w-full overflow-hidden px-4 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 bg-[#050505]">
      {/* 1. Particle Drift Visual Effect Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full"
        aria-hidden="true"
      >
        <ParticleDrift
          mode="dark"
          density={1.0}
          opacity={0.55}
          speed={0.6}
          size={1.0}
          className="h-full w-full pointer-events-none"
        />
      </div>

      {/* 2. Subtle Dark Radial & Gradient Overlay for Readability */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]/70" />

      {/* Subtle Ambient Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[35rem] w-[35rem] rounded-full bg-indigo-600/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-indigo-400" />
              <span>SVCE • ENTREPRENEURSHIP CELL</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.05] sm:leading-[0.98]">
              BUILD THE NEXT.
              <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                START HERE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg font-normal font-sans">
              E-Cell SVCE is where students turn ideas into experiments, experiments into ventures, and ambition into action.
            </p>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-indigo-500 hover:shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                JOIN E-CELL
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur-md"
              >
                EXPLORE PROGRAMS
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Abstract Ecosystem Network Visual Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090b10]/95 p-7 md:p-8 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.7)] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]">
              {/* Header Label */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Venture Topology</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-400/80">Ecosystem Protocol</span>
              </div>

              {/* Connected Network Node Topography */}
              <div className="relative py-2 space-y-6">
                {/* Connecting Vertical Line */}
                <div className="absolute left-[1.65rem] top-6 bottom-6 w-[2px] bg-gradient-to-b from-amber-500/40 via-indigo-500/40 to-emerald-500/40" />

                {nodeSteps.map((node, idx) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="relative flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      {/* Node indicator */}
                      <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${node.bg} ${node.border} border`}>
                        <div className={`h-3 w-3 rounded-full ${node.color} ${node.glow}`} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black tracking-widest text-slate-500">{node.id}</span>
                          <span className={`text-sm font-black tracking-wider ${node.text}`}>{node.label}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">{node.sub}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                      <span>PHASE</span>
                      <span className="text-slate-400">{idx + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Network Metadata */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <span>SVCE Innovation Pipeline</span>
                <span className="text-indigo-400">Active Stage →</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
