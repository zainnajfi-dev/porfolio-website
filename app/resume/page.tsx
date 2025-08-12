"use client"

import { motion } from "framer-motion"
import { Download, ExternalLink, Calendar, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "COMSATS University Islamabad",
    period: "2021 - 2025",
    description: "Specialized in Web Development, Mobile App Development, Game Development, AI, ML, and Data Science",
  },
]

const experience = [
  {
    title: "Frontend Developer Intern",
    company: "TrustNexus",
    period: "6 months",
    description:
      "Built production-ready UI using React, Tailwind CSS, and animated design systems. Collaborated with cross-functional teams to deliver high-quality user experiences.",
  },
  {
    title: "Intern",
    company: "FES Higher Education Consultants Pvt. Ltd.",
    period: "3 months",
    description:
      "Learned global university processes, educational marketing strategies, and student guidance methodologies. Assisted in developing digital marketing campaigns.",
  },
]

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
  Backend: ["Node.js", "Express.js", "Firebase", "MongoDB", "REST APIs", "JWT Auth"],
  Mobile: ["Flutter", "Dart", "Firebase"],
  Tools: ["GitHub", "Vercel", "Netlify", "Trello", "Cursor AI"],
  Concepts: ["Responsive Design", "State Management", "CI/CD", "API Integration", "UI/UX"],
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Resume</h1>
          <p className="text-xl text-gray-300 mb-8">Detailed view of my professional experience and qualifications</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <a
                href="https://drive.google.com/file/d/1ABsTTWTTCRuDdnMXrtF52Gp5M7WhdVpK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-300 hover:bg-emerald-500/10 bg-transparent"
            >
              <a
                href="https://drive.google.com/file/d/1ABsTTWTTCRuDdnMXrtF52Gp5M7WhdVpK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Online
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text text-center">Muhammad Ali Zain Ul Abidin</CardTitle>
              <p className="text-center text-gray-300 text-lg">Software Engineer & Full Stack Developer</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">zainalinajfi@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">+92 322 0748472</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Islamabad, Pakistan</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
          {education.map((edu, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-4">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-emerald-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-300">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Experience</h2>
          {experience.map((exp, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-4">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-emerald-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-400">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
