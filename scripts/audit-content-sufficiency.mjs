import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const exceptions = new Set(['/privacy/', '/terms/']);
const pages = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === 'index.html') pages.push(file);
  }
}
walk(path.join(root, 'sitenew'));
const failures = [];
for (const file of pages) {
  const routePath = path.relative(path.join(root, 'sitenew'), file).replaceAll(path.sep, '/');
  const route = routePath === 'index.html' ? '/' : `/${routePath.replace(/\/index\.html$/, '')}/`;
  const html = fs.readFileSync(file, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  if (!exceptions.has(route) && words < 180) failures.push(`${route}: ${words} words`);
  if (!exceptions.has(route) && !html.includes('href="/assessment/"')) failures.push(`${route}: no assessment path`);
}
console.log(`Pages=${pages.length} Failures=${failures.length}`);
for (const failure of failures) console.log(failure);
if (pages.length !== 84 || failures.length) process.exit(1);
