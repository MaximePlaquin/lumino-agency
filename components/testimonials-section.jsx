"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection({ testimonials = [] }) {
  // Fallback data if WordPress data is not available
  const fallbackTestimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "CEO, FashionTech",
      content:
        "Travailler avec cette agence a été une expérience exceptionnelle. Leur équipe a parfaitement compris nos besoins et a livré un site e-commerce qui a dépassé toutes nos attentes.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Directeur Marketing, InnoGroup",
      content:
        "Les campagnes Google Ads mises en place ont généré un ROI impressionnant. Leur approche data-driven et leur réactivité font toute la différence.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Marie Leroy",
      role: "Fondatrice, StartupVision",
      content:
        "La refonte complète de notre stratégie digitale a transformé notre entreprise. Une équipe professionnelle qui livre des résultats concrets.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % displayTestimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + displayTestimonials.length) % displayTestimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Témoignages Clients
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez ce que nos clients disent de notre collaboration et des résultats obtenus.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-accent opacity-20">
            <Quote size={80} />
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="pt-10">
                <div className="text-center space-y-6">
                  <p className="text-lg md:text-xl italic">"{displayTestimonials[current].content}"</p>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage
                        src={displayTestimonials[current].avatar || "/placeholder.svg"}
                        alt={displayTestimonials[current].name}
                      />
                      <AvatarFallback>{displayTestimonials[current].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{displayTestimonials[current].name}</h4>
                      <p className="text-sm text-muted-foreground">{displayTestimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === current ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
