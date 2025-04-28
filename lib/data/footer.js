/**
 * Récupère le contenu du footer
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Object} Le contenu du footer
 */
export function getFooterContent() {
  return {
    companyName: "Scalenity",
    description:
      "Nous créons des sites web performants et des stratégies digitales complètes pour propulser votre entreprise.",
    copyright: "Tous droits réservés.",
    tagline: "Conçu et développé avec passion",
    columns: [
      {
        id: 1,
        title: "Services",
        links: [
          { id: 1, label: "Création de site web", url: "#services" },
          { id: 2, label: "E-commerce", url: "#services" },
          { id: 3, label: "Google Ads", url: "#services" },
          { id: 4, label: "Stratégie digitale", url: "#services" },
        ],
      },
      {
        id: 2,
        title: "Entreprise",
        links: [
          { id: 1, label: "À propos", url: "#" },
          { id: 2, label: "Équipe", url: "#" },
          { id: 3, label: "Carrières", url: "#" },
          { id: 4, label: "Blog", url: "#" },
        ],
      },
      {
        id: 3,
        title: "Légal",
        links: [
          { id: 1, label: "Mentions légales", url: "#" },
          { id: 2, label: "Politique de confidentialité", url: "#" },
          { id: 3, label: "CGV", url: "#" },
          { id: 4, label: "Cookies", url: "#" },
        ],
      },
    ],
  }
}
