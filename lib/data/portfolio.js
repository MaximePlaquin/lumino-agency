/**
 * Récupère les projets du portfolio
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Object} Les données du portfolio
 */
export function getPortfolioProjects() {
  return {
    title: "Notre Portfolio",
    subtitle: "Découvrez nos réalisations et projets qui ont transformé la présence digitale de nos clients.",
    allCategoryLabel: "Tous",
    viewProjectLabel: "Voir le projet",
    viewAllLabel: "Voir tous les projets",
    viewAllUrl: "#",
    items: [
      {
        id: 1,
        title: "E-commerce Mode",
        description: "Boutique en ligne pour une marque de vêtements avec intégration de paiement sécurisé.",
        image: "/placeholder.svg?height=600&width=800",
        category: "e-commerce",
        tags: ["Next.js", "Stripe", "Responsive"],
        url: "#",
      },
      {
        id: 2,
        title: "Site Vitrine Immobilier",
        description: "Présentation élégante pour une agence immobilière avec recherche avancée de biens.",
        image: "/placeholder.svg?height=600&width=800",
        category: "vitrine",
        tags: ["React", "Google Maps", "SEO"],
        url: "#",
      },
      {
        id: 3,
        title: "Application SaaS",
        description: "Dashboard interactif pour une startup tech avec visualisation de données en temps réel.",
        image: "/placeholder.svg?height=600&width=800",
        category: "application",
        tags: ["React", "Node.js", "Charts"],
        url: "#",
      },
      {
        id: 4,
        title: "Campagne Google Ads",
        description: "Stratégie publicitaire complète pour un lancement de produit avec +200% de ROI.",
        image: "/placeholder.svg?height=600&width=800",
        category: "marketing",
        tags: ["Google Ads", "Analytics", "Conversion"],
        url: "#",
      },
      {
        id: 5,
        title: "Site E-commerce Bijoux",
        description: "Boutique en ligne premium pour une marque de bijoux artisanaux avec configurateur.",
        image: "/placeholder.svg?height=600&width=800",
        category: "e-commerce",
        tags: ["Next.js", "3D", "Paiement"],
        url: "#",
      },
      {
        id: 6,
        title: "Site Vitrine Restaurant",
        description: "Site élégant pour un restaurant gastronomique avec réservation de table en ligne.",
        image: "/placeholder.svg?height=600&width=800",
        category: "vitrine",
        tags: ["React", "API", "Animations"],
        url: "#",
      },
    ],
  }
}
