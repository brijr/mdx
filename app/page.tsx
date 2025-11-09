import { Main, Section, Container } from "@/components/ds";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { PostCard } from "@/components/posts/post-card";

import { getAllPosts } from "@/lib/posts";

import Balancer from "react-wrap-balancer";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Main>
        <Section>
          <Container>
            {/* Header */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                MDX Blog Starter Template
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A modern MDX and Next.js starter made by{" "}
                <a
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                  href="https://bridger.to"
                >
                  Bridger
                </a>{" "}
                at{" "}
                <a
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                  href="https://wipdes.com"
                >
                  WIP
                </a>
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://github.com/brijr/mdx"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View on GitHub
                </a>
                <a
                  href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Deploy to Vercel
                </a>
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Recent Posts
              </h2>
              {posts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </Container>
        </Section>
      </Main>

      {/* Theme Toggle */}
      <div className="fixed bottom-6 right-6">
        <ThemeToggle />
      </div>
    </>
  );
}
