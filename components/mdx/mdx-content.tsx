"use client";

import * as runtime from "react/jsx-runtime";
import { Code } from "./code";
import React from "react";

const sharedComponents = {
  pre: ({ children }: { children: React.ReactNode }) =>
    children as React.ReactElement,
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const isInlineCode = !className;
    if (isInlineCode) {
      return (
        <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {children}
        </code>
      );
    }

    const language = className?.replace("language-", "");
    return <Code language={language}>{children as string}</Code>;
  },
  p: ({ children }: { children: React.ReactNode }) => {
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
    return <p className="leading-7 not-first:mt-6">{children}</p>;
  },
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
};

// This is safe: code is pre-compiled at build time by Velite, not runtime user input
const useMDXComponent = (code: string) => {
  // eslint-disable-next-line no-new-func
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
