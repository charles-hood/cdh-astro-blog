# Charles Hood's Personal Blog - Technical Documentation

## Overview
This is Charles Hood's personal blog about tech, tunes, and travel. It's a modern, fast-loading static site built with Astro and deployed automatically via Netlify.

**Live URLs:**
- Primary: https://charleshood.net
- Mirrors: https://charleshood.org, https://charleshood.me

## Migration History
This blog was migrated from Gatsby (Lumen theme) to Astro (AstroPaper theme) in July 2025. The migration preserved all content while modernizing the tech stack for better performance and maintainability.

### What Was Migrated:
- **19 blog posts** with complete content and formatting
- **All images and media** from posts with corrected paths
- **Site configuration** (title, author info, social links)
- **Custom pages** (About, Contact)
- **Author bio picture** and favicon
- **Navigation structure**

## Tech Stack

### Framework & Theme
- **Astro 5.12+** - Modern static site generator
- **AstroPaper theme** - Clean, accessible blog theme
- **TypeScript** - Type safety throughout
- **Tailwind CSS** - Utility-first styling

### Content Management
- **Markdown/MDX** - Blog posts in `/src/data/blog/`
- **Frontmatter** - Post metadata (title, date, tags, description)
- **Static images** - Stored in `/public/blog-images/[post-directory]/media/`

### Build & Deployment
- **Package Manager**: npm (not pnpm - caused lockfile conflicts)
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Search**: Pagefind for static search functionality
- **Git**: Repository at https://github.com/charles-hood/cdh-astro-blog

### Hosting & CI/CD
- **Netlify** - Auto-deploys from GitHub main branch
- **Build Environment**: Ubuntu Noble 24.04
- **Domain**: Custom domains pointing to Netlify
- **SSL**: Automatic via Netlify

## Site Configuration

### Key Files:
- **`src/config.ts`** - Main site configuration
- **`src/constants.ts`** - Social links and navigation
- **`src/pages/index.astro`** - Homepage with bio picture
- **`src/pages/about.md`** - About page content
- **`src/pages/contact.md`** - Contact page content

### Current Settings:
- **Site Title**: "Charles Hood"
- **Description**: "My personal web log where I write about tech, tunes, and travel!"
- **Author**: Charles Hood
- **Location**: Canton/Atlanta area, GA
- **Greeting**: "Hey there!" (homepage)
- **Bio Picture**: `/cdh-bio-pic-LI.jpeg`
- **Favicon**: `/favicon.jpg` (same as original Gatsby site)

### Social Links:
- Email: charles.hood@gmail.com
- X/Twitter: @charleshood
- LinkedIn: /in/charleshood
- Facebook: /charleshood

## Content Structure

### Blog Posts (`/src/data/blog/`)
Each post is a `.md` file with frontmatter:
```yaml
---
author: "Charles Hood"
pubDatetime: 2025-03-15T00:00:00.000Z
title: "Post Title"
description: "Brief description for SEO"
draft: false
tags:
  - "Tag 1"
  - "Tag 2"
---
```

### Images
- **Location**: `/public/blog-images/[original-gatsby-dir]/media/[filename]`
- **References**: Use absolute paths like `/blog-images/2024-16-03--create-free-website-with-ai/media/image.png`
- **Bio Picture**: `/public/cdh-bio-pic-LI.jpeg` (800x800px LinkedIn photo)

### Navigation
- Posts (main blog listing)
- Tags (tag-based filtering)
- About (personal bio)
- Contact (social links)
- Archives (date-based archive)
- Search (Pagefind integration)

## Development Workflow

### Local Development:
```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview built site
```

### Adding New Posts:
1. Create new `.md` file in `/src/data/blog/`
2. Use proper frontmatter format
3. Add images to `/public/blog-images/[post-slug]/` if needed
4. Reference images with absolute paths
5. Commit and push - auto-deploys via Netlify

### Making Updates:
1. Edit files locally
2. Test with `npm run dev`
3. Commit changes to main branch
4. Netlify auto-builds and deploys

## Important Migration Notes

### Date Updates Made:
- **"Weekend Dilemma" post**: Updated to Dec 27, 2024 (Friday)
- **"AI Website Creation" post**: Updated to March 15, 2025
- This makes the blog appear more current vs. original 2024 dates

### Dependencies Fixed:
- **gray-matter**: Added during migration for frontmatter parsing
- **Lockfile**: Used npm instead of pnpm to avoid conflicts
- **Build Image**: Updated to Ubuntu Noble 24.04 for future compatibility

### Image Path Migration:
- Original Gatsby used relative paths (`./media/image.png`)
- Astro uses absolute paths (`/blog-images/[dir]/media/image.png`)
- All 19 posts had image paths corrected during migration

## Future Maintenance

### Adding New Posts:
- Follow existing naming convention for consistency
- Use current date format in frontmatter
- Keep tags relevant and organized
- Test images load correctly before publishing

### Theme Updates:
- Check AstroPaper releases for updates
- Test thoroughly in dev before deploying
- Preserve custom configurations (social links, bio, etc.)

### Performance:
- Astro builds are fast and optimized
- Images are served statically via Netlify CDN
- Search is client-side via Pagefind
- No database or CMS dependencies

## Troubleshooting

### Common Issues:
1. **Build failures**: Check npm vs pnpm lockfile conflicts
2. **Image 404s**: Verify absolute paths in `/public/blog-images/`
3. **Date formatting**: Ensure ISO format in frontmatter
4. **Search not working**: Rebuild to regenerate Pagefind index

### Quick Fixes:
- Clear cache and deploy site on Netlify for build issues
- Check GitHub repository for successful pushes
- Verify Netlify build logs for specific errors

---

*This blog represents a successful migration from Gatsby to Astro, maintaining all content while modernizing the tech stack for better performance and developer experience.*