"use client"

import { motion } from "framer-motion"
import { Download, Eye, ArrowRight, Send, GraduationCap, Code, Smartphone, Globe, Database, Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactBar } from "@/components/contact-bar"
import HeadlineRotator from "@/components/headline-rotator"
import { TechStackSection } from "@/components/tech-stack-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AchievementsSection } from "@/components/achievements-section"
import { LanguagesToolsSection } from "@/components/languages-tools-section"
import { PageBackground } from "@/components/page-background"
import BrandLoader from "@/components/brand-loader"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { useState } from "react"
import type React from "react"
import Image from "next/image"

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thanks! Your message has been sent. I'll get back to you within 24 hours.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: "Please try again later or contact me directly via email at zainalinajfi@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <BrandLoader />
      <PageBackground variant="hero">
        <div className="pb-32">
          {/* Hero Section */}
          <section className="relative overflow-hidden min-h-screen flex items-center pt-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                className="text-center"
              >
                {/* Education Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.7 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-12 shadow-lg"
                >
                  <GraduationCap className="w-4 h-4" />
                  BS Software Engineering • COMSATS University Islamabad
                </motion.div>

                {/* Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.8 }}
                  className="mb-12"
                >
                  <div className="relative inline-block">
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl relative">
                      <Image
                        src="https://drive.google.com/uc?export=view&id=1n_jdDo58zDPzAQDjvsk84IoebCkv-ydA"
                        alt="Muhammad Ali Zain Ul Abidin"
                        width={176}
                        height={176}
                        className="w-full h-full object-cover"
                        priority
                        onError={(e) => {
                          // Fallback to a placeholder if the image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder-user.jpg";
                        }}
                      />
                    </div>
                    {/* Online Status Dot */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-4 border-gray-900 rounded-full shadow-lg animate-pulse"></div>
                  </div>
                </motion.div>

                {/* ZAIN Brand Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.0 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="relative w-8 h-8">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 rounded-lg shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 relative">
                            <div className="absolute top-0 left-0 w-4 h-0.5 bg-white rounded-full" />
                            <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-white rounded-full transform -translate-y-1/2 rotate-45 origin-left" />
                            <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-white rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-wider">
                      ZAIN
                    </h2>
                  </div>
                  <p className="text-lg text-gray-400 text-center">
                    Muhammad Ali Zain Ul Abidin
                  </p>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.2 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                    Crafting Digital Experiences
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Software Engineering graduate passionate about building scalable web applications and user-centric interfaces. 
                    Transforming ideas into reality with React.js, TypeScript, and cutting-edge web technologies.
                  </p>
                </motion.div>

                {/* Headline Rotator */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.4 }}
                  className="mb-12"
                >
                  <HeadlineRotator />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Link href="/projects">
                    <Button size="lg" className="btn-modern bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-xl">
                      <Eye className="w-5 h-5 mr-2" />
                      View Projects
                    </Button>
                  </Link>
                  <Button asChild size="lg" variant="outline" className="btn-modern border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold">
                    <a
                      href="https://drive.google.com/file/d/1ABsTTWTTCRuDdnMXrtF52Gp5M7WhdVpK/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
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
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">4+</h3>
                  <p className="text-gray-300">Live Projects</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                  <p className="text-gray-300">Technologies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">4</h3>
                  <p className="text-gray-300">Years Education</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                  <p className="text-gray-300">Months Internship</p>
                </div>
              </motion.div>
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
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 gradient-text">Professional Journey</h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  From academic excellence to professional growth, building a foundation for innovative web development
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">Frontend Development</CardTitle>
                          <p className="text-gray-300">React.js, TypeScript, Next.js</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        Specializing in modern web development with React.js and TypeScript. 
                        Building responsive, accessible, and performant user interfaces that deliver exceptional user experiences.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">Backend Development</CardTitle>
                          <p className="text-gray-300">Node.js, Express, MongoDB</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        Creating robust server-side solutions with Node.js and Express. 
                        Designing RESTful APIs and database architectures for scalable web applications.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <TechStackSection />

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
                <h2 className="text-4xl font-bold mb-6 gradient-text">Core Skills</h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Comprehensive web development skills across frontend, backend, and modern development practices
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white">Frontend Development</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        React.js, TypeScript, Next.js, Tailwind CSS, Redux, and modern JavaScript. 
                        Creating responsive and accessible user interfaces with optimal performance.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white">Backend Development</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Node.js, Express.js, REST APIs, MongoDB, and server-side development. 
                        Building scalable backend solutions and database architectures.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white">UI/UX Design</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        User-centered design principles, responsive layouts, and modern design systems. 
                        Creating intuitive and visually appealing user experiences.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white">Version Control</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Git, GitHub, and collaborative development workflows. 
                        Managing code repositories and contributing to team projects effectively.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white">Problem Solving</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Analytical thinking, debugging, and optimization techniques. 
                        Solving complex technical challenges with efficient and scalable solutions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white">Team Collaboration</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Agile methodologies, code reviews, and effective communication. 
                        Working collaboratively in cross-functional development teams.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Languages & Tools Section */}
          <LanguagesToolsSection />

          {/* Achievements Section */}
          <AchievementsSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Contact Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Build Something Amazing</h2>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                          placeholder="Project inquiry"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      <div className="text-center">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="btn-modern bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Sending...
                            </div>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
        <ContactBar />
      </PageBackground>
    </>
  )
}
