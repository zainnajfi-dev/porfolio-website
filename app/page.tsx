"use client"

import { motion } from "framer-motion"
import { Download, Eye, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactBar } from "@/components/contact-bar"
import HeadlineRotator from "@/components/headline-rotator"
import { TechStackSection } from "@/components/tech-stack-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PageBackground } from "@/components/page-background"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { useState } from "react"
import type React from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3

      if (isSuccess) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thanks! Your message has been sent. I'll get back to you within 24 hours.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast({
          title: "Oops! Something went wrong.",
          description: "Please try again later or contact me directly via email at zainalinajfi@gmail.com",
          variant: "destructive",
        })
      }
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <PageBackground variant="hero">
      <div className="pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="text-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 3.7 }}
              >
                <span className="gradient-text">Muhammad Ali</span>
                <br />
                <span className="text-white drop-shadow-lg">Zain Ul Abidin</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
              >
                Full Stack Developer | Bridging Design and Functionality with Modern Web Technologies
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2 }}
                className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto drop-shadow-sm"
              >
                Specialized in React, Node.js, Flutter, and AI/ML enthusiast creating seamless digital experiences
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
                >
                  <a
                    href="https://drive.google.com/file/d/1ABsTTWTTCRuDdnMXrtF52Gp5M7WhdVpK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-500/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-medium bg-white/5 backdrop-blur-sm transition-all duration-300 shadow-lg"
                >
                  <a
                    href="https://drive.google.com/file/d/1ABsTTWTTCRuDdnMXrtF52Gp5M7WhdVpK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="mr-3 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Key Achievements</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Numbers that reflect my commitment to excellence and continuous growth
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "3", label: "Projects Completed", icon: "🚀" },
                { number: "15+", label: "React Components", icon: "⚛️" },
                { number: "40%", label: "Performance Improvement", icon: "⚡" },
                { number: "50+", label: "Students Assisted", icon: "👥" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Journey Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text drop-shadow-lg">
                Professional Journey
              </h2>
              <HeadlineRotator />
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20">
          <TechStackSection />
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Core Skills & Expertise</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Specialized in modern web technologies with a focus on performance, scalability, and exceptional user experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  description: "React, Next.js, TypeScript, Tailwind CSS",
                  icon: "🎨",
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Backend Development",
                  description: "Node.js, Express, MongoDB, Firebase",
                  icon: "⚙️",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "Mobile Development",
                  description: "Flutter, Dart, Cross-platform apps",
                  icon: "📱",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "UI/UX Design",
                  description: "Responsive design, User experience",
                  icon: "✨",
                  color: "from-yellow-500 to-orange-600"
                },
                {
                  title: "Version Control",
                  description: "Git, GitHub, Collaborative development",
                  icon: "🔧",
                  color: "from-gray-500 to-gray-700"
                },
                {
                  title: "Problem Solving",
                  description: "Analytical thinking, Creative solutions",
                  icon: "🧠",
                  color: "from-indigo-500 to-purple-600"
                }
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group gpu-accelerated"
                >
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 h-full hover:shadow-xl">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Work Together</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Let's discuss how we can bring your ideas to life with modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl gradient-text mb-2">Send Me a Message</CardTitle>
                  <p className="text-gray-400">I'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-3">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-3">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-3">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-3">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/20 resize-none rounded-xl"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 h-14 rounded-xl text-lg font-medium shadow-xl"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Explore my projects and experience, or get in touch to discuss your next innovative solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg shadow-xl"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-500/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg bg-white/5 backdrop-blur-sm"
                >
                  <Link href="/experience">View Experience</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <ContactBar />
    </PageBackground>
  )
}
