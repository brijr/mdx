"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookmarkMetadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  domain?: string;
}

interface BookmarkProps {
  url: string;
  className?: string;
}

async function fetchMetadata(url: string): Promise<BookmarkMetadata> {
  try {
    const response = await fetch(
      `/api/bookmark?url=${encodeURIComponent(url)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch metadata");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching bookmark metadata:", error);
    return {
      url,
      domain: new URL(url).hostname.replace("www.", ""),
    };
  }
}

export function Bookmark({ url, className }: BookmarkProps) {
  const [metadata, setMetadata] = useState<BookmarkMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMetadata(url).then((data) => {
      setMetadata(data);
      setIsLoading(false);
    });
  }, [url]);

  if (isLoading) {
    return (
      <div
        className={cn(
          "my-4 rounded border border-border/50 bg-muted/20 p-3 animate-pulse",
          className
        )}
      >
        <div className="h-3.5 bg-muted rounded w-2/3 mb-2" />
        <div className="h-3 bg-muted rounded w-1/2" />
      </div>
    );
  }

  if (!metadata) {
    return null;
  }

  const displayDomain =
    metadata.domain || new URL(url).hostname.replace("www.", "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bookmark-link group my-4 block rounded border bg-muted/20",
        "hover:border-border hover:bg-muted/30 transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
    >
      <div className="flex overflow-hidden rounded">
        {metadata.image && (
          <div className="relative w-32 sm:w-40 shrink-0 p-2 bg-muted border-r">
            <img
              src={metadata.image}
              alt={metadata.title || ""}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
          {metadata.title && (
            <h4 className="font-medium text-sm mb-1 line-clamp-1 group-hover:text-foreground transition-colors">
              {metadata.title}
            </h4>
          )}
          {metadata.description && (
            <p className="text-xs text-muted-foreground line-clamp-1 mb-1.5">
              {metadata.description}
            </p>
          )}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="truncate">{displayDomain}</span>
            <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
          </div>
        </div>
      </div>
    </a>
  );
}
