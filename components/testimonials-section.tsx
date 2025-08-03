"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TrustNexus",
    content: "Muhammad Ali demonstrated exceptional technical skills and attention to detail. His React components were consistently high-quality and his collaborative approach made him a valuable team member.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Senior Developer",
    company: "TechCorp",
    content: "Working with Muhammad Ali was a great experience. His problem-solving abilities and clean code practices significantly improved our project's performance and maintainability.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Design Studio",
    content: "Muhammad Ali's understanding of both frontend and backend development made him an excellent collaborator. He always delivered pixel-perfect implementations.",
    rating: 5,
    avatar: "👩‍🎨"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">What People Say</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Feedback from colleagues and clients about my work and collaboration style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group gpu-accelerated"
            >
              <Card className="glass-card h-full transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                        <div className="text-xs text-blue-400">{testimonial.company}</div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-blue-400/50 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 