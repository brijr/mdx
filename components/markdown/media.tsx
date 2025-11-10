"use client";

import { useState } from "react";

import Image, { type StaticImageData } from "next/image";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import * as Dialog from "@radix-ui/react-dialog";

interface MediaProps {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  fill?: boolean;
}

const overlayClasses = cn(
  "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
  "transition-opacity duration-300 ease-out",
  "starting:opacity-0",
  "data-[state=open]:opacity-100",
  "data-[state=closed]:opacity-0"
);

const contentClasses = cn(
  "fixed left-1/2 top-1/2 z-50 w-full max-w-7xl",
  "-translate-x-1/2 -translate-y-1/2 p-4",
  "transition-all duration-300 ease-out",
  "starting:opacity-0 starting:scale-[0.96]",
  "data-[state=open]:opacity-100 data-[state=open]:scale-100",
  "data-[state=closed]:opacity-0 data-[state=closed]:scale-[0.96]"
);

const closeButtonClasses = cn(
  "absolute -right-2 -top-2 z-10",
  "rounded-full bg-background p-2 shadow-lg",
  "transition-all duration-200 ease-out",
  "hover:bg-accent",
  "starting:opacity-0 starting:scale-90",
  "data-[state=open]:opacity-100 data-[state=open]:scale-100",
  "data-[state=open]:delay-150",
  "data-[state=closed]:opacity-0 data-[state=closed]:scale-90"
);

const imageClasses = cn(
  "h-auto w-full object-contain",
  "transition-opacity duration-300 ease-out",
  "starting:opacity-0",
  "data-[state=open]:opacity-100 data-[state=open]:delay-75",
  "data-[state=closed]:opacity-0"
);

export function Media({ src, alt = "", className, fill = false }: MediaProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isStaticImport =
    typeof src === "object" && "width" in src && "height" in src;
  const imageWidth = isStaticImport ? src.width : undefined;
  const imageHeight = isStaticImport ? src.height : undefined;
  const imageSrc = isStaticImport ? src.src : src;
  const aspectRatio =
    imageWidth && imageHeight ? `${imageWidth} / ${imageHeight}` : undefined;

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "relative cursor-zoom-in overflow-hidden rounded-lg",
            "transition-opacity hover:opacity-90",
            "border",
            "block w-full",
            (fill || (!isStaticImport && !imageWidth && !imageHeight)) &&
              "aspect-4/3",
            className
          )}
          style={
            !fill && aspectRatio
              ? {
                  aspectRatio,
                }
              : undefined
          }
          aria-label="Open image in lightbox"
        >
          {fill || (!isStaticImport && !imageWidth && !imageHeight) ? (
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                isStaticImport ? "object-contain" : "object-cover",
                "bg-muted"
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              className="object-contain bg-muted"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={overlayClasses} />
        <Dialog.Content className={contentClasses}>
          <Dialog.Title className="sr-only">
            {alt || "Image lightbox"}
          </Dialog.Title>
          <div className="relative flex items-center justify-center">
            <Dialog.Close asChild>
              <button
                className={closeButtonClasses}
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
            <div className="relative max-h-[90vh] w-full overflow-auto rounded-lg border">
              <img
                src={imageSrc}
                alt={alt}
                className={imageClasses}
                loading="eager"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
