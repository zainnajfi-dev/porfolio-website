"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Code } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 3.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              {/* Main Logo Container */}
              <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 rounded-xl shadow-lg relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-4 transition-transform duration-500" />
                
                {/* Z Symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Z Shape with 3D effect */}
                    <div className="w-6 h-6 relative">
                      {/* Top horizontal line */}
                      <div className="absolute top-0 left-0 w-6 h-0.5 bg-white rounded-full shadow-sm" />
                      {/* Diagonal line */}
                      <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full shadow-sm transform -translate-y-1/2 rotate-45 origin-left" />
                      {/* Bottom horizontal line */}
                      <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white rounded-full shadow-sm" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300" />
                <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300" />
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
            </div>
            
            <div>
              <div className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors duration-300">ZAIN</div>
              <div className="text-xs text-gray-400 -mt-1">Software Engineer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  pathname === item.href
                    ? "text-emerald-400 bg-emerald-400/10 border border-emerald-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    pathname === item.href
                      ? "text-emerald-400 bg-emerald-400/10 border border-emerald-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
