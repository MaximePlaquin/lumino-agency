"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Palette, Zap, BarChart3, Wrench } from "lucide-react"


/**
 * Section Services du site avec design moderne de cartes
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.services - Les données des services
 */
export function ServicesSection({ services }) {

  const icons = {
    1: Globe,
    2: Palette,
  }


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {services.title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.subtitle}
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.items.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`rounded-2xl p-8 h-full flex flex-col ${service.bgClass}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.iconBgClass} mb-6`}>
                {/* <service.icon className={`h-6 w-6 ${service.iconColorClass}`} /> */}
              </div>

              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>

              <p className="text-muted-foreground mb-8">{service.description}</p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span key={feature.id} className="px-3 py-1 bg-background/80 text-sm rounded-full">
                      {feature.text}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.buttonUrl}
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  {service.buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
