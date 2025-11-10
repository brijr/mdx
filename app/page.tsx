import { Main, Section, Container, Prose } from "@/components/ds";
import { PostCard } from "@/components/posts/post-card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Post } from "#site/content";

import { getAllPosts } from "@/lib/posts";

const GITHUB_URL = "https://github.com/brijr/mdx";
const VERCEL_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Hero />
      <Posts posts={posts} />
    </Main>
  );
}

const Hero = () => {
  return (
    <Section className="bg-muted/50 border-b">
      <Container className="grid gap-6">
        <Logo width={32} />
        <Prose isSpaced>
          <h1>MDX Blog Starter Template</h1>
          <p>
            A modern MDX and Next.js starter made by{" "}
            <a href="https://bridger.to">Bridger</a> at{" "}
            <a href="https://wip.ac">WIP</a>
          </p>
        </Prose>
        <div className="flex gap-2 items-center flex-wrap mt-6">
          <Button asChild>
            <a href={GITHUB_URL} target="_blank">
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={VERCEL_URL} target="_blank">
              Vercel
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
        {posts.length > 0 ? (
          <div className="grid gap-4">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            ))}
          </div>
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
