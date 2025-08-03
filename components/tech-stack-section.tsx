"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Globe, Server, Palette } from "lucide-react"

const techStack = [
  {
    name: "React.js",
    description: "Building dynamic front-end interfaces",
    icon: Code,
    color: "from-blue-400 to-blue-600",
    delay: 0,
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production",
    icon: Globe,
    color: "from-gray-400 to-gray-600",
    delay: 0.1,
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript runtime",
    icon: Server,
    color: "from-green-400 to-green-600",
    delay: 0.2,
  },
  {
    name: "Firebase",
    description: "Backend-as-a-Service platform",
    icon: Database,
    color: "from-yellow-400 to-orange-600",
    delay: 0.3,
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile development",
    icon: Smartphone,
    color: "from-blue-400 to-cyan-600",
    delay: 0.4,
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development",
    icon: Code,
    color: "from-blue-500 to-blue-700",
    delay: 0.5,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: Palette,
    color: "from-cyan-400 to-cyan-600",
    delay: 0.6,
  },
  {
    name: "MongoDB",
    description: "NoSQL database for modern apps",
    icon: Database,
    color: "from-green-500 to-green-700",
    delay: 0.7,
  },
]

export function TechStackSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 gradient-text">Tech Stack & Tools</h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Specialized in modern web technologies with a focus on performance, scalability, and exceptional user
          experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tech.delay }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group gpu-accelerated"
          >
            <div className="glass-card rounded-2xl p-6 transition-all duration-300 h-full hover:shadow-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{tech.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
