"use client"

import Image from "next/image"
import { useState, useMemo } from "react"
import { Building2, GraduationCap, Users } from "lucide-react"
import { motion } from "framer-motion"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

type Alumni = {
  id: number
  name: string
  position: string
  company: string
  period: string
  department?: string
  image?: string
  companyStarted?: string
  employees?: string
  turnover?: string
  companyBrief?: string
}

const alumni: Alumni[] = [
  { id: 1, name: "B Alagu Selvan", position: "CEO", company: "ChennaiBizz", period: "1988 – 1992", department: "CSE" },
  { id: 2, name: "T. V. Sivakumar", position: "CEO", company: "Ambalsoft InfoTech", period: "1988 – 1992", department: "CSE" },
  { id: 3, name: "Dr. Mallik Mahalingam", position: "Founder", company: "Springpath", period: "1987 - 1991", department: "CSE" },
  { id: 4, name: "Mr. Jigar Doshi", position: "Founder", company: "Cheeni Labs", period: "1989 – 1993", department: "CSE" },
  { id: 5, name: "S. Prashanth", position: "Founder", company: "Akmin Technologies", period: "1990 – 1994", department: "CSE" },
  { id: 6, name: "Mr. Jonathan Siddharth", position: "CEO", company: "Turing.com", period: "2001 – 2005", department: "CSE" },
  { id: 7, name: "G. Srikrishnan", position: "CEO", company: "Rocketlane", period: "2001 -2005", department: "CSE" },
  { id: 8, name: "T. Srinivasan", position: "Director", company: "Glosys Technology", period: "2002 -2004", department: "CSE" },
  { id: 9, name: "Dr. Doreen Hephzibah Miriam", position: "Director", company: "CIRF", period: "2004 -2006", department: "CSE" },
  { id: 10, name: "Mr. Gautham Shankar", position: "Co-Founder", company: "SmokyBeaker Labs", period: "2008 –2012", department: "CSE" },
  { id: 11, name: "Mr. Praveen Sekar", position: "Vice President", company: "Torus Innovations", period: "2009 – 2013", department: "CSE" },
  { id: 12, name: "Ms. Shwetha Lakshmanan", position: "Founder", company: "Stitch & Turn", period: "2010 - 2014", department: "CSE" },
  { id: 13, name: "Mr. Premdas VGP", position: "CEO", company: "VGP Universal Kingdom", period: "2003-2007", department: "EEE" },
  { id: 14, name: "Mr.Karunakaran", position: "CEO", company: "Prodigy Group of Companies", period: "1987-1991", department: "ECE" },
  { id: 15, name: "Mr.Arun Bhikshesvaran", position: "CEO", company: "Radisys Corporation", period: "1987-1991", department: "ECE" },
  { id: 16, name: "Mr.Pravin Shekar", position: "Interim CEO", company: "ESOMAR", period: "1992-1996", department: "ECE" },
  { id: 17, name: "Mr.Udeep.B", position: "CEO", company: "Mayajaal Entertainment Ltd", period: "2010-2014", department: "ECE" },
  { id: 18, name: "Mr.Ramanathan Srinivasan", position: "Director", company: "Trontion E Automotive Ltd", period: "1991-1995", department: "ECE" },
  { id: 19, name: "Ms.Sowmya Mahadevan", position: "COO", company: "Exeter Premedia Services", period: "1995-1999", department: "ECE" },
  { id: 20, name: "Mr.Pradeep A", position: "MD", company: "Sekaran Foundations", period: "2012-2016", department: "CVE" },
  { id: 21, name: "Mr.Moorthy Prakash", position: "Founder", company: "Shree Narayana Environ", period: "1991-1995", department: "ECE" },
  { id: 22, name: "Mr.Satish Vijayan", position: "Founder", company: "Nexdha Fintech", period: "1988-1992", department: "ECE" },
  { id: 23, name: "Mr.A.S.Praveen Raj", position: "MD", company: "Blend Interiors", period: "2014-2018", department: "CVE" },
  { id: 24, name: "Mr.Vineeth Vijayaraghavan", position: "Director", company: "Solarillion Foundation", period: "1994-1998", department: "ECE" },
  { id: 25, name: "Ms.Manasa Pillai", position: "Director", company: "Shrine Velankanni School", period: "1992-1996", department: "ECE" },
  { id: 26, name: "Ms.Pavithra Srinivasan", position: "Co-founder", company: "Galvenize test prep", period: "1996-2000", department: "ECE" },
  { id: 27, name: "Mr.Siddharta Govindaraj", position: "Founder", company: "Silver Stripe Software", period: "1997-2001", department: "ECE" },
  { id: 28, name: "Ms.Asha Yoganandan", position: "Founder", company: "Asha Ink", period: "1997-2001", department: "ECE" },
  { id: 29, name: "Mr.Sriharsha C", position: "MD", company: "Sree Constructions", period: "2012-2016", department: "CVE" },
  { id: 30, name: "Mr.Ratan Vishwanath Subramaniyan", position: "Manager", company: "Fibertek Commn Ltd", period: "2009-2013", department: "ECE" },
  { id: 31, name: "Mr.Kishore I", position: "Proprietor", company: "IK Infratech Solutions", period: "2011-2015", department: "CVE" },
  { id: 32, name: "Mr.B Sudharsan", position: "Head - Business", company: "ABS Consults", period: "2015-2019", department: "CVE" },
  { id: 33, name: "Mr. Rajkumar. D", position: "MD", company: "Solo Paints Pvt Ltd", period: "2010-2014", department: "CHE" },
  { id: 34, name: "Mr.Vasanth Immanuel", position: "CEO", company: "FR8", period: "1999-2003", department: "CHE" },
  { id: 35, name: "Mr. Himakiran Anugula", position: "Director", company: "NFNV Pvt.Ltd", period: "1995-1999", department: "CHE" },
  { id: 36, name: "Mr.Varadharajan Pandian", position: "CEO", company: "Acelabs Pvt. Ltd", period: "1994-1999", department: "CHE" },
  { id: 37, name: "Mr. Thandava Moorthy S", position: "Founder", company: "United Techno Solutions", period: "1995-1999", department: "CHE" },
  { id: 38, name: "Mr. Mohamed Hussain K", position: "Co- Founder", company: "THE ALIEN", period: "2013-2017", department: "CHE" },
  { id: 39, name: "Mr.Kavin K", position: "Co- Founder", company: "THE ALIEN", period: "2013-2017", department: "CHE" },
  { id: 40, name: "Mr. Vignesh Ganesan", position: "Co-founder", company: "Press 9 Solutions", period: "1998-2002", department: "IT" },
  { id: 41, name: "Ms Pallavi Aravind Narasimhan", position: "Co-Founder & CEO", company: "IMPRZD", period: "1996-2000", department: "IT" },
  { id: 42, name: "Mr. Venu madhav Chennupati", position: "Founder", company: "Pegase Health Systems", period: "1996-2000", department: "IT" },
  { id: 43, name: "Mr. Praveen J", position: "Director", company: "Propeltree", period: "2004-2008", department: "IT" },
  { id: 44, name: "Ms. Malini S", position: "VP", company: "Tyche payment Solutions", period: "2008-2012", department: "IT" },
  { id: 45, name: "Mr. Saravanan Ramakrishnan", position: "Managing Director", company: "Kellywille Business Solutions Pvt Ltd", period: "2007-11", department: "IT" },
  { id: 46, name: "Dr.Ramya S Moorthy", position: "Founder & Director", company: "Nimaya Robotics", period: "2007-2011", department: "EEE" },
  { id: 47, name: "Akash Jain", position: "Founder & Chief Executive Office", company: "MuPhile Labs", period: "2014-2018", department: "EEE" },
  { id: 48, name: "Balaji Kulothungan", position: "Co-Founder & CEO", company: "Galore Networks Private Limited", period: "1994-1998", department: "EEE" },
  { id: 49, name: "Mr.ARAVINDANKARUPPIAH K", position: "Managing Director", company: "M. Karuppiah Sons", period: "2017-2021", department: "CVE" },
  { id: 50, name: "Mr.HARITH BHARADWAAJ G", position: "Managing Partner", company: "Sri Chakra Builders & Consultants", period: "2017-2021", department: "CVE" },
  { id: 51, name: "Mr.SHARAFATH ALI J", position: "Proprietor", company: "J S Construction Pvt. Ltd", period: "2016-2020", department: "CVE" },
  { id: 52, name: "Ms.HARIPRIYAA A", position: "Managing Director", company: "Kans Builders Private Limited", period: "2015-2019", department: "CVE" },
  { id: 53, name: "Mr.SRIKRISHNA L", position: "Partner", company: "P S Constructions", period: "2015-2019", department: "CVE" },
  { id: 54, name: "Mr.CHETHANNARAYANAN S", position: "CEO", company: "SRS Design & Construction", period: "2015-2019", department: "CVE" },
  { id: 55, name: "Mr.SANTHOSH G", position: "Proprietor", company: "Santhosh Construction", period: "2015-2019", department: "CVE" },
  { id: 56, name: "Mr.Aadhithya Rajan S", position: "Founder", company: "The Colour Space", period: "2012-2016", department: "CVE" },
  { id: 57, name: "Mr.Karthick Pandiyan S", position: "MD", company: "Karthick Housing Pvt. Ltd", period: "2014-2018", department: "CVE" },
  { id: 58, name: "Mr.JAYAHARISHKUMAR S", position: "Proprietor", company: "JHK Builders", period: "2013-2017", department: "CVE" },
  { id: 59, name: "Mr.Varun Kumar S", position: "MD", company: "Eee Vee Homes", period: "2013-2017", department: "CVE" },
  { id: 60, name: "Mrs S.Vasuki Vinothini", position: "Chairman & Managing Director", company: "Kurukshetra IAS Academy", period: "2008-2012", department: "INT" },
  { id: 61, name: "MR.ANANTH NARAYANAN", position: "CO-FOUNDER & CEO", company: "MEDLIFE", period: "1991-1995", department: "MECH", companyStarted: "2014 (Acquired by PharmEasy in 2021)", employees: "~5,000 (pre-acquisition)", turnover: "₹363.4 crore (FY 2019)", companyBrief: "Medlife was a pioneering digital healthcare platform and online pharmacy in India, offering online medicine delivery, health check-ups, and tele-consultations before merging with PharmEasy in 2021." },
  { id: 62, name: "MR.ISRAEL JEBSINGH IAS", position: "DIRECTOR", company: "OFFICIERS IAS ACADEMY", period: "1992-1996", department: "MECH", companyStarted: "2013", employees: "~50–150", turnover: "₹15–50 crore (estimated)", companyBrief: "Officers IAS Academy is a Chennai-based civil services coaching institute run by former IAS officers, providing training and mentorship for UPSC aspirants." },
  { id: 63, name: "MR.SANJEEV S VAKIL", position: "CEO", company: "Hindustan Institute of Maritime Training (HIMT)", period: "1985-1990", department: "MECH", companyStarted: "1998", employees: "~100–250", turnover: "₹30–75 crore (estimated)", companyBrief: "HIMT is a leading maritime education and training institution in India, offering approved courses for aspiring and serving seafarers for merchant navy careers." },
  { id: 64, name: "MR.VINAYAK R ESHWAR", position: "DIRECTOR", company: "ORIENT IMPEX", period: "2008-2012", department: "MECH", companyStarted: "1978", employees: "11–25", turnover: "₹5–25 crore", companyBrief: "Orient Impex is a specialized supplier and processor of high-performance steel plates, including high-strength and abrasion-resistant grades for heavy industries." },
  { id: 65, name: "MR.PALANIAPPAN THIYAGARAJAN", position: "DIRECTOR", company: "IYAPPAN ENGINEERING INDUSTRIES PVT LTD", period: "1995-1999", department: "MECH", companyStarted: "1991", employees: "~50–200", turnover: "₹10–40 crore (estimated)", companyBrief: "Iyappan Engineering Industries Pvt Ltd is a Chennai-based manufacturer producing machinery and equipment for diverse industrial applications." },
  { id: 66, name: "Ambareesh Ramakrishnan", position: "Founder & CEO", company: "ANTPOD", period: "2020-2023", department: "Automobile" },
  { id: 67, name: "Shameem Javed A", position: "Proprietor", company: "Alternative Soils", period: "2017-Present", department: "Biotechnology" },
  { id: 68, name: "Harshita Gupta", position: "CEO & Director", company: "Morulaa HealthTech Pvt Ltd", period: "2012-Present", department: "Biotechnology" },
  { id: 69, name: "Saranya Mohan", position: "Proprietor", company: "Innovative health care Pvt Ltd", period: "", department: "" },
  { id: 70, name: "Balaji E", position: "Founder & Director", company: "Seagrass Tech Private Limited", period: "2016-present", department: "Biotechnology" },
  { id: 71, name: "Vyas Dhamodaran", position: "CEO", company: "SYNORBS Biosolutions Pvt Ltd", period: "2016-2019", department: "Biotechnology" },
  { id: 72, name: "Kabilan K M", position: "Director", company: "ZOVI Food Industries Pvt Ltd", period: "2020", department: "" },
]

