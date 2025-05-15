import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";
import { getSiteMetadata } from "@/lib/data/metadata";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

// Police principale
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export function generateMetadata() {
  // Récupération des métadonnées du site (simulation d'appel API)
  const metadata = getSiteMetadata();

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
    icons: {
      icon: "/logo/favicon-lumino-agency.png", // <- C'est ici qu'on ajoute le favicon
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden scroll-smooth`}>
        <>
          <Header />
          <Suspense fallback={<div>Chargement...</div>}>{children}</Suspense>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-MH1FSV0RZ5`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-MH1FSV0RZ5');
`}
          </Script>
          <Toaster />
          <Footer />
          <Analytics />
        </>
      </body>
    </html>
  );
}
