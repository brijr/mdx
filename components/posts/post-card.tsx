import Link from "next/link";
import { formatDate } from "@/lib/mdx";
import { Calendar, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostCardProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  className?: string;
}

export function PostCard({
  slug,
  title,
  description,
  date,
  tags,
  className,
}: PostCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/50",
        className
      )}
    >
      <article className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h2>

        {description && (
          <p className="text-muted-foreground line-clamp-2">{description}</p>
        )}

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>

          {tags && tags.length > 0 && (
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <div className="flex gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="rounded-md bg-muted px-2 py-0.5 text-xs">
                    +{tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
