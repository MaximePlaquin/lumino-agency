"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

/**
 * Section Contact du site avec design moderne
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.contactInfo - Les informations de contact
 */
export function ContactSection({ contactInfo }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name || formData.name.length < 2) {
      errors.name = "Le nom doit contenir au moins 2 caractères"
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Veuillez entrer une adresse email valide"
    }
    if (!formData.phone || formData.phone.length < 10) {
      errors.phone = "Veuillez entrer un numéro de téléphone valide"
    }
    if (!formData.message || formData.message.length < 10) {
      errors.message = "Le message doit contenir au moins 10 caractères"
    }
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm()

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)
    setFormErrors({})

    // Simulation d'envoi d'API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Afficher un message de succès
    alert(`${contactInfo.form.successTitle} - ${contactInfo.form.successMessage}`)

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.p
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>{contactInfo.title} </span>
            <span className="font-normal italic text-primary">ensemble</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-8">{contactInfo.infoTitle}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">{contactInfo.infoDescription}</p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-6 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">{contactInfo.emailLabel}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-6 bg-gradient-to-br from-amber-500 to-pink-500 p-4 rounded-2xl text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">{contactInfo.phoneLabel}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-6 bg-gradient-to-br from-green-500 to-teal-500 p-4 rounded-2xl text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">{contactInfo.addressLabel}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-medium">
                  {contactInfo.form.nameLabel}
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder={contactInfo.form.namePlaceholder}
                  className="rounded-xl border-2 h-12"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && <p className="text-sm font-medium text-red-500">{formErrors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium">
                  {contactInfo.form.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contactInfo.form.emailPlaceholder}
                  className="rounded-xl border-2 h-12"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <p className="text-sm font-medium text-red-500">{formErrors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-base font-medium">
                  {contactInfo.form.phoneLabel}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder={contactInfo.form.phonePlaceholder}
                  className="rounded-xl border-2 h-12"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {formErrors.phone && <p className="text-sm font-medium text-red-500">{formErrors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-base font-medium">
                  {contactInfo.form.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={contactInfo.form.messagePlaceholder}
                  className="min-h-[150px] rounded-xl border-2"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && <p className="text-sm font-medium text-red-500">{formErrors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-0 rounded-full h-12 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {contactInfo.form.submittingText}
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    {contactInfo.form.submitText}
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
