"use client"

import type React from "react"

interface PageBackgroundProps {
  children: React.ReactNode
  variant?: "default" | "hero" | "projects" | "contact"
}

export function PageBackground({ children, variant = "default" }: PageBackgroundProps) {
  const getOverlayClass = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-transparent via-purple-900/3 to-blue-900/3"
      case "projects":
        return "bg-gradient-to-br from-transparent via-blue-900/3 to-cyan-900/3"
      case "contact":
        return "bg-gradient-to-br from-transparent via-green-900/3 to-emerald-900/3"
      default:
        return "bg-gradient-to-br from-transparent via-gray-800/3 to-gray-700/3"
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Simplified page-specific overlay */}
      <div className={`absolute inset-0 ${getOverlayClass()}`} />

      {/* Content with proper z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
