"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, Code, Badge, Zap, Calendar, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge as BadgeComponent } from "@/components/ui/badge"
import { PageBackground } from "@/components/page-background"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "MedSpark Healthcare",
    description: "A comprehensive healthcare management system with patient records, appointment scheduling, and medical inventory tracking. Features a modern dashboard with real-time analytics and secure data management.",
    image: "/medspark-project.svg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveUrl: "https://medspark-healthcare.vercel.app",
    githubUrl: "https://github.com/yourusername/medspark",
    status: "Live",
    year: "2024",
    category: "Healthcare",
    features: ["Patient Management", "Appointment Scheduling", "Inventory Tracking", "Analytics Dashboard", "Secure Authentication"],
    highlights: ["Full-stack application", "Real-time updates", "Responsive design", "Admin dashboard"]
  },
  {
    id: 2,
    title: "DevConnect Social",
    description: "A social platform for developers to connect, share projects, and collaborate. Features include user profiles, project showcases, real-time messaging, and community forums.",
    image: "/devconnect-project.svg",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://devconnect-social.vercel.app",
    githubUrl: "https://github.com/yourusername/devconnect",
    status: "Live",
    year: "2024",
    category: "Social Network",
    features: ["User Profiles", "Project Showcase", "Real-time Chat", "Community Forums", "Social Networking"],
    highlights: ["Real-time messaging", "User authentication", "Project sharing", "Community features"]
  },
  {
    id: 3,
    title: "SystemsLimited E-commerce",
    description: "A modern e-commerce platform clone with advanced product management, shopping cart functionality, and secure payment processing. Features responsive design and admin dashboard.",
    image: "/systemslimited-clone.svg",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "https://systemslimited-clone.vercel.app",
    githubUrl: "https://github.com/yourusername/systemslimited-clone",
    status: "Live",
    year: "2024",
    category: "E-commerce",
    features: ["Product Catalog", "Shopping Cart", "Payment Processing", "Admin Dashboard", "Order Management"],
    highlights: ["Payment integration", "Product management", "Order tracking", "Admin panel"]
  },
  {
    id: 4,
    title: "ConstructCraft Management",
    description: "A construction management platform for project planning, resource allocation, and progress tracking. Features include Gantt charts, team collaboration, and document management.",
    image: "/constructcraft.svg",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "https://constructcraft.vercel.app",
    githubUrl: "https://github.com/yourusername/constructcraft",
    status: "Live",
    year: "2024",
    category: "Project Management",
    features: ["Project Planning", "Resource Management", "Progress Tracking", "Team Collaboration", "Document Management"],
    highlights: ["Project tracking", "Resource allocation", "Team collaboration", "Document management"]
  },
  {
    id: 5,
    title: "TaskFlow Pro",
    description: "A comprehensive task management application with Kanban boards, time tracking, and team collaboration features. Perfect for project managers and development teams.",
    image: "/taskflow-pro.svg",
    technologies: ["React.js", "TypeScript", "Firebase", "Tailwind CSS", "DnD Kit"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Demo",
    year: "2024",
    category: "Productivity",
    features: ["Kanban Boards", "Time Tracking", "Team Collaboration", "Progress Analytics", "Custom Workflows"],
    highlights: ["Drag & drop interface", "Time tracking", "Team collaboration", "Progress analytics"]
  },
  {
    id: 6,
    title: "WeatherHub Dashboard",
    description: "A beautiful weather application with real-time data, 7-day forecasts, and interactive maps. Features location-based weather alerts and historical data visualization.",
    image: "/weatherhub.svg",
    technologies: ["Next.js", "TypeScript", "OpenWeather API", "Chart.js", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Demo",
    year: "2024",
    category: "Weather",
    features: ["Real-time Weather", "7-day Forecast", "Interactive Maps", "Weather Alerts", "Historical Data"],
    highlights: ["Real-time data", "Interactive maps", "Weather alerts", "Data visualization"]
  },
  {
    id: 7,
    title: "FinanceTracker Pro",
    description: "A personal finance management tool with expense tracking, budget planning, and financial analytics. Features include multiple account support and investment portfolio tracking.",
    image: "/financetracker-project.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "JWT Auth"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Demo",
    year: "2024",
    category: "Finance",
    features: ["Expense Tracking", "Budget Planning", "Financial Analytics", "Multiple Accounts", "Investment Tracking"],
    highlights: ["Expense tracking", "Budget planning", "Financial analytics", "Investment tracking"]
  },
  {
    id: 8,
    title: "RecipeHub Discovery",
    description: "A recipe discovery and meal planning platform with search functionality, user-generated content, and nutritional information. Features include meal planning and shopping list generation.",
    image: "/recipehub.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Spoonacular API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Demo",
    year: "2024",
    category: "Food & Recipe",
    features: ["Recipe Discovery", "Meal Planning", "Nutritional Info", "Shopping Lists", "User Content"],
    highlights: ["Recipe discovery", "Meal planning", "Nutritional info", "Shopping lists"]
  },
]

const categories = ["All", "Healthcare", "Social Network", "E-commerce", "Project Management", "Productivity", "Weather", "Finance", "Food & Recipe"]

export default function ProjectsPage() {
  return (
    <PageBackground variant="default">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              A showcase of my web development projects, from full-stack applications to modern user interfaces. 
              Each project demonstrates my expertise in React.js, TypeScript, and modern web technologies.
            </p>
            
            {/* Project Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">4</div>
                <div className="text-sm text-gray-400">Live Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-1">4</div>
                <div className="text-sm text-gray-400">Demo Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-purple-400 mb-1">8</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-orange-400 mb-1">2025</div>
                <div className="text-sm text-gray-400">Latest Project</div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className={`border-gray-600 text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-all ${
                  category === "All" ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300" : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass-card h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border-gray-700/50">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <BadgeComponent 
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={`${
                          project.status === "Live" 
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" 
                            : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        }`}
                      >
                        <Badge className="w-3 h-3 mr-1" />
                        {project.status}
                      </BadgeComponent>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <BadgeComponent variant="outline" className="bg-gray-900/50 text-gray-300 border-gray-600">
                        {project.category}
                      </BadgeComponent>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-1 text-white/80 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Project Highlights */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-gray-300">Key Highlights</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded border border-emerald-500/20"
                          >
                            {highlight}
                          </span>
                        ))}
                        {project.highlights.length > 2 && (
                          <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">
                            +{project.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-gray-300">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.status === "Live" ? (
                        <>
                          <Button
                            asChild
                            size="sm"
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="sm"
                            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white cursor-not-allowed"
                            disabled
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Coming Soon
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-400 cursor-not-allowed"
                            disabled
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Card className="glass-card border-emerald-500/30">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Build Something Together?</h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Have a project in mind? Let's discuss how we can bring your ideas to life with modern web technologies and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold">
                    <a href="/contact">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Get In Touch
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold">
                    <a href="/resume">
                      <Users className="w-5 h-5 mr-2" />
                      View Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageBackground>
  )
}
