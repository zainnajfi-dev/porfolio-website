"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Briefcase, Building, Code, Users, GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageBackground } from "@/components/page-background"

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TrustNexus",
    duration: "6 months",
    location: "Remote",
    period: "Jan 2024 - Jun 2024",
    description:
      "Worked on a real project developing the NEXI Robot super admin dashboard and UI. Built production-ready interfaces using React, Tailwind CSS, and modern component-driven development. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    achievements: [
      "Designed and developed super admin dashboard for NEXI Robot project",
      "Built 15+ reusable React components for the design system",
      "Improved page load times by 40% through code optimization",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Participated in code reviews and maintained high code quality standards",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Git", "Figma"],
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    type: "Development",
  },
  {
    id: 2,
    title: "Summer Intern",
    company: "FES Higher Education Consultants Pvt. Ltd.",
    duration: "2 months",
    location: "Islamabad, Pakistan",
    period: "Jun 2023 - Aug 2023",
    description:
      "Learned about global university processes, student counseling, educational marketing strategies, and documentation processes. Assisted in developing digital marketing campaigns and student guidance programs.",
    achievements: [
      "Assisted 50+ students with university application processes",
      "Developed digital marketing content for social media platforms",
      "Created documentation templates for student counseling sessions",
      "Participated in educational seminars and workshops",
    ],
    technologies: ["Microsoft Office", "Social Media Marketing", "Content Creation", "Documentation"],
    icon: Building,
    color: "from-green-500 to-emerald-600",
    type: "Consulting",
  },
]

const education = {
  degree: "BS Software Engineering",
  university: "COMSATS University Islamabad, Abbottabad Campus",
  duration: "2021 - 2025",
  description: "Focused on creating modern, responsive, and scalable web applications. Completed coursework in software engineering principles, web development, mobile development, and database management.",
  achievements: [
    "Final Year Project: ConstructCraft - Mobile construction management app",
    "Strong foundation in React.js, Flutter, and modern web technologies",
    "Hands-on experience in both academic and professional settings",
  ],
  technologies: ["React.js", "Flutter", "Node.js", "Firebase", "TypeScript", "Tailwind CSS"],
}

const skills = [
  { name: "Team Collaboration", icon: Users },
  { name: "Problem Solving", icon: Code },
  { name: "Project Management", icon: Briefcase },
  { name: "Communication", icon: Users },
  { name: "Continuous Learning", icon: GraduationCap },
  { name: "Quality Assurance", icon: Award },
]

export default function ExperiencePage() {
  return (
    <PageBackground variant="default">
      <div className="py-20 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text drop-shadow-lg">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              My journey in software engineering, showcasing hands-on experience in frontend development, educational
              consulting, and collaborative project delivery.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h2>
            <Card className="glass-card transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl text-white">{education.degree}</CardTitle>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          Graduating 2025
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span className="text-blue-400 font-medium">{education.university}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{education.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-200 text-lg leading-relaxed">{education.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-200">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Technologies Learned:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-gray-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Work Experience</h2>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="glass-card transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl">
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${experience.color} shadow-lg`}>
                            <experience.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-2xl text-white">{experience.title}</CardTitle>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                experience.type === "Development" 
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" 
                                  : "bg-green-500/20 text-green-400 border border-green-500/30"
                              }`}>
                                {experience.type}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                              <div className="flex items-center space-x-1">
                                <Briefcase size={16} />
                                <span className="text-blue-400 font-medium">{experience.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span>{experience.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={16} />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-200 text-lg leading-relaxed">{experience.description}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-gray-200">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-gray-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">Professional Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <skill.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium text-sm">{skill.name}</h3>
                </motion.div>
              ))}
            </div>

            <div className="glass-card rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready for New Opportunities</h3>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                I'm actively seeking full-time opportunities where I can contribute my skills in frontend development,
                full-stack solutions, and collaborative team environments. Passionate about building scalable applications
                and creating exceptional user experiences.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Connect
                <ExternalLink className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageBackground>
  )
}
