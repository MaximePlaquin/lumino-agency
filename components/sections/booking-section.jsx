"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

/**
 * Section de réservation d'appel avec intégration Calendly
 */
export function BookingSection() {
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-500 z-0"></div>

      {/* Formes décoratives */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-violet-500 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Rejoignez Scalenity
              </motion.h2>

              <motion.p
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Une expertise digitale complète pour transformer votre présence en ligne
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium w-full md:w-auto"
                  onClick={() => window.open("#pricing", "_self")}
                >
                  Voir nos tarifs
                </Button>
              </motion.div>

              {/* Bouton de réservation d'appel */}
              <motion.div
                className="mt-8 flex items-center cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => setShowCalendly(true)}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Réserver un appel de 15 min</p>
                  <p className="text-white/70 text-sm">Planifier maintenant</p>
                </div>
                <ArrowRight className="ml-4 h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
              </motion.div>
            </div>

            {/* Image décorative */}
            <div className="md:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="w-full aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Membership card"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  />

                  {/* Points colorés simulant les visages souriants */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-yellow-400"></div>
                  <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-orange-500"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-green-500"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Calendly */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative">
            <button
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
              onClick={() => setShowCalendly(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-full h-full p-4 pt-12">
              {/* Intégration Calendly */}
              <div className="w-full h-full">
                <iframe
                  src="https://calendly.com/votre-lien-calendly"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
                {/* Note: Remplacez "votre-lien-calendly" par votre lien Calendly réel */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
