"use client"

import { useEffect, useRef } from "react"

export type ParticleDriftProps = {
  mode?: "dark" | "light"
  speed?: number
  size?: number
  density?: number
  opacity?: number
  hue?: number
  saturation?: number
  brightness?: number
  gap?: number
  length?: number
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
}

export default function ParticleDrift({
  mode = "dark",
  speed = 0.6,
  size = 1,
  density = 1,
  opacity = 0.6,
  className = "",
  style,
}: ParticleDriftProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let width = 0
    let height = 0

    interface Node {
      x: number
      y: number
      vy: number
      vx: number
      char: string
      radius: number
    }

    interface Beam {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()".split("")
    let nodes: Node[] = []
    let beams: Beam[] = []
    const mouse = { x: -1000, y: -1000 }

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width || window.innerWidth
      height = rect.height || window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const initParticles = () => {
      const isMobile = width < 768
      const baseNodeCount = isMobile ? 35 : 75
      const baseBeamCount = isMobile ? 10 : 22

      const nodeCount = Math.max(12, Math.round(baseNodeCount * density))
      const beamCount = Math.max(5, Math.round(baseBeamCount * density))

      nodes = Array.from({ length: nodeCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: (Math.random() * 0.4 + 0.12) * (isMobile ? 0.7 : 1),
        vx: (Math.random() - 0.5) * 0.25,
        char: chars[Math.floor(Math.random() * chars.length)],
        radius: (Math.random() * 1.5 + 1) * size,
      }))

      beams = Array.from({ length: beamCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        length: (Math.random() * 110 + 50) * size,
        speed: (Math.random() * 3.5 + 1.5) * (isMobile ? 0.7 : 1),
        opacity: Math.random() * 0.5 + 0.25,
      }))
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    resize()
    initParticles()

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const speedMult = isReducedMotion ? 0 : speed

      const isDark = mode === "dark"
      const beamColorStart = isDark ? "129, 140, 248" : "79, 70, 229" // indigo-400 : indigo-600
      const nodeActiveColor = isDark ? "#818CF8" : "#4F46E5"
      const nodeNormalColor = isDark ? "148, 163, 184" : "71, 85, 105"

      // 1. Render Upward Beams
      beams.forEach((b) => {
        b.y -= b.speed * speedMult
        if (b.y + b.length < 0) {
          b.y = height + 60
          b.x = Math.random() * width
        }

        const gradient = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length)
        gradient.addColorStop(0, `rgba(${beamColorStart}, ${b.opacity * opacity})`)
        gradient.addColorStop(1, "transparent")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5 * size
        ctx.beginPath()
        ctx.moveTo(b.x, b.y)
        ctx.lineTo(b.x, b.y + b.length)
        ctx.stroke()
      })

      // 2. Render Node Proximity Lines
      const maxDist = 130 * size
      ctx.lineWidth = 0.6 * size
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const d = Math.hypot(n1.x - n2.x, n1.y - n2.y)
          if (d < maxDist) {
            const lineAlpha = (1 - d / maxDist) * 0.3 * opacity
            ctx.strokeStyle = `rgba(${beamColorStart}, ${lineAlpha})`
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
          }
        }
      }

      // 3. Render Nodes & Mouse Interaction
      ctx.font = `${Math.max(10, Math.round(11 * size))}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const mouseRadius = 180

      nodes.forEach((n) => {
        n.y += n.vy * speedMult
        n.x += n.vx * speedMult

        if (n.y > height + 20) {
          n.y = -20
          n.x = Math.random() * width
        }
        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20

        const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y)

        if (dist < mouseRadius || Math.random() > 0.985) {
          n.char = chars[Math.floor(Math.random() * chars.length)]
        }

        if (dist < mouseRadius) {
          const mouseAlpha = (1 - dist / mouseRadius) * 0.55 * opacity
          ctx.strokeStyle = `rgba(${beamColorStart}, ${mouseAlpha})`
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }

        if (dist < mouseRadius) {
          ctx.fillStyle = nodeActiveColor
          ctx.globalAlpha = Math.min(1, opacity * 1.3)
        } else {
          ctx.fillStyle = `rgba(${nodeNormalColor}, 0.75)`
          ctx.globalAlpha = opacity
        }

        ctx.fillText(n.char, n.x, n.y)
        ctx.globalAlpha = 1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [density, mode, opacity, size, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      style={{
        pointerEvents: "none",
        ...style,
      }}
    />
  )
}
