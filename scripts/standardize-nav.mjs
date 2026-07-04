import fs from 'fs/promises';
import path from 'path';

const siteDir = path.join(process.cwd(), 'site');

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

function getHeader(depth, activePath) {
  const prefix = '../'.repeat(depth);
  const homeUrl = depth === 0 ? 'index.html' : `${prefix}index.html`;
  
  const navItems = [
    { label: 'Home', href: homeUrl, match: 'index.html' },
    { label: 'The Movement', href: `${prefix}movement/`, match: 'movement/' },
    { label: 'Find Your Path', href: `${prefix}find-your-path/`, match: 'find-your-path/' },
    { label: 'Resources', href: `${prefix}resources/`, match: 'resources/' },
    { label: 'About', href: `${prefix}about/`, match: 'about/' }
  ];

  const navHtml = navItems.map(item => {
    let isCurrent = false;
    if (item.match === 'index.html') {
      isCurrent = activePath === 'index.html' || activePath === '';
    } else {
      isCurrent = activePath.startsWith(item.match);
    }
    return `      <a href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join('\n');

  return `<header class="site-header">
  <div class="shell header-row">
    <a class="brand" href="${homeUrl}">
      <img src="${prefix}assets/img/ai-augmented/logo-dark.svg" alt="" aria-hidden="true">
      <span><strong>AI-Augmented</strong><span>Movement site</span></span>
    </a>
    <nav class="nav" aria-label="Primary">
${navHtml}
    </nav>
    <a class="button nav-cta" href="${prefix}assessment/">Take The Assessment</a>
  </div>
</header>`;
}

function getFooter(depth) {
  const prefix = '../'.repeat(depth);
  const homeUrl = depth === 0 ? 'index.html' : `${prefix}index.html`;

  return `<footer class="footer">
  <div class="shell footer-grid">
    <div>
      <strong>AI-Augmented</strong>
      <p class="muted">A movement site for people building practical capability with AI.</p>
    </div>
    <div>
      <strong>Explore</strong>
      <p><a href="${homeUrl}">Home</a></p>
      <p><a href="${prefix}movement/">The Movement</a></p>
      <p><a href="${prefix}find-your-path/">Find Your Path</a></p>
      <p><a href="${prefix}resources/">Resources</a></p>
      <p><a href="${prefix}about/">About</a></p>
    </div>
    <div>
      <strong>Paths</strong>
      <p><a href="${prefix}find-your-path/#individual">Individual</a></p>
      <p><a href="${prefix}find-your-path/#team-leader">Team Leader</a></p>
      <p><a href="${prefix}find-your-path/#organization-leader">Organization Leader</a></p>
      <p><a href="${prefix}assessment/">Assessment</a></p>
    </div>
    <div>
      <strong>More</strong>
      <p><a href="${prefix}books/">Books</a></p>
      <p><a href="${prefix}movement/">Launch</a></p>
      <p><a href="${prefix}articles/">Articles</a></p>
    </div>
  </div>
</footer>`;
}

async function standardize() {
  const files = await getFiles(siteDir);
  for (const file of files) {
    const relativePath = path.relative(siteDir, file).replace(/\\/g, '/');
    const depth = relativePath.split('/').length - 1;
    const content = await fs.readFile(file, 'utf8');

    let updated = content;

    // Standardize Header
    const headerRegex = /<header class="site-header">[\s\S]*?<\/header>/;
    if (headerRegex.test(updated)) {
      updated = updated.replace(headerRegex, getHeader(depth, relativePath));
    }

    // Standardize Footer
    const footerRegex = /<footer class="footer">[\s\S]*?<\/footer>/;
    if (footerRegex.test(updated)) {
      updated = updated.replace(footerRegex, getFooter(depth));
    }

    if (updated !== content) {
      await fs.writeFile(file, updated, 'utf8');
      console.log(`Standardized: ${relativePath}`);
    }
  }
}

standardize().catch(console.error);
