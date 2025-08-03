"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
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
      className="fixed top-0 left-0 right-0 z-40 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 border-2 border-blue-500 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 group-hover:border-blue-400 transition-colors duration-300">
              <div className="text-center">
                <div className="text-sm font-bold gradient-text leading-none">MAZ</div>
                <div className="text-xs text-gray-400 leading-none">DEV</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300">Muhammad Ali Zain</div>
              <div className="text-xs text-gray-400 -mt-1">Full Stack Developer</div>
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
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-800/50 glass-nav"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    pathname === item.href
                      ? "text-blue-400 bg-blue-400/10"
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
