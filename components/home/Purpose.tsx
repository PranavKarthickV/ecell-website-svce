"use client"

import { motion } from "framer-motion"

export default function Purpose() {
  const pillars = [
    {
      num: "01",
      title: "LEARN",
      description: (
        <>
          <span className="text-indigo-300 font-medium">Entrepreneurship knowledge</span> through sessions, workshops, and{" "}
          <span className="text-indigo-300 font-medium">structured learning</span>.
        </>
      ),
    },
    {
      num: "02",
      title: "BUILD",
      description: (
        <>
          Turn ideas into <span className="text-indigo-300 font-medium">prototypes, ventures, and real projects</span> through hands-on execution.
        </>
      ),
    },
    {
      num: "03",
      title: "CONNECT",
      description: (
        <>
          Meet <span className="text-indigo-300 font-medium">founders, entrepreneurs, industry professionals, mentors, and alumni</span>.
        </>
      ),
    },
    {
      num: "04",
      title: "COMPETE",
      description: (
        <>
          Test ideas through <span className="text-indigo-300 font-medium">hackathons, pitch challenges, and competitions</span>, and entrepreneurial events.
        </>
      ),
    },
  ]

  return (
    <section className="relative overflow-hidden px-4 pt-36 pb-24 md:px-8 bg-[#050505] border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Subheading & Context */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-indigo-400">
                Core Purpose
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-none">
                WHY E-CELL?
              </h2>

              <p className="mt-4 text-lg font-heading font-bold text-slate-200">
                Turning student ambition into real-world action.
              </p>

              <p className="mt-6 text-xs md:text-sm leading-relaxed text-slate-400 font-sans font-normal max-w-md">
                E-Cell SVCE provides students with a dedicated ecosystem to test ideas, acquire core entrepreneurial skills, connect with experienced mentors, and build high-impact ventures.
              </p>
            </div>

            {/* Subtle accent tag */}
            <div className="mt-12 hidden lg:flex items-center gap-3 text-xs font-mono text-slate-500 uppercase tracking-widest border-t border-white/10 pt-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span>SVCE Entrepreneurship Ecosystem</span>
            </div>
          </motion.div>

          {/* Right Column: Vertically Stacked Editorial Pillar Rows */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative py-8 md:py-10 transition-all duration-300 cursor-default"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 md:gap-8 transition-transform duration-300 ease-out group-hover:translate-x-3">
                  {/* Number */}
                  <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">
                    {pillar.num}
                  </span>

                  {/* Title & Description */}
                  <div className="flex-1 space-y-1.5">
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors font-sans font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden sm:block text-slate-600 group-hover:text-indigo-400 transition-colors font-mono text-sm">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
