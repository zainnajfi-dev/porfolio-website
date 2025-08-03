"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function BrandLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="w-32 h-32 border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">MAZ</div>
                  <div className="text-xs text-gray-400 tracking-wider">DEV</div>
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-2xl font-bold gradient-text">Muhammad Ali Zain</h1>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="mx-auto mt-6 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 rounded-full relative overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 2.2, duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/20 rounded-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.4 }}
              className="text-xs text-gray-500 mt-4"
            >
              Loading portfolio...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
