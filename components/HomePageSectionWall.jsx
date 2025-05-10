"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const imageFilenames = ["marrakech1.jpeg", "marrakech2.jpeg", "marrakech3.jpeg", "marrakech4.jpeg"];

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center justify-center gap-2">
          📸 Quelques instants capturés
        </h2>

        <div className="relative">
          <div
            id="wall-scroll"
            className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth scrollbar-hide"
          >
            {imageFilenames.map((file, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="min-w-[300px] max-w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
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
          </div>

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
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="relative p-4 max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 bg-white text-black p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Aperçu"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            )}
          </div>
        </Dialog>
      </div>
    </section>
  );
}
