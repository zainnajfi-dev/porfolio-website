"use client"
import Link from "next/link"
import { Mail, Phone, Github, Linkedin, Instagram, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-20 bg-gradient-to-t from-gray-900 to-gray-800 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-blue-500 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <div className="text-sm font-bold gradient-text leading-none">MAZ</div>
                  <div className="text-xs text-gray-400 leading-none">DEV</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-lg text-white">Muhammad Ali Zain</div>
                <div className="text-sm text-gray-400">Full Stack Developer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Bridging Design and Functionality with Modern Web Technologies. Specialized in React, Node.js, Flutter,
              and AI/ML enthusiast creating seamless digital experiences.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Available for new opportunities</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/projects"
                className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors group"
              >
                <span>Projects</span>
                <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/experience"
                className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors group"
              >
                <span>Experience</span>
                <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors group"
              >
                <span>Contact</span>
                <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:zainalinajfi@gmail.com"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <Mail size={16} className="text-blue-400" />
                <span>zainalinajfi@gmail.com</span>
              </a>
              <a
                href="tel:+923220748472"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <Phone size={16} className="text-green-400" />
                <span>+92 322 0748472</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/zainnajfi-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-zain-ul-abidin-131617350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/zain_najfi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Instagram size={20} className="text-gray-400 group-hover:text-pink-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Muhammad Ali Zain Ul Abidin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
