import Link from "next/link"
import { getFooterContent } from "@/lib/data/footer"
import { getSocialLinks } from "@/lib/data/social"

/**
 * Composant Footer du site avec design moderne
 * Affiche les liens, informations légales et réseaux sociaux
 */
export function Footer() {
  // Récupération des données du footer (simulation d'appel API)
  const footerContent = getFooterContent()
  const socialLinks = getSocialLinks()

  return (
    <footer className="bg-[#f9f9f9] dark:bg-gray-950 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-2xl mb-6">{footerContent.companyName}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{footerContent.description}</p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  aria-label={social.name}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.id}>
              <h3 className="font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {footerContent.companyName}. {footerContent.copyright}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">{footerContent.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
