import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Analytics } from "@/components/analytics"
import { getSiteMetadata } from "@/lib/data/metadata"
import { Suspense } from "react"
import { Toaster } from 'sonner';

// Police principale
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export function generateMetadata() {
  // Récupération des métadonnées du site (simulation d'appel API)
  const metadata = getSiteMetadata()

  return {
    title: {
      default: metadata.title,
      template: `%s | ${metadata.title}`,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: metadata.author }],
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url,
      siteName: metadata.title,
      locale: "fr_FR",
      type: "website",
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden scroll-smooth`}>
        <>
          <Header />
          <Suspense fallback={<div>Chargement...</div>}>{children}</Suspense>
          <Toaster richColors position="top-center" />
          <Footer />
          <Analytics />
        </>
      </body>
    </html>
  )
}
