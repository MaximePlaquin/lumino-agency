/**
 * Récupère les services depuis l'API WordPress
 * @returns {Promise<Array>} Liste des services
 */
export async function getServices() {
  try {
    // Remplacer par l'URL réelle de l'API WordPress
    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || ""

    if (!apiUrl) {
      console.warn("URL de l'API WordPress non définie")
      return []
    }

    const response = await fetch(`${apiUrl}/wp/v2/services?_embed&per_page=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })
    console.log(response)
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des services: ${response.status}`)
    }

    const data = await response.json()

    return data.map((service) => ({
      id: service.id,
      title: service.title.rendered,
      description: service.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
      icon: service.acf.icon || "code",
      isPopular: service.acf.is_popular || false,
    }))
  } catch (error) {
    console.error("Erreur lors de la récupération des services:", error)
    return []
  }
}

/**
 * Récupère les projets depuis l'API WordPress
 * @returns {Promise<Array>} Liste des projets
 */
export async function getProjects() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || ""

    if (!apiUrl) {
      console.warn("URL de l'API WordPress non définie")
      return []
    }

    const response = await fetch(`${apiUrl}/wp/v2/projet?_embed&per_page=100`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des projets: ${response.status}`)
    }

    const data = await response.json()

    return data.map((project) => {
      // Récupérer l'URL de l'image mise en avant
      let imageUrl = "/placeholder.svg?height=600&width=800"
      if (
        project._embedded &&
        project._embedded["wp:featuredmedia"] &&
        project._embedded["wp:featuredmedia"][0].source_url
      ) {
        imageUrl = project._embedded["wp:featuredmedia"][0].source_url
      }

      // Récupérer la catégorie
      let category = "other"
      if (
        project._embedded &&
        project._embedded["wp:term"] &&
        project._embedded["wp:term"][0] &&
        project._embedded["wp:term"][0][0]
      ) {
        category = project._embedded["wp:term"][0][0].slug
      }

      // Récupérer les tags
      let tags = []
      if (project._embedded && project._embedded["wp:term"] && project._embedded["wp:term"][1]) {
        tags = project._embedded["wp:term"][1].map((tag) => tag.name)
      }

      return {
        id: project.id,
        title: project.title.rendered,
        description: project.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
        image: imageUrl,
        category: category,
        tags: tags.length > 0 ? tags : ["Web", "Design", "UX"],
      }
    })
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error)
    return []
  }
}

/**
 * Récupère les témoignages depuis l'API WordPress
 * @returns {Promise<Array>} Liste des témoignages
 */
export async function getTestimonials() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || ""

    if (!apiUrl) {
      console.warn("URL de l'API WordPress non définie")
      return []
    }

    const response = await fetch(`${apiUrl}/wp/v2/testimonial?_embed&per_page=100`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des témoignages: ${response.status}`)
    }

    const data = await response.json()

    return data.map((testimonial) => {
      // Récupérer l'URL de l'image mise en avant (avatar)
      let avatarUrl = "/placeholder.svg?height=100&width=100"
      if (
        testimonial._embedded &&
        testimonial._embedded["wp:featuredmedia"] &&
        testimonial._embedded["wp:featuredmedia"][0].source_url
      ) {
        avatarUrl = testimonial._embedded["wp:featuredmedia"][0].source_url
      }

      return {
        id: testimonial.id,
        name: testimonial.title.rendered,
        role: testimonial.acf.role || "Client",
        content: testimonial.content.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
        avatar: avatarUrl,
      }
    })
  } catch (error) {
    console.error("Erreur lors de la récupération des témoignages:", error)
    return []
  }
}
