import { NextRequest, NextResponse } from "next/server";

interface Metadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  domain?: string;
}

function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function extractMetadata(html: string, url: string): Metadata {
  const metadata: Metadata = {
    url,
    domain: extractDomain(url),
  };

  // Extract title
  const titleMatch =
    html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i) ||
    html.match(/<meta\s+name="twitter:title"\s+content="([^"]+)"/i) ||
    html.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch) {
    metadata.title = titleMatch[1].trim();
  }

  // Extract description
  const descMatch =
    html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i) ||
    html.match(/<meta\s+name="twitter:description"\s+content="([^"]+)"/i) ||
    html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (descMatch) {
    metadata.description = descMatch[1].trim();
  }

  // Extract image
  const imageMatch =
    html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i) ||
    html.match(/<meta\s+name="twitter:image"\s+content="([^"]+)"/i);
  if (imageMatch) {
    let imageUrl = imageMatch[1].trim();
    // Convert relative URLs to absolute
    if (imageUrl.startsWith("//")) {
      imageUrl = `https:${imageUrl}`;
    } else if (imageUrl.startsWith("/")) {
      const baseUrl = new URL(url).origin;
      imageUrl = `${baseUrl}${imageUrl}`;
    }
    metadata.image = imageUrl;
  }

  return metadata;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    // Validate URL
    new URL(url);

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; BookmarkBot/1.0; +https://example.com/bot)",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    const metadata = extractMetadata(html, url);

    return NextResponse.json(metadata);
  } catch (error) {
    console.error("Error fetching bookmark metadata:", error);
    return NextResponse.json(
      {
        url,
        domain: extractDomain(url),
        error: "Failed to fetch metadata",
      },
      { status: 500 }
    );
  }
}
