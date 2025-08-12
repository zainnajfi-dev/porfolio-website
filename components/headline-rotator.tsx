"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, Globe, Zap, Users, Award, Database } from "lucide-react"

const headlines = [
  {
    text: "Building Scalable Web Applications",
    icon: Globe,
    color: "from-blue-500 to-cyan-600"
  },
  {
    text: "Creating Modern React.js Solutions",
    icon: Code,
    color: "from-emerald-500 to-teal-600"
  },
  {
    text: "Crafting User-Centric Interfaces",
    icon: Code,
    color: "from-green-500 to-emerald-600"
  },
  {
    text: "Optimizing Performance & User Experience",
    icon: Zap,
    color: "from-yellow-500 to-orange-600"
  },
  {
    text: "Developing Robust Backend Systems",
    icon: Database,
    color: "from-purple-500 to-indigo-600"
  },
  {
    text: "Delivering Quality Software Solutions",
    icon: Award,
    color: "from-red-500 to-pink-600"
  }
]

export default function HeadlineRotator() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = headlines[currentIndex].icon

  return (
    <div className="relative h-32 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${headlines[currentIndex].color} flex items-center justify-center shadow-lg`}>
            <CurrentIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {headlines[currentIndex].text}
          </h3>
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {headlines.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-emerald-400' : 'bg-gray-600'
            }`}
            animate={{
              scale: index === currentIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}
