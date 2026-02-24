/**
 * Generate robots.txt for search engine crawling
 */

const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(__dirname, '..');
const DOMAIN = 'https://kronosguy.com';

function generateRobots() {
  const robotsTxt = `# robots.txt for UKG WFM Academy
# Generated automatically by build process

User-agent: *
Allow: /academy/
Disallow: /academy/api/
Disallow: /academy/admin/
Disallow: /academy/_next/
Disallow: /academy/*.json$

# Allow search engines to see sitemap
Sitemap: ${DOMAIN}/academy/sitemap.xml

# Crawl delay for other bots
User-agent: *
Crawl-delay: 1

# Specific rules for Googlebot
User-agent: Googlebot
Allow: /academy/
Crawl-delay: 0

# Specific rules for Bingbot
User-agent: Bingbot
Allow: /academy/
Crawl-delay: 1

# Block bad bots
User-agent: MJ12bot
User-agent: AhrefsBot
User-agent: SemrushBot
Disallow: /

# Disallow admin and private areas
User-agent: *
Disallow: /academy/admin/
Disallow: /academy/user/
Disallow: /academy/dashboard/
Disallow: /*.json$
`;

  const robotsPath = path.join(BASE_PATH, 'public', 'robots.txt');

  // Ensure public directory exists
  if (!fs.existsSync(path.join(BASE_PATH, 'public'))) {
    fs.mkdirSync(path.join(BASE_PATH, 'public'), { recursive: true });
  }

  fs.writeFileSync(robotsPath, robotsTxt.trim());
  console.log(`✓ robots.txt generated: ${robotsPath}`);
}

// Generate robots.txt
generateRobots();
