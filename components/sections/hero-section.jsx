"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

/**
 * Section Hero du site avec design moderne
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.content - Le contenu de la section hero
 */
export function HeroSection({ content }) {
  // Vérifier si content existe et fournir des valeurs par défaut si nécessaire
  const {
    tagline = "Agence Web & Digitale",
    titleLine1 = "Des sites web",
    titleLine2 = "qui fonctionnent",
    titleLine3 = "vraiment",
    subtitle = "Nous créons des expériences digitales innovantes et des solutions web performantes.",
    primaryButton = { label: "Découvrir nos services", url: "#services" },
    secondaryButton = { label: "Nous contacter", url: "#contact" },
    scrollText = "Explorer",
    technologies = ["React", "Next.js", "Tailwind", "WordPress", "Google Ads"],
  } = content || {}

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Arrière-plan avec dégradés */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="text-sm uppercase tracking-widest text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tagline}
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>{titleLine1} </span>
            <span>{titleLine2} </span>
            <span className="font-normal italic text-primary">{titleLine3}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-foreground border-0 rounded-full px-8 h-14 text-lg"
              asChild
            >
              <Link href={primaryButton.url}>
                <span>{primaryButton.label}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 rounded-full px-8 h-14 text-lg hover:bg-background/5"
              asChild
            >
              <Link href={secondaryButton.url}>{secondaryButton.label}</Link>
            </Button>
          </motion.div>

          {/* Indicateurs de technologie */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-sm font-medium shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">{scrollText}</span>
          <div className="w-0.5 h-10 bg-muted animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}
