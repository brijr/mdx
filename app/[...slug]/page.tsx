import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXContent } from "@/components/mdx/mdx-content";
import { Meta } from "@/components/mdx/meta";
import * as Craft from "@/components/craft";
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
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <Meta
            title={post.title}
            description={post.description}
            date={post.date}
            author={post.author}
            tags={post.tags}
            className="mb-8"
          />
          <MDXContent code={post.body} />
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
