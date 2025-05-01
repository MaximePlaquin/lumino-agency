import { Zap, Users, Target, Lightbulb, Palette, BarChart3 } from "lucide-react"

/**
 * Récupère le contenu de la section "Qui sommes-nous"
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Object} Le contenu de la section
 */
export function getAboutContent() {
  return {
    tagline: "Qui sommes-nous",
    title: "C'est \"l'expertise digitale qui fait la différence\"",
    subtitle:
      "Chez Lumino Agency, nous avons remplacé les freelances instables et les grosses agences impersonnelles par une équipe familiale d’experts ultra-compétents. notre seul but : livrer des résultats visibles, rapidement, sans bullshit.",

    // Valeurs de l'entreprise avec dégradés colorés
    values: [
      {
        id: 1,
        title: "Expertise technique",
        description:
          "Nous maitrisons les dernières technologies pour créer des sites web performants et évolutifs et Google friendly.",
        image: "/images/qui-sommes-nous/icon-expertise-digitale.png",
        gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
      },
      {
        id: 2,
        title: "Design créatif",
        description:
          "Des designs uniques moderne et sur-mesure qui reflètent l'identité de votre marque et captivent votre audience.",
        image: "/images/qui-sommes-nous/icon-design-creatif.png",
        gradient: "linear-gradient(135deg, #1E3A8A 0%, #60EFFF 100%)",
      },
      {
        id: 3,
        title: "Stratégie digitale",
        description:
          "Une approche globale qui intègre tous les aspects de votre présence en ligne pour maximiser votre impact.",
        image: "/images/qui-sommes-nous/icon-strategie-digitale.png",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #8C52FF 100%)",
      },
      {
        id: 4,
        title: "Support dédié",
        description: "Une équipe réactive à votre écoute pour vous accompagner à chaque étape de votre projet digital.",
        image: "/images/qui-sommes-nous/icone-support-dedies.png",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #784BA0 50%, #1E3A8A 100%)",
      },
      {
        id: 5,
        title: "Résultats mesurables",
        description:
          "Des objectifs clairs et des indicateurs de performance pour suivre l'impact concret de nos actions.",
        image: "/images/qui-sommes-nous/icon-resultat-mesurable.png",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #FF4B2B 100%)",
      },
      {
        id: 6,
        title: "Agence Familiale",
        description:
          "Une agence moderne et ouverte à la discussion qui comprend parfaitement les besoins",
        image: "/images/qui-sommes-nous/icon-agence-familiale.png",
        gradient: "linear-gradient(135deg, #1E3A8A 0%, #38ef7d 100%)",
      },
    ],

    // Statistiques
    stats: [
      {
        id: 1,
        value: "150+",
        label: "Projets Réalisés",
      },
      {
        id: 2,
        value: "98%",
        label: "Clients Satisfaits",
      },
      {
        id: 3,
        value: "12",
        label: "Experts Passionnés",
      },
      {
        id: 4,
        value: "5+",
        label: "Années d'Expérience",
      },
    ],

    // Équipe
    showTeam: true,
    teamTitle: "Lumino Team",
    teamSubtitle: "Des passionnés du digitals qui donnent vie à vos projets.",
    team: [
      {
        id: 1,
        name: "Maxime P",
        role: "Fondateur & Directeur",
        bio: "Ingénieur logiciel, 10+ ans d'expérience en développement web et stratégie marketing digitale.",
        image: "/placeholder.svg?height=400&width=300",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #FF4B2B 100%)",
      },
      {
        id: 2,
        name: "Éléonore S",
        role: "Directrice Artistique",
        bio: "Commercial Experte en UX/UI design et identité de marque.",
        image: "/placeholder.svg?height=400&width=300",
        gradient: "linear-gradient(135deg, #1E3A8A 0%, #60EFFF 100%)",
      },
      // {
      //   id: 3,
      //   name: "Alexandre Petit",
      //   role: "Lead Developer",
      //   bio: "Spécialiste React et Next.js avec une passion pour la performance.",
      //   image: "/placeholder.svg?height=400&width=300",
      //   gradient: "linear-gradient(135deg, #1E3A8A 0%, #38ef7d 100%)",
      // },
      // {
      //   id: 4,
      //   name: "Julie Moreau",
      //   role: "SEO & Content Manager",
      //   bio: "Stratège en référencement et création de contenu engageant.",
      //   image: "/placeholder.svg?height=400&width=300",
      //   gradient: "linear-gradient(135deg, #F59E0B 0%, #784BA0 50%, #1E3A8A 100%)",
      // },
    ],
  }
}
