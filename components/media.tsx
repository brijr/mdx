"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";

interface MediaProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export function Media({
  src,
  alt = "",
  className,
  width,
  height,
  fill = false,
}: MediaProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "relative cursor-zoom-in overflow-hidden rounded-lg transition-opacity hover:opacity-90",
            className
          )}
          aria-label="Open image in lightbox"
        >
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width || 800}
              height={height || 600}
              className="object-contain"
            />
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 p-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <Dialog.Title className="sr-only">
            {alt || "Image lightbox"}
          </Dialog.Title>
          <div className="relative flex items-center justify-center">
            <Dialog.Close asChild>
              <button
                className="absolute -right-2 -top-2 z-10 rounded-full bg-background p-2 shadow-lg transition-colors hover:bg-accent"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
            <div className="relative max-h-[90vh] w-full overflow-auto rounded-lg">
              <img
                src={src}
                alt={alt}
                className="h-auto w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
