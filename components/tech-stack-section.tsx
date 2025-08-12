"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Globe, 
  Database, 
  Zap, 
  GitBranch, 
  Shield, 
  Cpu, 
  Layers,
  FileCode,
  Type,
  Server,
  Palette,
  CircleDot,
  Flame,
  Network
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const techStack = [
  {
    name: "React.js",
    description: "Frontend Development",
    icon: FileCode,
    color: "from-blue-500 to-cyan-600",
    level: "Advanced"
  },
  {
    name: "TypeScript",
    description: "Type Safety & Development",
    icon: Type,
    color: "from-blue-600 to-blue-700",
    level: "Advanced"
  },
  {
    name: "Next.js",
    description: "Full Stack Framework",
    icon: Globe,
    color: "from-gray-700 to-gray-900",
    level: "Advanced"
  },
  {
    name: "Node.js",
    description: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-600",
    level: "Intermediate"
  },
  {
    name: "Tailwind CSS",
    description: "Styling & Design",
    icon: Palette,
    color: "from-cyan-500 to-blue-600",
    level: "Advanced"
  },
  {
    name: "Redux",
    description: "State Management",
    icon: CircleDot,
    color: "from-purple-500 to-pink-600",
    level: "Intermediate"
  },
  {
    name: "Firebase",
    description: "Backend Services",
    icon: Flame,
    color: "from-orange-500 to-yellow-600",
    level: "Intermediate"
  },
  {
    name: "REST APIs",
    description: "API Development",
    icon: Network,
    color: "from-emerald-500 to-teal-600",
    level: "Advanced"
  }
]

export function TechStackSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Tech Stack</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Modern web development technologies and tools I use to build scalable, performant applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="glass-card h-full transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg font-semibold">{tech.name}</CardTitle>
                      <p className="text-gray-400 text-sm mt-1">{tech.description}</p>
                      <div className="mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tech.level === "Advanced" 
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}>
                          {tech.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Git & GitHub", icon: GitBranch, color: "from-orange-500 to-red-600" },
                { name: "Responsive Design", icon: Globe, color: "from-blue-500 to-purple-600" },
                { name: "Performance Optimization", icon: Zap, color: "from-yellow-500 to-orange-600" },
                { name: "Security Best Practices", icon: Shield, color: "from-green-500 to-emerald-600" },
                { name: "Testing & Debugging", icon: Cpu, color: "from-purple-500 to-pink-600" },
                { name: "CI/CD Pipelines", icon: Layers, color: "from-cyan-500 to-blue-600" },
                { name: "API Integration", icon: Database, color: "from-emerald-500 to-teal-600" },
                { name: "Code Quality", icon: Code, color: "from-gray-500 to-gray-700" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
