"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Section Témoignages avec design moderne et cohérent
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.testimonials - Les témoignages à afficher
 */
export function TestimonialsSection({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef(null)
  const testimonialsRef = useRef(null)

  // Gestion du défilement automatique
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, testimonials.length])

  // Pause de l'autoplay au survol
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Navigation
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToIndex = (index) => {
    setActiveIndex(index)
  }

  // Rendu des étoiles
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-accent fill-accent" : "text-gray-300 dark:text-gray-600"}`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Arrière-plan avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>

      {/* Formes décoratives */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            💬 Ce que nos clients disent de nous
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez les expériences de nos clients et comment nous avons transformé leur présence digitale
          </motion.p>
        </div>

        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={testimonialsRef}
        >
          {/* Carrousel de témoignages */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-card shadow-lg rounded-3xl overflow-hidden">
                      <div className="p-8 md:p-12">
                        <div className="flex items-center mb-6">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-accent">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                            <p className="text-muted-foreground">{testimonial.role}</p>
                            <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                          </div>
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium italic mb-6 relative">
                          <span className="absolute -top-4 -left-2 text-6xl text-accent opacity-20">"</span>
                          <p className="relative z-10">{testimonial.content}</p>
                          <span className="absolute -bottom-8 -right-2 text-6xl text-accent opacity-20">"</span>
                        </blockquote>

                        {testimonial.project && (
                          <div className="mt-8 pt-6 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-2">Projet réalisé :</p>
                            <p className="font-medium">{testimonial.project}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrôles de navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-background shadow-md border-2 z-20"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Précédent</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-background shadow-md border-2 z-20"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-accent w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToIndex(index)}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
