"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

type TeamMember = {
  id: number
  name: string
  position: string
  team: string
  domain: string
  image: string
  bio?: string
  linkedin?: string
  github?: string
  imagePosition?: string
  imageFit?: "cover" | "contain"
}

const teamMembers: TeamMember[] = [
  {
    "id": 1,
    "name": "Baarath Arumugaraja",
    "position": "President",
    "team": "Board Members / Leadership",
    "domain": "CSE - 4th Year",
    "image": "/teams/2026/baarath_arumugaraja.jpg",
    "bio": "Just a chill guy with a curious mind and a questionable sleep schedule.",
    "linkedin": "https://www.linkedin.com/in/baarath-arumugaraja-7a8820329/"
  },
  {
    "id": 2,
    "name": "Janani T",
    "position": "Vice President",
    "team": "Board Members / Leadership",
    "domain": "CSE - 4th Year",
    "image": "/teams/2026/janani_t.jpg",
    "bio": "< Dream it | Chase it | Live it > Running out of time ??",
    "linkedin": "https://www.linkedin.com/in/janani-t-bb507a29a",
    "github": "https://github.com/JananiTcoder"
  },
  {
    "id": 3,
    "name": "Harshith Bubalan",
    "position": "Secretary",
    "team": "Board Members / Leadership",
    "domain": "MNA - 4th Year",
    "image": "/teams/2026/harshith_bubalan.jpg",
    "bio": "?",
    "linkedin": "https://www.linkedin.com/in/harshith-bubalan-9b3588284",
    "github": "https://github.com/Harshith-bubalan",
    "imagePosition": "center 42%"
  },
  {
    "id": 4,
    "name": "Sankara Narayanan S",
    "position": "CEO",
    "team": "Board Members / Leadership",
    "domain": "Biotech - 4th Year",
    "image": "/teams/2026/sankara_narayanan_s.jpg",
    "bio": "Becoming the entrepreneur I aspire to be."
  },
  {
    "id": 5,
    "name": "Abijith P",
    "position": "COO",
    "team": "Board Members / Leadership",
    "domain": "CSE - 4th Year",
    "image": "/teams/2026/abijith_p.jpg",
    "linkedin": "https://www.linkedin.com/in/abijith-prashanth-064206321"
  },
  {
    "id": 6,
    "name": "Tharun S",
    "position": "Creative Director",
    "team": "Board Members / Leadership",
    "domain": "MNA - 3rd Year",
    "image": "/teams/2026/tharun_s.jpg",
    "bio": "Figuring it out ??",
    "linkedin": "https://www.linkedin.com/in/tharun-somasundaram",
    "imagePosition": "center 40%"
  },
  {
    "id": 7,
    "name": "Sudish M",
    "position": "CTO",
    "team": "Board Members / Leadership",
    "domain": "CSE - 4th Year",
    "image": "/teams/2026/sudish_m.jpg",
    "bio": "Trying to do better.",
    "linkedin": "https://in.linkedin.com/in/sudish-mohan-14a21331a",
    "imagePosition": "center 30%"
  },
  {
    "id": 8,
    "name": "Thoufikur Rahaman Y",
    "position": "CDO",
    "team": "Board Members / Leadership",
    "domain": "EEE - 3rd Year",
    "image": "/teams/design/THOUFIKUR RAHAMAN.webp",
    "linkedin": "https://www.linkedin.com/in/thoufikur-rahaman-y-9a66a0388",
    "github": "https://github.com/THOUFIKUR"
  },
  {
    "id": 9,
    "name": "Balakrishnan.R",
    "position": "DOI",
    "team": "Board Members / Leadership",
    "domain": "AI&DS - 4th Year",
    "image": "/teams/2026/balakrishnan_r.jpg",
    "bio": "Analytics, podcaster, and startup enthusiast�building things and surviving life.",
    "linkedin": "https://www.linkedin.com/in/balakrishnan-r-5a1006278",
    "github": "https://github.com/BalaKrishnan1708",
    "imagePosition": "center 70%"
  },
  {
    "id": 10,
    "name": "Madhav Krishna",
    "position": "Community Captain",
    "team": "Leaders / Representatives",
    "domain": "CSE - 3rd Year",
    "image": "/teams/2026/madhav_krishna.jpg",
    "bio": "??",
    "linkedin": "https://www.linkedin.com/in/madhav-krishna-jps/"
  },
  {
    "id": 11,
    "name": "Shree Varshini M",
    "position": "EPIC Representative",
    "team": "Leaders / Representatives",
    "domain": "ECE - 4th Year",
    "image": "/teams/committee/CEO.webp",
    "linkedin": "https://www.linkedin.com/in/shree-varshini-m-533b08304"
  },
  {
    "id": 12,
    "name": "Sri bharathi R",
    "position": "Executive Lead",
    "team": "Leaders / Representatives",
    "domain": "MNA - 3rd Year",
    "image": "/teams/executive/SRI BHARATHI.webp",
    "bio": "Grounded in independence, rising through the chaos, unstoppable when provoked by a challenge"
  },
  {
    "id": 13,
    "name": "Kayal Nethra K",
    "position": "CMO",
    "team": "Leaders / Representatives",
    "domain": "CSE - 3rd Year",
    "image": "/teams/marketing/KAYAL NETHRA.webp",
    "bio": "Im not everyones cup of tea. Id rather be champagne.",
    "linkedin": "https://www.linkedin.com/in/kayal-nethra-k-cse-36150b332",
    "imagePosition": "center 65%"
  },
  {
    "id": 14,
    "name": "K Buvaneswaran",
    "position": "Tech Lead",
    "team": "Leaders / Representatives",
    "domain": "ECE - 3rd Year",
    "image": "/teams/2026/k_buvaneswaran.jpg",
    "bio": "A Person who loves coding, AI/ML, and building tech projects. Excited to be the Tech Lead and bring my skills to the team!",
    "linkedin": "https://www.linkedin.com/in/buvaneswaran-kannan-6114a8333",
    "github": "https://github.com/BuvaneswaranK306",
    "imagePosition": "center 60%"
  },
  {
    "id": 15,
    "name": "Seyed Mohamed MF",
    "position": "Design Lead",
    "team": "Leaders / Representatives",
    "domain": "MNA - 4th Year",
    "image": "/teams/design/SEYED MOHAMED .webp",
    "bio": "Designing dreams, leading teams, breaking the mundane.",
    "linkedin": "https://www.linkedin.com/in/seyed-mohamed-0a4172315"
  },
  {
    "id": 16,
    "name": "Yogavarthanee R",
    "position": "Executive Team",
    "team": "Executive Team",
    "domain": "Chemical Engineering - 3rd Year",
    "image": "/teams/executive/YOGAVARTHANEE.webp",
    "bio": "Driven by potential, powered by strong management skills, and always ready to turn ideas into action."
  },
  {
    "id": 17,
    "name": "Jai Ganesh S",
    "position": "Executive Team",
    "team": "Executive Team",
    "domain": "AI&DS - 3rd Year",
    "image": "/teams/2026/jai_ganesh_s.jpg",
    "bio": "Passionate about AI, innovation, and entrepreneurship. I enjoy turning ideas into impactful solutions and collaborating with like-minded people.",
    "linkedin": "https://www.linkedin.com/in/jai-ganesh0310",
    "github": "https://github.com/jaiganeshsathiyendiran-a11y"
  },
  {
    "id": 18,
    "name": "Hayagreeva L",
    "position": "Executive Team",
    "team": "Executive Team",
    "domain": "Biotech - 2nd Year",
    "image": "/teams/2026/hayagreeva_l.jpg",
    "bio": "A student who is always open to communication and is eager to know the essence of entrepreneurship while travelling with like-minded peers",
    "linkedin": "https://www.linkedin.com/in/hayagreeva-l-95a459382"
  },
  {
    "id": 19,
    "name": "Prithish A S",
    "position": "Executive Team",
    "team": "Executive Team",
    "domain": "CSE - 2nd Year",
    "image": "/teams/2026/prithish_a_s.jpg",
    "bio": "here for the plot"
  },
  {
    "id": 20,
    "name": "Aravindar APS",
    "position": "Marketing Team Member",
    "team": "Marketing Team",
    "domain": "Mechanical - 2nd Year",
    "image": "/teams/2026/aravindar_aps.jpg",
    "bio": "Seize the day"
  },
  {
    "id": 21,
    "name": "TJ Saattviki",
    "position": "Marketing Team Member",
    "team": "Marketing Team",
    "domain": "ECE - 2nd Year",
    "image": "/teams/2026/tj_saattviki.jpg",
    "bio": "Just a little chaos, a lot of dreams, and a story still unfolding...."
  },
  {
    "id": 22,
    "name": "Shivani shri R D",
    "position": "Marketing Team Member",
    "team": "Marketing Team",
    "domain": "EEE - 2nd Year",
    "image": "/teams/2026/shivani_shri_r_d.jpg",
    "bio": "I�m an innovative and curious learner passionate about entrepreneurship, problem-solving, leadership, and transforming ideas into impactful real-world solutions.",
    "linkedin": "https://www.linkedin.com/in/shivani-shri-r-d-34636b397",
    "github": "https://github.com/shivanishri2110-maker"
  },
  {
    "id": 23,
    "name": "Vaishali",
    "position": "Design Team Member",
    "team": "Design Team",
    "domain": "CSE - 3rd Year",
    "image": "/teams/design/VAISHALI .webp",
    "linkedin": "https://www.linkedin.com/in/vaishali-v"
  },
  {
    "id": 24,
    "name": "Yogendra SK",
    "position": "Design Team Member",
    "team": "Design Team",
    "domain": "Mechanical - 3rd Year",
    "image": "/teams/design/YOGENDRA.webp",
    "linkedin": "https://www.linkedin.com/in/yogendra-b19ba032b"
  },
  {
    "id": 25,
    "name": "Rithik Nishal.L",
    "position": "Design Team Member",
    "team": "Design Team",
    "domain": "CSE - 2nd Year",
    "image": "/teams/2026/rithik_nishal_l.jpg",
    "bio": "Juggling deadlines, designs, and college life�with a little creativity in between.\n Always learning, always creating.",
    "github": "https://github.com/Rithik-NL03"
  },
  {
    "id": 26,
    "name": "Akshaya Venkatesh",
    "position": "Design Team Member",
    "team": "Design Team",
    "domain": "EEE - 2nd Year",
    "image": "/teams/2026/akshaya_venkatesh.jpg",
    "bio": "just a girl who started using canva during lock down for youtube videos"
  },
  {
    "id": 27,
    "name": "Vippin Antony",
    "position": "Creative Team Member",
    "team": "Creative Team",
    "domain": "CSE - 2nd Year",
    "image": ""
  },
  {
    "id": 28,
    "name": "Naren Annamalai A",
    "position": "Creative Team Member",
    "team": "Creative Team",
    "domain": "IT - 2nd Year",
    "image": ""
  },
  {
    "id": 29,
    "name": "Harshini Devi U",
    "position": "Creative Team Member",
    "team": "Creative Team",
    "domain": "ECE - 2nd Year",
    "image": "/teams/2026/harshini_devi_u.jpg",
    "bio": "Video editor, artist, and full-time side quest collector�trying random creative things until one of them turns into a business."
  },
  {
    "id": 30,
    "name": "Chalakesh S K",
    "position": "Community Manager",
    "team": "Community Team",
    "domain": "Chemical Engineering - 3rd Year",
    "image": "/teams/community/CHALAKESH.webp",
    "bio": "A core introvert stepping out of my shell to connect people, build communities, and bridge the gap between our audience and entrepreneurship."
  },
  {
    "id": 31,
    "name": "Kamalina K",
    "position": "Community Manager",
    "team": "Community Team",
    "domain": "ECE - 3rd Year",
    "image": "/teams/community/KAMALINA.webp",
    "bio": "Need Money",
    "linkedin": "https://www.linkedin.com/in/kamalina-k-ece-14a39435a"
  },
  {
    "id": 32,
    "name": "Kaviyarasan S",
    "position": "Community Manager",
    "team": "Community Team",
    "domain": "EEE - 3rd Year",
    "image": "/teams/2026/kaviyarasan_s.jpg",
    "bio": "I'm dumb"
  },
  {
    "id": 33,
    "name": "Madhushalani S",
    "position": "Community Manager",
    "team": "Community Team",
    "domain": "Biotech - 2nd Year",
    "image": "/teams/2026/madhushalani_s.jpg",
    "bio": "A little creative, a little chaotic, and always curious � figuring things out, trying new things, and occasionally turning them into something meaningful."
  },
  {
    "id": 34,
    "name": "ES Nishitha",
    "position": "Community Manager",
    "team": "Community Team",
    "domain": "ECE - 2nd Year",
    "image": "/teams/2026/es_nishitha.jpg",
    "linkedin": "https://www.linkedin.com/in/nishitha-es-2887b2377"
  },
  {
    "id": 35,
    "name": "Jefina Giftlin J",
    "position": "Content Team Member",
    "team": "Content Team",
    "domain": "Biotech - 3rd Year",
    "image": "/teams/2026/jefina_giftlin_j.jpg",
    "bio": "A curious mind, a creative side, and plenty of ideas � with a little bit of chaos along the way.",
    "linkedin": "https://www.linkedin.com/in/jefina-giftlin-j-b1b696326",
    "github": "https://github.com/Jefina08"
  },
  {
    "id": 36,
    "name": "Harshitha H",
    "position": "Content Team Member",
    "team": "Content Team",
    "domain": "Biotech - 2nd Year",
    "image": "/teams/2026/harshitha_h.jpg",
    "bio": "A cheerful student and a graceful classical dancer who loves to meet new people, try new things and make every experience a memorable one"
  },
  {
    "id": 37,
    "name": "Perumal P",
    "position": "Tech Team Member",
    "team": "Tech Team",
    "domain": "ECE - 2nd Year",
    "image": "/teams/2026/perumal_p.jpg",
    "bio": "Dream big, start small, and keep trying. Every idea has the power to become something meaningful.",
    "linkedin": "https://tinyurl.com/3vvmdd22"
  },
  {
    "id": 38,
    "name": "Pranav Karthick V",
    "position": "Tech Team Member",
    "team": "Tech Team",
    "domain": "ECE - 2nd Year",
    "image": "/teams/2026/pranav_karthick_v.jpg",
    "bio": "�Think less about fitting into the world, and more about what you can add to it.�That�s the mindset I bring when I build, experiment, and explore entrepreneurship.",
    "linkedin": "https://www.linkedin.com/in/pranav-karthick-v-632680371",
    "github": "https://github.com/PranavKarthickV"
  },
  {
    "id": 39,
    "name": "Antony Abishek A",
    "position": "Tech Mentor",
    "team": "Tech Mentor",
    "domain": "CSE - 4th Year",
    "image": "/teams/2026/antony_abishek_a.jpg",
    "bio": "Passionate about technology and always eager to learn, build, and help others grow."
  }
]

