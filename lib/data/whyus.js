
/**
 * Récupère le contenu de la section "Pourquoi nous choisir"
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Object} Le contenu de la section
 */
export function getWhyUsContent() {
  return {
    title: "Pourquoi Nous Choisir",
    subtitle: "Découvrez ce qui fait de Scalenity votre partenaire digital idéal.",
    image: {
      src: "/images/pourquoi-nous/pourquoi-nous.png",
      alt: "L'équipe Scalenity au travail",
    },
    values: [
      {
        id: 1,
        title: "Mini ESN Agile",
        description: "Une équipe à taille humaine, réactive et flexible pour s'adapter à vos besoins spécifiques.",
        iconId: "users",
      },
      {
        id: 2,
        title: "Performance Technique",
        description: "Des sites optimisés pour la vitesse, le référencement et la conversion de vos visiteurs.",
        iconId: "zap",
      },
      {
        id: 3,
        title: "Expertise E-commerce",
        description: "Une expérience approfondie dans la création de boutiques en ligne performantes et rentables.",
        iconId: "shoppingbag",
      },
      {
        id: 4,
        title: "Approche Terrain",
        description: "Nous comprenons les réalités business et adaptons nos solutions à vos objectifs concrets.",
        iconId: "award",
      },
    ],
  }
}
