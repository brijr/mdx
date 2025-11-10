import Link from "next/link";
import { formatDate } from "@/lib/mdx";
import { cn } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  className?: string;
}

function PostDate({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-sm text-muted-foreground">
      {formatDate(date)}
    </time>
  );
}

export function PostItem({ slug, title, date, className }: PostItemProps) {
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group flex w-full items-center justify-between gap-2 transition-colors hover:bg-muted/50 hover:text-primary px-2 py-1.5",
        className,
      )}
    >
      <h3 className="font-medium">{title}</h3>
      <PostDate date={date} />
    </Link>
  );
}
