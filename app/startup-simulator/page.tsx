"use client"

import StartupSimulatorGame from "@/components/StartupSimulatorGame"

export default function StartupSimulatorPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-grid px-4 pb-24 pt-32 text-white md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">Digital Toolkit</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Startup Simulator</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Experience startup decision-making through an interactive simulation of real entrepreneurial challenges.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1017] shadow-[0_20px_50px_rgba(79,70,229,0.08)]">
          <StartupSimulatorGame />
        </div>
      </div>
    </main>
  )
}
