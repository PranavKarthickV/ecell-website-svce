"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Building2,
  Users,
  Briefcase,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Trophy,
  Lightbulb,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

// ─── Incubation Center — Services ────────────────────────────────────────────
const incubationServices = [
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Connect with experienced entrepreneurs, industry experts, and business leaders who provide guidance and support.",
  },
  {
    icon: Briefcase,
    title: "Workspace",
    description:
      "Access to co-working spaces, meeting rooms, and the necessary infrastructure for startup operations.",
  },
  {
    icon: Target,
    title: "Business Development",
    description:
      "Strategic planning, market research, and business model development to ensure sustainable growth.",
  },
  {
    icon: TrendingUp,
    title: "Funding Support",
    description:
      "Assistance in securing funding through grants, investors, and government schemes for MSMEs.",
  },
  {
    icon: Award,
    title: "Legal Support",
    description:
      "Help with company registration, IP protection, compliance, and other legal requirements for startups.",
  },
  {
    icon: Building2,
    title: "Networking",
    description:
      "Connect with fellow entrepreneurs, potential customers, and industry partners through our network.",
  },
]

// ─── Incubation Center — Process Steps ───────────────────────────────────────
const incubationSteps = [
  {
    step: "01",
    title: "Application & Selection",
    description:
      "Submit your business idea and go through our selection process. We evaluate innovation, market potential, and team capability.",
  },
  {
    step: "02",
    title: "Onboarding",
    description:
      "Get introduced to our ecosystem, meet your mentors, and set up your workspace. We help you define your goals and milestones.",
  },
  {
    step: "03",
    title: "Development Phase",
    description:
      "Intensive development of your product/service, business model refinement, and market validation with regular mentor check-ins.",
  },
  {
    step: "04",
    title: "Testing & Iteration",
    description:
      "Launch your MVP, gather user feedback, and iterate based on market response.",
  },
  {
    step: "05",
    title: "Scaling Preparation",
    description:
      "Prepare for scaling with financial planning, team building, and operational processes. Connect with potential investors and partners.",
  },
  {
    step: "06",
    title: "Graduation",
    description:
      "Graduate from our program with a market-ready business and continue to receive support through our alumni network.",
  },
]

// ─── Workshops — Real events from E-Cell history ─────────────────────────────
const workshopHighlights = [
  {
    title: "Pitch Perfect Workshop",
    date: "February 2024",
    note: "Interactive workshop on effective pitching, persuasive communication, and storytelling. Led by Gurunathraj E, Founder of Metal Protection (EPIC).",
    image: "/events/ptchperfect.jpg",
  },
  {
    title: "E-Lobby Webinar: LinkedIn Profile Building",
    date: "February 2024",
    note: "Focused on professional networking, personal branding, and profile optimisation. Led by E-Cell Executive Member Subash.",
    image: "/events/social-media-outreach.png",
  },
  {
    title: "Technology Transfer Workshop",
    date: "September 2025",
    note: "Explored how innovations move from prototypes toward IP, technology transfer, and commercialisation. Featured Sarabesh Sriram, Founder & Partner, Stacia Corp.",
    image: "/events/technology-transfer-workshop-collage.png",
  },
  {
    title: "IIT Madras EDD Cohort – Growth Track",
    date: "April 2024",
    note: "Collaborative entrepreneurship programme with IIT Madras covering mentorship, startup ideation, market validation, and funding exposure.",
    image: "/events/iitmadras.jpg",
  },
]

