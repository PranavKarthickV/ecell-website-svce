import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand and Mission */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="E-cell SVCE Logo"
                  fill
                  className="object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-wider text-white">
                  E-CELL <span className="text-indigo-400">SVCE</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Chennai Campus
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-md">
              Empowering the next generation of visionary founders through innovation, mentorship, and world-class incubation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: <MessageCircle className="w-4 h-4 text-green-400" />,
                  href: "https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q",
                  label: "WhatsApp",
                },
                {
                  icon: <Instagram className="w-4 h-4 text-pink-400" />,
                  href: "https://www.instagram.com/ecell.svce?igshid=YmMyMTA2M2Y%3D",
                  label: "Instagram",
                },
                {
                  icon: <Linkedin className="w-4 h-4 text-blue-400" />,
                  href: "https://www.linkedin.com/company/e-cell-svce/",
                  label: "LinkedIn",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Programs", href: "/programs" },
                { label: "Events", href: "/events" },
                { label: "Ecosystem", href: "/ecosystem" },
                { label: "Team", href: "/team" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-xs font-semibold tracking-wider transition-colors inline-block hover:translate-x-1 transition-transform duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://e-cell-builders-guild.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-300 text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-1 hover:translate-x-1 transition-transform duration-200"
                >
                  Builders Guild ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500/20 transition-all">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                </div>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">
                  Sri Venkateswara College of Engineering<br />
                  Pennalur Village, Sriperumbudur Tk<br />
                  Tamil Nadu, India 602117
                </p>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="w-9 h-9 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500/20 transition-all">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <a
                  href="mailto:ecell@svce.ac.in"
                  className="text-xs font-semibold text-slate-300 hover:text-indigo-300 transition-colors"
                >
                  ecell@svce.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-xs text-slate-500 font-normal">
            © {new Date().getFullYear()} E-CELL SVCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
