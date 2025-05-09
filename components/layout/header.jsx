"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNavigationItems } from '@/lib/data/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = getNavigationItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden", "menu-open");
    } else {
      document.body.classList.remove("overflow-hidden", "menu-open");
    }
  }, [isOpen]);

  return (
    <>
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
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Button
              variant="outline"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-full px-4 h-10 text-sm font-medium flex items-center gap-2 shadow-md transition-all duration-200"
              asChild
            >
              <Link href="#booking">
                <Calendar className="h-4 w-4" />
                <span>Réserver un appel</span>
              </Link>
            </Button>
          </nav>

          {/* Bouton Menu Mobile */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              className="text-white"
              size="icon"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Menu Mobile - Version optimisée sans marge blanche */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/50"
            />

            {/* Menu principal - Structure ultra-optimisée */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[9999] bg-white flex flex-col"
              style={{ padding: 0 }} // Reset complet du padding
            >
              {/* Bouton fermer compact */}
              <div className="absolute top-2 right-2 p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Contenu parfaitement aligné */}
              <div className="flex-1 flex flex-col items-center justify-center pb-4">
                <nav className="w-full px-4 space-y-4"> {/* Espacement réduit */}
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      className="w-full text-center py-2" // Padding vertical minimal
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-gray-900 block" /* Supprimer tout espace inutile */
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="pt-2 w-full max-w-xs mx-auto">
                    <Button
                      variant="outline"
                      className="w-full justify-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-full h-10 text-sm"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="#booking">
                        <Calendar className="h-4 w-4" />
                        <span>Réserver un appel</span>
                      </Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}