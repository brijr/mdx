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

const PostDate = ({ date }: { date: string }) => {
  return (
    <time dateTime={date} className="text-xs text-muted-foreground">
      {formatDate(date)}
    </time>
  );
};

const PostTags = ({ tags }: { tags: string[] }) => {
  if (!tags.length) return null;

  return (
    <div className="flex gap-1 flex-wrap">
      {tags.map((tag) => (
        <Badge variant="outline" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export const Item = ({
  slug,
  title,
  date,
  excerpt,
  className,
  tags,
}: PostItemProps) => {
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start",
        "transition-colors hover:bg-muted/50 hover:text-primary px-3 py-2",
        className
      )}
    >
      <div className="group-hover:pl-1 group-hover:-mr-1 transition-all">
        <h3 className="font-medium">{title}</h3>
        {excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
            {excerpt}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 items-start md:items-end text-left md:text-right">
        <PostDate date={date} />
        {tags && <PostTags tags={tags} />}
      </div>
    </Link>
  );
};
