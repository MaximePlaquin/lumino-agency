/**
 * Récupère le contenu de la section Hero depuis WordPress
 * @returns {Promise<Object>} Le contenu de la section hero
 */
export async function getHeroContent() {
  return getDefaultHeroContent();
  // try {
  //   const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL

  //   if (!apiUrl) {
  //     console.warn("URL de l'API WordPress non définie, utilisation des données par défaut")
  //     return getDefaultHeroContent()
  //   }

  //   const response = await fetch(`${apiUrl}/wp/v2/pages?slug=accueil`, {
  //     next: { revalidate: 3600 }, // Revalidate every hour
  //   })

  //   if (!response.ok) {
  //     throw new Error(`Erreur lors de la récupération des données hero: ${response.status}`)
  //   }

  //   const pages = await response.json()

  //   // Vérifier si la page d'accueil existe
  //   if (!pages || pages.length === 0) {
  //     console.warn("Page d'accueil non trouvée dans WordPress, utilisation des données par défaut")
  //     return getDefaultHeroContent()
  //   }

  //   const homePage = pages[0]

  //   // Récupérer les données ACF (Advanced Custom Fields)
  //   // Assurez-vous que ces champs existent dans votre configuration WordPress
  //   const heroData = homePage.acf || {}

  //   return {
  //     tagline: heroData.tagline || "Agence web & Digital",
  //     titleLine1: heroData.title_line_1 || "Des sites web",
  //     titleLine2: heroData.title_line_2 || "qui fonctionnent",
  //     titleLine3: heroData.title_line_3 || "vraiment",
  //     subtitle:
  //       heroData.subtitle ||
  //       "Nous créons des expériences digitales innovantes et des solutions web performantes pour propulser votre entreprise vers de nouveaux sommets.",
  //     primaryButton: {
  //       label: heroData.primary_button_label || "Découvrir nos services",
  //       url: heroData.primary_button_url || "#services",
  //     },
  //     secondaryButton: {
  //       label: heroData.secondary_button_label || "Nous contacter",
  //       url: heroData.secondary_button_url || "#contact",
  //     },
  //     scrollText: heroData.scroll_text || "Explorer",
  //     technologies: heroData.technologies || ["Marketing Digital", "E-commerce", "SEO", "WordPress", "Google Ads"],
  //   }
  // } catch (error) {
  //   console.error("Erreur lors de la récupération des données hero:", error)
  //   return getDefaultHeroContent()
  // }
}

/**
 * Fournit des données par défaut pour la section Hero en cas d'échec de l'API
 * @returns {Object} Données par défaut pour la section hero
 */
function getDefaultHeroContent() {
  return {
    tagline: "Agence Web & Digitale",
    titleLine1: "Des sites web",
    titleLine2: "qui fonctionnent",
    titleLine3: "vraiment",
    subtitle:
      "Nous créons des expériences digitales innovantes et des solutions web performantes pour propulser votre entreprise vers de nouveaux sommets.",
    primaryButton: {
      label: "Découvrir nos services",
      url: "#services",
    },
    secondaryButton: {
      label: "Nous contacter",
      url: "#contact",
    },
    scrollText: "Explorer",
    technologies: ["Marketing Digital", "E-commerce", "SEO", "WordPress", "Google Ads"],
  }
}
