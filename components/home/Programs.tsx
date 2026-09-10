"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Briefcase, BookOpen, Target } from "lucide-react"

export interface ServiceData {
  title: string
  icon: React.ReactNode
  description: string
  details: string
  features: string[]
  route: string
}

export const servicesData: ServiceData[] = [
  {
    title: "Minor Degree in Entrepreneurship",
    icon: <GraduationCap className="h-6 w-6 text-indigo-400" />,
    description: "Build formal business and startup knowledge alongside your engineering degree. Offered by EPIC for eligible SVCE students.",
    details: "Offered by EPIC, this academic opportunity supports eligible SVCE students who want to formally pursue entrepreneurship education as a minor alongside their engineering studies.",
    features: [
      "Offered by EPIC at SVCE",
      "Tailored for eligible engineering students",
      "Structured curriculum in business ideation & venture management",
      "Academic credit & formal certification",
    ],
    route: "/programs#minor-degree",
  },
  {
    title: "Incubation Center",
    icon: <Briefcase className="h-6 w-6 text-indigo-400" />,
    description: "Entrepreneurial & Managerial Development of SMEs through Incubator MSME and campus incubation facilities.",
    details: "Our incubation center provides a supportive environment for startups to grow and scale. We offer workspace support, funding opportunities, and expert guidance to help transform ideas into successful businesses.",
    features: [
      "Incubator MSME affiliation",
      "Co-working facilities and workspace",
      "Seed funding and investment connections",
      "Technology & infrastructure guidance",
    ],
    route: "/programs#incubation",
  },
  {
    title: "Founder & Industry Sessions",
    icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
    description: "Workshops, masterclasses, and founder fireside chats to give students direct exposure to industry veterans.",
    details: "We offer a comprehensive suite of workshops and speaker sessions designed to support every stage of your entrepreneurial journey, from ideation to execution and growth.",
    features: [
      "Regular guest speaker sessions",
      "Hands-on pitch & business model workshops",
      "Industry collaboration opportunities",
      "Direct Q&A with successful alumni & founders",
    ],
    route: "/programs#workshops",
  },
  {
    title: "Startup Challenges",
    icon: <Target className="h-6 w-6 text-indigo-400" />,
    description: "Competitive hackathons, Pitch Wars, and Decode X challenges to test business acumen and strategy.",
    details: "High-energy competitions where student teams present business models, marketing strategies, and product prototypes to panel judges and mentors.",
    features: [
      "Calibrations & Pitch Wars events",
      "Multi-round strategic problem solving",
      "Feedback from industry judges",
      "Awards and recognition for top ventures",
    ],
    route: "/programs#challenges",
  },
]

interface ProgramsProps {
  onSelectService: (index: number) => void
}

export default function Programs({ onSelectService }: ProgramsProps) {
  return (
    <section className="relative px-4 py-24 md:px-8 border-t border-white/10 bg-[#07080d]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">Programs</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
            Where Ambition Gets Structure.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            From academic minor credentials to MSME incubator access and hands-on competitions, we provide the platform to build real ventures.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0c0e15] p-8 md:p-10 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#10131e] shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                    {service.icon}
                  </div>
                  <span className="text-xs font-black tracking-widest text-slate-500">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                <button
                  type="button"
                  onClick={() => onSelectService(index)}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Details
                </button>

                <Link
                  href={service.route}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white hover:text-indigo-300 transition-colors"
                >
                  Explore Program
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
