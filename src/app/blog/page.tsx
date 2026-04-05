import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Korisni saveti o domaćim jajima, ishrani, receptima i uzgoju kokošaka. Blog Lukina Jaja iz Opova.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | Lukina Jaja",
    description:
      "Korisni saveti o domaćim jajima, ishrani, receptima i uzgoju kokošaka.",
    url: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategorija?: string; strana?: string }>;
}) {
  const params = await searchParams;
  const allPosts = await getAllPosts();
  const categories = await getAllCategories();
  const activeCategory = params.kategorija;
  const currentPage = Number(params.strana) || 1;
  const postsPerPage = 6;

  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const posts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
            breadcrumbJsonLd([
              { name: "Početna", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
            ])
          ),
        }}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-foreground-light text-lg mb-8">
            Saveti, recepti i zanimljivosti o domaćim jajima i uzgoju kokošaka.
          </p>

          {/* Categories filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <a
              href="/blog"
              className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                !activeCategory
                  ? "bg-primary text-white border-primary"
                  : "border-border text-foreground-light hover:border-primary hover:text-primary"
              }`}
            >
              Sve
            </a>
            {categories.map((cat) => (
              <a
                key={cat}
                href={`/blog?kategorija=${encodeURIComponent(cat)}`}
                className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "border-border text-foreground-light hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </a>
            ))}
          </div>

          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
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
          ) : (
            <p className="text-foreground-light text-center py-12">
              Nema postova u ovoj kategoriji.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  const params = new URLSearchParams();
                  if (activeCategory)
                    params.set("kategorija", activeCategory);
                  if (page > 1) params.set("strana", String(page));
                  const href = `/blog${params.toString() ? `?${params}` : ""}`;

                  return (
                    <a
                      key={page}
                      href={href}
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                        page === currentPage
                          ? "bg-primary text-white"
                          : "border border-border text-foreground-light hover:border-primary hover:text-primary"
                      }`}
                    >
                      {page}
                    </a>
                  );
                }
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
