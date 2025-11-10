import { List } from "@/components/posts/list";
import { Hero } from "@/components/site/hero";
import { Main } from "@/components/ds";

import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Hero />
      <List posts={posts} />
    </Main>
  );
}
