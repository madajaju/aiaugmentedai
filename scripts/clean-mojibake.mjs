import fs from 'node:fs';
import path from 'node:path';

const roots = ['site', 'sitenew'];
const replacements = new Map([
  ['\u00e2\u2020\u2019', '\u2192'], // â†’
  ['\u00e2\u20ac\u201c', '\u2013'], // â€“
  ['\u00e2\u20ac\u201d', '\u2014'], // â€”
  ['\u00e2\u20ac\u2122', '\u2019'], // â€™
  ['\u00e2\u20ac\u02dc', '\u2018'], // â€˜
  ['\u00e2\u20ac\u0153', '\u201c'], // â€œ
  ['\u00e2\u20ac\u009d', '\u201d'], // â€
  ['\u00c2\u00b7', '\u00b7'], // Â·
  ['\u00c2\u00a9', '\u00a9'], // Â©
]);

let changed = 0;
let files = 0;

function cleanFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const [bad, good] of replacements) content = content.replaceAll(bad, good);
  files += 1;
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changed += 1;
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) cleanFile(file);
  }
}

for (const root of roots) walk(path.resolve(root));
console.log(`Scanned ${files} HTML files; cleaned ${changed}.`);
