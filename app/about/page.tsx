"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

export default function AboutPage() {
  return (
    <div className="page-container relative min-h-screen overflow-x-hidden bg-[#050505] text-slate-100 font-sans">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        className="relative min-h-[380px] overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 border-b border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Visual Layer */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full">
          <ParticleDriftBackground opacity={0.35} speed={0.35} density={0.6} size={0.9} />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_55%)]"
          />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 rounded-full">
            ABOUT E-CELL SVCE
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            About Us
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders.
          </motion.p>
        </div>
      </motion.section>

      {/* ── 1. Who We Are ─────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Heading, Text & Bullet List */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  01 / WHO WE ARE
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                  <p>
                    The Entrepreneurship Cell (E-cell) at Sri Venkateswara College of Engineering is a vibrant,
                    student-driven community that nurtures innovation, creativity, and leadership. Our mission is to inspire
                    and support students in transforming their ideas into impactful ventures.
                  </p>
                  <p>
                    Since 2018, E-cell SVCE has championed entrepreneurship through hands-on events, workshops, and
                    mentorship. We believe entrepreneurship is a mindset—one that values curiosity, resilience, and
                    collaboration.
                  </p>
                </div>
              </div>

              {/* Numbered Editorial Feature List */}
              <div className="mt-8 rounded-3xl border border-white/10 bg-[#090a10] p-6 md:p-8 space-y-5 divide-y divide-white/10 shadow-2xl">
                {[
                  "Fostering innovation and entrepreneurial thinking",
                  "Providing resources, mentorship, and networking",
                  "Organizing workshops, seminars, and competitions",
                  "Connecting students with industry experts and investors",
                ].map((item, i) => (
                  <div key={item} className="pt-5 first:pt-0 flex items-start gap-4 group">
                    <span className="text-xs font-black tracking-widest text-indigo-400 group-hover:text-indigo-300 transition-colors mt-0.5">
                      0{i + 1}
                    </span>
                    <p className="text-sm md:text-base font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Group Photo */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] shadow-2xl group">
                <Image
                  src="/main.png"
                  alt="E-cell group"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a10]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── 2. Our Mission & Vision ───────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-24 md:px-12 border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
              02 / MISSION &amp; VISION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Our Mission &amp; Vision
            </h2>
          </div>

          {/* Asymmetric Composition */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
            {/* Mission Card (7 cols) */}
            <div className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#090a10] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:border-indigo-500/50">
              <span className="absolute -right-4 -bottom-10 text-[11rem] font-black text-indigo-500/5 select-none pointer-events-none transition-transform duration-700 group-hover:scale-105">
                M
              </span>

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
                  Our Mission
                </div>

                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                  <p>
                    To create a vibrant entrepreneurial ecosystem within the college that nurtures innovation, creativity, and leadership among students.
                  </p>
                  <p>
                    We strive to bridge the gap between academic knowledge and practical application by facilitating interactions with industry experts, successful entrepreneurs, and investors.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  PURPOSE &amp; IMPACT
                </span>
              </div>
            </div>

            {/* Vision Card (5 cols) */}
            <div className="lg:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:border-indigo-500/40">
              <span className="absolute -right-4 -bottom-10 text-[11rem] font-black text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:scale-105">
                V
              </span>

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                  Our Vision
                </div>

                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                  <p>
                    To be recognized as a premier student-run entrepreneurship cell that fosters innovation and entrepreneurship across the region.
                  </p>
                  <p>
                    We aspire to see our college as a hub for startups and innovations, where students think beyond conventional career paths.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  LONG-TERM ASPIRATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── 3. Our Achievements ───────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden px-6 py-24 md:px-12 border-t border-white/10"
      >
        {/* Subtle ambient indigo background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.06),transparent_60%)]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
              03 / ACHIEVEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Our Achievements
            </h2>
          </div>

          {/* Asymmetric Metrics Layout */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
            {/* Featured Metric (5 cols) */}
            <div className="lg:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#090a10] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:border-indigo-500/50">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 mb-8">
                  FEATURED MILESTONE
                </span>
                <div className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white group-hover:text-indigo-300 transition-colors">
                  20+
                </div>
                <p className="mt-4 text-lg md:text-xl font-bold uppercase tracking-[0.18em] text-indigo-400">
                  Events Organized
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  COMMUNITY IMPACT
                </span>
              </div>
            </div>

            {/* Supporting Metrics List (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-[#090a10] p-8 md:p-10 space-y-8 divide-y divide-white/10 shadow-2xl">
                {[
                  { number: "1000+", text: "Students Impacted" },
                  { number: "15+", text: "Startups Incubated" },
                  { number: "50+", text: "Industry Collaborations" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="pt-8 first:pt-0 group flex flex-col sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                      {item.number}
                    </div>
                    <div className="mt-2 sm:mt-0 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
