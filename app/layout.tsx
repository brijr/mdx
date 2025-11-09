import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Layout } from "@/components/ds";

import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "MDX Starter Template for Building Websites",
    template: "%s | MDX Starter",
  },
  description:
    "MDX and Next.js Starter made by Bridger Tower at 9d8 and WIP / AC",
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
          <div className="fixed bottom-6 right-6">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </Layout>
  );
}
