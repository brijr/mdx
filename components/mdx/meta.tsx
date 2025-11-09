import { Prose, Section, Container } from "@/components/ds";
import { PageMeta, formatDate } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

interface MetaProps extends PageMeta {
  className?: string;
}

export function Meta({ title, description, date, author, tags }: MetaProps) {
  const hasMeta = date || author || (tags && tags.length > 0);

  return (
    <Section className="border-b bg-muted">
      <Container>
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
      </Container>
    </Section>
  );
}
