"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonProps {
  title: string;
  slug?: string;
}

export function ShareButton({ title, slug }: ShareButtonProps) {
  const handleShare = async () => {
    // Construct the full URL
    const url = slug
      ? `${window.location.origin}/${slug}`
      : window.location.href;

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (error) {
        // User cancelled or error occurred
        if ((error as Error).name !== "AbortError") {
          console.error("Error sharing:", error);
          toast.error("Failed to share");
        }
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
      } catch (error) {
        console.error("Failed to copy URL:", error);
        toast.error("Failed to copy link");
      }
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleShare}
      aria-label="Share article"
    >
      <Share2 className="h-4 w-4" />
    </Button>
  );
}
