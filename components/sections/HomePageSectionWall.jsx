"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const imageFilenames = [
  "marrakech1.webp",
  "marrakech2.webp",
  "marrakech3.webp",
  "marrakech4.webp",
  "marrakech5.webp",
];

export function WallPreview() {
  const [selectedImage, setSelectedImage] = useState(null);

  const scroll = (direction) => {
    const container = document.getElementById("wall-scroll");
    if (container) {
      const amount = direction === "left" ? -350 : 350;
      container.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-4 text-center">
        <div className="container mb-6">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block text-4xl sm:text-5xl">📸</span>
            <span className="block sm:inline">Quelques</span>{" "}
            <span className="block sm:inline font-normal italic text-primary">
              instants capturés
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mx-auto mb-5 text-center w-full max-w-2xl px-6 sm:px-4 break-words whitespace-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez notre "Wall" pour vous faire voyager et apprendre à nous
            connaître
          </motion.p>
        </div>
        <div className="relative">
          <motion.div
            id="wall-scroll"
            className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth scrollbar-hide px-2 md:px-0"
            style={{ overflowX: "auto", maxWidth: "100vw" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {imageFilenames.map((file, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="min-w-[70vw] sm:min-w-[300px] sm:max-w-[300px] h-[300px] sm:h-[380px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(`/wall/${file}`)}
              >
                <Image
                  src={`/wall/${file}`}
                  alt={`Wall ${index + 1}`}
                  width={300}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4">
            <button
              onClick={() => scroll("left")}
              className="bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-10">
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 h-12 rounded-full text-lg shadow-md"
          >
            <Link href="/wall">Voir plus de photos</Link>
          </Button>
        </div>

        {/* Lightbox */}
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setSelectedImage(null)}
          ></div>

          <div
            className="relative z-50 max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-white text-black p-2 rounded-full hover:bg-gray-100"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Aperçu"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            )}
          </div>
        </Dialog>
      </div>
    </section>
  );
}
