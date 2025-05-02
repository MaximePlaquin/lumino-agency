"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection({ content }) {
  const {
    tagline = "Agence Web & Digitale Paris-Marrakech",
    titleLine1 = "Des sites web",
    titleLine2 = "qui fonctionnent",
    titleLine3 = "vraiment",
    subtitle = "Nous créons des expériences digitales innovantes et des solutions web performantes pour propulser votre entreprise vers de nouveaux sommets.",
    primaryButton = { label: "Découvrir nos services", url: "#services" },
    secondaryButton = { label: "Nous contacter", url: "#contact" },
    scrollText = "Explorer",
    technologies = ["React", "Next.js", "Tailwind", "WordPress", "Google Ads"],
  } = content || {};

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-8 bg-slate-950 text-white overflow-x-hidden">
      {/* Effet de halo violet */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "48rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-[25%] h-56 w-full max-w-[48rem] rounded-full bg-purple-500/30 blur-3xl"
        />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-5xl mx-auto text-center mt-8 sm:mt-16 lg:mt-24 px-2">
          <motion.p
            className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-purple-300 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tagline}
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>{titleLine1} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {titleLine2}{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300">
              {titleLine3}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg"
              asChild
            >
              <Link href={primaryButton.url}>
                <span>{primaryButton.label}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg hover:bg-white/10"
              asChild
            >
              <Link href={secondaryButton.url}>{secondaryButton.label}</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-full text-sm font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full mt-12 flex justify-center sm:absolute sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">{scrollText}</span>
          <div className="w-0.5 h-10 bg-gradient-to-b from-purple-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
