# How Charles Hood's Astro Blog Works - Complete Technical Documentation

## Directory Structure

### Root Project Location
- **Local Path**: `/Users/charles/Projects/cdh-astro-blog/`
- **Actual Blog Directory**: `/Users/charles/Projects/cdh-astro-blog/grateful-galaxy/astro-blog/`
  - Note: The blog is nested within a subdirectory called `grateful-galaxy/astro-blog/`

### GitHub Repository
- **Repository URL**: https://github.com/charles-hood/cdh-astro-blog
- **Default Branch**: `main`
- **Remote**: `origin` pointing to the GitHub repo

## Technology Stack

### Core Framework
- **Astro**: Version 5.12+ (static site generator)
- **Theme**: AstroPaper (clean, accessible blog theme)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm (NOT pnpm - causes lockfile conflicts)

### Key Dependencies
- **Search**: Pagefind (static search functionality)
- **Markdown Processing**: gray-matter (for frontmatter parsing)
- **Build Environment**: Node.js

## Project Structure

```
/Users/charles/Projects/cdh-astro-blog/grateful-galaxy/astro-blog/
├── src/
│   ├── assets/              # Images used in layouts
│   │   └── cdh-contact-pic.jpeg
│   ├── components/          # Astro components
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro
│   │   └── HeaderLink.astro
│   ├── config.ts           # Main site configuration
│   ├── constants.ts        # Social links and navigation
│   ├── content.config.ts   # Content collection config
│   ├── data/
│   │   └── blog/           # All blog posts (markdown files)
│   │       ├── ai-allies-secret-weapons.md
│   │       ├── arizona-road-trip.md
│   │       ├── ford-skunkworks-ev-strategy.md
│   │       ├── reverse-proxy-fix-ancient-routers.md
│   │       └── [... 18 more posts]
│   ├── layouts/
│   │   ├── BlogPost.astro
│   │   └── AboutLayout.astro
│   ├── pages/              # Page routes
│   │   ├── index.astro     # Homepage
│   │   ├── about.md        # About page
│   │   ├── contact.md      # Contact page
│   │   ├── archives/
│   │   ├── blog/
│   │   ├── posts/
│   │   ├── search.astro
│   │   ├── tags/
│   │   ├── rss.xml.ts
│   │   └── robots.txt.ts
│   └── styles/
│       └── global.css
├── public/                 # Static assets
│   ├── blog-images/        # Blog post images
│   │   ├── ford-skunkworks/media/
│   │   ├── reverse-proxy-fix/media/
│   │   └── [... other post image directories]
│   ├── cdh-bio-pic-LI.jpeg
│   ├── cdh-contact-pic.jpeg
│   └── favicon.jpg
├── dist/                   # Build output directory
├── package.json
├── package-lock.json
├── astro.config.mjs
├── tsconfig.json
└── tailwind.config.cjs
```

## Content Management

### Blog Posts Location
- **Path**: `/src/data/blog/`
- **Format**: Markdown (.md) files
- **Naming Convention**: kebab-case (e.g., `ford-skunkworks-ev-strategy.md`)

### Blog Post Frontmatter Format
```yaml
---
author: "Charles Hood"
pubDatetime: 2025-08-12T16:00:00.000Z
title: "Your Post Title Here"
description: "Brief description for SEO and previews"
draft: false
tags:
  - "Tag 1"
  - "Tag 2"
coverImage:
  src: "/blog-images/post-slug/media/image.png"
  alt: "Image description"
---
```

### Image Storage
- **Blog Images**: `/public/blog-images/[post-slug]/media/`
- **Site Images**: `/public/` (root of public directory)
- **Image References**: Use absolute paths starting with `/`
  - Example: `/blog-images/ford-skunkworks/media/skunk-truck.jpg`

### Special Pages
- **About Page**: `/src/pages/about.md`
- **Contact Page**: `/src/pages/contact.md`
- Both use the `AboutLayout.astro` layout

## Build Process

### Local Development
```bash
cd /Users/charles/Projects/cdh-astro-blog/grateful-galaxy/astro-blog
npm run dev      # Starts dev server at http://localhost:4321
```

### Production Build
```bash
cd /Users/charles/Projects/cdh-astro-blog/grateful-galaxy/astro-blog
npm run build    # Builds static site to dist/ directory
```

