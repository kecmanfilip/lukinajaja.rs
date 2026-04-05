"use client";

import { useState } from "react";
import { BlogCard } from "@/components/ui/Card";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
}

interface BlogFilterProps {
  posts: Post[];
  categories: string[];
}

export function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
            !activeCategory
              ? "bg-primary text-white border-primary"
              : "border-border text-foreground-light hover:border-primary hover:text-primary"
          }`}
        >
          Sve
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
              activeCategory === cat
                ? "bg-primary text-white border-primary"
                : "border-border text-foreground-light hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
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
    </>
  );
}
