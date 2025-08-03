"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageBackground } from "@/components/page-background"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "MedSpark Premedical Website",
    description:
      "A comprehensive medical education platform built with React and Node.js, featuring course management, student progress tracking, interactive learning modules, and real-time assessments for premedical students.",
    image: "/medspark-project.svg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveUrl: "https://github.com/zainnajfi-dev",
    githubUrl: "https://github.com/zainnajfi-dev",
    icon: Globe,
    color: "from-red-500 to-pink-600",
    status: "Completed",
    year: "2024",
  },
  {
    id: 2,
    title: "DevConnect",
    description:
      "A social networking platform for developers to connect, share projects, and collaborate. Features real-time messaging, project showcases, skill matching, code sharing, and professional networking capabilities.",
    image: "/devconnect-project.svg",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://github.com/zainnajfi-dev",
    githubUrl: "https://github.com/zainnajfi-dev",
    icon: Database,
    color: "from-blue-500 to-cyan-600",
    status: "In Progress",
    year: "2024",
  },
  {
    id: 3,
    title: "ConstructCraft (FYP)",
    description:
      "Final Year Project - A comprehensive construction management mobile app built with Flutter and Firebase, featuring project tracking, team collaboration, resource management, timeline monitoring, and real-time updates.",
    image: "/constructcraft-project.svg",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Material Design"],
    liveUrl: "https://github.com/zainnajfi-dev",
    githubUrl: "https://github.com/zainnajfi-dev",
    icon: Smartphone,
    color: "from-green-500 to-emerald-600",
    status: "Completed",
    year: "2023",
  },
]

export default function ProjectsPage() {
  return (
    <PageBackground variant="projects">
      <div className="py-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text drop-shadow-lg">Featured Projects</h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              A showcase of my latest work in web development, mobile applications, and full-stack solutions. Each
              project demonstrates modern development practices and innovative problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group h-full gpu-accelerated"
              >
                <Card className="glass-card overflow-hidden transition-all duration-300 h-full shadow-xl hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-200 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20 hover:border-white/30 transition-colors backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3 mt-auto pt-4">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm rounded-lg"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 gradient-text">More Projects Coming Soon</h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                I'm constantly working on new projects and exploring cutting-edge technologies. Check back soon for more
                exciting developments, or explore my GitHub for additional work!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg shadow-xl"
              >
                <a href="https://github.com/zainnajfi-dev" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3" />
                  View All on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageBackground>
  )
}
