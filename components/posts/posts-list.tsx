import { Section, Container } from "@/components/ds";
import { PostItem } from "@/components/posts/post-item";

import type { Post } from "#site/content";

export const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
        {posts.length > 0 ? (
          <ul className="border divide-x">
            {posts.map((post) => (
              <PostItem
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
              />
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">
            No posts yet. Create your first post in the{" "}
            <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
              content/
            </code>
            directory.
          </p>
        )}
      </Container>
    </Section>
  );
};
