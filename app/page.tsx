import { Main, Section, Container, Prose } from "@/components/ds";
import { PostsList } from "@/components/posts/posts-list";
import { Logo } from "@/components/logo";

import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Hero />
      <PostsList posts={posts} />
    </Main>
  );
}
