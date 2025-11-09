import { Main, Section, Container, Prose } from "@/components/ds";
import { MDXContent } from "@/components/mdx/mdx-content";
import { Meta } from "@/components/mdx/meta";

import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

import type { Metadata } from "next";
import type { Post } from ".velite";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <Main>
      <Meta
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        tags={post.tags}
      />
      <Section>
        <Container>
          <Prose isArticle isSpaced>
            <MDXContent code={post.body} />
          </Prose>
        </Container>
      </Section>
    </Main>
  );
}
