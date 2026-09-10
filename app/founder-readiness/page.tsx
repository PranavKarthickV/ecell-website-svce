"use client"

import FounderQuiz from "@/components/FounderQuiz"

export default function FounderReadinessPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-grid px-4 pb-24 pt-32 text-white md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">Digital Toolkit</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Founder Readiness</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Evaluate your entrepreneurial readiness across key founder capabilities and identify areas for growth.
          </p>
        </div>
        <FounderQuiz />
      </div>
    </main>
  )
}
