import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BrandLoader } from "@/components/brand-loader"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Ali Zain Ul Abidin - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, Flutter, and AI/ML technologies. Bridging Design and Functionality with Modern Web Technologies.",
  keywords: "Full Stack Developer, React, Next.js, Flutter, Node.js, Web Development, Mobile Development, AI, ML",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen`}>
        <AnimatedBackground />
        <BrandLoader />
        <Navigation />
        <main className="relative z-10 pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  )
}
