"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Users, Building2, Cpu, Globe } from "lucide-react"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

// ─── Speaker / Industry Connections — sourced from homepage data ──────────────
const speakers = [
  {
    name: "Dr. Arvind A R",
    designation: "Deputy General Manager, Ashok Leyland Limited",
    image: "/inspirational-speakers/Arvind AR.jpg",
  },
  {
    name: "Mr. T. Vignesh",
    designation: "Chief Guest, Associate Business Facilitation Officer",
    image: "",
  },
  {
    name: "Gurunathraje",
    designation: "Executive Member, E-Cell",
    image: "",
  },
  {
    name: "Subash Chandra Bose",
    designation: "Executive Member, E-Cell SVCE · Co-founder, hraipal.com",
    image: "",
  },
  {
    name: "Mr. Palaniappan Narayanan",
    designation: "Co-Founder & CEO, Mocero Health Solutions, Chennai",
    image: "/inspirational-speakers/Palaniappan.jpg",
  },
  {
    name: "Mr. Shri Sivarajah Ramanathan",
    designation: "Mission Director, Tamil Nadu Startup and Innovation Mission",
    image: "/inspirational-speakers/Shivarajah.jpg",
  },
  {
    name: "Nithin Alexander",
    designation: "Founder, Entrepreneurs of Madras",
    image: "/inspirational-speakers/Nithin.jpg",
  },
  {
    name: "Mr. Ajay Prasath G A",
    designation: "Founder & CEO, Loopmans Automation Pvt Ltd.",
    image: "/inspirational-speakers/Ajay.jpg",
  },
  {
    name: "Mr. Sarabesh Sriram",
    designation: "Founder & Partner, Stacia Corp",
    image: "/inspirational-speakers/Sarabesh.jpg",
  },
  {
    name: "Mr. Deepak Kumar",
    designation: "Founder of ScrollMe, Habitate.io, and C3",
    image: "/inspirational-speakers/Deepak kumar.jpg",
  },
  {
    name: "T. G. Ramakrishnan",
    designation: "Founder of TGR Tex",
    image: "/inspirational-speakers/Ramakrishan.jpg",
  },
]

export default function EcosystemPage() {
  return (
    <div className="page-container relative min-h-screen overflow-x-hidden bg-[#050505] text-slate-100 font-sans">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        className="relative min-h-[380px] overflow-hidden border-b border-white/10 px-6 py-28 md:px-12 md:py-36"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Background Visual Layer */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full">
          <ParticleDriftBackground opacity={0.35} speed={0.35} density={0.6} size={0.9} />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_42%)]"
          />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-indigo-300">
            ECELL • ECOSYSTEM
          </p>
          <h1 className="mb-4 text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">
            The E-Cell Ecosystem
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The communities, alumni, founders, and industry connections that make up the broader
            E-Cell SVCE entrepreneurship ecosystem.
          </motion.p>
        </div>
      </motion.section>

      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl space-y-32">

          {/* ── 1. Builders Guild ─────────────────────────────────────────── */}
          <section id="builders-guild" aria-labelledby="builders-guild-heading" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start"
            >
              {/* Left Column: Flagship Title & Content */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                    <Cpu className="h-3.5 w-3.5" />
                    E-CELL INITIATIVE
                  </div>
                  <h2
                    id="builders-guild-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
                  >
                    Builders Guild
                  </h2>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                    Builders Guild is an E-Cell SVCE-created initiative designed to support every stage
                    of the entrepreneurial journey — from ideation to execution and growth. It brings
                    together builders, mentors, and community through workshops, competitions, industry
                    collaborations, and resources.
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href="https://e-cell-builders-guild.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 group"
                  >
                    Visit Builders Guild
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Structured Editorial Feature List */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-white/10 bg-[#090a10] p-8 md:p-10 space-y-6 divide-y divide-white/10 shadow-2xl">
                  {[
                    "Workshop and seminar series",
                    "Competition and hackathon events",
                    "Industry collaboration programmes",
                    "Resource library and tools",
                    "Community building and networking",
                    "Mentorship for builders",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="pt-6 first:pt-0 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-black tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">
                          0{i + 1}
                        </span>
                        <p className="text-base md:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {item}
                        </p>
                      </div>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── 2. Alumni Entrepreneurs ───────────────────────────────────── */}
          <section id="alumni" aria-labelledby="alumni-heading" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center"
            >
              {/* Left Column: Content & Title */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                    <Users className="h-3.5 w-3.5" />
                    ALUMNI NETWORK
                  </div>
                  <h2
                    id="alumni-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
                  >
                    Alumni Entrepreneurs
                  </h2>
                  <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                    SVCE has produced a remarkable community of alumni entrepreneurs who have built
                    companies, led organisations, and made their mark across industries — from
                    technology to manufacturing to healthcare.
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    href="/alumni"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 group"
                  >
                    Meet Our Alumni
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Prominent Editorial Metrics */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-[#090a10] p-8 md:p-10 space-y-8 divide-y divide-white/10 shadow-2xl">
                  {[
                    { value: "72+", label: "Alumni Founders" },
                    { value: "10+", label: "Departments" },
                    { value: "30+", label: "Years of Alumni" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="pt-8 first:pt-0 group flex flex-col sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                        {stat.value}
                      </div>
                      <div className="mt-2 sm:mt-0 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── 3. Founders & Speakers ────────────────────────────────────── */}
          <section id="founders" aria-labelledby="founders-heading" className="scroll-mt-32">
            <div id="mentors" className="scroll-mt-32" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                <Globe className="h-3.5 w-3.5" />
                INDUSTRY &amp; STARTUP
              </div>
              <h2
                id="founders-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
              >
                Founders &amp; Industry Connections
              </h2>
              <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                People from the startup ecosystem and industry who have interacted with, spoken at,
                or collaborated with E-Cell SVCE.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="industry">
              {speakers.map((speaker, i) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] p-6 text-center transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0d0f18] hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Avatar Container */}
                    <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-indigo-900/20 group-hover:border-indigo-500/50 transition-colors shadow-lg">
                      {speaker.image ? (
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-bold text-xl text-indigo-300 tracking-wider">
                          {speaker.name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {speaker.name}
                    </h3>

                    {/* Designation */}
                    <p className="mt-2 text-xs leading-relaxed text-slate-400 font-normal">
                      {speaker.designation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/[0.04] p-8 text-center md:p-12">
            <h2 className="text-3xl font-black text-white md:text-4xl">
              Be part of the ecosystem
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Whether you are a student, founder, mentor, or industry partner — there&apos;s a place
              for you in the E-Cell SVCE community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-indigo-500"
              >
                Join E-Cell
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/alumni"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                View Alumni
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
