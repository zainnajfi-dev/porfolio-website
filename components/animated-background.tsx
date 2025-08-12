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
  opacity: number
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  // Optimized floating orbs with better visual appeal
  const orbs = useMemo(() => {
    const colors = [
      "rgba(59, 130, 246, 0.03)", // blue
      "rgba(147, 51, 234, 0.03)", // purple
      "rgba(34, 197, 94, 0.03)", // green
      "rgba(236, 72, 153, 0.03)", // pink
    ]

    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 200,
      color: colors[i % colors.length],
      duration: 20 + Math.random() * 15,
      opacity: 0.3 + Math.random() * 0.4,
    }))
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Floating orbs with enhanced animations */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: "translate(-50%, -50%)",
            opacity: orb.opacity,
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle light rays */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
