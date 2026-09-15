import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pages = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    if (fs.statSync(file).isDirectory()) walk(file);
    else if (name === 'index.html') pages.push(file);
  }
}
walk(path.join(root, 'sitenew'));

const marker = /[\u00c2\u00c3\u00e2\u00f0\u00ef\ufffd]/;
const failures = [];
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  if (marker.test(html)) failures.push(`mojibake: ${file}`);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`title: ${file}`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) failures.push(`description: ${file}`);
  if ((html.match(/<main\b/g) || []).length !== 1) failures.push(`main: ${file}`);
}
const rows = fs.readFileSync(path.join(root, 'sitePlan.md'), 'utf8').split(/\r?\n/).filter(line => /^\| `\/.*` \|/.test(line));
const incomplete = rows.filter(line => !line.includes('COMPLETE'));
console.log(`HTML=${pages.length} PLAN=${rows.length} INCOMPLETE=${incomplete.length} FAILURES=${failures.length}`);
for (const failure of failures) console.log(failure);
if (pages.length !== 84 || rows.length !== 84 || incomplete.length || failures.length) process.exit(1);