const facultyMembers: TeamMember[] = [
  {
    id: 101,
    name: "Dr. S. Ilaiyavel",
    position: "Manager & Professor",
    team: "Faculty Advisory Council",
    domain: "Department of Mechanical Engineering",
    image: "/teams/managers/ilayavel.webp",
    bio: "Providing administrative guidance, institutional backing, and mentorship to E-Cell SVCE.",
    imagePosition: "center 20%",
  },
  {
    id: 102,
    name: "Mr. V. Senthill Velan",
    position: "Manager & Assistant Professor",
    team: "Faculty Advisory Council",
    domain: "Department of Mechanical Engineering",
    image: "/teams/managers/sentilvelan.webp",
    bio: "Guiding student entrepreneurship initiatives, incubation programs, and project facilitation at SVCE.",
    imagePosition: "center 15%",
  },
]

const groupedTeamMembers = teamMembers.reduce(
  (acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = []
    }
    acc[member.team].push(member)
    return acc
  },
  {} as Record<string, TeamMember[]>,
)

const boardMembers = teamMembers.filter(
  (member) => member.team === "Board Members / Leadership",
)

const leadMembers = teamMembers.filter(
  (member) => member.team === "Leaders / Representatives",
)

const execMembers = teamMembers.filter(
  (member) => member.team === "Executive Team",
)

