"use client"

import { motion } from "framer-motion"
import { Code, LineChart, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicesSection({ services = [] }) {
  // Fallback data if WordPress data is not available
  const fallbackServices = [
    {
      id: 1,
      title: "Développement Web Sur-Mesure",
      description: "Sites vitrines et e-commerce personnalisés pour répondre parfaitement à vos besoins spécifiques.",
      icon: "code",
      isPopular: true,
    },
    {
      id: 2,
      title: "Campagnes Google Ads",
      description: "Stratégies publicitaires optimisées pour générer du trafic qualifié et maximiser votre ROI.",
      icon: "chart",
      isPopular: false,
    },
    {
      id: 3,
      title: "Stratégie Digitale 360°",
      description: "Vision globale de votre présence en ligne pour une cohérence parfaite entre tous vos canaux.",
      icon: "bulb",
      isPopular: false,
    },
  ]

  const displayServices = services.length > 0 ? services : fallbackServices

  const getIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <Code className="h-10 w-10 text-accent" />
      case "chart":
        return <LineChart className="h-10 w-10 text-accent" />
      case "bulb":
        return <Lightbulb className="h-10 w-10 text-accent" />
      default:
        return <Code className="h-10 w-10 text-accent" />
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des solutions digitales complètes pour propulser votre entreprise vers de nouveaux sommets.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="relative h-full bg-gradient-to-br from-background to-primary/5 border border-primary/10 overflow-hidden">
                {service.isPopular && (
                  <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4">{getIcon(service.icon)}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 text-accent">✓</div>
                      <span>Conception personnalisée</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 text-accent">✓</div>
                      <span>Support dédié</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 text-accent">✓</div>
                      <span>Optimisation continue</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
