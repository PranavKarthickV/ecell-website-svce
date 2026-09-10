"use client"

import Hero from "@/components/home/Hero"
import Purpose from "@/components/home/Purpose"
import ImpactStats from "@/components/home/ImpactStats"
import Network from "@/components/home/Network"
import FinalCTA from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <div className="page-container relative bg-grid">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Why E-Cell / What We Do */}
      <Purpose />

      {/* 3. Impact / At a Glance */}
      <ImpactStats />

      {/* 4. Founder & Industry Network */}
      <Network />

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  )
}
