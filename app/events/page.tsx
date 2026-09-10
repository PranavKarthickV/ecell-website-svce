"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, Users } from "lucide-react"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

type Participant = {
  id: number
  name: string
  studentClass: string
  idea?: string
  description?: string
}

type Event = {
  id: number
  title: string
  category: string
  description: string
  date: string
  location: string
  participantsInfo: string
  image: string
  color: "primary" | "secondary" | "accent"
  participants?: Participant[]
  time?: string
  featured?: boolean
}

const colorVariants = {
  primary: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  secondary: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  accent: "bg-teal-500/10 text-teal-300 border-teal-500/30",
}

const events: Event[] = [
  {
    id: 26,
    title: "E-Cell Inauguration Ceremony 2024-2025",
    category: "Inauguration",
    description:
      "Official inauguration of SVCE E-Cell for AY 2024-2025 featuring keynote address by Mr. T. Vignesh (Associate Business Facilitating Officer, Bureau for facilitating MSME) and Guest of Honour Dr. T.J. Jeyaprabha. The event marked the beginning of a new chapter in fostering innovation and entrepreneurship at SVCE.",
    date: "October 29, 2024",
    location: "Function Hall, SVCE",
    participantsInfo: "E-Cell Members & Faculty",
    image: "/events/inguarartion.jpg",
    color: "primary",
  },
  {
    id: 25,
    title: "IITM Research Park Hack Day - Hardware Meetup",
    category: "Meetup",
    description:
      "Exclusive hardware enthusiasts meetup featuring speaker sessions, ideathon, and open discussions on hardware innovation. E-Cell members Subash Chandra Bose, Madhad Krishna, and Bala Pranav represented SVCE, gaining invaluable insights from startup founders and industry experts.",
    date: "October 2024",
    location: "IITM Research Park",
    participantsInfo: "SVCE E-Cell Representatives",
    image: "/events/researchpark.jpg",
    color: "accent",
  },
  {
    id: 24,
    title: "Calibrations 2024 - Pitch Wars",
    category: "Competition",
    description:
      "High-energy pitching competition where teams were assigned the same product but developed distinct marketing and business strategies. Teams presented their approaches persuasively, showcasing understanding of business models, target markets, and brand positioning with audience voting.",
    date: "September 2024",
    location: "SVCE",
    participantsInfo: "Multiple Teams",
    image: "/events/pitchwars.jpg",
    color: "secondary",
  },
  {
    id: 23,
    title: "Calibrations 2024 - Decode X",
    category: "Competition",
    description:
      "Multi-round competition testing creativity, pattern recognition, and quick decision-making skills through engaging puzzles, visual challenges, and logic-based tasks requiring adaptability and strategic thinking.",
    date: "September 2024",
    location: "SVCE",
    participantsInfo: "Multiple Participants",
    image: "/events/decodex.jpg",
    color: "accent",
  },
  {
    id: 22,
    title: "Women's Day Stalls/Bazaars",
    category: "Marketplace",
    description:
      "Exclusive marketplace supporting Women Empowerment Cell where young women entrepreneurs showcased and sold products including food, accessories, clothing, handmade crafts, Mehendi services, and interactive games, fostering female entrepreneurship.",
    date: "March 8, 2024",
    location: "SVCE Campus",
    participantsInfo: "Women Entrepreneurs",
    image: "/events/womenbazzar.jpg",
    color: "primary",
  },
  {
    id: 21,
    title: "Community Meetups",
    category: "Meetup",
    description:
      "Community Meetups created a recurring space for students to discuss ideas, explore entrepreneurship, receive mentorship, and connect with peers. Sessions covered idea generation, business models, funding, and marketing.",
    date: "Ongoing (Every Thursday)",
    location: "SVCE Campus",
    participantsInfo: "Open to all students",
    image: "/events/communitymeetup.jpg",
    color: "primary",
  },
  {
    id: 20,
    title: "IIT Madras E-Summit 2025 & E-Auction",
    category: "Summit",
    description:
      "SVCE E-Cell members participated in the E-Auction, simulating real-world investment and startup valuation scenarios, testing financial decision-making, negotiation, and strategic thinking.",
    date: "March 1, 2025",
    location: "IIT Madras",
    participantsInfo: "SVCE E-Cell Team",
    image: "/events/iit_2025.jpg",
    color: "primary",
  },
  {
    id: 19,
    title: "MSME Idea Hackathon 4.0",
    category: "Hackathon",
    description:
      "A high-energy hackathon where students pitched innovative solutions to real-world challenges. 18 proposals from SVCE were forwarded for incubation.",
    date: "October 29, 2024",
    location: "Library Conference Hall, SVCE",
    participantsInfo: "18 Proposals Selected",
    image: "/events/msme.JPG",
    color: "secondary",
  },
  {
    id: 18,
    title: "MoU with E-Cell MANIT Bhopal",
    category: "Collaboration",
    description:
      "A collaboration to promote joint events and mutual support. SVCE E-Cell was named the official outreach partner for MANIT Bhopal's E-Summit 2025.",
    date: "October 14, 2024",
    location: "SVCE & MANIT Bhopal",
    participantsInfo: "Official Partnership",
    image: "/events/bhopal.jpg",
    color: "accent",
  },
  {
    id: 17,
    title: "IIT Madras EDD Cohort – Growth Track",
    category: "Program",
    description:
      "A collaborative entrepreneurship program with IIT Madras, offering mentorship, startup ideation, market validation, and exposure to funding mechanisms.",
    date: "April 1, 2024",
    location: "IIT Madras & SVCE",
    participantsInfo: "2024-2025 Cohort",
    image: "/events/iitmadras.jpg",
    color: "primary",
  },
  {
    id: 16,
    title: "Entrepreneurship Pitching League (EPL)",
    category: "Competition",
    description:
      "A pitching competition where students created innovative products by blending multiple fields such as education, automobiles, waste management, and electronics.",
    date: "March 18, 2024",
    location: "SVCE (Highways 2024)",
    participantsInfo: "Winners Announced",
    image: "/events/epl.jpg",
    color: "secondary",
    participants: [
      { id: 1, name: "Johin Gill & Kavi Raj E", studentClass: "AE, 2nd Year" },
      { id: 2, name: "N. Jegatheesh & Giridharan S N", studentClass: "ECE A, 1st Year" },
    ],
  },
  {
    id: 15,
    title: "Meme Marketing Competition",
    category: "Competition",
    description: "A creative challenge where students designed witty and impactful marketing memes blending humor with branding.",
    date: "March 17, 2024",
    location: "SVCE (Highways 2024)",
    participantsInfo: "Winners Announced",
    image: "/events/mememarketing.jpg",
    color: "accent",
    participants: [
      { id: 1, name: "Infant Rohith A", studentClass: "IT A, 1st Year" },
      { id: 2, name: "Nihil Rayen P", studentClass: "AIDS, 1st Year" },
    ],
  },
  {
    id: 14,
    title: "Pitch Palooza – Women's Day Competition",
    category: "Competition",
    description:
      "A business pitch competition for women entrepreneurs to showcase innovative ideas and receive mentorship from judges.",
    date: "March 11, 2024",
    location: "Library Seminar Hall, SVCE",
    participantsInfo: "Multiple Teams",
    image: "/events/pitch paloza.jpg",
    color: "primary",
  },
  {
    id: 13,
    title: "Pitch Perfect Workshop",
    category: "Workshop",
    description:
      "An interactive workshop on effective pitching, persuasive communication, and storytelling, led by Gurunathraj E (Founder of Metal Protection in EPIC).",
    date: "February 29, 2024",
    location: "Online (E-Lobby Webinar Series)",
    participantsInfo: "Open to all students",
    image: "/events/ptchperfect.jpg",
    color: "secondary",
  },
  {
    id: 12,
    title: "From Rookie to All Star - LinkedIn Profile Building",
    category: "Webinar",
    description:
      "The 1st E-Lobby Webinar Series session focused on LinkedIn Profile Building, led by Subash (E-Cell Executive Member). Participants learned professional networking, personal branding, profile optimization, and strategies for career growth through LinkedIn.",
    date: "February 5, 2024",
    location: "Online (E-Lobby Webinar Series)",
    participantsInfo: "Open to all students",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
    color: "accent",
  },
  {
    id: 1,
    title: "Entrepreneurship Workshop",
    category: "Workshop",
    description:
      "A comprehensive workshop on entrepreneurship basics, business model canvas, and pitching techniques for aspiring entrepreneurs.",
    date: "March 15, 2023",
    location: "Main Auditorium, SVCE",
    participantsInfo: "120 Participants",
    image: "/events/enterpenurworkshop.jpg",
    color: "primary",
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    category: "Competition",
    description:
      "Students presented their innovative startup ideas to a panel of judges from the industry. Cash prizes and mentorship opportunities were awarded.",
    date: "February 28, 2023",
    location: "Seminar Hall, SVCE",
    participantsInfo: "50 Teams",
    image: "/events/startup.jpg",
    color: "secondary",
  },
  {
    id: 3,
    title: "Industry Expert Talk Series",
    category: "Seminar",
    description:
      "A series of talks by industry experts sharing their entrepreneurial journey, challenges faced, and insights on building successful startups.",
    date: "January 10, 2023",
    location: "Virtual Event",
    participantsInfo: "200+ Attendees",
    image: "/events/industrytalk.jpg",
    color: "accent",
  },
  {
    id: 4,
    title: "Hackathon 2023",
    category: "Competition",
    description:
      "A 24-hour coding marathon where participants worked on innovative solutions to real-world problems. Prizes were awarded for the best solutions.",
    date: "December 5, 2022",
    location: "Computer Science Block, SVCE",
    participantsInfo: "30 Teams",
    image: "/events/hackathon 2023.jpg",
    color: "primary",
    participants: [
      {
        id: 1,
        name: "Team Innovate",
        studentClass: "CSE, 3rd Year",
        idea: "AI-Powered Waste Sorting",
        description: "A system to automate recycling processes.",
      },
      {
        id: 2,
        name: "Code Wizards",
        studentClass: "IT, 2nd Year",
        idea: "Health Monitoring Wearable",
        description: "A low-cost band for tracking vital signs.",
      },
      {
        id: 3,
        name: "Future Coders",
        studentClass: "ECE, 4th Year",
        idea: "Smart Traffic Management",
        description: "IoT solution to reduce city congestion.",
      },
      {
        id: 4,
        name: "Data Dynamos",
        studentClass: "CSE, 3rd Year",
        idea: "Personalized Learning Platform",
        description: "An adaptive platform for K-12 students.",
      },
    ],
  },
  {
    id: 5,
    title: "Business Plan Workshop",
    category: "Workshop",
    description:
      "An interactive workshop on creating effective business plans, financial projections, and market analysis for startups.",
    date: "November 20, 2022",
    location: "MBA Department, SVCE",
    participantsInfo: "80 Participants",
    image: "/events/businnessplan.jpg",
    color: "secondary",
  },
  {
    id: 6,
    title: "E-Summit 2022",
    category: "Conference",
    description:
      "Annual entrepreneurship summit featuring keynote speeches, panel discussions, workshops, and networking opportunities with industry leaders.",
    date: "October 15, 2022",
    location: "SVCE Campus",
    participantsInfo: "500+ Attendees",
    image: "/events/esummit.jpg",
    color: "accent",
  },
]

