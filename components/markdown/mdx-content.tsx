"use client";

import * as runtime from "react/jsx-runtime";

import { Bookmark } from "@/components/markdown/bookmark";
import { YouTube } from "@/components/markdown/youtube";
import { Media } from "@/components/markdown/media";
import { Code } from "./code";

import React from "react";
import type { StaticImageData } from "next/image";

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
  img: ({
    src,
    alt,
    className,
  }: {
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
  }) => {
    if (!src) return null;
    return <Media src={src} alt={alt} className={className} />;
  },
  YouTube: ({
    videoid,
    width,
    height,
    params,
    playlabel,
    className,
  }: {
    videoid: string;
    width?: number | string;
    height?: number;
    params?: string;
    playlabel?: string;
    className?: string;
  }) => {
    return (
      <YouTube
        videoid={videoid}
        width={width}
        height={height}
        params={params}
        playlabel={playlabel}
        className={className}
      />
    );
  },
  Bookmark: ({ url, className }: { url: string; className?: string }) => {
    return <Bookmark url={url} className={className} />;
  },
  Media: ({
    src,
    alt,
    className,
    fill,
  }: {
    src: string | StaticImageData;
    alt?: string;
    className?: string;
    fill?: boolean;
  }) => {
    return <Media src={src} alt={alt} className={className} fill={fill} />;
  },
};

const useMDXComponent = (code: string) => {
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
