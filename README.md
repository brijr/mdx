# MDX Starter

A modern MDX starter template with Next.js, Velite, and Tailwind CSS.

## Features

- [Next.js](https://nextjs.org/docs/app) App Router with React Server Components
- [Velite](https://velite.js.org/) for type-safe MDX content
- Code highlighting with copy-to-clipboard
- Dark mode with system preference detection
- [Shadcn/UI](https://ui.shadcn.com/) components
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)

## Quick Start

```bash
pnpm install
pnpm dev
```

## Writing Content

Create MDX files in the `content/` directory. The folder structure determines your URLs:

```
content/
├── example.mdx              → /example
├── blog/
│   └── my-post.mdx         → /blog/my-post
└── docs/
    └── guide.mdx           → /docs/guide
```

### Example MDX File

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
```

### Frontmatter

- `title` - Page title (required)
- `description` - Page description (optional)
- `date` - Publication date in ISO format (required)
- `author` - Author name (optional)
- `tags` - Array of tags (optional)
- `published` - Show/hide post (default: true)

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx)

## License

MIT License

---

Made by [Bridger](https://bridgertower.com)