const techMentorMembers = teamMembers.filter(
  (member) => member.team === "Tech Mentor",
)

const departmentalGroups = [
  "Marketing Team",
  "Design Team",
  "Creative Team",
  "Community Team",
  "Content Team",
  "Tech Team",
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleFlip()
    }
  }

  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative w-full h-[400px] [perspective:1000px] select-none"
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isFlipped}
        aria-label={`View details for ${member.name}`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* CARD FRONT */}
        <div className="absolute inset-0 h-full w-full rounded-3xl border border-white/10 bg-[#090a10] overflow-hidden shadow-2xl [backface-visibility:hidden] flex flex-col justify-between group-hover:border-indigo-500/40 transition-colors">
          <div className="relative w-full h-[74%] overflow-hidden bg-[#0d1117]">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={
                  member.imagePosition || member.imageFit
                    ? {
                        ...(member.imagePosition && { objectPosition: member.imagePosition }),
                        ...(member.imageFit && { objectFit: member.imageFit }),
                      }
                    : undefined
                }
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-indigo-500/10 text-2xl font-black text-indigo-300 tracking-wider">
                {initials}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-transparent opacity-80" />
            <div className="absolute top-3 right-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to Flip
            </div>
          </div>

          <div className="p-4 sm:p-5 text-center flex flex-col justify-center flex-grow">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors line-clamp-1">
              {member.name}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400 mt-1 line-clamp-1">
              {member.position}
            </p>
          </div>
        </div>

        {/* CARD BACK */}
        <div className="absolute inset-0 h-full w-full rounded-3xl border border-indigo-500/30 bg-[#090a10] p-6 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)] rounded-3xl"
          />

          <div className="relative z-10 space-y-3 my-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
              {member.team}
            </div>

            <div>
              <h3 className="text-xl font-black tracking-tight text-white">
                {member.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400 mt-1">
                {member.position}
              </p>
            </div>

            {member.domain && (
              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  DEPARTMENT / YEAR
                </span>
                <p className="text-sm font-semibold text-slate-200">
                  {member.domain}
                </p>
              </div>
            )}

            {member.bio && (
              <p className="text-xs italic text-slate-300 line-clamp-4 px-2 pt-1">
                &ldquo;{member.bio}&rdquo;
              </p>
            )}
          </div>

          {/* Social Links Footer */}
          {(member.linkedin || member.github) && (
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-center gap-4">
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`LinkedIn for ${member.name}`}
                  className="text-slate-400 hover:text-indigo-300 transition-colors p-1.5 rounded-full hover:bg-white/5"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              )}
              {member.github && (
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`GitHub for ${member.name}`}
                  className="text-slate-400 hover:text-indigo-300 transition-colors p-1.5 rounded-full hover:bg-white/5"
                >
                  <Github className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function TeamSection({
  title,
  eyebrow,
  members,
  featured = false,
}: {
  title: string
  eyebrow?: string
  members: TeamMember[]
  featured?: boolean
}) {
  if (!members.length) return null

  return (
    <section className="mb-20">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
              {eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            {title}
          </h2>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {members.length} {members.length === 1 ? "Member" : "Members"}
        </span>
      </div>

      <div
        className={`grid gap-6 sm:grid-cols-2 ${
          featured
            ? members.length === 2
              ? "lg:grid-cols-2 max-w-3xl"
              : "lg:grid-cols-3"
            : "lg:grid-cols-4"
        }`}
      >
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

export default function TeamPage() {
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
            TEAM / E-CELL SVCE
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            The People Behind E-Cell
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet the students and leaders behind E-cell SVCE, working together to make entrepreneurial ideas actionable.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Team Directory ────────────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          {/* 0. Faculty Advisory Council */}
          <TeamSection
            eyebrow="01 / ADVISORY COUNCIL"
            title="Faculty Advisory Council"
            members={facultyMembers}
            featured
          />

          {/* 1. Board Members / Leadership */}
          <TeamSection
            eyebrow="02 / EXECUTIVE BOARD"
            title="Board Members / Leadership"
            members={boardMembers}
            featured
          />

          {/* 2. Leaders / Representatives */}
          <TeamSection
            eyebrow="03 / LEADERSHIP"
            title="Leaders / Representatives"
            members={leadMembers}
            featured
          />

          {/* 3. Executive Team */}
          <TeamSection
            eyebrow="04 / EXECUTIVE TEAM"
            title="Executive Team"
            members={execMembers}
            featured
          />

          {/* Ecosystem Callout Banner */}
          <div className="my-20 rounded-3xl border border-indigo-500/30 bg-[#090a10] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]"
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                ONE ECOSYSTEM. MANY ROLES.
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                From technology and events to marketing and partnerships, our team works together to turn entrepreneurial ideas into action.
              </h3>
            </div>
          </div>

          {/* Departmental Teams (Marketing, Design, Creative, Community, Content, Tech) */}
          {departmentalGroups.map((groupName, idx) => {
            const members = groupedTeamMembers[groupName] ?? []
            return (
              <TeamSection
                key={groupName}
                eyebrow={`0${idx + 5} / DEPARTMENT`}
                title={groupName}
                members={members}
              />
            )
          })}

          {/* Tech Mentor */}
          <TeamSection
            eyebrow="11 / ADVISORY & MENTORSHIP"
            title="Tech Mentor"
            members={techMentorMembers}
            featured
          />
        </div>
      </div>
    </div>
  )
}
