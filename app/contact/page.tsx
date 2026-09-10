"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, MessageCircle, Instagram, Linkedin, ArrowRight, Send, CheckCircle2, AlertCircle } from "lucide-react"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

const communityLinks = [
  {
    name: "WhatsApp Community",
    description: "Join our official daily log and community group for real-time updates and venture news.",
    link: "https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q",
    icon: <MessageCircle className="w-5 h-5 text-green-400" />,
  },
  {
    name: "Instagram",
    description: "Follow us for event highlights, founder stories, and behind-the-scenes content.",
    link: "https://www.instagram.com/ecell.svce?igshid=YmMyMTA2M2Y%3D",
    icon: <Instagram className="w-5 h-5 text-pink-400" />,
  },
  {
    name: "LinkedIn",
    description: "Connect with our professional network and keep track of our corporate partnerships.",
    link: "https://www.linkedin.com/company/e-cell-svce/",
    icon: <Linkedin className="w-5 h-5 text-blue-400" />,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errorMessage) setErrorMessage("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setIsSubmitting(false)
      setErrorMessage("Something went wrong. Please try again or email us directly.")
    }
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
        <div className="relative z-10 mx-auto max-w-4xl text-left">
          <p className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 rounded-full">
            CONTACT / E-CELL SVCE
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            Get in Touch
          </h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal italic max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            &quot;Empowering the next generation of visionary founders through innovation, mentorship, and world-class incubation.&quot;
          </motion.p>
        </div>
      </motion.section>

      {/* ── Contact Info + Form Section ──────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Editorial Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* 01 / EMAIL */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  01 / EMAIL
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Direct Contact
                </h3>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-10 h-10 rounded-2xl border border-white/10 bg-[#090a10] flex items-center justify-center text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:ecell@svce.ac.in"
                    className="text-base sm:text-lg font-semibold text-slate-200 hover:text-indigo-300 transition-colors"
                  >
                    ecell@svce.ac.in
                  </a>
                </div>
              </div>

              {/* 02 / LOCATION */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  02 / LOCATION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Campus Address
                </h3>
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-10 h-10 rounded-2xl border border-white/10 bg-[#090a10] flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    Sri Venkateswara College of Engineering<br />
                    Pennalur Village, Sriperumbudur Tk<br />
                    Tamil Nadu, India 602117
                  </p>
                </div>
              </div>

              {/* 03 / COMMUNITY & SOCIAL */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  03 / SOCIAL &amp; COMMUNITY
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Join Our Channels
                </h3>

                <div className="space-y-4">
                  {communityLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-[#090a10] shadow-2xl transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1"
                    >
                      <div className="p-3 rounded-xl border border-white/10 bg-white/[0.03] group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {item.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Dark Editorial Contact Form */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] p-8 sm:p-10 shadow-2xl">
                {/* Subtle Ambient Glow inside form card */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.08),transparent_60%)]"
                />

                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                      MESSAGE US
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Have a query or proposal? Fill out the form below and our team will reach out.
                    </p>
                  </div>

                  {/* Feedback Banner */}
                  {isSubmitted && (
                    <div className="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="flex items-center gap-3 p-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300 block">
                          Your Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/[0.02] transition-colors"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300 block">
                          Email Address <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/[0.02] transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300 block">
                        Subject / Topic
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Startup Incubation / Event Partnership"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/[0.02] transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300 block">
                        Your Message <span className="text-indigo-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your venture idea, event inquiry, or partnership opportunity..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/[0.02] transition-colors resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span> <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* ── Closing Section ────────────────────────────────────────────── */}
          <section className="mt-28 relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#090a10] p-8 sm:p-12 text-center shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)]"
            />
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                CONNECT WITH US
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                Whether you are a student builder, founder, mentor, or corporate partner, we welcome you to join the E-Cell SVCE ecosystem.
              </h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
