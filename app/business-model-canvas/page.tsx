"use client"

import Link from "next/link"

export default function BusinessModelCanvasPage() {
	return (
		<main className="min-h-screen overflow-hidden bg-grid px-4 pb-24 pt-32 text-white md:px-8 md:pt-40">
			<div className="mx-auto max-w-4xl text-center">
				<p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">Digital Toolkit</p>
				<h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Business Model Canvas</h1>
				<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
					Turn your startup idea into a clear business model by mapping customers, value propositions, channels, revenue and key resources.
				</p>
				<Link href="/digital-toolkit" className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
					Back to Digital Toolkit
				</Link>
			</div>
		</main>
	)
}
