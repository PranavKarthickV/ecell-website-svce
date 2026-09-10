"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Component } from "@/components/ui/animated-menu";

// ─── Programs dropdown items ──────────────────────────────────────────────────
const programsItems = [
  { href: "/programs#minor-degree", label: "Minor Degree in Entrepreneurship" },
  { href: "/programs#incubation", label: "Incubation Center" },
  { href: "/programs#workshops", label: "Workshops & Founder Sessions" },
  { href: "/programs#challenges", label: "Startup Challenges" },
];

// ─── Ecosystem dropdown items ─────────────────────────────────────────────────
const ecosystemItems = [
  {
    href: "https://e-cell-builders-guild.vercel.app/",
    label: "Builders Guild",
    external: true,
  },
  { href: "/alumni", label: "Alumni Entrepreneurs" },
  { href: "/ecosystem#founders", label: "Founders & Connections" },
  { href: "/ecosystem#mentors", label: "Mentors & Experts" },
  { href: "/ecosystem#industry", label: "Industry Network" },
];

// ─── Join E-Cell social links ─────────────────────────────────────────────────
const joinLinks = [
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q",
    icon: <MessageCircle size={14} className="text-green-400" />,
    color: "hover:bg-green-500/10 hover:text-green-300",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ecell.svce?igshid=YmMyMTA2M2Y%3D",
    icon: <Instagram size={14} className="text-pink-400" />,
    color: "hover:bg-pink-500/10 hover:text-pink-300",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/e-cell-svce/",
    icon: <Linkedin size={14} className="text-blue-400" />,
    color: "hover:bg-blue-500/10 hover:text-blue-300",
  },
];

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  dropdown?: "programs" | "ecosystem";
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs", dropdown: "programs" },
  { href: "/events", label: "Events" },
  { href: "/ecosystem", label: "Ecosystem", dropdown: "ecosystem" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const dropdownPanelClass =
  "absolute top-full mt-4 w-64 bg-[#090a10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden z-[200]";

const dropdownItemClass =
  "flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all hover:bg-white/5 hover:text-white";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showEcosystem, setShowEcosystem] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const joinRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    const handleClickOutside = (event: MouseEvent) => {
      if (joinRef.current && !joinRef.current.contains(event.target as Node)) {
        setShowJoin(false);
      }
      if (programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setShowPrograms(false);
      }
      if (ecosystemRef.current && !ecosystemRef.current.contains(event.target as Node)) {
        setShowEcosystem(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setShowJoin(false);
    setShowPrograms(false);
    setShowEcosystem(false);
  };

  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 md:px-12 pointer-events-none">
      <header
        className={`mx-auto max-w-7xl flex items-center justify-between pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled
            ? "px-6 py-3 bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
            : "px-2 py-2 bg-transparent rounded-none"
        }`}
      >
        {/* ── Logo ── */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <div
              className={`relative transition-all duration-500 ${
                scrolled ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10 md:w-12 md:h-12"
              }`}
            >
              <Image
                src="/logo.png"
                alt="E-Cell SVCE"
                fill
                className="object-contain drop-shadow-2xl brightness-125"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-extrabold uppercase tracking-[0.2em] transition-all duration-500 ${
                  scrolled ? "text-sm text-indigo-400" : "text-base text-white"
                }`}
              >
                E-Cell
              </span>
              <span
                className={`font-sans font-bold uppercase tracking-[0.4em] text-[8px] transition-all duration-500 ${
                  scrolled ? "text-slate-400" : "text-slate-400"
                }`}
              >
                SVCE Chennai
              </span>
            </div>
          </Link>
        </div>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            // ── Programs dropdown trigger ──
            if (link.dropdown === "programs") {
              return (
                <div key={link.href} className="relative" ref={programsRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPrograms((v) => !v);
                      setShowEcosystem(false);
                      setShowJoin(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-1 ${
                      active || showPrograms
                        ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Component>{link.label}</Component>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${showPrograms ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {showPrograms && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                        className={`${dropdownPanelClass} left-0`}
                      >
                        {programsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className={dropdownItemClass}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // ── Ecosystem dropdown trigger ──
            if (link.dropdown === "ecosystem") {
              return (
                <div key={link.href} className="relative" ref={ecosystemRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEcosystem((v) => !v);
                      setShowPrograms(false);
                      setShowJoin(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-1 ${
                      active || showEcosystem
                        ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Component>{link.label}</Component>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${showEcosystem ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {showEcosystem && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                        className={`${dropdownPanelClass} left-0`}
                      >
                        {ecosystemItems.map((item) =>
                          item.external ? (
                            <a
                              key={item.href}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMenu}
                              className={`${dropdownItemClass}`}
                            >
                              {item.label}
                              <ExternalLink className="w-3 h-3 text-indigo-400" />
                            </a>
                          ) : (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenu}
                              className={dropdownItemClass}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // ── Regular link ──
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 relative group overflow-hidden ${
                  active
                    ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Component>{link.label}</Component>
              </Link>
            );
          })}
        </nav>

        {/* ── Join E-Cell CTA (desktop) ── */}
        <div className="hidden xl:block relative" ref={joinRef}>
          <button
            type="button"
            onClick={() => {
              setShowJoin((v) => !v);
              setShowPrograms(false);
              setShowEcosystem(false);
            }}
            className={`px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[9px] uppercase tracking-[0.3em] rounded-xl transition-all shadow-lg flex items-center gap-2 group ${
              showJoin ? "ring-2 ring-indigo-400 ring-offset-2 ring-offset-black" : ""
            }`}
          >
            <Component>Join E-Cell</Component>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${showJoin ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {showJoin && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-4 w-56 bg-[#090a10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden z-[200]"
              >
                {joinLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all ${link.color}`}
                  >
                    <div className="flex items-center gap-3">
                      {link.icon}
                      {link.label}
                    </div>
                  </a>
                ))}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 mt-2 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.3em] text-indigo-400 hover:text-white transition-colors"
                >
                  <Globe size={10} /> Community Hub
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          type="button"
          className="xl:hidden p-3 bg-white/5 rounded-2xl border border-white/5 text-indigo-400"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#050505]/98 backdrop-blur-3xl z-[150] p-8 sm:p-10 flex flex-col pointer-events-auto border-l border-white/10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400">
                Navigation
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="p-3 bg-white/5 rounded-xl border border-white/5 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/programs", label: "Programs" },
                { href: "/events", label: "Events" },
                { href: "/ecosystem", label: "Ecosystem" },
                { href: "/team", label: "Team" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight transition-all hover:text-indigo-300 flex items-center justify-between group ${
                      isActive(link.href) ? "text-indigo-400" : "text-white"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile bottom — social links + CTA */}
            <div className="mt-auto pt-8 border-t border-white/10 space-y-6">
              <div className="grid grid-cols-3 gap-3">
                {joinLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <Link href="/contact" onClick={closeMenu} className="block">
                <button
                  type="button"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-2xl shadow-2xl transition-colors"
                >
                  Join E-Cell
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;