import fs from 'fs/promises';
import path from 'path';

const siteDir = path.join(process.cwd(), 'site');
const baseUrl = 'https://ai-augmented.ai/';

async function getFiles(dir) {
  let results = [];
  const list = await fs.readdir(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await getFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function generateSitemap() {
  const files = await getFiles(siteDir);
  files.sort();

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const file of files) {
    let url = path.relative(siteDir, file).replace(/\\/g, '/');
    if (url === 'index.html') {
      url = '';
    } else if (url.endsWith('/index.html')) {
      url = url.replace('index.html', '');
    }

    // Determine priority
    let priority = '0.8';
    if (url === '') priority = '1.0';
    if (url.startsWith('lens/') && url.split('/').length > 2) priority = '0.7';
    if (url.startsWith('articles/')) priority = '0.9';

    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${url}</loc>\n`;
    sitemap += '    <changefreq>monthly</changefreq>\n';
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += '  </url>\n';
  }

  sitemap += '</urlset>';
  await fs.writeFile(path.join(siteDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap generated successfully.');
}

generateSitemap().catch(console.error);
