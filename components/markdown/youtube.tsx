import { YouTubeEmbed } from "@next/third-parties/google";
import { cn } from "@/lib/utils";

interface YouTubeProps {
  videoid: string;
  width?: number | string;
  height?: number;
  params?: string;
  playlabel?: string;
  className?: string;
}

export function YouTube({
  videoid,
  width = "100%",
  height,
  params,
  playlabel,
  className,
}: YouTubeProps) {
  return (
    <div
      className={cn(
        "my-6 overflow-hidden rounded-lg [&_iframe]:rounded-lg border aspect-video",
        className
      )}
    >
      <YouTubeEmbed
        videoid={videoid}
        width={typeof width === "string" ? undefined : width}
        height={height}
        params={params}
        playlabel={playlabel}
      />
    </div>
  );
}
