"use client"

import Link from "next/link"
import { ArrowRight, BrainCircuit, ClipboardCheck, Gamepad2, LayoutTemplate, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const tools = [
  {
    title: "Idea Validator",
    description: "Test and refine your startup idea with structured AI-powered validation.",
    href: "/idea-validator",
    icon: BrainCircuit,
    label: "Validation",
    cta: "Launch Tool",
  },
  {
    title: "Business Model Canvas",
    description: "Turn your startup idea into a clear business model by mapping customers, value propositions, channels, revenue and key resources.",
    href: "/business-model-canvas",
    icon: LayoutTemplate,
    label: "Business design",
    cta: "Launch Tool",
  },
  {
    title: "Founder Readiness",
    description: "Evaluate your entrepreneurial readiness across key founder capabilities and identify areas for growth.",
    href: "/founder-readiness",
    icon: ClipboardCheck,
    label: "Founder development",
    cta: "Launch Tool",
  },
  {
    title: "Startup Simulator",
    description: "Experience startup decision-making through an interactive simulation of real entrepreneurial challenges.",
    href: "/startup-simulator",
    icon: Gamepad2,
    label: "Practice",
    cta: "Launch Tool",
  },
]

export default function DigitalToolkitPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-grid px-4 pb-24 pt-32 text-white md:px-8 md:pt-40">
      <div className="pointer-events-none fixed left-[-8%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            ECELL • DIGITAL TOOLKIT
          </div>
          <h1 className="text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Build Your Startup</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Practical AI-powered tools to validate your idea, shape your business model, assess your founder readiness and experience real startup decisions.
          </p>
        </motion.section>

        <section className="mt-16" aria-labelledby="toolkit-tools-heading">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">Explore useful resources</p>
              <h2 id="toolkit-tools-heading" className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">Build with more clarity.</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.href}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#0b1017] p-7 shadow-[0_18px_45px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{tool.label}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-white">{tool.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-slate-300">{tool.description}</p>
                  <Link href={tool.href} className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-indigo-300 transition hover:text-indigo-200">
                    {tool.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
