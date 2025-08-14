"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { PageBackground } from "@/components/page-background"

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zainalinajfi@gmail.com",
      href: "mailto:zainalinajfi@gmail.com",
      color: "text-emerald-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 322 0748472",
      href: "tel:+923220748472",
      color: "text-emerald-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "text-emerald-400",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/zainnajfi-dev",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-ali-zain-ul-abidin-131617350",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/zain_najfi/",
      color: "hover:text-pink-400",
    },
  ]

  return (
    <PageBackground variant="contact">
      <div className="py-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text drop-shadow-lg">Get In Touch</h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with modern
              web technologies and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text mb-2">Send a Message</CardTitle>
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
                          className="bg-gray-700/50 border-gray-600 text-white focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12"
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
                          className="bg-gray-700/50 border-gray-600 text-white focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12"
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
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12"
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
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-emerald-400 focus:ring-emerald-400/20 resize-none rounded-xl"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 disabled:opacity-50 h-14 rounded-xl text-lg font-medium"
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

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <Card className="glass-card shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Contact Information</CardTitle>
                  <p className="text-gray-400">Feel free to reach out through any of these channels</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/30 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-3 bg-gray-700/50 rounded-xl">
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        {info.href !== "#" ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-emerald-400 transition-colors font-medium"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Connect on Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-all group ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-emerald-500/30 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-400/20 rounded-xl">
                      <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Available for Projects</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        I'm currently available for freelance projects and full-time opportunities. Let's discuss how I
                        can help bring your vision to life with modern web technologies!
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock size={16} />
                        <span>Response time: Within 24 hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageBackground>
  )
}
