import { Prose, Section, Container } from "@/components/ds";
import { PageMeta, formatDate } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyArticleButton } from "./copy-article-button";
import { ShareButton } from "./share-button";

import Link from "next/link";
import { Home } from "lucide-react";

interface MetaProps extends PageMeta {
  className?: string;
  slug?: string;
}

export function Meta({ title, description, date, author, tags, slug }: MetaProps) {
  const hasMeta = date || author || (tags && tags.length > 0);

  return (
    <Section className="border-b bg-muted/50">
      <Container className="space-y-6">
        <Prose isSpaced>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {hasMeta && (
            <div className="flex flex-wrap items-center gap-6">
              {date && <time dateTime={date}>{formatDate(date)}</time>}
              {author && <span>{author}</span>}
              <div className="flex gap-1">
                {tags?.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </Prose>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href="/">
              <Home />
            </Link>
          </Button>
          <CopyArticleButton />
          <ShareButton title={title} slug={slug} />
        </div>
      </Container>
    </Section>
  );
}
