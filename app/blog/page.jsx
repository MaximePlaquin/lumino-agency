import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mt-12 min-h-screen max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 flex items-center gap-2">
        <span role="img" aria-label="blog">
          📝
        </span>{" "}
        Le Blog Tech
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
    <Card className="hover:shadow-xl transition-all duration-200 group-hover:scale-[1.02] cursor-pointer overflow-hidden">
      <img
        src={post.thumbnail || "/default-thumbnail.jpg"}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4 space-y-3">
        <Badge variant="outline" className="text-xs w-fit border-primary text-primary bg-primary/10">
          {post.category}
        </Badge>
        <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
        <p className="text-sm text-muted-foreground">{post.date}</p>
        <p className="text-sm text-gray-600">{post.excerpt}</p>

        {/* Bouton transformé en Link stylisé */}
        <div className="pt-2">
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full">
            Lire l'article 📖
          </span>
        </div>
      </CardContent>
    </Card>
  </Link>
))}
      </div>
    </section>
  );
}
