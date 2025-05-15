"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNavigationItems } from "@/lib/data/navigation";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");
  const isWallPage = pathname.startsWith("/wall");
  const isLegalPage = pathname.startsWith("/mention");
  const isConfidentialite = pathname.startsWith("/confidentialite");

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
      {/* HEADER */}
      <header
        className="fixed top-0 w-full z-50 bg-blue-950 text-white"
        style={{ height: "80px" }}
      >
        {/* Conteneur principal qui s'adapte aux deux versions */}
        <div className="w-full h-full relative">
          {/* Logo: centré sur mobile/tablette, à gauche sur desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo-lumino-agency.png"
                alt="Lumino Agency agence web"
                width={170}
                height={40}
                className="h-11 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menu burger: visible jusqu'à 768px */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 lg:hidden">
            <Button
              variant="ghost"
              className="text-white p-1"
              size="lg"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-8 w-8" />
            </Button>
          </div>

          {/* Navigation desktop: visible seulement à partir de 768px+ */}
          <nav className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 items-center space-x-6 text-white">
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
        </div>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/50"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[9999] bg-white flex flex-col"
            >
              {/* CLOSE BTN */}
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

              {/* CONTENT */}
              <div className="flex-1 flex flex-col items-center justify-center pb-4">
                <nav className="w-full px-4 space-y-4">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      className="w-full text-center py-2"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-gray-900 block"
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
