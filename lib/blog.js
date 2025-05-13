import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

// Répertoire des articles de blog en .mdx
const postsDirectory = path.join(process.cwd(), 'content/blog');

// ✅ Récupère tous les articles
export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory)
    // Exclure les fichiers non .mdx ou réservés (comme sitemap.xml)
    .filter((filename) =>
      filename.endsWith('.mdx') &&
      !filename.startsWith('sitemap') &&
      !filename.startsWith('robots')
    );

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx?$/, ''),
      ...data,
    };
  });
}

// ✅ Récupère un article par son slug
export function getPostBySlug(slug) {
  // Exclure manuellement les slugs indésirables
  if (slug === 'sitemap.xml' || slug === 'robots.txt') {
    notFound();
  }

  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch (err) {
    // Si le fichier n'existe pas ou une erreur survient
    notFound();
  }
}
