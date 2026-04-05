import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  published: boolean;
  readingTime: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      if (!data.published) return null;

      const stats = readingTime(content);

      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        author: data.author ?? "Luka Šulc",
        category: data.category ?? "Saveti",
        tags: data.tags ?? [],
        image: data.image ?? "",
        imageAlt: data.imageAlt ?? "",
        published: data.published ?? false,
        readingTime: `${Math.ceil(stats.minutes)} min čitanja`,
        content,
      } as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.category === category);
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return [...new Set(posts.map((p) => p.category))];
}
