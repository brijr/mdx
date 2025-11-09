"use client";

import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

interface CodeProps {
  children: string;
  className?: string;
  language?: string;
}

export function Code({
  children,
  className,
  language = "typescript",
}: CodeProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-accent"
        aria-label="Copy code"
      >
        {hasCopied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>

      <Highlight
        theme={isDark ? themes.oneDark : themes.github}
        code={children.trim()}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              "overflow-x-auto rounded border bg-muted/30 p-3 text-sm font-mono",
              className
            )}
            style={style}
          >
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
