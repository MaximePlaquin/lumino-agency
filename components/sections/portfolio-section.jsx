"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * Section Portfolio du site avec design moderne
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.projects - Les projets du portfolio
 */
export function PortfolioSection({ projects }) {
  const [filter, setFilter] = useState("all")

  // Extraction des catégories uniques des projets
  const categories = ["all", ...new Set(projects.items.map((project) => project.category))]

  // Filtrage des projets selon la catégorie sélectionnée
  const filteredProjects =
    filter === "all" ? projects.items : projects.items.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.p
            className="text-sm uppercase tracking-widest text-gray-500 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {projects.title}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-500 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
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
                className={`capitalize rounded-full px-6 ${
                  filter === category ? "bg-gradient-to-r from-primary to-primary/80 text-white border-0" : "border-2"
                }`}
              >
                {category === "all" ? projects.allCategoryLabel : category}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button className="rounded-full bg-white text-gray-900 hover:bg-white/90" size="sm" asChild>
                        <Link href={project.url}>{projects.viewProjectLabel}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="rounded-full border-2 px-8 h-14 text-lg" asChild>
            <Link href={projects.viewAllUrl}>{projects.viewAllLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