### Build Commands Breakdown
1. `astro check` - Type checking
2. `astro build` - Builds the static site
3. `pagefind --site dist` - Generates search index
4. `cp -r dist/pagefind public/` - Copies search files to public

### Preview Production Build
```bash
npm run preview  # Preview built site locally
```

## Deployment

### Current Hosting: Netlify
- **Deployment Method**: Automatic from GitHub
- **Trigger**: Any push to `main` branch
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Build Environment**: Ubuntu Noble 24.04

### Domain Configuration
- **Primary Domain**: https://charleshood.net
- **Additional Domains**: 
  - https://charleshood.org
  - https://charleshood.me
- **SSL**: Automatic via Netlify
- **DNS**: Managed through domain registrar pointing to Netlify

### Netlify Site Name
- **Netlify URL**: https://charleshood.netlify.app
- This is the underlying Netlify URL that custom domains point to

## Git Workflow

### Adding New Blog Post
```bash
# 1. Create new post in the correct directory
# 2. Add images to public/blog-images/[post-slug]/media/
# 3. Stage and commit
git add -A
git commit -m "Add new blog post: [Title]"
git push origin main
# Netlify automatically builds and deploys
```

### Current Git Status Check
```bash
cd /Users/charles/Projects/cdh-astro-blog/grateful-galaxy/astro-blog
git status
git remote -v  # Shows: origin https://github.com/charles-hood/cdh-astro-blog.git
```

## Important Configuration Files

### astro.config.mjs
- Defines site URL, integrations, and build settings
- Contains sitemap and other plugin configurations

### src/config.ts
- Site metadata (title, description, author)
- Social media links
- Site behavior settings

### src/constants.ts
- Navigation menu items
- Social media profiles
- Other site-wide constants

### package.json Key Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build && pagefind --site dist && cp -r dist/pagefind public/",
    "preview": "astro preview"
  }
}
```

## Migration Notes for New Host

### Requirements for Any New Host
1. **Node.js Support**: Version 18+ recommended
2. **Build Command Support**: Must run `npm run build`
3. **Static Site Hosting**: Serves from `dist/` directory
4. **Git Integration**: For automatic deployments
5. **Custom Domain Support**: For your three domains

### Files to Transfer
1. Entire `/grateful-galaxy/astro-blog/` directory
2. All contents including:
   - Source files (`src/`)
   - Public assets (`public/`)
   - Configuration files
   - Package files (`package.json`, `package-lock.json`)

### Steps to Migrate to New Host

1. **Clone Repository**
   ```bash
   git clone https://github.com/charles-hood/cdh-astro-blog.git
   cd cdh-astro-blog/grateful-galaxy/astro-blog
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build Site**
   ```bash
   npm run build
   ```

4. **Deploy `dist/` Directory**
   - Upload the `dist/` folder to your new host
   - Or configure automatic builds from GitHub

### Alternative Hosting Options

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

#### GitHub Pages
- Would require adjusting paths for subdirectory hosting
- Add `.github/workflows/deploy.yml` for Actions

#### CloudFlare Pages
- Direct GitHub integration
- Similar to Netlify setup

#### Self-Hosted (VPS)
```bash
# Build locally
npm run build
# Upload dist/ to server
rsync -avz dist/ user@server:/var/www/blog/
# Configure nginx/apache to serve from /var/www/blog/
```

## Troubleshooting

### Common Issues
1. **Build Failures**: Check Node version and npm (not pnpm)
2. **Image 404s**: Verify paths start with `/` and images are in `/public/blog-images/`
3. **Search Not Working**: Ensure Pagefind runs during build
4. **Dates Wrong**: Use ISO format in frontmatter (YYYY-MM-DDTHH:mm:ss.sssZ)

### Required Environment
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Git**: For version control
- **OS**: Works on macOS, Linux, Windows

## Backup Strategy

### Current Backups
1. **GitHub**: Full source code and history
2. **Local**: Your machine at `/Users/charles/Projects/cdh-astro-blog/`
3. **Netlify**: Build artifacts cached

### What to Backup
- The entire `grateful-galaxy/astro-blog/` directory
- Especially `/src/data/blog/` (your posts)
- And `/public/blog-images/` (your images)

## Contact for Issues
- **GitHub Issues**: https://github.com/charles-hood/cdh-astro-blog/issues
- **Current Deploy Logs**: Check Netlify dashboard

---

*Last Updated: August 2025*
*This documentation covers the complete setup as migrated from Gatsby to Astro with the AstroPaper theme.*