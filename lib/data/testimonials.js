/**
 * Récupère les témoignages clients
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Array} Les témoignages clients
 */
export function getTestimonials() {
  return [
    {
      id: 1,
      name: "Julie Moreau",
      role: "Créatrice de marque",
      content: "Équipe ultra réactive, mon site est magnifique et j'ai pu lancer mes pubs Google rapidement.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Site e-commerce et stratégie Google Ads",
    },
    {
      id: 2,
      name: "Antoine Dubois",
      role: "Entrepreneur local",
      content: "Enfin une agence qui écoute vraiment et ne facture pas n'importe quoi. Je recommande les yeux fermés.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Refonte de site vitrine et SEO",
    },
    {
      id: 3,
      name: "Sophie Martin",
      role: "Directrice Marketing",
      content: "Scalenity a transformé notre présence en ligne. Notre trafic a augmenté de 150% en seulement 3 mois!",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Stratégie digitale complète",
    },
    {
      id: 4,
      name: "Thomas Lefebvre",
      role: "Fondateur de startup",
      content: "Leur expertise technique et leur créativité ont fait toute la différence. Un partenaire de confiance.",
      rating: 4,
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Application web SaaS",
    },
    {
      id: 5,
      name: "Marie Leroy",
      role: "Architecte d'intérieur",
      content:
        "Mon portfolio en ligne attire désormais des clients de toute la France. Un investissement rentabilisé en quelques mois.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Site portfolio et stratégie de contenu",
    },
  ]
}
