import { Section, Container } from "@/components/ds";
import { Item } from "@/components/posts/item";

import type { Post } from "#site/content";

export const List = ({ posts }: { posts: Post[] }) => {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
        {posts.length > 0 ? (
          <ul className="border divide-y rounded-lg">
            {posts.map((post) => (
              <Item
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.description}
                tags={post.tags}
              />
            ))}
          </ul>
        ) : (
          <NoPosts />
        )}
      </Container>
    </Section>
  );
};

const NoPosts = () => {
  return (
    <p className="text-muted-foreground">
      No posts yet. Create your first post in the{" "}
      <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
        content/
      </code>
      directory.
    </p>
  );
};
