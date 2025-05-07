"use client"

import { motion } from "framer-motion"
import { CalendarClock, ArrowRight, X, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function BookingSection() {
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <section id="booking" className="py-20">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    
    {/* Texte à gauche */}
    <div className="md:w-1/2 text-center md:text-left">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Planifiez un appel avec notre équipe
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Une expertise digitale complète pour transformer votre présence en ligne.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Bouton Tarifs */}
        <Button
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-6 py-4 text-base font-medium"
          onClick={() => window.open("#pricing", "_self")}
        >
          Voir nos tarifs
        </Button>

        {/* Calendly Call */}
        <div
          onClick={() => setShowCalendly(true)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
            <Calendar className="text-white w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-800">Réserver un appel de 15 min</p>
            <p className="text-sm text-gray-500">Planifier maintenant</p>
          </div>
          <ArrowRight className="ml-2 text-gray-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </div>

    {/* Icône décorative à droite */}
    <motion.div
      className="md:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-12 rounded-2xl bg-gradient-to-br from-purple-100 to-white/0 shadow-inner w-64 h-64 flex items-center justify-center">
        <Calendar className="text-purple-500 w-16 h-16" />
      </div>
    </motion.div>
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
          <iframe
            src="https://calendly.com/votre-lien-calendly"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  )}
</section>

  )
}
