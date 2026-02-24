# KronosGuy Academy - Complete Production-Grade Implementation

## Overview

This is a complete, production-ready academy platform for kronosguy.com/academy featuring three integrated LMS domains:

1. **Platform Documentation** - How KronosGuy works
2. **Academy Learning** - Structured UKG WFM courses
3. **UKG Knowledge Base** - System reference and APIs

## Directory Structure

```
academy/
├── content/                      # All markdown content
│   ├── platform/               # Platform documentation
│   │   ├── 01-getting-started.md
│   │   ├── 02-features.md
│   │   └── 03-account-management.md
│   ├── academy/                # Learning paths and courses
│   │   ├── 01-courses-overview.md
│   │   └── 02-assessments-and-labs.md
│   └── knowledge-base/         # Reference materials
│       ├── 01-system-overview.md
│       └── 02-api-reference.md
│
├── components/                  # React components
│   └── layout/
│       ├── RootLayout.tsx
│       ├── Navigation.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
│
├── pages/                       # Next.js pages
│   ├── index.tsx               # Home page
│   ├── modules/                # Academy modules
│   ├── knowledge-base/         # KB pages
│   ├── api/                    # API routes
│   └── docs/                   # Dynamic doc pages
│
├── styles/                      # CSS modules
│   ├── layout.module.css
│   ├── navigation.module.css
│   ├── sidebar.module.css
│   ├── footer.module.css
│   └── home.module.css
│
├── lib/                         # Utilities
│   ├── mdx/
│   │   └── mdx-utils.ts
│   ├── navigation/
│   │   └── nav-builder.ts
│   └── search/
│       └── search-utils.ts
│
├── scripts/                     # Build scripts
│   ├── generate-sitemap.js
│   ├── generate-robots.js
│   └── generate-nav.js
│
├── public/                      # Static assets
│   ├── sitemap.xml            # Auto-generated
│   ├── robots.txt             # Auto-generated
│   └── images/
│
├── .github/workflows/           # CI/CD
│   └── build-and-deploy.yml
│
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind setup
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── postcss.config.js           # PostCSS setup
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd academy
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000/academy
```

### Build & Deploy

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm start

# Generate SEO files
npm run sitemap
npm run robots
npm run generate:nav
```

## Content Structure

### Platform Documentation (`content/platform/`)

**Getting Started** - Introduction to KronosGuy
- Core concepts
- Learning paths
- Navigation guide
- First steps

**Features & Tools** - Complete platform capabilities
- Learning paths
- Interactive labs
- Search functionality
- Community features
- Accessibility

**Account Management** - User accounts and organization
- Profile management
- Team management
- Security settings
- Subscription management

### Academy Learning (`content/academy/`)

**Courses Overview** - All available learning paths
- Level 1: Foundation (4-8 hours)
- Level 2: Intermediate (6-16 hours)
- Level 3: Advanced (8-20 hours)

Three main paths:
1. **Time & Attendance Operations** (14 hours total)
2. **Workforce Scheduling** (20 hours total)
3. **System Administration** (30 hours total)

**Assessments & Labs** - Hands-on learning
- Knowledge checks
- Module quizzes
- Practical assessments
- Lab progression (Guided → Challenge → Scenario)

### UKG Knowledge Base (`content/knowledge-base/`)

**System Overview** - Architecture and data model
- Core components
- Data entities
- Integration points
- Security model

**API Reference** - Complete API documentation
- Authentication
- Endpoints (Employees, Time Entries, Schedules, Leave)
- Error codes
- Code examples (Python, JavaScript, cURL)
- SDKs and libraries

## Styling & Theming

### Color Palette

```css
--color-accent: #0284c7         /* Primary CTA */
--color-accent-light: #38bdf8   /* Hover state */
--color-success: #16a34a        /* Success state */
--color-warning: #d97706        /* Warnings */
--color-error: #dc2626          /* Errors */
```

### Dark Mode Support

All CSS modules include dark mode support:
- Light theme (default)
- Dark theme via `prefers-color-scheme: dark`
- Smooth transitions between modes

### Responsive Design

- Mobile-first approach
- Desktop: 1600px max-width
- Tablet: 768px breakpoint
- Mobile: Full width with adjusted spacing

## Features

### 1. MDX Content Processing
- Parse markdown with frontmatter
- Auto table of contents generation
- Reading time estimation
- Link validation

### 2. Navigation System
- Auto-generated from file structure
- Breadcrumb trails
- Active state tracking
- Next/Previous links

### 3. Search Functionality
- Full-text search across content
- Filter by category, difficulty, tags
- Saved searches support
- Smart suggestions

### 4. SEO Optimization
- Auto-generated sitemap.xml
- Auto-generated robots.txt
- Meta tags and OG properties
- Structured data markup

### 5. Performance
- Next.js image optimization
- Code splitting and lazy loading
- CSS modules (no global styling)
- Static generation where possible

## GitHub Actions Workflows

### `build-and-deploy.yml`

Fully automated CI/CD pipeline:

1. **Lint and Test** (runs on all PRs and pushes)
   - ESLint
   - Prettier format check
   - Markdown linting
   - Link validation
   - TypeScript type checking
   - Jest tests

2. **Build** (after lint/test passes)
   - Install dependencies
   - Generate navigation
   - Generate sitemap
   - Generate robots.txt
   - Build Next.js

3. **Deploy to Production** (main branch only)
   - Deploy to GitHub Pages
   - Auto-approval workflow
   - Notification on completion

4. **Deploy to Staging** (develop branch only)
   - Deploy to staging environment

5. **Security Scan**
   - Trivy vulnerability scanner
   - Dependency audit
   - SARIF output to GitHub Security

6. **Auto-Approval**
   - Status checks for PRs
   - Automated approval conditions

## Configuration Files

### `next.config.js`
- MDX configuration
- Image optimization
- Security headers
- Redirects and rewrites
- Basepath: `/academy`

### `tailwind.config.js`
- Custom color palette
- Extended typography
- Dark mode configuration
- Animation definitions

### `tsconfig.json`
- Strict mode enabled
- Path aliases configured
- JSX support
- Target ES2020

### `package.json`
- All production and dev dependencies
- Build and development scripts
- Test configuration
- Node.js 18+ requirement

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_NAME="UKG WFM Academy"
NEXT_PUBLIC_SITE_DESCRIPTION="Production-grade learning for UKG workforce management systems"
NEXT_PUBLIC_ASSET_PREFIX="/academy"

# For deployment
DEPLOYMENT_URL="https://kronosguy.com/academy"
GITHUB_TOKEN=<token for releases>
```

