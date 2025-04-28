"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PortfolioSection({ projects = [] }) {
  // Fallback data if WordPress data is not available
  const fallbackProjects = [
    {
      id: 1,
      title: "E-commerce Luxe",
      description: "Plateforme de vente en ligne pour une marque de luxe avec intégration de paiement sécurisé.",
      image: "/placeholder.svg?height=600&width=800",
      category: "e-commerce",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Application SaaS",
      description: "Dashboard interactif pour une startup tech avec visualisation de données en temps réel.",
      image: "/placeholder.svg?height=600&width=800",
      category: "application",
      tags: ["React", "Node.js", "Chart.js"],
    },
    {
      id: 3,
      title: "Site Vitrine Immobilier",
      description: "Présentation élégante pour une agence immobilière de prestige avec recherche avancée.",
      image: "/placeholder.svg?height=600&width=800",
      category: "vitrine",
      tags: ["WordPress", "Custom API", "Animation"],
    },
    {
      id: 4,
      title: "Campagne Google Ads",
      description: "Stratégie publicitaire complète pour un lancement de produit avec +200% de ROI.",
      image: "/placeholder.svg?height=600&width=800",
      category: "marketing",
      tags: ["Google Ads", "Analytics", "Conversion"],
    },
  ]

  const displayProjects = projects.length > 0 ? projects : fallbackProjects

  const [filter, setFilter] = useState("all")
  const categories = ["all", "e-commerce", "application", "vitrine", "marketing"]

  const filteredProjects =
    filter === "all" ? displayProjects : displayProjects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre Portfolio
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez nos réalisations et projets qui ont transformé la présence digitale de nos clients.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category === "all" ? "Tous" : category}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-accent/20 text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                        Voir le projet
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  )
}
