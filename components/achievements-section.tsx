"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    id: 1,
    title: "Dean's List Award",
    organization: "COMSATS University Islamabad",
    year: "2023",
    description: "Recognized for academic excellence and maintaining a GPA above 3.8",
    color: "from-yellow-500 to-orange-600",
    type: "Academic"
  },
  {
    id: 2,
    title: "Best Final Year Project",
    organization: "Software Engineering Department",
    year: "2024",
    description: "ConstructCraft mobile app recognized for innovation and technical excellence",
    color: "from-blue-500 to-cyan-600",
    type: "Project"
  },
  {
    id: 3,
    title: "Outstanding Intern Award",
    organization: "TrustNexus",
    year: "2024",
    description: "Recognized for exceptional performance and contribution to NEXI Robot project",
    color: "from-green-500 to-emerald-600",
    type: "Professional"
  },
  {
    id: 4,
    title: "Hackathon Winner",
    organization: "University Tech Fest",
    year: "2023",
    description: "First place in web development category for innovative solution",
    color: "from-purple-500 to-pink-600",
    type: "Competition"
  }
]

const certifications = [
  {
    id: 1,
    title: "React.js Developer Certification",
    organization: "Meta (Facebook)",
    year: "2024",
    description: "Comprehensive React.js development and modern web applications",
    color: "from-blue-500 to-cyan-600",
    type: "Frontend"
  },
  {
    id: 2,
    title: "Flutter Development Certification",
    organization: "Google",
    year: "2023",
    description: "Cross-platform mobile app development with Flutter and Dart",
    color: "from-blue-400 to-indigo-600",
    type: "Mobile"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    organization: "Udemy",
    year: "2023",
    description: "Server-side JavaScript development and RESTful API design",
    color: "from-green-500 to-emerald-600",
    type: "Backend"
  },
  {
    id: 4,
    title: "TypeScript Fundamentals",
    organization: "Microsoft",
    year: "2024",
    description: "Type-safe JavaScript development and advanced TypeScript features",
    color: "from-blue-600 to-purple-600",
    type: "Programming"
  }
]

export function AchievementsSection() {
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
          <h2 className="text-4xl font-bold mb-6 gradient-text">Achievements & Certifications</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Recognition for academic excellence, professional achievements, and continuous learning
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass-card transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-blue-400 text-sm font-medium">{achievement.organization}</span>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-400 text-sm">{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    <div className="mt-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        achievement.type === "Academic" 
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : achievement.type === "Project"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : achievement.type === "Professional"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      }`}>
                        {achievement.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass-card transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-blue-400 text-sm font-medium">{cert.organization}</span>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-400 text-sm">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                    <div className="mt-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cert.type === "Frontend" 
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : cert.type === "Mobile"
                          ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                          : cert.type === "Backend"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      }`}>
                        {cert.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