const recentEvents: Event[] = [
  {
    id: 1001,
    title: "Startup Surge'25",
    category: "Startup Pitching",
    description: "Startup Surge'25 brought students into a startup pitching environment where ideas were presented before industry judges. The event focused on pitching, mentorship, feedback, incubation opportunities, and pathways for scaling promising ideas.",
    date: "9 April 2025",
    time: "9:00 AM – 3:00 PM",
    location: "Function Hall",
    participantsInfo: "Arvind A R, Ashok Leyland · Yogeshwara Govindaraj, Zoho Commerce · Nithin Alexander, Entrepreneurs of Madras",
    image: "/events/startup-surge-25-event-collage.png",
    color: "primary",
    featured: true,
  },
  {
    id: 1002,
    title: "Highways 2025 · Roast Tank",
    category: "Entrepreneurship • Strategy • Competition",
    description: "A reverse Shark Tank-style challenge where participants explored absurd ideas, creative pitching, and unconventional business thinking.",
    date: "24 April 2025",
    time: "1:00 PM – 4:00 PM",
    location: "Video Hall",
    participantsInfo: "Highways 2025",
    image: "/events/highways-2025-collage.png",
    color: "secondary",
    featured: true,
  },
  {
    id: 1003,
    title: "Highways 2025 · Monopoly Madness",
    category: "Entrepreneurship • Strategy • Competition",
    description: "A strategy-driven challenge focused on negotiation, financial planning, and decision-making.",
    date: "25 April 2025",
    time: "1:00 PM – 4:00 PM",
    location: "EG Hall",
    participantsInfo: "Highways 2025",
    image: "/events/highways-2025-collage.png",
    color: "secondary",
  },
  {
    id: 1004,
    title: "Highways 2025 · EPL 2025",
    category: "Entrepreneurship • Strategy • Competition",
    description: "A three-round pitching challenge designed to test participants' ability to develop and communicate business ideas.",
    date: "26 April 2025",
    time: "9:30 AM – 12:30 PM",
    location: "Biotech Seminar Hall",
    participantsInfo: "Highways 2025",
    image: "/events/highways-2025-collage.png",
    color: "secondary",
  },
  {
    id: 1005,
    title: "Highways 2025 · Opinion Buzz",
    category: "Entrepreneurship • Strategy • Competition",
    description: "A campus engagement activity built around spontaneous questions, opinions, and quick thinking.",
    date: "",
    location: "SVCE Campus",
    participantsInfo: "Highways 2025",
    image: "/events/highways-2025-collage.png",
    color: "secondary",
  },
  {
    id: 1006,
    title: "MSME Idea Hackathon 5.0",
    category: "Hackathon • Innovation • Entrepreneurship",
    description: "MSME Idea Hackathon 5.0 encouraged students to develop innovative solutions around real-world challenges, connecting entrepreneurship with technology, sustainability, and national innovation priorities.",
    date: "18 August 2025",
    time: "9:30 AM – 3:30 PM",
    location: "Library Conference Hall & Seminar Hall",
    participantsInfo: "E-Cell SVCE + Ministry of MSME, Government of India",
    image: "/events/msme-idea-hackathon-5.png",
    color: "accent",
    featured: true,
  },
  {
    id: 1007,
    title: "Startify 3.0",
    category: "Startup Ecosystem • Entrepreneurship",
    description: "Startify 3.0 introduced students to the wider startup ecosystem through initiatives and opportunities connected with CED Anna University, including prototyping, pitching, entrepreneurship, and funding opportunities.",
    date: "Academic Year 2025–26",
    location: "Anna University",
    participantsInfo: "Startup Café Prototyping Hackathon · Pitch X · Startup Mughavari · Guru's Pitch · Scholar's Spin-Off",
    image: "/events/startify-3-poster-1.png",
    color: "primary",
  },
  {
    id: 1008,
    title: "SIP 2025",
    category: "Student Induction • Entrepreneurship",
    description: "SIP 2025 introduced students to the E-Cell entrepreneurial ecosystem and its opportunities for learning, experimentation, and growth.",
    date: "18 September 2025",
    location: "SVCE",
    participantsInfo: "E-Cell ecosystem · Events · Mentorship · Incubation · Industry collaborations · Hackathons · Pitching · Workshops · Community meetups · Builders Guild",
    image: "/events/sip-2025.png",
    color: "secondary",
  },
  {
    id: 1009,
    title: "Calibration'25 · E-Olympics",
    category: "Entrepreneurship • Strategy • Competition",
    description: "A business challenge focused on problem solving, strategic bidding, and creative business tasks.",
    date: "19 September 2025",
    time: "10:30 AM – 2:00 PM",
    location: "Biotech Seminar Hall",
    participantsInfo: "Calibration'25",
    image: "/events/calibration-25-collage.png",
    color: "primary",
  },
  {
    id: 1010,
    title: "Calibration'25 · Startup Showdown",
    category: "Entrepreneurship • Strategy • Competition",
    description: "A startup pitching challenge where participants presented and defended their ideas.",
    date: "20 September 2025",
    time: "10:45 AM – 1:45 PM",
    location: "CB 523–524",
    participantsInfo: "Calibration'25",
    image: "/events/calibration-25-collage.png",
    color: "secondary",
  },
  {
    id: 1011,
    title: "Technology Transfer Workshop",
    category: "Technology Transfer • IP • Commercialization",
    description: "A focused workshop exploring how technical innovations can move beyond prototypes toward technology transfer, intellectual property, and commercialization.",
    date: "23–24 September 2025",
    location: "Library Seminar Hall",
    participantsInfo: "Ideathon / Hackathon participants · Sarabesh Sriram, Founder & Partner, Stacia Corp",
    image: "/events/technology-transfer-workshop-collage.png",
    color: "accent",
  },
  {
    id: 1012,
    title: "Recruitment of E-Cell Core Members",
    category: "Community • Leadership • Recruitment",
    description: "The E-Cell core team recruitment process brought students into leadership and execution roles across the entrepreneurship ecosystem.",
    date: "2 October 2025",
    time: "8:30 AM – 4:30 PM",
    location: "Google Meet",
    participantsInfo: "25 new members · Marketing · Content · Social Media · Design · Developers · Executives",
    image: "/events/social-media-outreach.png",
    color: "primary",
  },
  {
    id: 1013,
    title: "E-Cell Inauguration Ceremony 2025–2026",
    category: "Inauguration • Guest Lecture • Entrepreneurship",
    description: "The E-Cell Inauguration Ceremony 2025–2026 marked the beginning of a new academic cycle of entrepreneurship activities and featured a guest lecture on the journey of building a startup.",
    date: "6 October 2025",
    time: "9:30 AM – 2:00 PM",
    location: "Library Seminar Hall",
    participantsInfo: "Ajay Prasath G.A., Founder & CEO, Loopmans Automation",
    image: "/events/inauguration-2025-26-group.png",
    color: "accent",
  },
  {
    id: 1014,
    title: "Builders Guild Website Launch",
    category: "Digital Platform • Mentorship • Entrepreneurship",
    description: "The Builders Guild website was launched as a structured digital space for practical mentorship, expert guidance, networking, and support throughout the entrepreneurial journey.",
    date: "2025–26",
    location: "SVCE Digital Platform",
    participantsInfo: "Ideation · Validation · Development · Scaling · Mentorship · Networking",
    image: "/events/builders-guild-website-launch.png",
    color: "secondary",
  },
  {
    id: 1015,
    title: "E-Cell Website Launch",
    category: "Digital Platform • Community",
    description: "The revamped E-Cell website was launched as a digital hub bringing together the organization's vision, mission, achievements, projects, events, and entrepreneurial ecosystem.",
    date: "2025–26",
    location: "Official E-Cell SVCE Website",
    participantsInfo: "Digital platform",
    image: "/events/ecell-website-launch.png",
    color: "primary",
  },
  {
    id: 1016,
    title: "Social Media Presence & Outreach Portfolio",
    category: "Community • Digital Outreach",
    description: "An outreach initiative focused on strengthening the digital presence of E-Cell and extending its entrepreneurship ecosystem, activities, and opportunities to a wider student community.",
    date: "2025–26",
    location: "Digital Outreach",
    participantsInfo: "E-Cell outreach portfolio",
    image: "/events/social-media-outreach.png",
    color: "secondary",
  },
]

