import { ThemeProvider } from "@/components/theme/theme-provider";
import { Layout, Main } from "@/components/ds";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/site/footer";

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
          "min-h-screen bg-background font-sans antialiased w-screen flex flex-col",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main className="flex-1">{children}</Main>
          <Footer />
          <div className="fixed bottom-6 right-6">
            <ThemeToggle />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </Layout>
  );
}
