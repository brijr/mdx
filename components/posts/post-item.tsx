import Link from "next/link";
import { formatDate } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  className?: string;
  tags?: string[];
}

function PostDate({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-sm text-muted-foreground">
      {formatDate(date)}
    </time>
  );
}

export function PostItem({
  slug,
  title,
  date,
  excerpt,
  className,
  tags,
}: PostItemProps) {
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group flex w-full items-start justify-between gap-2 transition-colors hover:bg-muted/50 hover:text-primary px-3 py-2",
        className
      )}
    >
      <div>
        <h3 className="font-medium">{title}</h3>
        {excerpt && <p className="text-sm text-muted-foreground">{excerpt}</p>}
      </div>
      <div>
        <PostDate date={date} />
        {tags && <PostTags tags={tags} />}
      </div>
    </Link>
  );
}

const PostTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-1">
      {tags?.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
};
