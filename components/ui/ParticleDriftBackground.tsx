"use client"

import ParticleDrift from "@/components/ui/particle-drift"

export type ParticleDriftBackgroundProps = {
  opacity?: number
  density?: number
  speed?: number
  size?: number
  className?: string
}

export default function ParticleDriftBackground({
  opacity = 0.35,
  density = 0.6,
  speed = 0.35,
  size = 0.9,
  className = "",
}: ParticleDriftBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full ${className}`}
    >
      <ParticleDrift
        mode="dark"
        density={density}
        opacity={opacity}
        speed={speed}
        size={size}
        className="h-full w-full pointer-events-none"
      />
    </div>
  )
}
