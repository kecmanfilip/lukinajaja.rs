import Link from "next/link";
import { Badge } from "./Badge";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
}

export function BlogCard({
  title,
  description,
  date,
  category,
  slug,
  readingTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Placeholder image */}
        <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-secondary/40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <ellipse cx="12" cy="13" rx="7" ry="9" />
          </svg>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Badge>{category}</Badge>
            <span className="text-xs text-foreground-light">{readingTime}</span>
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-foreground-light leading-relaxed flex-1">
            {description}
          </p>
          <time
            dateTime={date}
            className="block mt-3 text-xs text-foreground-light/70"
          >
            {new Date(date).toLocaleDateString("sr-Latn-RS", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </article>
    </Link>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
