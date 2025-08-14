import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Ali Zain Ul Abidin - Software Engineer & Full Stack Developer",
  description:
    "Software Engineering graduate from COMSATS University, specializing in React.js, TypeScript, Express.js, Node.js, and modern web technologies. Building scalable applications with a focus on user experience.",
  keywords: "Software Engineer, Full Stack Developer, React.js, TypeScript, Node.js, Web Development, COMSATS University",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background`}>
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10 pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  )
}
