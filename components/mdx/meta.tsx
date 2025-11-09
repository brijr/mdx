import { Prose, Section, Container } from "@/components/ds";
import { PageMeta, formatDate } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

interface MetaProps extends PageMeta {
  className?: string;
}

export function Meta({ title, description, date, author, tags }: MetaProps) {
  return (
    <Section>
      <Container>
        <Prose isSpaced>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {(date || author || (tags && tags.length > 0)) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {date && <time dateTime={date}>{formatDate(date)}</time>}
              {author && <span>{author}</span>}
              {tags && tags.length > 0 && (
                <div className="flex gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </Prose>
      </Container>
    </Section>
  );
}
