"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export interface Speaker {
  name: string
  designation: string
  image: string
}

export const featuredSpeakers: Speaker[] = [
  {
    name: "Dr. Arvind A R",
    designation: "Deputy General Manager, Ashok Leyland Limited",
    image: "/inspirational-speakers/Arvind AR.jpg",
  },
  {
    name: "Mr. Palaniappan Narayanan",
    designation: "Co-Founder & CEO at Mocero Health Solutions, Chennai",
    image: "/inspirational-speakers/Palaniappan.jpg",
  },
  {
    name: "Mr. Shri Sivarajah Ramanathan",
    designation: "Mission Director of Tamil Nadu Startup and Innovation Mission",
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

export default function Network() {
  const [isSpeakersPaused, setIsSpeakersPaused] = useState(false)

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 bg-[#050505] border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">
            FOUNDER & INDUSTRY NETWORK
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
            Learn From People Who Build.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm text-slate-400 font-normal leading-relaxed">
            Founders, industry leaders, and ecosystem builders who have engaged with the SVCE E-Cell community.
          </p>
        </motion.div>

        {/* Editorial Network Directory Marquee */}
        <div
          className={`relative overflow-x-auto touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isSpeakersPaused ? "speaker-marquee-paused" : ""
          }`}
          onMouseEnter={() => setIsSpeakersPaused(true)}
          onMouseLeave={() => setIsSpeakersPaused(false)}
          onFocusCapture={() => setIsSpeakersPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsSpeakersPaused(false)
            }
          }}
          onTouchStart={() => setIsSpeakersPaused(true)}
          onTouchEnd={() => setIsSpeakersPaused(false)}
          aria-label="Speakers and industry connections"
        >
          <div className="speaker-marquee-track flex w-max gap-6 py-2">
            {[...featuredSpeakers, ...featuredSpeakers].map((speaker, index) => (
              <article
                key={`${speaker.name}-${index}`}
                aria-hidden={index >= featuredSpeakers.length}
                className="group flex h-[28rem] w-[min(calc(100vw-2rem),21rem)] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#080a0f]/95 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)]"
              >
                <div>
                  {/* Speaker Image Frame */}
                  <div className="relative h-[13.5rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f121a]">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Speaker Info */}
                  <div className="mt-5 space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-400">
                      INDUSTRY NETWORK
                    </span>
                    <h3 className="text-lg font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2">
                      {speaker.designation}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Divider & Visual Anchor Dot */}
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3.5 text-[10px] font-mono text-slate-500">
                  <span>SVCE // ECOSYSTEM</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
