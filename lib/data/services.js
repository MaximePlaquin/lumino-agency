/**
 * Récupère les données des services
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Object} Les données des services
 */

export function getServices() {
  return {
    title: "Explorez Nos Services Experts",
    subtitle: "Transformez vos défis en succès avec nos stratégies éprouvées.",
    items: [
      {
        id: 1,
        title: "Création de Site Web",
        description: "Offrez une expérience utilisateur inoubliable avec un site web sur-mesure.",
        iconId: "globe",
        bgClass: "bg-blue-50 dark:bg-blue-950/30",
        iconBgClass: "bg-blue-100 dark:bg-blue-900/50",
        iconColorClass: "text-primary",
        features: [
          { id: 1, text: "Responsive" },
          { id: 2, text: "E-Commerce" },
          { id: 3, text: "Landing Page" },
          { id: 4, text: "WordPress" },
          { id: 5, text: "CMS" },
        ],
        buttonText: "En savoir plus",
        buttonUrl: "#contact",
      },
      {
        id: 2,
        title: "Branding",
        description: "Développez la reconnaissance de votre marque et démarquez-vous de la concurrence.",
        iconId: "palette",
        bgClass: "bg-amber-50 dark:bg-amber-950/30",
        iconBgClass: "bg-amber-100 dark:bg-amber-900/50",
        iconColorClass: "text-accent",
        features: [
          { id: 1, text: "Logo & Identité Visuelle" },
          { id: 2, text: "Supports Marketing" },
          { id: 3, text: "Stratégie de Marque" },
        ],
        buttonText: "Découvrir",
        buttonUrl: "#contact",
      },
      {
        id: 3,
        title: "Animations",
        description: "Augmentez l'engagement avec des graphiques animés et des interactions dynamiques.",
        iconId: "zap",
        bgClass: "bg-green-50 dark:bg-green-950/30",
        iconBgClass: "bg-green-100 dark:bg-green-900/50",
        iconColorClass: "text-green-500",
        features: [
          { id: 1, text: "UI/UX Animations" },
          { id: 2, text: "Vidéos Explicatives" },
          { id: 3, text: "Éléments Interactifs" },
        ],
        buttonText: "Voir exemples",
        buttonUrl: "#portfolio",
      },
      {
        id: 4,
        title: "SEO & SEA",
        description: "Boostez votre visibilité en ligne et attirez un trafic qualifié sur votre site.",
        iconId: "barchart",
        bgClass: "bg-gray-800 dark:bg-gray-900 text-white",
        iconBgClass: "bg-gray-700 dark:bg-gray-800",
        iconColorClass: "text-white",
        features: [
          { id: 1, text: "Optimisation Technique" },
          { id: 2, text: "Stratégie de Mots-clés" },
          { id: 3, text: "Netlinking" },
          { id: 4, text: "Analytics" },
        ],
        buttonText: "Optimiser mon site",
        buttonUrl: "#contact",
      },
      {
        id: 5,
        title: "Maintenance",
        description: "Gardez votre site web performant et sécurisé avec notre service de maintenance.",
        iconId: "wrench",
        bgClass: "bg-purple-50 dark:bg-purple-950/30",
        iconBgClass: "bg-purple-100 dark:bg-purple-900/50",
        iconColorClass: "text-purple-500",
        features: [
          { id: 1, text: "Mises à jour de sécurité" },
          { id: 2, text: "Corrections de bugs" },
          { id: 3, text: "Optimisation des performances" },
        ],
        buttonText: "Voir les forfaits",
        buttonUrl: "#maintenance",
      },
      {
        id: 6,
        title: "Pack Complet Digital",
        description: "Solution tout-en-un pour une présence digitale optimale et cohérente.",
        iconId: "zap",
        bgClass: "bg-accent/10 dark:bg-accent/20",
        iconBgClass: "bg-accent/20 dark:bg-accent/30",
        iconColorClass: "text-accent",
        features: [
          { id: 1, text: "Site Web" },
          { id: 2, text: "Branding" },
          { id: 3, text: "SEO" },
          { id: 4, text: "Google Ads" },
          { id: 5, text: "Maintenance" },
        ],
        buttonText: "Demander un devis",
        buttonUrl: "#contact",
      },
    ],
  }
}



// export async function getServicesContent() {
//   try {
//     const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
//     const response = await fetch(`${apiUrl}/wp/v2/service?per_page=100`, {
//       next: { revalidate: 3600 },
//     });

//     const services = await response.json();

//     if (!Array.isArray(services)) throw new Error("Invalid data format");

//     return {
//       title: "Explorez Nos Services Experts",
//       subtitle: "Transformez vos défis en succès avec nos stratégies éprouvées.",
//       items: services.map((service) => {
//         const acf = service.acf || {};
//         const iconId = parseInt(acf.iconid) || 1;

//         // Mapping iconId to Tailwind classnames
//         const styleMap = {
//           1: {
//             bgClass: "bg-blue-50 dark:bg-blue-950/30",
//             iconBgClass: "bg-blue-100 dark:bg-blue-900/50",
//             iconColorClass: "text-primary",
//           },
//           2: {
//             bgClass: "bg-amber-50 dark:bg-amber-950/30",
//             iconBgClass: "bg-amber-100 dark:bg-amber-900/50",
//             iconColorClass: "text-accent",
//           },
//           3: {
//             bgClass: "bg-green-50 dark:bg-green-950/30",
//             iconBgClass: "bg-green-100 dark:bg-green-900/50",
//             iconColorClass: "text-green-500",
//           },
//           4: {
//             bgClass: "bg-gray-800 text-white dark:bg-gray-900",
//             iconBgClass: "bg-gray-700 dark:bg-gray-800",
//             iconColorClass: "text-white",
//           },
//           5: {
//             bgClass: "bg-purple-50 dark:bg-purple-950/30",
//             iconBgClass: "bg-purple-100 dark:bg-purple-900/50",
//             iconColorClass: "text-purple-500",
//           },
//           6: {
//             bgClass: "bg-accent/10 dark:bg-accent/20",
//             iconBgClass: "bg-accent/20 dark:bg-accent/30",
//             iconColorClass: "text-accent",
//           },
//         };

//         const styles = styleMap[iconId] || styleMap[1];

//         return {
//           id: service.id,
//           title: acf.title,
//           description: acf.description,
//           features: acf.features_raw?.split("\n").filter(Boolean).map((text, i) => ({ id: i + 1, text })) || [],
//           iconId,
//           ...styles,
//           buttonText: "En savoir plus",
//           buttonUrl: "#contact",
//         };
//       }),
//     };
//   } catch (error) {
//     console.error("Erreur getServicesContent:", error);
//     return {
//       title: "Services",
//       subtitle: "Nos solutions",
//       items: [],
//     };
//   }
// }