// ─── Challenges — Real competitions from E-Cell history ──────────────────────
const challengeHighlights = [
  {
    title: "MSME Idea Hackathon",
    note: "Annual government-backed hackathon where students develop solutions for real-world challenges. 18 SVCE proposals were forwarded for incubation in the 4.0 edition.",
    image: "/events/msme-idea-hackathon-5.png",
    highlight: "18 SVCE proposals forwarded for incubation in Hackathon 4.0",
    featured: true,
  },
  {
    title: "Startup Surge '25",
    note: "Startup pitching event where student ideas were presented before industry judges from Ashok Leyland, Zoho Commerce, and Entrepreneurs of Madras.",
    image: "/events/startup-surge-25-event-collage.png",
  },
  {
    title: "Entrepreneurship Pitching League (EPL)",
    note: "Pitching competition where students create innovative products by blending multiple domains — run as part of the Highways college fest.",
    image: "/events/epl.jpg",
  },
  {
    title: "Calibration Series",
    note: "Annual in-house competition series with events like Pitch Wars, Decode X, Roast Tank, and Startup Showdown testing creativity, strategy, and business thinking.",
    image: "/events/calibration-25-collage.png",
  },
]

export default function ProgramsPage() {
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
            ECELL • PROGRAMS
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            Programs &amp; Initiatives
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            E-Cell SVCE runs structured programs to support students at every stage of their
            entrepreneurial journey — from learning to building to launching.
          </motion.p>
        </div>
      </motion.section>

      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl space-y-32">

          {/* ── 1. Minor Degree in Entrepreneurship ───────────────────────── */}
          <section id="minor-degree" aria-labelledby="minor-degree-heading" className="scroll-mt-32">
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
                    <GraduationCap className="h-3.5 w-3.5" />
                    FLAGSHIP ACADEMIC PROGRAM
                  </div>
                  <h2
                    id="minor-degree-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
                  >
                    Minor Degree in Entrepreneurship
                  </h2>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                    An academic program offered by EPIC (Entrepreneurship Promotion &amp; Incubation Center)
                    for eligible SVCE students — providing formal entrepreneurship education alongside an
                    engineering degree.
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 group"
                  >
                    Contact Us to Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Specification UI */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-white/10 bg-[#090a10] p-8 md:p-10 space-y-8 divide-y divide-white/10 shadow-2xl">
                  {/* Spec 1: OFFERED BY */}
                  <div className="pt-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                      OFFERED BY
                    </span>
                    <p className="mt-2 text-base md:text-lg font-bold text-white leading-snug">
                      EPIC — Entrepreneurship Promotion &amp; Incubation Center
                    </p>
                  </div>

                  {/* Spec 2: ELIGIBILITY (Highlighted) */}
                  <div className="pt-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                      ELIGIBILITY
                    </span>
                    <div className="mt-2 inline-block rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">
                      <p className="text-lg md:text-xl font-black text-indigo-300 tracking-tight">
                        Pre-final year students
                      </p>
                    </div>
                  </div>

                  {/* Spec 3: FORMAT */}
                  <div className="pt-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                      FORMAT
                    </span>
                    <p className="mt-2 text-base md:text-lg font-medium text-slate-200 leading-relaxed">
                      Entrepreneurship education alongside your engineering degree
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── 2. Incubation Center ──────────────────────────────────────── */}
          <section id="incubation" aria-labelledby="incubation-heading" className="scroll-mt-32">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                <Building2 className="h-3.5 w-3.5" />
                MSME-Focused Support
              </div>
              <h2
                id="incubation-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
              >
                Incubation Center
              </h2>
              <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                E-Cell SVCE&apos;s Incubation Center is a dedicated space to nurture and accelerate
                early-stage startups. Through our MSME-focused approach, we help students and young
                entrepreneurs develop sustainable business models and connect with industry experts
                and investors.
              </p>
            </motion.div>

            {/* Services — Editorial 6-Item Layout */}
            <div className="mt-16">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  INCUBATION SERVICES
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  6 Core Pillars
                </span>
              </div>

              <div className="grid gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 md:grid-cols-2 lg:grid-cols-3">
                {incubationServices.map((service, i) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="group relative bg-[#090a10] p-8 transition-colors duration-300 hover:bg-[#0d0f18]"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20 transition-colors">
                          <Icon className="h-4 w-4 text-indigo-400" />
                        </div>
                        <span className="text-xs font-black tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400 font-normal">
                        {service.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Connected Process Stepper */}
            <div className="mt-20">
              <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                    ROADMAP &amp; STAGES
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-black text-white">
                    The Incubation Process
                  </h3>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  6 Sequential Phases
                </p>
              </div>

              {/* Connected Process Grid / Stepper */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {incubationSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="group relative rounded-3xl border border-white/10 bg-[#090a10] p-8 transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#0d0f18]"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
                        Phase {step.step}
                      </span>
                      <span className="text-xs font-black tracking-widest text-slate-600 group-hover:text-indigo-400 transition-colors">
                        0{i + 1} / 06
                      </span>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 font-normal">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </section>

          {/* ── 3. Workshops & Founder Sessions ──────────────────────────── */}
          <section id="workshops" aria-labelledby="workshops-heading" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                <BookOpen className="h-3.5 w-3.5" />
                Learning &amp; Exposure
              </div>
              <h2
                id="workshops-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
              >
                Workshops &amp; Founder Sessions
              </h2>
              <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                E-Cell SVCE regularly organises workshops, webinars, and founder interaction sessions
                where students learn from entrepreneurs, industry professionals, and startup ecosystem
                builders.
              </p>
            </motion.div>

            {/* Editorial Event Grid */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
              {workshopHighlights.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] transition-all duration-500 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div>
                    {/* Event Image Container */}
                    <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                      <Image
                        src={w.image}
                        alt={w.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-black/30" />
                      
                      {/* Date Badge */}
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 backdrop-blur-md px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                        {w.date}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                        {w.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-400 font-normal">
                        {w.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/events"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
              >
                Browse All Events
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </section>

          {/* ── 4. Startup Challenges & Competitions ─────────────────────── */}
          <section id="challenges" aria-labelledby="challenges-heading" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                <Trophy className="h-3.5 w-3.5" />
                Competition &amp; Pitching
              </div>
              <h2
                id="challenges-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
              >
                Startup Challenges &amp; Competitions
              </h2>
              <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-slate-300 font-normal">
                From government-backed hackathons to in-house pitch competitions, E-Cell SVCE creates
                real-stakes environments where students test, refine, and present their ideas.
              </p>
            </motion.div>

            {/* Featured MSME Hackathon Hero Card */}
            <div className="mt-16">
              {challengeHighlights
                .filter((c) => c.featured)
                .map((c) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#090a10] shadow-2xl transition-all duration-500 hover:border-indigo-500/50"
                  >
                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300 mb-6">
                          FLAGSHIP HACKATHON
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-indigo-200 transition-colors">
                          {c.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-300 font-normal">
                          {c.note}
                        </p>
                      </div>

                      {/* Prominent Factual Highlight Banner */}
                      {c.highlight && (
                        <div className="mt-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5 md:p-6">
                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400 block mb-1">
                            FACTUAL HIGHLIGHT
                          </span>
                          <p className="text-base sm:text-lg md:text-xl font-black text-indigo-200 tracking-tight">
                            {c.highlight}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden bg-slate-900">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-transparent lg:hidden" />
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Other Competitions Grid */}
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {challengeHighlights
                .filter((c) => !c.featured)
                .map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] transition-all duration-500 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                  >
                    <div>
                      {/* Image Container */}
                      <div className="relative h-52 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-black/30" />
                      </div>

                      {/* Content Body */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                          {c.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400 font-normal">
                          {c.note}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/events"
                className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 group"
              >
                See All Competitions
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/[0.04] p-8 text-center md:p-12">
            <h2 className="text-3xl font-black text-white md:text-4xl">
              Ready to get involved?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Connect with the E-Cell SVCE community and explore the programmes that match where you are in your entrepreneurial journey.
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
                href="/events"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Explore Events
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
