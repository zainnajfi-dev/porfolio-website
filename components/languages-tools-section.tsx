"use client"

import { motion } from "framer-motion"
import { Code, Monitor, Database, Zap, GitBranch, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const languages = [
  {
    name: "JavaScript",
    level: "Advanced",
    percentage: 95,
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    percentage: 90,
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "HTML/CSS",
    level: "Advanced",
    percentage: 95,
    color: "from-orange-500 to-pink-600"
  },
  {
    name: "Python",
    level: "Intermediate",
    percentage: 75,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "SQL",
    level: "Intermediate",
    percentage: 80,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "PHP",
    level: "Basic",
    percentage: 60,
    color: "from-purple-600 to-pink-600"
  }
]

const tools = [
  {
    name: "VS Code",
    description: "Primary Code Editor",
    icon: Code,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "GitHub",
    description: "Version Control & Collaboration",
    icon: GitBranch,
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "v0.dev",
    description: "AI-Powered Development",
    icon: Zap,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Cursor",
    description: "AI-Enhanced Editor",
    icon: Monitor,
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "Firebase Studio",
    description: "Database Management & Analytics",
    icon: Database,
    color: "from-orange-500 to-yellow-600"
  },
  {
    name: "Blackbox",
    description: "AI Code Search & Assistant",
    icon: Zap,
    color: "from-gray-800 to-gray-900"
  },
  {
    name: "Qwen",
    description: "AI Code Generation & Analysis",
    icon: Code,
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Manus",
    description: "AI-Powered Code Review",
    icon: Monitor,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Bolt",
    description: "Rapid Prototyping Tool",
    icon: Zap,
    color: "from-purple-600 to-violet-600"
  },
  {
    name: "Framer",
    description: "Design & Prototyping Platform",
    icon: Settings,
    color: "from-pink-500 to-red-600"
  },
  {
    name: "Figma",
    description: "Design & Prototyping",
    icon: Settings,
    color: "from-pink-500 to-red-600"
  },
  {
    name: "Postman",
    description: "API Testing & Development",
    icon: Database,
    color: "from-orange-500 to-red-600"
  }
]

export function LanguagesToolsSection() {
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
          <h2 className="text-4xl font-bold mb-6 gradient-text">Languages & Tools</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Programming languages I work with and development tools that enhance my productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Programming Languages</CardTitle>
                    <p className="text-gray-400">Proficiency levels in various languages</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{language.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        language.level === "Advanced" 
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : language.level === "Intermediate"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}>
                        {language.level}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${language.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Beginner</span>
                        <span>{language.percentage}%</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Development Tools</CardTitle>
                    <p className="text-gray-400">Tools that enhance my development workflow</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div className="p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <tool.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm">{tool.name}</h4>
                            <p className="text-gray-400 text-xs">{tool.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Development Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable, readable, and well-documented code following best practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Performance First</h4>
                <p className="text-gray-400 text-sm">Optimizing applications for speed, efficiency, and excellent user experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Version Control</h4>
                <p className="text-gray-400 text-sm">Using Git workflows for collaborative development and project management</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
