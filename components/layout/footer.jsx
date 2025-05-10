import Link from "next/link"
import { getSocialLinks } from "@/lib/data/social"

export function Footer() {
  const socialLinks = getSocialLinks()

  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        
        {/* Mentions légales */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/mentions-legales" className="hover:text-primary transition-colors">
            Mentions légales
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
            Politique de confidentialité
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              aria-label={social.name}
              className="hover:text-primary transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Baseline */}
        <p className="text-center md:text-right text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()} Lumino Agency – Conçu avec passion à Marrakech ❤️
        </p>
      </div>
    </footer>
  )
}
