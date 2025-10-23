import type { Metadata } from "next";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "MDX Starter Template for Building Websites",
    template: "%s | MDX Starter",
  },
  description:
    "MDX and Next.js Starter made by Bridger Tower at 9d8 and WIP / AC",
  keywords: ["Next.js", "MDX", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Bridger Tower" }],
  creator: "Bridger Tower",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MDX Starter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-screen"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </Layout>
  );
}
