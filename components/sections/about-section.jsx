"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Brush, Headphones, BarChart3, Users } from "lucide-react";

/**
 * Section "Qui sommes-nous" du site avec design moderne
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.content - Le contenu de la section
 */
export function AboutSection({ content }) {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
    },
    {
      icon: <Brush className="w-8 h-8 text-purple-400" />,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-400 mb-2" />,
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400 mb-2" />,
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400 mb-2" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <motion.p
            className="text-sm uppercase tracking-widest text-muted-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.tagline}
          </motion.p>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>C'est </span>
            <span className="relative">
              "l'expertise digitale
              <span className="font-normal italic text-primary">
                {" "}
                qui fait la différence
              </span>
              "
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Cartes avec dégradés */}
        <div className="w-full py-4 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.values.map((value, index) => (
            <div
              key={value.id}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-xl transition hover:ring-2 hover:ring-purple-500/50"
            >
              <div className="absolute -inset-20 bg-purple-50 blur-2xl" />
              <div className="relative z-10">
                {features[index]?.icon}
                <h3 className="mt-4 text-xl font-bold text-black">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.values.map((value, index) => {
            return (
              <motion.div
                key={value.id}
                className="rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div
                  className="aspect-square relative overflow-hidden rounded-3xl"
                  style={{
                    background: value.gradient,
                  }}
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-contain p-8"
                  />
                </div>

                <div className="bg-card p-8">
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div> */}

        {/* Statistiques */}
        <div className="mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section équipe */}
        {/* {content.showTeam && (
          <div className="mt-32">
            <div className="text-center mb-16">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {content.teamTitle}
              </motion.h3>
              <motion.p
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {content.teamSubtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.team.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-card rounded-3xl overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${member.image})`,
                        filter: "grayscale(100%)",
                      }}
                    />
                    <div
                      className={`absolute inset-0 opacity-30`}
                      style={{ background: member.gradient }}
                    ></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
