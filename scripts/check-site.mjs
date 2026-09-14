import fs from 'fs';
import path from 'path';

const root = path.resolve('site');
const files = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (name.endsWith('.html')) files.push(full);
  }
}
walk(root);

const failures = [];
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const visible = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  const rel = path.relative(root, file);
  if ((html.match(/<h1\b/gi) || []).length !== 1) failures.push(`${rel}: expected exactly one h1`);
  for (const required of ['<title', 'name="description"', 'rel="canonical"', 'property="og:title"', 'property="og:description"', 'property="og:image"']) {
    if (!html.includes(required)) failures.push(`${rel}: missing ${required}`);
  }
  if (/Empowerement|AAOS maturity stages|Education Administrator/.test(visible)) failures.push(`${rel}: terminology lint failure`);
  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=/.test(image[0])) failures.push(`${rel}: image missing alt`);
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonical && !sitemapUrls.has(canonical[1])) failures.push(`${path.relative(root, file)}: canonical missing from sitemap`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Site checks passed for ${files.length} HTML pages.`);
}
