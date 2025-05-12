import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import MDXImage from "@/components/MDXImage";

const components = {
  img: (props) => <MDXImage {...props} />,
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  const { title, date, thumbnail, category } = post.frontmatter;

  return (
    <article className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 py-20">
      <div className="my-8 text-center">
        {Array.isArray(category) && category.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {category.map((tag, idx) => (
              <Badge key={idx} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>

      {thumbnail && (
        <div className="mb-10 flex justify-center">
          <Image
            src={thumbnail}
            alt={title}
            width={1000}
            height={500}
            className="w-full max-w-4xl h-auto object-cover rounded-xl shadow"
          />
        </div>
      )}

      <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none mx-auto">
        <MDXRemote source={post.content} components={components} />
      </div>

      <div className="mt-16 text-center">
        <Link href="/#contact">
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
            Contactez-nous 📬
          </span>
        </Link>
      </div>
    </article>
  );
}
