"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Particles } from "@/components/particles"

export function HeroSection() {
  const containerRef = useRef(null)

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Particles className="absolute inset-0" quantity={100} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="block text-primary" variants={wordVariants}>
              Transformez
            </motion.span>
            <motion.span className="block" variants={wordVariants}>
              votre présence digitale
            </motion.span>
            <motion.span className="block text-accent" variants={wordVariants}>
              sans limites.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Développement web sur-mesure, campagnes Google Ads performantes et stratégie digitale 360° pour propulser
            votre entreprise.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button size="lg" className="group">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Demander un devis
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Découvrir</span>
          <div className="w-0.5 h-10 bg-muted-foreground/30 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}
