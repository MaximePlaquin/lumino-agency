import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Analytics } from "@/components/analytics"
import { getSiteMetadata } from "@/lib/data/metadata"
import { Suspense } from "react"

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
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <Suspense fallback={<div>Chargement...</div>}>{children}</Suspense>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
