"use client";

import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

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
      <div className="absolute right-3 top-3 flex items-center space-x-2">
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Copy code"
        >
          {hasCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          )}
        </button>
      </div>
      <Highlight
        theme={themes.github}
        code={children.trim()}
        language={language}
      >
        {({
          className: _className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={cn(
              "overflow-x-auto rounded-lg bg-zinc-50 dark:bg-zinc-900 p-4 text-sm",
              className
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell pr-4 text-zinc-400 select-none">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
