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
    { label: 'Movement', href: `${prefix}movement/`, matches: ['movement/', 'newsletter/'] },
    { label: 'Find Your Path', href: `${prefix}find-your-path/`, matches: ['find-your-path/', 'lens/', 'start-here/'] },
    { label: 'Framework', href: `${prefix}aaos/`, matches: ['aaos/', 'learn-apply-augment/', 'augment/', 'apply/'] },
    { label: 'Education', href: `${prefix}education/`, matches: ['education/'] },
    { label: 'Resources', href: `${prefix}resources/`, matches: ['resources/', 'articles/', 'books/'] },
    { label: 'Assessment', href: `${prefix}assessment/`, matches: ['assessment/'] }
  ];

  const navHtml = navItems.map(item => {
    let isCurrent = false;
    if (item.matches.includes('index.html')) {
      isCurrent = activePath === 'index.html' || activePath === '';
    } else {
      isCurrent = item.matches.some(match => activePath.startsWith(match));
    }
    if (item.submenu) {
      const submenuHtml = item.submenu.map(sub => `        <a href="${sub.href}">${sub.label}</a>`).join('\n');
      return `      <div class="nav-dropdown${isCurrent ? ' is-current' : ''}">
        <button type="button" aria-expanded="false" aria-haspopup="true">${item.label}<span aria-hidden="true">⌄</span></button>
        <div class="nav-submenu" role="menu">
${submenuHtml}
        </div>
      </div>`;
    }
    return `      <a href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join('\n');

  return `<header class="site-header">
  <div class="shell header-row">
    <a class="brand" href="${homeUrl}">
      <img src="${prefix}assets/img/ai-augmented/logo-dark.svg" alt="" aria-hidden="true" width="40" height="40">
      <span><strong>AI-Augmented</strong><span>Movement site</span></span>
    </a>
    <nav class="nav" aria-label="Primary">
${navHtml}
    </nav>
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
      <strong>Movement</strong>
      <p><a href="${homeUrl}">Home</a></p>
      <p><a href="${prefix}movement/">The Movement</a></p>
      <p><a href="${prefix}find-your-path/">Find Your Path</a></p>
      <p><a href="${prefix}contexts/">Explore by Context</a></p>
      <p><a href="${prefix}about/">About</a></p>
    </div>
    <div>
      <strong>Resources</strong>
      <p><a href="${prefix}resources/">Learning Resources</a></p>
      <p><a href="${prefix}assessment/">Assessments</a></p>
      <p><a href="${prefix}books/">Books</a></p>
      <p><a href="${prefix}articles/">Articles</a></p>
      <p><a href="${prefix}newsletter/">Newsletter</a></p>
    </div>
    <div>
      <strong>Engage</strong>
      <p><a href="${prefix}learn-apply-augment/">Learn, Apply, Augment</a></p>
      <p><a href="${prefix}aaos/">AAOS Framework</a></p>
      <p><a href="${prefix}augment/">Augment with Support</a></p>
      <p><a href="${prefix}about/#action">Contact</a></p>
    </div>
    <div>
      <strong>Paths</strong>
      <p><a href="${prefix}find-your-path/#individual">Individual</a></p>
      <p><a href="${prefix}find-your-path/#team-leader">Team Leader</a></p>
      <p><a href="${prefix}find-your-path/#organization-leader">Organization Leader</a></p>
      <p><a href="${prefix}find-your-path/#student">Student</a></p>
      <p><a href="${prefix}find-your-path/#teacher">Teacher</a></p>
      <p><a href="${prefix}find-your-path/#education-administrator">Education Leader</a></p>
    </div>
    <div>
      <strong>Legal</strong>
      <p class="muted">Privacy and terms pages will be added before public collection or account features.</p>
      <p class="muted">© ${new Date().getFullYear()} AI-Augmented Movement</p>
    </div>
  </div>
</footer>`;
}

function getBreadcrumb(depth, activePath) {
  if (depth === 0) return '';
  const prefix = '../'.repeat(depth);
  const parts = activePath.split('/').filter(part => part && part !== 'index.html');
  const titleCase = value => value.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());
  const links = [{ label: 'Home', href: depth === 0 ? 'index.html' : `${prefix}index.html` }];
  if (parts[0] === 'lens') {
    links.push({ label: 'Find Your Path', href: `${prefix}find-your-path/` });
    if (parts[1]) links.push({ label: parts[1] === 'education-administrator' ? 'Education Leader' : titleCase(parts[1]), href: `${prefix}lens/${parts[1]}/` });
    if (parts[2]) links.push({ label: titleCase(parts[2]), href: `${prefix}lens/${parts[1]}/${parts[2]}/` });
  } else if (parts[0] === 'education') {
    links.push({ label: 'Education', href: `${prefix}education/` });
  } else if (parts[0] === 'contexts') {
    links.push({ label: 'Contexts', href: `${prefix}contexts/` });
    if (parts[1]) links.push({ label: titleCase(parts[1]), href: `${prefix}contexts/${parts[1]}/` });
  } else {
    links.push({ label: titleCase(parts[0]), href: `${prefix}${parts[0]}/` });
  }
  const html = links.map((link, index) => index === links.length - 1
    ? `<span aria-current="page">${link.label}</span>`
    : `<a href="${link.href}">${link.label}</a>`).join('<span aria-hidden="true">/</span>');
  return `<nav class="breadcrumbs shell" aria-label="Breadcrumb">${html}</nav>`;
}

async function standardize() {
  const files = await getFiles(siteDir);
  for (const file of files) {
    const relativePath = path.relative(siteDir, file).replace(/\\/g, '/');
    const depth = relativePath.split('/').length - 1;
    const content = await fs.readFile(file, 'utf8');

    let updated = content;

    if (!relativePath.startsWith('education/') && !updated.includes('fonts.googleapis.com/css2?family=Inter')) {
      updated = updated.replace(
        /(\s*<link rel="stylesheet" href="[^"]*assets\/site\.css">)/,
        '\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">$1',
      );
    }

    // Replace generated breadcrumbs cleanly when the generator is run again.
    updated = updated.replace(/<nav class="breadcrumbs shell"[\s\S]*?<\/nav>/g, '');

    // Standardize Header
    const headerRegex = /<header class="site-header">[\s\S]*?<\/header>/;
    if (headerRegex.test(updated)) {
      updated = updated.replace(headerRegex, `${getHeader(depth, relativePath)}${getBreadcrumb(depth, relativePath)}`);
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
