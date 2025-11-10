"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CopyArticleButton() {
  const [hasCopied, setHasCopied] = useState(false);

  const copyArticleText = async () => {
    try {
      // Find the article element
      const article = document.querySelector("article");
      if (!article) {
        toast.error("Article not found");
        return;
      }

      // Extract text content from the article
      const text = article.innerText || article.textContent || "";

      if (!text.trim()) {
        toast.error("No content to copy");
        return;
      }

      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      toast.success("Article copied to clipboard");
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast.error("Failed to copy article");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={copyArticleText}
      aria-label="Copy article text"
    >
      {hasCopied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
