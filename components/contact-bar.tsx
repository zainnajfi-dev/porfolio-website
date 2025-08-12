"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react"

export function ContactBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 shadow-2xl p-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-6">
        <a
          href="mailto:zainalinajfi@gmail.com"
          className="flex items-center space-x-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors group"
        >
          <Mail size={16} className="group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">zainalinajfi@gmail.com</span>
        </a>
        <a
          href="tel:+923001234567"
          className="flex items-center space-x-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors group"
        >
          <Phone size={16} className="group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">+92 300 1234567</span>
        </a>
        <a
          href="https://github.com/zainnajfi-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors group"
        >
          <Github size={16} className="group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-ali-zain-ul-abidin-131617350"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors group"
        >
          <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.instagram.com/zain_najfi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors group"
        >
          <Instagram size={16} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}
