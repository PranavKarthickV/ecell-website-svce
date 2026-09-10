"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react"

export default function EventsPreview() {
  const featuredEvent = {
    title: "E-Cell Inauguration Ceremony 2024-2025",
    category: "Inauguration",
    date: "October 29, 2024",
    location: "Function Hall, SVCE",
    description: "Official inauguration of SVCE E-Cell featuring keynote address by Mr. T. Vignesh (Associate Business Facilitating Officer, Bureau for facilitating MSME) and Guest of Honour Dr. T.J. Jeyaprabha.",
    image: "/events/inguarartion.jpg",
  }

  const secondaryEvents = [
    {
      title: "IITM Research Park Hack Day - Hardware Meetup",
      category: "Meetup",
      date: "October 2024",
      location: "IITM Research Park",
      description: "Exclusive hardware enthusiasts meetup featuring speaker sessions, ideathon, and open discussions on hardware innovation.",
      image: "/events/researchpark.jpg",
    },
    {
      title: "Calibrations 2024 - Pitch Wars",
      category: "Competition",
      date: "September 2024",
      location: "SVCE Campus",
      description: "High-energy pitching competition where teams developed distinct business strategies and presented persuasive business models.",
      image: "/events/pitchwars.jpg",
    },
    {
      title: "IIT Madras E-Summit & E-Auction",
      category: "Summit",
      date: "March 1, 2025",
      location: "IIT Madras",
      description: "SVCE E-Cell members participated in real-world investment simulations and startup valuation challenges.",
      image: "/events/iit_2025.jpg",
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
          className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">Campus & Regional Events</span>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-white md:text-6xl">
              Where Innovators Collide.
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Layout Grid: Featured Left, Secondary List Right */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Featured Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090b10] p-6 md:p-8 lg:col-span-7 shadow-2xl transition-all duration-300 hover:border-indigo-500/30"
          >
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-[#141822]">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-black/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                {featuredEvent.category}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">
                {featuredEvent.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-300 font-normal">
                {featuredEvent.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 group-hover:text-white transition-colors"
              >
                Read Event Highlights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Secondary Events List */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {secondaryEvents.map((evt, idx) => (
              <motion.div
                key={evt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href="/events"
                  className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#090b10] p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#0e111a]"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-400">
                    <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-[9px] uppercase tracking-widest">
                      {evt.category}
                    </span>
                    <span className="text-slate-400">{evt.date}</span>
                  </div>

                  <h4 className="mt-3 text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {evt.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 group-hover:text-indigo-300 transition-colors border-t border-white/5 pt-3">
                    <span>{evt.location}</span>
                    <span>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
