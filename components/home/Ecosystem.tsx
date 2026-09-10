"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Users, Code, Award, Building2 } from "lucide-react"

export default function Ecosystem() {
  const pillars = [
    {
      title: "Alumni Network",
      desc: "Connect with SVCE alumni leading tech ventures & corporate innovation globally.",
      href: "/alumni",
      icon: Users,
    },
    {
      title: "Founders & Entrepreneurs",
      desc: "Peer learning & collaboration with active student & alumni founders.",
      href: "/ecosystem#founders",
      icon: Code,
    },
    {
      title: "Mentors & Experts",
      desc: "Direct guidance on product development, legal structures & fundraising.",
      href: "/ecosystem#mentors",
      icon: Award,
    },
    {
      title: "Industry Connections",
      desc: "Partnerships with MSME, startup hubs, and regional innovation ecosystems.",
      href: "/ecosystem#industry",
      icon: Building2,
    },
  ]

  return (
    <section className="relative px-4 py-24 md:px-8 bg-[#050505] border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">The E-Cell Ecosystem</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
            People, Communities & Opportunities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            A thriving ecosystem connecting student builders with mentors, alumni, and industry partners to help ideas move forward.
          </p>
        </motion.div>

        {/* Featured Card: BUILDERS GUILD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-indigo-500/30 bg-gradient-to-br from-[#0e1220] via-[#090c15] to-[#05060a] p-8 md:p-12 shadow-[0_20px_70px_rgba(79,70,229,0.15)]"
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                Flagship Initiative
              </div>

              <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                E-Cell Builders Guild
              </h3>

              <p className="text-base leading-relaxed text-slate-300 md:text-lg max-w-3xl">
                An exclusive technical and product builder community by E-Cell SVCE focused on rapid execution, open-source building, hackathons, and empowering student engineers to build production-grade software and hardware.
              </p>

              <div className="pt-4">
                <a
                  href="https://e-cell-builders-guild.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-indigo-500 hover:shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:-translate-y-0.5"
                >
                  Explore Builders Guild
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Guild Focus Areas</span>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    <span>Product & Hardware Hackathons</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    <span>Rapid MVP Prototyping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    <span>Technical Mentorship</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    <span>Peer Code & Strategy Reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Ecosystem Pillars */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#090b10] p-7 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0e111a] hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
