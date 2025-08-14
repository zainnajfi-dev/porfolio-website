"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function BrandLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500) // Reduced from 4000ms to 2500ms

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="relative">
        {/* Simplified Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl"
        />

        {/* Main Logo Container */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 1,
          }}
          className="relative z-10 w-24 h-24 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 rounded-xl shadow-xl flex items-center justify-center overflow-hidden"
        >
          {/* Simple Background Pattern */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12"
          />

          {/* Z Symbol */}
          <div className="relative z-10">
            <div className="w-12 h-12 relative">
              {/* Top horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute top-0 left-0 w-12 h-0.5 bg-white rounded-full shadow-sm"
                style={{ transformOrigin: "left" }}
              />
              
              {/* Diagonal line */}
              <motion.div
                initial={{ scaleX: 0, rotate: 45 }}
                animate={{ scaleX: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-1/2 left-0 w-12 h-0.5 bg-white rounded-full shadow-sm transform -translate-y-1/2"
                style={{ transformOrigin: "left" }}
              />
              
              {/* Bottom horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-white rounded-full shadow-sm"
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>

          {/* Corner accents */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2 + i * 0.1,
                duration: 0.3,
              }}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                top: i < 2 ? "6px" : "auto",
                bottom: i >= 2 ? "6px" : "auto",
                left: i % 2 === 0 ? "6px" : "auto",
                right: i % 2 === 1 ? "6px" : "auto",
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_200%] tracking-wide"
          >
            Muhammad Ali Zain Ul Abidin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-gray-400 mt-2 text-base font-medium"
          >
            Software Engineer
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-6 w-48 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full overflow-hidden shadow-lg"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </motion.div>

        {/* Single Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 border border-emerald-500/20 rounded-xl"
        />
      </div>
    </motion.div>
  )
}
