import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { BlogCard } from "@/components/ui/Card";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import {
  localBusinessJsonLd,
  blogPostingJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug, post.category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingJsonLd({
              title: post.title,
              description: post.description,
              date: post.date,
              slug: post.slug,
              author: post.author,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Početna", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <article className="py-12 md:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge>{post.category}</Badge>
              <span className="text-sm text-foreground-light">
                {post.readingTime}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-light">
              <span>Autor: {post.author}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("sr-Latn-RS", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Placeholder hero image */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-10">
            <svg
              className="w-20 h-20 text-secondary/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <ellipse cx="12" cy="13" rx="7" ry="9" />
            </svg>
          </div>

          <div className="prose max-w-none">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-10 pt-6 border-t border-border">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-background-alt text-foreground-light rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-12 bg-background-alt">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              Povezani članci
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  title={p.title}
                  description={p.description}
                  date={p.date}
                  category={p.category}
                  slug={p.slug}
                  readingTime={p.readingTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
