/**
 * Récupère les informations de contact
 * Dans une implémentation réelle, cela serait remplacé par un appel à une API
 * @returns {Object} Les informations de contact
 */
export function getContactInfo() {
  return {
    title: "Discutons de votre projet",
    subtitle: "Prêt à transformer votre présence digitale ? Contactez-nous pour échanger sur vos besoins et objectifs.",
    infoTitle: "Comment pouvons-nous vous aider ?",
    infoDescription:
      "Que vous ayez besoin d'un site web sur-mesure, d'une campagne publicitaire performante ou d'une stratégie digitale complète, notre équipe d'experts est là pour vous accompagner.",
    emailLabel: "Email",
    email: "contact@lumino-agency.com",
    phoneLabel: "WhatsApp",
    phone: "+33 6 37 81 43 62",
    addressLabel: "Adresse",
    address: "Paris/Marrakech",
    form: {
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      phoneLabel: "Téléphone",
      phonePlaceholder: "Votre numéro de téléphone",
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre projet...",
      submitText: "Envoyer le message",
      submittingText: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successMessage: "Nous vous répondrons dans les plus brefs délais.",
    },
  }
}
