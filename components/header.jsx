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
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
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

        {/* Menu Mobile - Maintenant à l'intérieur du header */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed inset-0 z-[999] md:hidden ${
                scrolled ? "bg-white/95" : "bg-white/95"
              } backdrop-blur-lg`}
            >
              {/* Halo décoratif */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />

              <div className="flex flex-col h-full p-6 relative z-10">
                {/* Close Button */}
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Nav items */}
                <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-semibold text-gray-900 transition-all duration-300 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-full px-4 h-12 text-sm font-medium flex items-center gap-2 shadow-lg"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="#booking">
                        <Calendar className="h-4 w-4" />
                        <span>Réserver un appel</span>
                      </Link>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}