"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronRight, Sparkles, X } from "lucide-react"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

// Image modal with zoom & fade animation
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl border border-white/20 object-contain"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          type="button"
          className="absolute top-6 right-6 text-white bg-white/10 border border-white/20 rounded-full p-2.5 hover:bg-white/20 transition-colors"
          onClick={onClose}
          aria-label="Close image"
        >
          <X className="h-6 w-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

// BLOG CONTENT GENERATOR - Bound from April 6, 2025 to January 13, 2026 (Academic Year 2025-2026)
const numStageOne = 50
const numStageTwo = 205
const totalImages = numStageOne + numStageTwo
const monthsOrder = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January"]

function generateBlogPosts() {
  const startDate = new Date(2025, 3, 6) // April 6, 2025
  const endDate = new Date(2026, 0, 13) // January 13, 2026
  
  const totalDays = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1)
  const blogPosts: any[] = []
  let imageIndex = 0
  
  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate.getTime())
    date.setDate(startDate.getDate() + i)
    
    if (date > endDate) break

    const month = date.toLocaleString("en-US", { month: "long" })
    const day = date.getDate()
    const year = date.getFullYear()
    
    if (year === 2026 && month === "January" && day > 13) continue
    if (year === 2026 && (month === "February" || month === "March")) continue

    const imagePath = (imageIndex < totalImages)
      ? (imageIndex < numStageOne 
          ? `/stage one/${imageIndex + 1}.png` 
          : `/stage two/${imageIndex - numStageOne + 1}.png`)
      : `/stage one/1.png`

    blogPosts.push({
      date,
      dateString: `${month} ${day}, ${year}`,
      month,
      year,
      image: imagePath,
      content: `Official daily blog update & venture insight for SVCE E-Cell community archive - ${month} ${day}, ${year}.`,
    })
    
    imageIndex = (imageIndex + 1) % totalImages
  }
  return blogPosts
}

function groupPostsByMonth(blogPosts: any[]) {
  const postsByMonth: Record<string, any[]> = {}
  monthsOrder.forEach((month) => {
    postsByMonth[month] = blogPosts.filter((post) => post.month === month)
  })
  return postsByMonth
}

export default function BlogPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<{ month: string; idx: number } | null>(null)
  const [modalImg, setModalImg] = useState<{ src: string; alt: string } | null>(null)
  const [postsByMonth, setPostsByMonth] = useState<Record<string, any[]> | null>(null)
  const [blogPosts, setBlogPosts] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const posts = generateBlogPosts()
    setBlogPosts(posts)
    const grouped = groupPostsByMonth(posts)
    setPostsByMonth(grouped)
    setOpenMonth(monthsOrder[0])
    setLoading(false)
  }, [])

  if (loading || !postsByMonth || !blogPosts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400 animate-pulse">
          Loading Blog Archive...
        </div>
      </div>
    )
  }

  return (
    <div className="page-container relative min-h-screen overflow-x-hidden bg-[#050505] text-slate-100 font-sans">
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
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
            BLOG / E-CELL SVCE
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            Ideas, Insights &amp; Stories
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Daily logs, milestone updates, and venture stories across Academic Year 2025–2026.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Blog Archive Directory ────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Main Card Container */}
          <div className="rounded-3xl border border-white/10 bg-[#090a10] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient Lighting */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06),transparent_60%)]"
            />

            <div className="relative z-10 border-b border-white/10 pb-8 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                  <Calendar className="h-4 w-4" /> Academic Year 2025–2026
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Knowledge &amp; Venture Archive
                </h2>
                <p className="text-xs text-slate-400 mt-1">April 2025 to January 13, 2026</p>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300 w-fit">
                <Sparkles className="h-3.5 w-3.5" /> {blogPosts.length} Entries Logged
              </span>
            </div>

            {/* Months Accordion */}
            <div className="relative z-10 space-y-4">
              {monthsOrder.map(
                (month) =>
                  postsByMonth[month]?.length > 0 && (
                    <div key={month} className="border-b border-white/5 pb-4 last:border-0">
                      <button
                        type="button"
                        className={`w-full text-left text-lg sm:text-2xl font-black uppercase tracking-tight px-5 py-4 transition-all duration-300 rounded-2xl flex items-center justify-between ${
                          openMonth === month
                            ? "text-indigo-300 bg-indigo-500/10 border border-indigo-500/30"
                            : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                        }`}
                        onClick={() => setOpenMonth(openMonth === month ? null : month)}
                      >
                        <span className="flex items-center gap-3">
                          {month} {month === "January" ? "2026" : "2025"}
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                            {postsByMonth[month].length} posts
                          </span>
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openMonth === month ? "rotate-90 text-indigo-400" : "text-slate-500"
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {openMonth === month && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {/* Day Selection Grid */}
                            <div className="flex flex-wrap gap-2.5 py-6 px-2">
                              {postsByMonth[month]?.map((post, idx) => (
                                <button
                                  key={post.dateString}
                                  type="button"
                                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center border transition-all duration-300 ${
                                    selectedDay?.month === month && selectedDay?.idx === idx
                                      ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-105"
                                      : "bg-white/[0.03] text-slate-400 border-white/10 hover:bg-white/[0.08] hover:text-white"
                                  }`}
                                  onClick={() => setSelectedDay({ month, idx })}
                                >
                                  {post.date.getDate()}
                                </button>
                              ))}
                            </div>

                            {/* Active Day Post Card */}
                            <AnimatePresence mode="wait">
                              {selectedDay?.month === month && postsByMonth[month][selectedDay.idx] && (
                                <motion.div
                                  key={postsByMonth[month][selectedDay.idx].dateString}
                                  className="bg-[#050505] border border-indigo-500/30 rounded-3xl p-6 sm:p-8 mt-2 shadow-2xl"
                                  initial={{ opacity: 0, y: 15 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 15 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                                      {postsByMonth[month][selectedDay.idx].dateString}
                                    </h3>
                                    <span className="text-indigo-300 font-bold text-xs uppercase tracking-widest px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 w-fit">
                                      Day Streak: #{blogPosts.findIndex((p) => p.dateString === postsByMonth[month][selectedDay.idx].dateString) + 1}
                                    </span>
                                  </div>

                                  {/* Article Image Viewport */}
                                  <div
                                    className="w-full aspect-video bg-[#0d1117] rounded-2xl flex items-center justify-center mb-6 overflow-hidden cursor-zoom-in border border-white/10 group relative"
                                    onClick={() =>
                                      setModalImg({
                                        src: postsByMonth[month][selectedDay.idx].image,
                                        alt: `Blog ${postsByMonth[month][selectedDay.idx].dateString}`,
                                      })
                                    }
                                  >
                                    <img
                                      src={postsByMonth[month][selectedDay.idx].image}
                                      alt={`Blog ${postsByMonth[month][selectedDay.idx].dateString}`}
                                      className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white backdrop-blur-[2px]">
                                      Click to view full size
                                    </div>
                                  </div>

                                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                                    {postsByMonth[month][selectedDay.idx].content}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      {modalImg && (
        <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
      )}
    </div>
  )
}
