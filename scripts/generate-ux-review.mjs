import fs from 'fs';
import path from 'path';

const root = path.resolve('site');
const output = path.resolve('docs/ux-page-review.md');
const pages = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    if (fs.statSync(file).isDirectory()) walk(file);
    else if (name === 'index.html') pages.push(file);
  }
}

function text(value) {
  return value.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || '';
}

walk(root);
pages.sort();
const rows = pages.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const relative = `/${path.relative(root, file).replace(/\\/g, '/').replace(/index\.html$/, '')}`;
  const title = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const heading = firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const firstButton = firstMatch(html, /<a[^>]*class="[^"]*button[^\"]*"[^>]*>([\s\S]*?)<\/a>/i);
  const intro = text(html.match(/<main[\s\S]*?<section[\s\S]*?<\/section>/i)?.[0] || '').slice(0, 180);
  const audience = /student/i.test(`${title} ${heading}`) ? 'Student' : /teacher|faculty/i.test(`${title} ${heading}`) ? 'Teacher' : /education|institution/i.test(`${title} ${heading}`) ? 'Education or institution leader' : /team/i.test(`${title} ${heading}`) ? 'Team leader' : /organization|enterprise/i.test(`${title} ${heading}`) ? 'Organization leader' : 'General visitor or movement participant';
  const question = heading ? `What does “${heading.replace(/<[^>]+>/g, '')}” mean for me?` : 'What should I understand or do next?';
  return `| ${relative || '/'} | ${audience} | ${question} | ${heading.replace(/<[^>]+>/g, '')} | ${firstButton.replace(/<[^>]+>/g, '') || 'Review page-specific next action'} | ${intro.replace(/\|/g, '/')} |`;
});

const content = `# UX Page Review\n\nGenerated from the ${pages.length} public HTML pages. This inventory makes the page-by-page review explicit and provides a repeatable starting point for manual validation.\n\n| Page | Intended audience | Visitor question | Expected understanding | Primary next action | Opening context |\n|---|---|---|---|---|---|\n${rows.join('\n')}\n`;
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, content);
console.log(`Generated UX review for ${pages.length} pages: ${path.relative(process.cwd(), output)}`);
