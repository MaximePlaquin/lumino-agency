"use client"

import { useEffect } from "react"
import Script from "next/script"

/**
 * Composant pour intégrer Google Analytics 4
 * Utilise la variable d'environnement NEXT_PUBLIC_GA_ID
 */
export function Analytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ""

  useEffect(() => {
    if (typeof window !== "undefined" && GA_MEASUREMENT_ID) {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag("js", new Date())
      gtag("config", GA_MEASUREMENT_ID)
    }
  }, [GA_MEASUREMENT_ID])

  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
    </>
  )
}
