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
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                {/* Education Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-8 shadow-lg"
                >
                  <GraduationCap className="w-4 h-4" />
                  BS Software Engineering • COMSATS University Islamabad
                </motion.div>

                {/* Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-8"
                >
                  <div className="relative inline-block">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl relative">
                      <Image
                        src="https://drive.google.com/uc?export=view&id=1n_jdDo58zDPzAQDjvsk84IoebCkv-ydA"
                        alt="Muhammad Ali Zain Ul Abidin"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        priority
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder-user.jpg";
                        }}
                      />
                    </div>
                    {/* Online Status Dot */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 border-4 border-gray-900 rounded-full shadow-lg animate-pulse"></div>
                  </div>
                </motion.div>

                {/* Full Name Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="mb-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-wide mb-2">
                    Muhammad Ali Zain Ul Abidin
                  </h2>
                  <p className="text-lg text-gray-400 font-medium">
                    Software Engineer & Full Stack Developer
                  </p>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                    Crafting Digital Experiences
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Passionate about building scalable web applications and user-centric interfaces. 
                    Transforming ideas into reality with MERN Stack and cutting-edge web technologies.
                  </p>
                </motion.div>

                {/* Headline Rotator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="mb-10"
                >
                  <HeadlineRotator />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
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
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">4+</h3>
                  <p className="text-gray-300 text-sm">Live Projects</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
                  <p className="text-gray-300 text-sm">Technologies</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">4</h3>
                  <p className="text-gray-300 text-sm">Years Education</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
                  <p className="text-gray-300 text-sm">Months Internship</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Professional Journey Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 gradient-text">Professional Journey</h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  From academic excellence to professional growth, building a foundation for innovative web development
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                          <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">Frontend Development</CardTitle>
                          <p className="text-gray-300 text-sm">React.js, TypeScript, Next.js,Shadcn UI, Tailwind CSS, Bootstrap</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Specializing in modern web development with React.js and TypeScript. 
                        Building responsive, accessible, and performant user interfaces that deliver exceptional user experiences.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">Backend Development</CardTitle>
                          <p className="text-gray-300 text-sm">Express.js, Node.js, MongoDB, MySQL, PostgreSQL</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed text-sm">
                      Specializing in building scalable backend services using Node.js, Express.js, and MongoDB,
                       with expertise in RESTful API development, authentication, and cloud deployment.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <TechStackSection />

          {/* Achievements Section */}
          <AchievementsSection />

          {/* Languages & Tools Section */}
          <LanguagesToolsSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Contact Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 gradient-text">Let's Connect</h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
                          />
                        </div>
                      </div>
                      <div>
                        <Input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 resize-none"
                        />
                      </div>
                      <div className="text-center">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-8 py-3 text-lg font-semibold shadow-xl"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending...
                            </>
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
      </PageBackground>
      <ContactBar />
    </>
  )
}
