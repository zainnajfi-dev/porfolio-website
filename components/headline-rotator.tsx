"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { GraduationCap, Briefcase, Building, Code } from "lucide-react"

const headlines = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Graduated in BS Software Engineering from COMSATS University Islamabad",
    description: "Studied Web Development, Mobile App Dev, Game Development, AI, ML, Data Science.",
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Frontend Developer Intern at TrustNexus (6 months)",
    description: "Built production-ready UI using React, Tailwind, and animated design systems.",
  },
  {
    id: 3,
    icon: Building,
    title: "Intern at FES Higher Education Consultants Pvt. Ltd.",
    description: "Learned global university processes, educational marketing, student guidance.",
  },
  {
    id: 4,
    icon: Code,
    title: "Key Projects: MedSpark, DevConnect, ConstructCraft",
    description: "Full-stack applications using React, Node.js, Firebase, and Flutter technologies.",
  },
]

function HeadlineRotator() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-48 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="glass-card rounded-lg p-6 w-full">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                {(() => {
                  const IconComponent = headlines[currentIndex].icon
                  return IconComponent ? <IconComponent className="w-6 h-6 text-blue-400" /> : null
                })()}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{headlines[currentIndex].title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{headlines[currentIndex].description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {headlines.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-blue-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeadlineRotator
