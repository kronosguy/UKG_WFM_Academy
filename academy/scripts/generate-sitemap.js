/**
 * Generate sitemap.xml for SEO
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://kronosguy.com/academy';
const BASE_PATH = path.join(__dirname, '..');

// Define all routes
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/modules', priority: 0.9, changefreq: 'weekly' },
  { path: '/knowledge-base', priority: 0.9, changefreq: 'weekly' },
  { path: '/my-learning', priority: 0.8, changefreq: 'daily' },
  { path: '/community', priority: 0.7, changefreq: 'daily' },

  // Platform Docs
  { path: '/docs/platform/getting-started', priority: 0.8, changefreq: 'monthly' },
  { path: '/docs/platform/features', priority: 0.8, changefreq: 'monthly' },
  { path: '/docs/platform/account-management', priority: 0.8, changefreq: 'monthly' },

  // Academy Docs
  { path: '/docs/academy/courses-overview', priority: 0.8, changefreq: 'monthly' },
  { path: '/docs/academy/assessments-and-labs', priority: 0.8, changefreq: 'monthly' },

  // Knowledge Base
  { path: '/docs/knowledge-base/system-overview', priority: 0.8, changefreq: 'monthly' },
  { path: '/docs/knowledge-base/api-reference', priority: 0.7, changefreq: 'weekly' },

  // Static Pages
  { path: '/certifications', priority: 0.7, changefreq: 'monthly' },
  { path: '/help', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
];

function generateSitemap() {
  const timestamp = new Date().toISOString();

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${routes
  .map(
    (route) => `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${timestamp}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`
  )
  .join('')}
</urlset>`;

  const sitemapPath = path.join(BASE_PATH, 'public', 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(path.join(BASE_PATH, 'public'))) {
    fs.mkdirSync(path.join(BASE_PATH, 'public'), { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemapXml.trim());
  console.log(`✓ Sitemap generated: ${sitemapPath}`);
  console.log(`  Total URLs: ${routes.length}`);
}

// Generate sitemap
generateSitemap();
