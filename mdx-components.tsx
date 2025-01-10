import type { MDXComponents } from "mdx/types";
import { Code } from "@/components/mdx/code";
import { Heading } from "@/components/mdx/heading";
import React from "react";

// Default components for MDX files
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override the default components with our custom ones
    pre: ({ children }) => children as React.ReactElement,
    code: ({ children, className }) => {
      // Only use Code component for code blocks (not inline code)
      const isInlineCode = !className;
      if (isInlineCode) {
        return (
          <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {children}
          </code>
        );
      }

      // Extract language from className (format: language-*)
      const language = className?.replace("language-", "");
      return <Code language={language}>{children as string}</Code>;
    },
    // Add heading components with anchor links
    h1: ({ children, id }) => (
      <Heading
        level={1}
        id={id}
        className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      >
        {children}
      </Heading>
    ),
    h2: ({ children, id }) => (
      <Heading
        level={2}
        id={id}
        className="mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      >
        {children}
      </Heading>
    ),
    h3: ({ children, id }) => (
      <Heading
        level={3}
        id={id}
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        {children}
      </Heading>
    ),
    h4: ({ children, id }) => (
      <Heading
        level={4}
        id={id}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {children}
      </Heading>
    ),
    h5: ({ children, id }) => (
      <Heading
        level={5}
        id={id}
        className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      >
        {children}
      </Heading>
    ),
    h6: ({ children, id }) => (
      <Heading
        level={6}
        id={id}
        className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
      >
        {children}
      </Heading>
    ),
    // Override paragraph component to prevent invalid nesting
    p: ({ children }) => {
      // Check if children is a single element that should not be wrapped in p
      if (
        React.Children.toArray(children).some(
          (child) =>
            React.isValidElement(child) &&
            /^(pre|div|table)$/.test(
              (child.type as any)?.name || child.type || ""
            )
        )
      ) {
        return <>{children}</>;
      }
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
    },
    // Inherit any custom components passed in
    ...components,
  };
}
