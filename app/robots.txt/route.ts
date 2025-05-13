export const runtime = 'edge'

export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://lumino-agency.com/sitemap.xml
  `.trim()

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
