import { BlogCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getAllPosts } from "@/lib/blog";

export async function LatestPosts() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-background-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Najnovije sa bloga
          </h2>
          <p className="text-foreground-light max-w-2xl mx-auto">
            Korisni saveti o ishrani, uzgoju i receptima sa domaćim jajima.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {latest.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              category={post.category}
              slug={post.slug}
              readingTime={post.readingTime}
            />
          ))}
        </div>
        <div className="text-center">
          <Button href="/blog" variant="outline">
            Svi blog postovi
          </Button>
        </div>
      </div>
    </section>
  );
}
