/**
 * Récupère les éléments de navigation
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Array} Les éléments de navigation
 */
export function getNavigationItems() {
  return [
    { id: 1, label: "Accueil", href: "/" },
    { id: 2, label: "Nos services", href: "/#services" },
    { id: 3, label: "Qui sommes-nous", href: "/#about" },
    { id: 4, label: "Pourquoi nous", href: "/#why-us" },
    { id: 5, label: "Le blog", href: "/blog" },
    { id: 6, label: "Contact", href: "/#contact" },
    { id: 7, label: "Le Wall", href: "/wall" },
  ]
}
