"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Instagram, Github } from "lucide-react"
import { motion } from "framer-motion"
import ParticleDriftBackground from "@/components/ui/ParticleDriftBackground"

type TeamMember = {
  id: number
  name: string
  position: string
  team: string
  domain: string
  image: string
  linkedin?: string
  email?: string
  instagram?: string
  phone?: string
  github?: string
}

const teamMembers: TeamMember[] = [
  // Managers
  {
    id: 49,
    name: "Dr.S.Ilaiyavel",
    position: "Manager",
    team: "Ecell Managers",
    domain: "Faculty",
    image: "/teams/managers/ilayavel.webp",
    linkedin: "",
    email: "",
    instagram: "",
    phone: "",
    github: "",
  },
  {
    id: 50,
    name: "V.senthill velan",
    position: "Manager",
    team: "Ecell Managers",
    domain: "Faculty",
    image: "/teams/managers/sentilvelan.webp",
    linkedin: "",
    email: "",
    instagram: "",
    phone: "",
    github: "",
  },

  // Core Leadership
  {
    id: 1,
    name: "Roshan M",
    position: "President",
    team: "Core Leadership",
    domain: "ECE - 4th Year",
    image: "/teams/core/president.webp",
    linkedin: "https://www.linkedin.com/in/roshan-m-711a95292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022ec0448@svce.ac.in",
    instagram: "@roshan.m.forever",
    phone: "9841092274",
    github: "",
  },
  {
    id: 2,
    name: "Dharshni. R",
    position: "Vice President",
    team: "Core Leadership",
    domain: "Biotechnology - 4th Year",
    image: "/teams/core/Vice president.webp",
    linkedin: "https://www.linkedin.com/in/dharshni-ramesh-a72934286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022bt0547@svce.ac.in",
    instagram: "dharshni6434",
    phone: "8056071990",
    github: "",
  },
  {
    id: 3,
    name: "Manojkumar A",
    position: "Secretary",
    team: "Core Leadership",
    domain: "ECE - 4th Year",
    image: "/teams/core/general secratory.webp",
    linkedin: "https://www.linkedin.com/in/manojkumar-anbuchezhian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022ec0231@svce.ac.in",
    instagram: "https://www.instagram.com/manojkumaranbuchezhian?igsh=MTZvNmJ2b3IybHVqeQ==",
    phone: "7418434691",
    github: "https://github.com/Manojkumaranbuchezhian",
  },

  // Executive Committee
  {
    id: 4,
    name: "Shree Varshini M",
    position: "CEO",
    team: "Executive Committee",
    domain: "ECE - 3rd Year",
    image: "/teams/committee/CEO.webp",
    linkedin: "https://www.linkedin.com/in/shree-varshini-m-533b08304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023ec0448@svce.ac.in",
    instagram: "",
    phone: "9360239715",
    github: "",
  },
  {
    id: 5,
    name: "Bhargavi TR",
    position: "COO",
    team: "Executive Committee",
    domain: "Chemical Engineering - 4th Year",
    image: "/teams/committee/COO.webp",
    linkedin: "https://www.linkedin.com/in/bhargavitr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022ch0775@svce.ac.in",
    instagram: "bhargavi.tr",
    phone: "9360286533",
    github: "",
  },
  {
    id: 6,
    name: "N.Nitish",
    position: "CFO",
    team: "Executive Committee",
    domain: "AIDS - 3rd Year",
    image: "/teams/committee/CFO.webp",
    linkedin: "https://www.linkedin.com/in/nitish-navaneeth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "2023ad0681@svce.ac.in",
    instagram: "nitish_31x",
    phone: "8428557498",
    github: "",
  },
  {
    id: 7,
    name: "Daksha S",
    position: "CMO",
    team: "Executive Committee",
    domain: "Biotech - 2nd Year",
    image: "/teams/committee/CMO.webp",
    linkedin: "https://www.linkedin.com/in/daksha-suresh-0522b330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0705@svce.ac.in",
    instagram: "dakshasuresh25",
    phone: "9043590574",
    github: "",
  },
  {
    id: 8,
    name: "Janani T",
    position: "CTO",
    team: "Executive Committee",
    domain: "CSE - 3rd Year",
    image: "/teams/committee/CTO.webp",
    linkedin: "https://www.linkedin.com/in/janani-t-bb507a29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023cs0309@svce.ac.in",
    instagram: "janani_11_2005",
    phone: "9150988305",
    github: "",
  },
  {
    id: 9,
    name: "VIKAASH B G",
    position: "CDO",
    team: "Executive Committee",
    domain: "ECE - 4th Year",
    image: "/teams/committee/CDO.webp",
    linkedin: "https://www.linkedin.com/in/vikaash-b-g-79733830b/",
    email: "viklearner@gmail.com",
    instagram: "",
    phone: "8525068831",
    github: "",
  },

  // Department Heads
  {
    id: 10,
    name: "Balakrishnan.R",
    position: "Tech Head",
    team: "Department Heads",
    domain: "AI&DS - 3rd Year",
    image: "/teams/heads/Tech.webp",
    linkedin: "https://www.linkedin.com/in/balakrishnan-r-5a1006278",
    email: "2023ad0681@svce.ac.in",
    instagram: "iambalakrishnan.r",
    phone: "9444543801",
    github: "https://github.com/BalaKrishnan1708",
  },
  {
    id: 11,
    name: "Sankara Narayanan S",
    position: "Execution Head",
    team: "Department Heads",
    domain: "Biotech - 3rd Year",
    image: "/teams/heads/Execution.webp",
    linkedin: "http://linkedin.com/in/sankara-narayanan-s-biotech",
    email: "2023bt0367@svce.ac.in",
    instagram: "s4nk4r",
    phone: "8610049372",
    github: "",
  },
  {
    id: 12,
    name: "Harshith B",
    position: "Content Head",
    team: "Department Heads",
    domain: "Mechanical and Automation- 3rd Year",
    image: "/teams/heads/Content1.webp",
    linkedin: "https://www.linkedin.com/in/harshith-bubalan-9b3588284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023mn0363@svce.ac.in",
    instagram: "Harshith.007",
    phone: "8608786089",
    github: "",
  },
  {
    id: 13,
    name: "Divya Shree M",
    position: "Design Head",
    team: "Department Heads",
    domain: "IT - 2nd Year",
    image: "/teams/heads/Design.webp",
    linkedin: "https://www.linkedin.com/in/divya-shree-m-09531631a/",
    email: "2024it0765@svce.ac.in",
    instagram: "_divya03shree_",
    phone: "8015848971",
    github: "",
  },
  {
    id: 14,
    name: "Baarath Arumugaraja",
    position: "Operation Lead",
    team: "Department Heads",
    domain: "CSE - 3rd Year",
    image: "/teams/heads/Operational.webp",
    linkedin: "https://www.linkedin.com/in/baarath-arumugaraja-7a8820329/",
    email: "2023cs0772@svce.ac.in",
    instagram: "baarathraja",
    phone: "9952436835",
    github: "",
  },
  {
    id: 15,
    name: "Balapranav K",
    position: "Community Captain",
    team: "Department Heads",
    domain: "EEE - 2nd Year",
    image: "/teams/heads/Community.webp",
    linkedin: "https://www.linkedin.com/in/balapranav/",
    email: "2024ee0123@svce.ac.in",
    instagram: "balabranab",
    phone: "7397380056",
    github: "",
  },
  {
    id: 16,
    name: "THARUN S",
    position: "Creative Lead",
    team: "Department Heads",
    domain: "Mech & Automation - 2nd Year",
    image: "/teams/heads/Creative.webp",
    linkedin: "https://www.linkedin.com/in/tharun-somasundaram",
    email: "2024mn0785@svce.ac.in",
    instagram: "@tharunehhhh",
    phone: "9342526239",
    github: "",
  },

  // Executive Members
  {
    id: 17,
    name: "P.Rasiga",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Chemical Engineering - 2nd Year",
    image: "/teams/executive/rasiga.webp",
    linkedin: "https://www.linkedin.com/in/rasigap28",
    email: "rasigapalanisamy1@gmail.com",
    instagram: "",
    phone: "9500240988",
    github: "",
  },
  {
    id: 18,
    name: "Sri Bharathi R",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Mechanical and automation - 2nd Year",
    image: "/teams/executive/SRI BHARATHI.webp",
    linkedin: "https://www.linkedin.com/in/sribharathi-rajkumar",
    email: "2024mn0785@svce.ac.in",
    instagram: "Sribharathi666",
    phone: "7397103127",
    github: "",
  },
  {
    id: 19,
    name: "Mayooritha P",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Computer Science - 2nd Year",
    image: "/teams/executive/MAYOORITHA.webp",
    linkedin: "https://www.linkedin.com/in/mayooritha-pugazhenthi-8a43b0327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "2024cs0480@svce.ac.in",
    instagram: "mayooritha_",
    phone: "9677809044",
    github: "",
  },
  {
    id: 20,
    name: "Ajay M",
    position: "Executive Member",
    team: "Executive Members",
    domain: "CSE - 3rd Year",
    image: "/teams/executive/AJAY.webp",
    linkedin: "https://www.linkedin.com/in/ajay-m-3416961b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023cs0477@svce.ac.in",
    instagram: "ajay.tel",
    phone: "8925323250",
    github: "",
  },
  {
    id: 21,
    name: "G.Shreenidhi",
    position: "Executive Member",
    team: "Executive Members",
    domain: "EEE - 2nd Year",
    image: "/teams/executive/Shreenidhi.webp",
    linkedin: "https://www.linkedin.com/in/.G.Shreenidhi EEE",
    email: "2024EE0011@svce.ac.in",
    instagram: "I'm not in instagram",
    phone: "9962010822",
    github: "",
  },
  {
    id: 22,
    name: "Mahalakshmi L",
    position: "Executive Member",
    team: "Executive Members",
    domain: "ECE - 2nd Year",
    image: "/teams/executive/mahalashmmi.webp",
    linkedin: "https://www.linkedin.com/in/maha-lakshmi-l-756594329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ec0167@svce.ac.in",
    instagram: "Ival._.nila",
    phone: "8248228218",
    github: "",
  },
  {
    id: 23,
    name: "Yogavarthanee R",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Chemical engineering - 2nd Year",
    image: "/teams/executive/YOGAVARTHANEE.webp",
    linkedin: "https://www.linkedin.com/in/yogavarthanee-rangarajan-569894314",
    email: "2024ch0915@svce.ac.in",
    instagram: "yoga_2007__",
    phone: "7812815995",
    github: "",
  },
  {
    id: 24,
    name: "Dimple Kurugunda",
    position: "Executive Member",
    team: "Executive Members",
    domain: "EEE - 2nd Year",
    image: "/teams/executive/dimple.webp",
    linkedin: "https://www.linkedin.com/in/dimple-kurugunda",
    email: "2024ee0945@svce.ac.in",
    instagram: "dimple___chowdaey",
    phone: "9951661000",
    github: "",
  },

  // Marketing Team
  {
    id: 25,
    name: "Santhoshkumar C",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "EEE - 2nd Year",
    image: "/teams/marketing/SANTHOSHKUMAR.webp",
    linkedin: "https://www.linkedin.com/in/santhoshkumar112",
    email: "2024ee0189@svce.ac.in",
    instagram: "_.mashysandy._",
    phone: "9080083869",
    github: "",
  },
  {
    id: 26,
    name: "GOKUL S",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "Biotech - 2nd Year",
    image: "/teams/marketing/GOKUL S.webp",
    linkedin: "https://www.linkedin.com/in/gokul-s-3526bb337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0848@svce.ac.in",
    instagram: "_.s.gokul._",
    phone: "9884463837",
    github: "",
  },
  {
    id: 27,
    name: "Kayal Nethra K",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "CSE - 2nd Year",
    image: "/teams/marketing/KAYAL NETHRA.webp",
    linkedin: "https://www.linkedin.com/in/kayal-nethra-k-cse-36150b332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024cs0492@svce.ac.in",
    instagram: "_kayaln_",
    phone: "9444311421",
    github: "",
  },
  {
    id: 28,
    name: "Mhadhurra Chandran",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "CSE - 3rd Year",
    image: "/teams/marketing/Mhadhurra.webp",
    linkedin: "https://www.linkedin.com/in/mhadhurra-chandran-a0576b321?trk=contact-info",
    email: "2023CS0956@svce.ac.in",
    instagram: "mhadhu_06",
    phone: "9840646632",
    github: "",
  },
  {
    id: 29,
    name: "Logeshwari N",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "Biotech - 2nd Year",
    image: "/teams/marketing/LOGESHWARI N.webp",
    linkedin: "https://www.linkedin.com/in/logeshwari-n-1ab032327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0388@svce.ac.in",
    instagram: "blue_.moonx_",
    phone: "9360737534",
    github: "",
  },
  {
    id: 30,
    name: "Bharathraj R",
    position: "Marketing Executive",
    team: "Marketing Team",
    domain: "ECE - 3rd Year",
    image: "/teams/marketing/BHARATHRAJ.webp",
    linkedin: "https://www.linkedin.com/in/bharathraj-ranjith-kumar-aa5162294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023ec0327@svce.ac.in",
    instagram: "bharath_krish12",
    phone: "8148582517",
    github: "",
  },

  // Tech Team
  {
    id: 31,
    name: "Sudish M",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "CSE - 3rd Year",
    image: "/teams/web/Sudish.webp",
    linkedin: "https://in.linkedin.com/in/sudish-mohan-14a21331a",
    email: "2023cs0508@svce.ac.in",
    instagram: "_._sudish",
    phone: "9150195835",
    github: "",
  },
  {
    id: 32,
    name: "ABIJITH P",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "CSE - 3rd Year",
    image: "/teams/web/Abijith.webp",
    linkedin: "https://www.linkedin.com/in/abijith-prashanth-064206321",
    email: "abijithmark095@gmail.com",
    instagram: "0__abi__1",
    phone: "6374997429",
    github: "",
  },
  {
    id: 33,
    name: "K Buvaneswaran",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "ECE - 2nd Year",
    image: "/teams/web/bhuvaneswaran.webp",
    linkedin: "https://www.linkedin.com/in/k-buvaneswaran-ece",
    email: "2024ec0673@svce.ac.in",
    instagram: "_buvi_2006",
    phone: "9380867566",
    github: "",
  },
  {
    id: 34,
    name: "Divya Bharathi R",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "CSE - 3rd Year",
    image: "/teams/web/DIVYA BHARATHI.webp",
    linkedin: "https://in.linkedin.com/in/divya-bharathi-r-71b41b321",
    email: "2023CS0098@SVCE.AC.IN",
    instagram: "divya_bharathi_18",
    phone: "9840658454",
    github: "",
  },

  // Content Team
  {
    id: 35,
    name: "Irfanaa Parveen M",
    position: "Content Team Member",
    team: "Content Team",
    domain: "ECE - 2nd Year",
    image: "/teams/content/IRFANAA PARVEEN.webp",
    linkedin: "https://www.linkedin.com/in/irfanaa-parveen-786106318",
    email: "2024ec0149@svce.ac.in",
    instagram: "",
    phone: "9047871059",
    github: "",
  },
  {
    id: 36,
    name: "Haritha S V",
    position: "Content Team Member",
    team: "Content Team",
    domain: "CSE - 3rd Year",
    image: "/teams/content/HARITHA.webp",
    linkedin: "https://www.linkedin.com/in/haritha-s-v-93896b388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023cs0438@svce.ac.in",
    instagram: "harrithaaaaa",
    phone: "9344096900",
    github: "",
  },
  {
    id: 47,
    name: "Jefina Giftlin J",
    position: "Content Team Member",
    team: "Content Team",
    domain: "Biotech - 2nd Year",
    image: "/teams/content/jefina.webp",
    linkedin: "https://www.linkedin.com/in/jefina-giftlin-j-b1b696326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0694@svce.ac.in",
    instagram: "https://www.instagram.com/jefina_2808?igsh=MXZpdmNjcmUxc2xoaQ==",
    phone: "7200285674",
    github: "https://github.com/Jefina08",
  },

  // Design Team
  {
    id: 37,
    name: "THOUFIKUR RAHAMAN Y",
    position: "Design Team Member",
    team: "Design Team",
    domain: "EEE - 2nd Year",
    image: "/teams/design/THOUFIKUR RAHAMAN.webp",
    linkedin: "https://www.linkedin.com/in/thoufikur-rahaman-y-9a66a0388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "thoufikurrahaman@gmail.com",
    instagram: "itx_thoufik_107",
    phone: "8098889409",
    github: "",
  },
  {
    id: 38,
    name: "Yogendra",
    position: "Design Team Member",
    team: "Design Team",
    domain: "Mechanical - 2nd Year",
    image: "/teams/design/YOGENDRA.webp",
    linkedin: "https://www.linkedin.com/in/yogendra-b19ba032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "yogendraasky@gmail.com",
    instagram: "syncdesign2025",
    phone: "8838773569",
    github: "",
  },
  {
    id: 39,
    name: "PRATHIBA M S K",
    position: "Design Team Member",
    team: "Design Team",
    domain: "ECE - 2nd Year",
    image: "/teams/design/PRATHIBA.webp",
    linkedin: "https://www.linkedin.com/in/m-s-k-prathiba-608588329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ec0664@svce.ac.in",
    instagram: "prathi_075",
    phone: "6374977382",
    github: "",
  },
  {
    id: 40,
    name: "Seyed Mohamed",
    position: "Design Team Member",
    team: "Design Team",
    domain: "Mechanical and Automation - 3rd Year",
    image: "/teams/design/SEYED MOHAMED .webp",
    linkedin: "https://www.linkedin.com/in/seyed-mohamed-0a4172315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023mn0363@svce.ac.in",
    instagram: "s_e_y_e_d_07",
    phone: "7871499588",
    github: "",
  },
  {
    id: 41,
    name: "Vaishali V",
    position: "Design Team Member",
    team: "Design Team",
    domain: "CSE - 2nd Year",
    image: "/teams/design/VAISHALI .webp",
    linkedin: "https://www.linkedin.com/in/vaishali-v",
    email: "2024cs0537@svce.ac.in",
    instagram: "Vaish____1018",
    phone: "6379003163",
    github: "",
  },
  {
    id: 42,
    name: "Sri Hari Roshan N",
    position: "Design Team Member",
    team: "Design Team",
    domain: "CSE - 2nd Year",
    image: "/teams/design/SRI HARI ROSHAN.webp",
    linkedin: "https://www.linkedin.com/in/sri-hari-roshan-n-cse-9741a8328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024cs0492@svce.ac.in",
    instagram: "r_3_o_s_h_1_a_n_7",
    phone: "9025130344",
    github: "",
  },

  // Community Managers
  {
    id: 43,
    name: "Hariis P",
    position: "Community Manager",
    team: "Community Managers",
    domain: "CSE - 3rd Year",
    image: "/teams/community/HARIIS P.webp",
    linkedin: "https://in.linkedin.com/in/hariis-p-aa7759374",
    email: "2023cs0127@svce.ac.in",
    instagram: "",
    phone: "6374593242",
    github: "",
  },
  {
    id: 44,
    name: "Kamalina K",
    position: "Community Manager",
    team: "Community Managers",
    domain: "ECE - 2nd Year",
    image: "/teams/community/KAMALINA.webp",
    linkedin: "https://www.linkedin.com/in/kamalina-k-ece-14a39435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ec0448@svce.ac.in",
    instagram: "yosantehe",
    phone: "8838814898",
    github: "",
  },
  {
    id: 45,
    name: "CHALAKESH S K",
    position: "Community Manager",
    team: "Community Managers",
    domain: "Chemical engineering - 2nd Year",
    image: "/teams/community/CHALAKESH.webp",
    linkedin: "https://www.linkedin.com/in/chalakesh-s-k-6261bb32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ch0915@svce.ac.in",
    instagram: "chalakesh_.sk",
    phone: "6385251225",
    github: "",
  },
  {
    id: 46,
    name: "Sanjana Madankumar",
    position: "Community/LinkedIn Manager",
    team: "Community Managers",
    domain: "IT - 3rd Year",
    image: "/teams/community/Sanjana Madankumar.webp",
    linkedin: "https://www.linkedin.com/in/sanjana-madankumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023it0765@svce.ac.in",
    instagram: "sanjanamadankumar",
    phone: "9176638977",
    github: "",
  },
  {
    id: 48,
    name: "Madhav",
    position: "Community Manager",
    team: "Community Managers",
    domain: "CSE - 2nd Year",
    image: "",
    linkedin: "https://www.linkedin.com/in/madhav-krishna-jps/",
    email: "",
    instagram: "",
    phone: "8921856848",
    github: "",
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

const facultyMembers = teamMembers.filter((member) => member.domain === "Faculty")

const boardMembers = teamMembers.filter((member) =>
  ["Core Leadership", "Executive Committee"].includes(member.team),
)

const leadMembers = teamMembers.filter((member) =>
  ["Tech Head", "Execution Head", "Content Head", "Design Head", "Operation Lead", "Community Captain", "Creative Lead"].includes(member.position),
)

const teamGroups = [
  "Executive Members",
  "Marketing Team",
  "Design Team",
  "Content Team",
  "Community Managers",
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
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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

          <div className="relative z-10 space-y-4 my-auto">
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

            {member.phone && (
              <div className="text-xs text-slate-400">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 block">Contact</span>
                <span className="text-slate-300 font-mono">{member.phone}</span>
              </div>
            )}
          </div>

          {/* Social Links Footer */}
          {(member.linkedin || member.email || member.instagram || member.github) && (
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
              {member.email && (
                <Link
                  href={`mailto:${member.email}`}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Email ${member.name}`}
                  className="text-slate-400 hover:text-indigo-300 transition-colors p-1.5 rounded-full hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              )}
              {member.instagram && (
                <Link
                  href={member.instagram.startsWith("http") ? member.instagram : `https://instagram.com/${member.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Instagram for ${member.name}`}
                  className="text-slate-400 hover:text-indigo-300 transition-colors p-1.5 rounded-full hover:bg-white/5"
                >
                  <Instagram className="h-4 w-4" />
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
          featured ? "lg:grid-cols-3" : "lg:grid-cols-4"
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
          <TeamSection
            eyebrow="01 / ADVISORY"
            title="Faculty Advisory Board"
            members={facultyMembers}
            featured
          />
          <TeamSection
            eyebrow="02 / EXECUTIVE BOARD"
            title="Board Members"
            members={boardMembers}
            featured
          />
          <TeamSection
            eyebrow="03 / LEADERSHIP"
            title="Leadership Council"
            members={leadMembers}
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

          {/* Departmental Teams */}
          {teamGroups.map((groupName, idx) => {
            const members = groupedTeamMembers[groupName] ?? []
            return (
              <TeamSection
                key={groupName}
                eyebrow={`0${idx + 4} / DEPARTMENT`}
                title={groupName}
                members={members}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