const retainedRecentEvents = [...recentEvents, ...events.filter((event) => [20, 21].includes(event.id))]
const historicalYears = ["2024", "2023", "2022"]

const academicYears = [
  { id: "2025-26", label: "2025–26" },
  { id: "2024-25", label: "2024–25" },
  { id: "2023-24", label: "2023–24" },
  { id: "archive", label: "Earlier Archive" },
]

function eventYear(event: Event) {
  const match = event.date.match(/20\d{2}/g)
  return match?.[match.length - 1] ?? "Earlier archive"
}

export default function EventsPage() {
  const [openEventId, setOpenEventId] = useState<number | null>(null)
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("2025-26")

  const handleToggleParticipants = (eventId: number) => {
    setOpenEventId((prevId) => (prevId === eventId ? null : eventId))
  }

  const eventsForYear = (year: string) => {
    if (year === "2025-26") return retainedRecentEvents
    if (year === "2024-25") return events.filter((event) => eventYear(event) === "2024")
    if (year === "2023-24") return events.filter((event) => eventYear(event) === "2023")
    return events.filter((event) => eventYear(event) === "2022")
  }

  const renderEventCard = (event: Event) => {
    const isFeatured = event.featured

    return (
      <motion.article
        key={event.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] shadow-2xl transition-all duration-500 hover:border-indigo-500/40 hover:-translate-y-1 ${
          isFeatured ? "lg:col-span-2" : "lg:col-span-1"
        }`}
      >
        <div>
          {/* Image Container */}
          <div className={`relative overflow-hidden ${isFeatured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"}`}>
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-[#090a10]/30 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md ${colorVariants[event.color]}`}>
                {event.category}
              </span>
              {isFeatured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md">
                  <Sparkles className="h-3 w-3" /> Featured Milestone
                </span>
              )}
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {eventYear(event)}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span className="text-[10px] font-medium text-indigo-400 truncate max-w-[200px]">
                {event.participantsInfo}
              </span>
            </div>

            <h3 className={`font-black tracking-tight text-white group-hover:text-indigo-200 transition-colors ${isFeatured ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"}`}>
              {event.title}
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-slate-300 font-normal">
              {event.description}
            </p>
          </div>
        </div>

        {/* Card Footer with Metadata & Actions */}
        <div className="p-6 md:p-8 pt-0 space-y-4">
          <div className="flex flex-wrap gap-y-2 gap-x-4 border-t border-white/10 pt-4 text-xs text-slate-400">
            {event.date && (
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Calendar className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                {event.date}
              </span>
            )}
            {event.time && (
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Clock className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                {event.time}
              </span>
            )}
            {event.location && (
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                {event.location}
              </span>
            )}
          </div>

          {/* Participants Table Dropdown if available */}
          {event.participants && event.participants.length > 0 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleToggleParticipants(event.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300 hover:bg-indigo-500/20 transition-colors"
              >
                <Users className="h-3.5 w-3.5" />
                {openEventId === event.id ? "Hide Participants" : "View Participants"}
              </button>

              {openEventId === event.id && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-1">
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-white/10 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Name / Team</th>
                        <th className="px-4 py-3">Class / Dept</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {event.participants.map((participant, index) => (
                        <tr key={participant.id} className="hover:bg-white/[0.02]">
                          <td className="px-4 py-3 text-indigo-400 font-mono font-bold">{index + 1}</td>
                          <td className="px-4 py-3 font-semibold text-slate-200">{participant.name}</td>
                          <td className="px-4 py-3 text-slate-400">{participant.studentClass}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.article>
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
            EVENTS / E-CELL SVCE
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            Events &amp; Experiences
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From startup pitches and innovation challenges to workshops, meetups and industry interactions, E-Cell SVCE creates experiences that turn ideas into action.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Events Archive Section ─────────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header & Filter Controls */}
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                BROWSE ARCHIVE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Academic-Year Events
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Academic years">
              {academicYears.map((year) => (
                <button
                  key={year.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedAcademicYear === year.id}
                  onClick={() => setSelectedAcademicYear(year.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    selectedAcademicYear === year.id
                      ? "border border-indigo-500/40 bg-indigo-500/20 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                      : "border border-white/10 bg-[#090a10] text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {year.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Academic Year Events Grid */}
          <section aria-labelledby="recent-heading" className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">
                Showing:
              </span>
              <span className="text-xl font-black text-white">
                {academicYears.find((year) => year.id === selectedAcademicYear)?.label}
              </span>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {eventsForYear(selectedAcademicYear).map((event) => renderEventCard(event))}
            </div>
          </section>

          {/* Historical Years Archive (When 2025-26 is selected) */}
          {selectedAcademicYear === "2025-26" && (
            <section aria-labelledby="historical-heading" className="mt-28 space-y-16">
              <div className="border-t border-white/10 pt-16">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  HISTORICAL REPOSITORY
                </div>
                <h2 id="historical-heading" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                  Historical Archives
                </h2>
              </div>

              <div className="space-y-20">
                {historicalYears.map((year) => {
                  const yearEvents = events.filter((event) => eventYear(event) === year)
                  return (
                    <section key={year} aria-labelledby={`year-${year}`} className="space-y-8">
                      <div className="flex items-center gap-4">
                        <h3 id={`year-${year}`} className="text-2xl sm:text-3xl font-black text-white tracking-wider">
                          {year}
                        </h3>
                        <div className="h-px flex-grow bg-white/10" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                          {yearEvents.length} {yearEvents.length === 1 ? "Event" : "Events"}
                        </span>
                      </div>

                      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                        {yearEvents.map((event) => renderEventCard(event))}
                      </div>
                    </section>
                  )
                })}
              </div>
            </section>
          )}

          {/* Bottom Callout Section */}
          <section className="mt-28 relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#090a10] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)]"
            />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-300">
                JOIN THE COMMUNITY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Have an idea worth building?
              </h2>
              <p className="mx-auto mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Explore the E-Cell ecosystem, connect with the community and turn your next idea into action.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-600 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.02]"
                >
                  Explore the Ecosystem <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}