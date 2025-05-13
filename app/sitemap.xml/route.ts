// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'

export const runtime = 'nodejs' // 🔧 Nécessaire pour utiliser fs

export async function GET() {
  const baseUrl = 'https://lumino-agency.com'

  // Pages statiques
  const staticRoutes = ['/', '/wall', '/blog']

  // Articles du blog
  const blogPosts = getAllPosts()
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`)

  const allRoutes = [...staticRoutes, ...blogRoutes]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map((route) => {
        return `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        `
      })
      .join('')}
  </urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