// Explicit image overrides for known filenames in public/ALumini profile
const imageOverrides: Record<string, string> = {
  "B Alagu Selvan": "/alumni-profile/ALAGU-SELVAN.webp",
  "T. V. Sivakumar": "/alumni-profile/sivakumar-entrepreneur.webp",
  "Dr. Mallik Mahalingam": "/alumni-profile/MALIK-MAHALINGAM-ENTRPRE.webp",
  "Mr. Jigar Doshi": "/alumni-profile/JIGAR-JOSHI-ENTREPR.webp",
  "S. Prashanth": "/alumni-profile/Prashanth S-ENTREPRE.webp",
  "Mr. Jonathan Siddharth": "/alumni-profile/jonathan-entrepr.webp",
  "G. Srikrishnan": "/alumni-profile/Srikrishnan G-entrepre.webp",
  "T. Srinivasan": "/alumni-profile/t-srinivasan-entrpre.webp",
  "Dr. Doreen Hephzibah Miriam": "/alumni-profile/doreen-entrepre.webp",
  "Mr. Gautham Shankar": "/alumni-profile/Gautham Shankar-entrepre.webp",
  "Mr. Praveen Sekar": "/alumni-profile/Praveen Sekar-entrepre.webp",
  "Ms. Shwetha Lakshmanan": "/alumni-profile/swetha-laks-entrep.webp",
  "Mr.Arun Bhikshesvaran": "/alumni-profile/Arun Bhikshesvaran.webp",
  "Mr.Karunakaran": "/alumni-profile/Karunakaran.webp",
  "Mr.Pravin Shekar": "/alumni-profile/Pravin Shekar.webp",
  "Mr.Udeep.B": "/alumni-profile/Udeep.B (1).webp",
  "Mr.Ramanathan Srinivasan": "/alumni-profile/Ramanathan Srinivasan.webp",
  "Ms.Sowmya Mahadevan": "/alumni-profile/Sowmya Mahadevan 1.webp",
  "Mr.Pradeep A": "/alumni-profile/pradeep-cve-1.webp",
  "Mr. Premdas VGP": "/alumni-profile/PREMDAS-PROMINENT-EEE.webp",
  "Mr.Moorthy Prakash": "/alumni-profile/Moorthy Prakash.webp",
  "Mr.Satish Vijayan": "/alumni-profile/Satish Vijayan.webp",
  "Mr.A.S.Praveen Raj": "/alumni-profile/Praveen raj.webp",
  "Mr.Vineeth Vijayaraghavan": "/alumni-profile/Vineeth Vijayaraghavan.webp",
  "Ms.Manasa Pillai": "/alumni-profile/Manasa Pillai.webp",
  "Ms.Pavithra Srinivasan": "/alumni-profile/Pavithra Srinivasan.webp",
  "Mr.Siddharta Govindaraj": "/alumni-profile/Siddharta Govindaraj.webp",
  "Ms.Asha Yoganandan": "/alumni-profile/Asha.webp",
  "Mr.Sriharsha C": "/alumni-profile/Sriharsha.webp",
  "Mr.Ratan Vishwanath Subramaniyan": "/alumni-profile/Ratan Vishwanath Subramaniyan.webp",
  "Mr.Kishore I": "/alumni-profile/Kishore.webp",
  "Mr.B Sudharsan": "/alumni-profile/sudharsan.webp",
  "Mr. Rajkumar. D": "/alumni-profile/RAJKUMAR-CHE.webp",
  "Mr.Vasanth Immanuel": "/alumni-profile/VASANTH -CHE.webp",
  "Mr. Himakiran Anugula": "/alumni-profile/HIMAKIRAN-CHE 1.webp",
  "Mr.Varadharajan Pandian": "/alumni-profile/VARADHARAJAN-CHE.webp",
  "Mr. Thandava Moorthy S": "/alumni-profile/THANDVA MOORTHY -CHE.webp",
  "Mr. Mohamed Hussain K": "/alumni-profile/MOHAMED HOSSAIN-CHE.webp",
  "Mr.Kavin K": "/alumni-profile/KAVIN-CHE.webp",
  "Mr. Vignesh Ganesan": "/alumni-profile/vignesh1.webp",
  "Ms Pallavi Aravind Narasimhan": "/alumni-profile/pallavi.webp",
  "Mr. Venu madhav Chennupati": "/alumni-profile/venu.webp",
  "Mr. Praveen J": "/alumni-profile/Praveen Sekar-entrepre.webp",
  "Ms. Malini S": "/alumni-profile/malini.webp",
  "Dr.Ramya S Moorthy": "/alumni-profile/Ramya-s-moorthy_11zon.webp",
  "Mr. Saravanan Ramakrishnan": "/alumni-profile/saravanan.webp",
  "Akash Jain": "/alumni-profile/akash jain.webp",
  "Balaji Kulothungan": "/alumni-profile/Balajikolochungan.webp",
  "Balaji E": "/alumni-profile/Balaji.webp",
  "Ambareesh Ramakrishnan": "/alumni-profile/Ambareesh Ramakrishnan 2012-2016 batch.webp",
  "Harshita Gupta": "/alumni-profile/Harshitha.webp",
  "Shameem Javed A": "/alumni-profile/shameem.webp",
  "Kabilan K M": "/alumni-profile/kabi.webp",
  "Vyas Dhamodaran": "/alumni-profile/Vyas.webp",
  "MR.ANANTH NARAYANAN": "/alumni-profile/ANAND NARAYANAN.webp",
  "MR.ISRAEL JEBSINGH IAS": "/alumni-profile/Aron Israsel Jebasingh.webp",
  "MR.SANJEEV S VAKIL": "/alumni-profile/SANJIV VAKIL.webp",
  "MR.VINAYAK R ESHWAR": "/alumni-profile/Vinayak Easwar.webp",
  "Mrs S.Vasuki Vinothini": "/alumni-profile/Mrs. S. Vasuki Vinothini.webp",
  "MR.PALANIAPPAN THIYAGARAJAN": "/alumni-profile/PANALIAPPAN.webp",
  "Mr.SRIKRISHNA L": "/alumni-profile/CVE_SRIKRISHNA L 15-19.webp",
  "Mr.ARAVINDANKARUPPIAH K": "/alumni-profile/Aravidhan Karu 17-21.webp",
  "Mr.HARITH BHARADWAAJ G": "/alumni-profile/CVE_HARITH BHARADWAAJ G 17-21.webp",
  "Mr.SHARAFATH ALI J": "/alumni-profile/CVE_Sharafath Ali 16-20.webp",
  "Ms.HARIPRIYAA A": "/alumni-profile/CVE_Haripriya A 15-19.webp",
  "Mr.CHETHANNARAYANAN S": "/alumni-profile/CVE_CHETHANNARAYANAN  S 15-19.webp",
  "Mr.SANTHOSH G": "/alumni-profile/CVE_Santhosh G 15-19 1.webp",
  "Mr.Aadhithya Rajan S": "/alumni-profile/CVE_Aadhithya Rajan 12-16.webp",
  "Mr.Karthick Pandiyan S": "/alumni-profile/CVE_Karthick Pandiyan S 14-18.webp",
  "Mr.JAYAHARISHKUMAR S": "/alumni-profile/CVE_JAYAHARISHKUMAR S 13-17.webp",
  "Mr.Varun Kumar S": "/alumni-profile/CVE_Varun Kumar S 13-17.webp",
  "Saranya Mohan": "/alumni-profile/pras.webp",
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

function removeTitles(input: string): string {
  return input.replace(/^(mr\.|mrs\.|ms\.|dr\.|prof\.)\s+/i, "").trim()
}

function normalizeNameForOverride(input: string): string {
  return removeTitles(input)
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

const normalizedOverrideMap: Record<string, string> = Object.fromEntries(
  Object.entries(imageOverrides).map(([k, v]) => [normalizeNameForOverride(k), v])
)

function AlumniCard({ data, index }: { data: Alumni; index: number }) {
  const baseName = data.name
  const noTitle = removeTitles(baseName)
  const tokens = noTitle.split(/\s+/).filter(Boolean)
  const first = tokens[0] || ""
  const last = tokens[tokens.length - 1] || ""
  const firstLast = [first, last].filter(Boolean).join(" ")
  const initials = tokens.map((t) => t[0]).join("").slice(0, 2).toUpperCase()
  const folders = ["alumni-profile"]
  const names = [
    baseName,
    noTitle,
    firstLast,
    first,
    last,
    initials,
    slugify(baseName),
    slugify(noTitle),
    slugify(firstLast),
    baseName.replace(/\./g, ""),
    noTitle.replace(/\./g, ""),
  ]
  const exts = ["webp", "jpg", "jpeg", "png"]
  const sources: string[] = []
  
  const overrideSrc = normalizedOverrideMap[normalizeNameForOverride(baseName)] || data.image
  if (overrideSrc) {
    sources.push(overrideSrc)
  }
  for (const f of folders) {
    const encF = encodeURIComponent(f)
    for (const n of names) {
      for (const e of exts) {
        sources.push(`/${encF}/${n}.${e}`)
      }
    }
  }
  sources.push("/ALumini%20profile/noprofile.webp")

  const [idx, setIdx] = useState(0)
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null)
  const src = sources[idx]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090a10] p-6 shadow-2xl transition-all duration-500 hover:border-indigo-500/40 hover:-translate-y-1 text-center items-center"
    >
      <div className="flex flex-col items-center text-center w-full">
        {/* Avatar Presentation */}
        <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-indigo-500/10 border-2 border-indigo-500/30 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-indigo-400 transition-all duration-300 shadow-xl shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
          {idx < sources.length ? (
            <Image
              src={src}
              alt={data.name}
              width={128}
              height={128}
              className="h-full w-full object-cover relative z-10"
              onError={() => setIdx((i) => i + 1)}
              onLoadingComplete={() => !resolvedSrc && setResolvedSrc(src)}
              priority={false}
            />
          ) : (
            <span className="text-2xl font-black text-indigo-300 relative z-10">
              {initials}
            </span>
          )}
        </div>

        {/* Member Info */}
        <h3 className="font-black text-lg sm:text-xl text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
          {data.name}
        </h3>
        
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400 mb-1">
          {data.position}
        </p>

        {data.company && (
          <p className="text-sm font-semibold text-slate-300 mb-3">
            {data.company}
          </p>
        )}

        {/* Startup Metrics / Brief if present */}
        {(data.companyStarted || data.employees || data.turnover) && (
          <div className="space-y-1.5 text-xs text-slate-400 mb-3 bg-white/[0.03] p-3 rounded-2xl border border-white/5 w-full text-left">
            {data.companyStarted && (
              <p className="flex justify-between">
                <span className="font-semibold text-slate-300">Started:</span> <span>{data.companyStarted}</span>
              </p>
            )}
            {data.employees && (
              <p className="flex justify-between">
                <span className="font-semibold text-slate-300">Team:</span> <span>{data.employees}</span>
              </p>
            )}
            {data.turnover && (
              <p className="flex justify-between">
                <span className="font-semibold text-slate-300">Turnover:</span> <span>{data.turnover}</span>
              </p>
            )}
          </div>
        )}

        {data.companyBrief && (
          <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal text-left bg-white/[0.02] p-3.5 rounded-2xl border border-white/5">
            {data.companyBrief}
          </p>
        )}
      </div>

      {/* Footer Batch & Dept */}
      {(data.period || data.department) && (
        <div className="w-full pt-3 border-t border-white/5 flex justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
            {[data.period, data.department].filter(Boolean).join(" • ")}
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default function AlumniPage() {
  // Group alumni by department
  const groupedAlumni = useMemo(() => {
    const groups: Record<string, Alumni[]> = {}
    
    alumni.forEach(alumnus => {
      const dept = alumnus.department?.trim() || "Other"
      if (!groups[dept]) {
        groups[dept] = []
      }
      groups[dept].push(alumnus)
    })
    
    const sortedGroups = Object.keys(groups).sort()
    const result: Record<string, Alumni[]> = {}
    
    sortedGroups.forEach(dept => {
      result[dept] = groups[dept]
    })
    
    return result
  }, [])

  const totalDepartments = Object.keys(groupedAlumni).length

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
            ALUMNI / E-CELL SVCE
          </p>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
            Alumni Entrepreneurs
          </h1>
          <motion.p
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover the remarkable journeys of our alumni who have built successful ventures and made their mark in the global entrepreneurial ecosystem.
          </motion.p>

          {/* Metrics Pills */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5 bg-[#090a10] border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-slate-300">
              <Users className="w-4 h-4 text-indigo-400" />
              <span>{alumni.length}+ Alumni Founders</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#090a10] border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-slate-300">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span>Global Ventures</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#090a10] border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-slate-300">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>{totalDepartments} Departments</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Network Statement Section ─────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-12 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                01 / ALUMNI NETWORK
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                30+ Years of Entrepreneurial Leadership
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                From early computing pioneers to healthcare founders, digital transformation leaders, and industrial innovators — SVCE alumni have founded and scaled ventures across India and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alumni Directory Section ──────────────────────────────────────── */}
      <div className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl space-y-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                02 / ALUMNI DIRECTORY
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Founders Directory by Department
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              {alumni.length} Alumni Profiles
            </span>
          </div>

          {/* Department Groups */}
          {Object.entries(groupedAlumni).map(([department, departmentAlumni], deptIndex) => (
            <section key={department} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {department}
                </h3>
                <div className="h-px flex-grow bg-white/10" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  {departmentAlumni.length} {departmentAlumni.length === 1 ? "Alumnus" : "Alumni"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
                {departmentAlumni.map((alumnus, index) => (
                  <AlumniCard
                    key={alumnus.id}
                    data={{ ...alumnus, image: imageOverrides[alumnus.name] || alumnus.image }}
                    index={deptIndex * 100 + index}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* ── Closing Callout Section ───────────────────────────────────── */}
          <section className="mt-28 relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#090a10] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)]"
            />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-300">
                SVCE ALUMNI NETWORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Are you an SVCE Alumni Founder?
              </h2>
              <p className="mx-auto mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Connect with the E-Cell SVCE ecosystem to mentor student builders, share your venture story, or engage with our incubation initiatives.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:ecell@svce.ac.in"
                  className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-600 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.02]"
                >
                  Connect With E-Cell <GraduationCap className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
