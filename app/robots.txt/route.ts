// app/robots.txt/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://lumino-agency.com'

  const content = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