## Development Workflow

### Adding New Content

1. **Create markdown file** in appropriate `content/` directory
2. **Add frontmatter** (title, description, category, difficulty, etc.)
3. **Write content** using markdown
4. **Run lint checks**
   ```bash
   npm run lint:md
   npm run lint:links
   ```
5. **Preview locally** at http://localhost:3000/academy
6. **Commit and push** to GitHub
7. **Automated tests and deployment**

### Adding New Page

1. **Create file** in `pages/` directory
2. **Import RootLayout** component
3. **Add styles** in `styles/` directory
4. **Update navigation** in `lib/navigation/nav-builder.ts`
5. **Update routing** in build scripts if needed

### Component Development

All components use TypeScript and CSS modules:

```typescript
// components/my-component.tsx
import React from 'react';
import styles from '../styles/my-component.module.css';

const MyComponent: React.FC = () => {
  return <div className={styles.container}>Content</div>;
};

export default MyComponent;
```

## Deployment

### GitHub Pages (Current Setup)

1. Push to `main` branch
2. GitHub Actions builds and tests
3. Auto-deployed to `https://kronosguy.com/academy`
4. Available immediately after workflow completes

### Alternative: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd academy
vercel --prod
```

### Alternative: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

## Performance Metrics

Target metrics:
- Lighthouse score: 90+
- First Contentful Paint: <2s
- Largest Contentful Paint: <3s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <4s

Check with:
```bash
npm run build
npm start
# Then use Google PageSpeed Insights or Lighthouse CLI
```

## Security

- Content Security Policy headers
- Secure headers enabled
- No inline scripts
- HTTPS enforcement
- CORS properly configured
- Input validation on all forms

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Mobile latest

## Troubleshooting

### Build fails with "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles not applying
- Clear `.next` directory
- Restart dev server
- Check CSS module names match component imports

### Links are broken
```bash
npm run lint:links
# Fix reported issues
```

### Performance issues
```bash
npm run build
npm run analyze  # if available
# Check for large bundles
```

## Support

For issues or questions:
- GitHub Issues: https://github.com/kronosguy/academy/issues
- Email: support@kronosguy.com
- Documentation: https://kronosguy.com/academy/docs/platform/help

## License

© 2024 KronosGuy. All rights reserved.

## Contributing

Contributions welcome! Please see CONTRIBUTING.md for guidelines.

---

## Deployment Checklist

Before going live:

- [ ] All tests passing
- [ ] No ESLint warnings
- [ ] No TypeScript errors
- [ ] Lighthouse score 90+
- [ ] Links validated
- [ ] SEO tags present
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Environment variables set
- [ ] Deployment URL correct

---

**Ready to deploy? The GitHub Actions workflow handles everything automatically!**

Push to `main` branch and watch the deployment succeed.
