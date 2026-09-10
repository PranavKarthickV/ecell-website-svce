"use client"

import { motion } from "framer-motion"

export default function ImpactStats() {
  const stats = [
    {
      id: "01",
      number: "2,500",
      plus: "+",
      label: "Students Engaged",
      detail: "Active student builders across SVCE engineering departments.",
    },
    {
      id: "02",
      number: "50",
      plus: "+",
      label: "Startups Supported",
      detail: "Guided from early validation to incubation & launch.",
    },
    {
      id: "03",
      number: "20",
      plus: "+",
      label: "Events & Initiatives",
      detail: "Annual hackathons, pitch challenges, and founder sessions.",
    },
    {
      id: "04",
      number: "15",
      plus: "+",
      label: "Ecosystem Partners",
      detail: "Industry bodies, MSME incubators, and regional startup hubs.",
    },
  ]

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 bg-[#050505] border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10"
        >
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-indigo-400">
              AT A GLANCE
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-none">
              BUILT AROUND ACTION.
            </h2>
          </div>

          <p className="max-w-md text-xs md:text-sm text-slate-400 font-sans font-normal leading-relaxed">
            An entrepreneurship ecosystem that brings together students, founders, mentors, alumni, and industry.
          </p>
        </motion.div>

        {/* Editorial Horizontal Metric Blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-y border-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group py-8 sm:px-6 lg:px-8 first:pl-0 last:pr-0 flex flex-col justify-between cursor-default"
            >
              <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
                {/* Header label & accent dot */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">
                    {stat.id}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                </div>

                {/* Dominant Stat Value */}
                <div className="font-heading text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-white leading-none">
                  {stat.number}
                  <span className="text-indigo-400 font-bold ml-0.5">{stat.plus}</span>
                </div>

                {/* Label */}
                <h3 className="mt-4 text-base lg:text-lg font-heading font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors">
                  {stat.label}
                </h3>
              </div>

              {/* Supporting Detail */}
              <p className="mt-6 text-xs md:text-sm leading-relaxed text-slate-400 font-sans font-normal border-t border-white/5 pt-4 group-hover:text-slate-300 transition-colors">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
