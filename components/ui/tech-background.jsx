"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

/**
 * Composant d'arrière-plan technologique avec formes géométriques et grille
 */
export function TechBackground() {
  const { theme } = useTheme()
  const canvasRef = useRef(null)

  // Effet pour dessiner la grille technologique
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []
    let connections = []

    // Redimensionnement du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Initialisation des particules
    const initParticles = () => {
      particles = []
      connections = []

      // Créer des particules
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        })
      }

      // Créer des connexions entre particules
      for (let i = 0; i < particleCount; i++) {
        const connectionsCount = Math.floor(Math.random() * 2) + 1
        for (let j = 0; j < connectionsCount; j++) {
          const target = Math.floor(Math.random() * particleCount)
          if (i !== target) {
            connections.push({
              from: i,
              to: target,
            })
          }
        }
      }
    }

    // Animation des particules et connexions
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Couleurs basées sur le thème
      const primaryColor = theme === "dark" ? "rgba(59, 130, 246, 0.5)" : "rgba(30, 58, 138, 0.5)"
      const secondaryColor = theme === "dark" ? "rgba(59, 130, 246, 0.2)" : "rgba(30, 58, 138, 0.2)"
      const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"

      // Dessiner la grille
      const gridSize = 30
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Dessiner les formes géométriques
      const shapes = 5
      for (let i = 0; i < shapes; i++) {
        const time = Date.now() * 0.001 + i
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.1) * 0.5 + 0.5)
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.15) * 0.5 + 0.5)
        const size = 50 + Math.sin(time * 0.2) * 20

        ctx.fillStyle = i % 2 === 0 ? primaryColor : secondaryColor

        if (i % 3 === 0) {
          // Triangle
          ctx.beginPath()
          ctx.moveTo(x, y - size)
          ctx.lineTo(x + size, y + size)
          ctx.lineTo(x - size, y + size)
          ctx.closePath()
          ctx.fill()
        } else if (i % 3 === 1) {
          // Cercle
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Rectangle
          ctx.fillRect(x - size, y - size, size * 2, size * 2)
        }
      }

      // Mettre à jour et dessiner les particules
      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebondir sur les bords
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Dessiner la particule
        ctx.fillStyle = primaryColor
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Dessiner les connexions
      ctx.strokeStyle = secondaryColor
      ctx.lineWidth = 0.5
      connections.forEach((connection) => {
        const from = particles[connection.from]
        const to = particles[connection.to]

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <>
      {/* Fond de base avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 z-0" />

      {/* Canvas pour les animations */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />

      {/* Formes géométriques décoratives */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </>
  )
}
