import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BookingSection } from "@/components/sections/booking-section"
import { getHeroContent } from "@/lib/data/hero"
import { getAboutContent } from "@/lib/data/about"
import { getWhyUsContent } from "@/lib/data/whyus"
import { getPortfolioProjects } from "@/lib/data/portfolio"
import { getTestimonials } from "@/lib/data/testimonials"
import { getContactInfo } from "@/lib/data/contact"
// import { getServicesContent } from "@/lib/data/services"
import { getServices } from "@/lib/data/services"
import { WallPreview } from "@/components/sections/HomePageSectionWall"
import ScrollToHash from '@/ScrollToHash';


/**
 * Page d'accueil du site Lumino Agency
 * Structure modulaire avec chaque section recevant ses données via props
 * Prêt pour une future intégration CMS (WordPress headless)
 */
export default async function Home() {
  // Récupération des données depuis WordPress
  const heroContent = await getHeroContent()
  const services = getServices()
  const aboutContent = getAboutContent()
  const whyUsContent = getWhyUsContent()
  const portfolioProjects = getPortfolioProjects()
  const testimonials = getTestimonials()
  const contactInfo = getContactInfo()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <ScrollToHash />
      <HeroSection content={heroContent} />
      <ServicesSection services={services} />
      {/* <WallPreview /> */}
      <AboutSection content={aboutContent} />
      <WhyUsSection content={whyUsContent} />
      {/* <PortfolioSection projects={portfolioProjects} /> */}
      {/* <TestimonialsSection testimonials={testimonials} /> */}
      <BookingSection />
      <ContactSection contactInfo={contactInfo} />
    </main>
  )
}
