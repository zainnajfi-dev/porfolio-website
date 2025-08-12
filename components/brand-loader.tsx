"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function BrandLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="relative">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
        />

        {/* Main Logo Container */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
          className="relative z-10 w-32 h-32 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
          />

          {/* Z Symbol Container */}
          <div className="relative z-10">
            {/* Z Shape with animated drawing effect */}
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-16 h-16 relative"
            >
              {/* Top horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-0 left-0 w-16 h-1 bg-white rounded-full shadow-lg"
                style={{ transformOrigin: "left" }}
              />
              
              {/* Diagonal line */}
              <motion.div
                initial={{ scaleX: 0, rotate: 45 }}
                animate={{ scaleX: 1, rotate: 45 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-1/2 left-0 w-16 h-1 bg-white rounded-full shadow-lg transform -translate-y-1/2"
                style={{ transformOrigin: "left" }}
              />
              
              {/* Bottom horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-0 left-0 w-16 h-1 bg-white rounded-full shadow-lg"
                style={{ transformOrigin: "left" }}
              />

              {/* Glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                    "0 0 40px rgba(16, 185, 129, 0.6)",
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-lg"
              />
            </motion.div>
          </div>

          {/* Corner accents with animation */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 2 + i * 0.1,
                duration: 0.4,
              }}
              className="absolute w-3 h-3 bg-white/40 rounded-full"
              style={{
                top: i < 2 ? "8px" : "auto",
                bottom: i >= 2 ? "8px" : "auto",
                left: i % 2 === 0 ? "8px" : "auto",
                right: i % 2 === 1 ? "8px" : "auto",
              }}
            />
          ))}
        </motion.div>

        {/* Floating particles around the logo */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              delay: 2.5 + i * 0.2,
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
          />
        ))}

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_200%] tracking-wider"
          >
            ZAIN
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-gray-400 mt-3 text-lg font-medium"
          >
            Software Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="text-gray-500 mt-1 text-sm"
          >
            Crafting Digital Experiences
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="mt-8 w-56 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full overflow-hidden shadow-lg"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </motion.div>

        {/* Pulse Rings */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 border-2 border-emerald-500/20 rounded-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 2.2, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="absolute inset-0 border border-cyan-500/15 rounded-2xl"
        />
      </div>
    </motion.div>
  )
}
