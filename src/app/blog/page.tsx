import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { BlogFilter } from "./BlogFilter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Korisni saveti o domacim jajima, ishrani, receptima i uzgoju kokosaka. Blog Lukina Jaja iz Opova.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | Lukina Jaja",
    description:
      "Korisni saveti o domacim jajima, ishrani, receptima i uzgoju kokosaka.",
    url: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const categories = await getAllCategories();

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
              { name: "Pocetna", url: SITE_URL },
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
            Saveti, recepti i zanimljivosti o domacim jajima i uzgoju kokosaka.
          </p>

          <BlogFilter posts={allPosts} categories={categories} />
        </div>
      </section>
    </>
  );
}
