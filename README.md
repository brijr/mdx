# MDX Starter Template

A modern MDX starter template with Next.js 15, Velite, and Tailwind CSS.

## Features

- **Next.js 15** - App Router with React Server Components
- **Velite** - Type-safe MDX content management with auto-generated types
- **Code Highlighting** - Syntax highlighting with copy-to-clipboard
- **Dark Mode** - Built-in theme switching with system preference detection
- **Shadcn/UI** - Beautiful and accessible components
- **TypeScript** - Full type safety throughout
- **Tailwind CSS v4** - Modern utility-first styling

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Writing Content

Create MDX files in the `content/` directory. The folder structure determines your URLs.

```
content/
├── example.mdx              → /example
├── blog/
│   └── my-post.mdx         → /blog/my-post
└── docs/
    └── guide.mdx           → /docs/guide
```

### MDX File Example

```mdx
---
title: "My Post Title"
description: "A brief description"
date: "2025-01-09"
author: "Your Name"
tags: ["nextjs", "mdx"]
published: true
---

# Your content here

Write markdown with React components!

\`\`\`typescript
function hello(name: string) {
  return `Hello, ${name}!`;
}
\`\`\`
```

### Frontmatter Fields

- `title` - Page title (required)
- `description` - Page description (optional)
- `date` - Publication date in ISO format (required)
- `author` - Author name (optional)
- `tags` - Array of tags (optional)
- `published` - Boolean to show/hide post (default: true)

## How It Works

1. **Content Management**: Velite compiles MDX files at build time into type-safe JavaScript
2. **Routes**: Catch-all route (`app/[...slug]/page.tsx`) handles all content URLs
3. **Static Generation**: All pages are pre-rendered at build time
4. **Type Safety**: Auto-generated TypeScript types from your content schema

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx)

## License

MIT License - feel free to use this in your own projects!

---

Made by [Bridger](https://bridger.to)
