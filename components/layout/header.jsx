"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { getNavigationItems } from "@/lib/data/navigation"

/**
 * Composant Header du site avec design moderne
 * Inclut la navigation responsive et le toggle de thème
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Récupération des items de navigation (simulation d'appel API)
  const navItems = getNavigationItems()

  // Effet pour détecter le scroll et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // bloque le scroll sur mobile lorsque le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/35 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-white">Lumino Agency</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}

          {/* <Button className="bg-black hover:bg-black/90 text-white rounded-full px-6" asChild>
            <Link href="#start">Commencer aujourd'hui</Link>
          </Button> */}

          <Button variant="outline" className="bg-black border-2 rounded-full flex items-center gap-2" asChild>
            <Link href="#booking">
              <Calendar className="h-4 w-4" />
              <span>Réserver un appel</span>
            </Link>
          </Button>

          <ThemeToggle />
        </nav>

        {/* Bouton Menu Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* <Button className="bg-black hover:bg-black/90 text-white rounded-full px-4 text-xs py-1 h-8" asChild>
            <Link href="#start">Commencer aujourd'hui</Link>
          </Button> */}
          <ThemeToggle />
          <Button variant="ghost" className="text-white" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 bg-background z-50 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-4 w-full bg-black hover:bg-black/90 text-white rounded-full" asChild>
                  <Link href="#start" onClick={() => setIsOpen(false)}>
                    Commencer aujourd'hui
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 rounded-full flex items-center justify-center gap-2"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="#booking">
                    <Calendar className="h-4 w-4" />
                    <span>Réserver un appel</span>
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
