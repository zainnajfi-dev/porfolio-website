"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

interface FloatingOrb {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  // Reduce number of orbs and optimize their properties
  const orbs = useMemo(() => {
    const colors = [
      "rgba(59, 130, 246, 0.02)", // blue
      "rgba(147, 51, 234, 0.02)", // purple
      "rgba(34, 197, 94, 0.02)", // green
    ]

    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 150,
      color: colors[i % colors.length],
      duration: 25 + Math.random() * 10,
    }))
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />

      {/* Simplified animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Optimized floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-2xl will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle static grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
