import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

/**
 * Récupère les liens vers les réseaux sociaux
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Array} Les liens vers les réseaux sociaux
 */
export function getSocialLinks() {
  return [
    { id: 1, name: "Facebook", url: "https://facebook.com", icon: Facebook },
    { id: 2, name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { id: 3, name: "Instagram", url: "https://instagram.com", icon: Instagram },
    { id: 4, name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ]
}
