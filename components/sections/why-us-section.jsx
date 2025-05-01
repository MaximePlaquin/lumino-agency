"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Zap, ShoppingBag, Award } from "lucide-react"


/**
 * Section "Pourquoi nous choisir" du site
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.content - Le contenu de la section
 */
export function WhyUsSection({ content }) {
  const icons = {
    users: Users,
    shoppingbag: ShoppingBag,
    zap: Zap,
    award: Award,
  };
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video md:aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src={content.image.src || "/placeholder.svg"}
              alt={content.image.alt}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {content.values.map((value) => {
                const Icon = icons[value.iconId]
                return(
                <div key={value.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {/* <value.icon className="h-6 w-6 text-primary" /> */}
                      {Icon && <Icon className={`h-6 w-6 ${value.iconColorClass}`} />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
