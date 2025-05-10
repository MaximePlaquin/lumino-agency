import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <article className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
      <p className="text-sm text-gray-500 mb-10">{post.frontmatter.date}</p>
      <MDXRemote source={post.content} />
    </article>
  );
}