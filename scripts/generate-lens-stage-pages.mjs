import fs from 'fs/promises';
import path from 'path';
import vm from 'vm';

const rootDir = process.cwd();
const siteDir = path.join(rootDir, 'site');
const lensDataPath = path.join(siteDir, 'assets', 'lens-data.js');

const stageOrder = ['aware', 'exploring', 'experimenting', 'integrating', 'leading', 'augmenting'];

const lensMeta = {
  individual: {
    title: 'Individual',
    overviewFile: path.join(siteDir, 'lens', 'individual', 'index.html'),
  },
  'team-leader': {
    title: 'Team Leader',
    overviewFile: path.join(siteDir, 'lens', 'team-leader', 'index.html'),
  },
  'organization-leader': {
    title: 'Organization Leader',
    overviewFile: path.join(siteDir, 'lens', 'organization-leader', 'index.html'),
  },
  student: {
    title: 'Student',
    overviewFile: path.join(siteDir, 'lens', 'student', 'index.html'),
  },
  teacher: {
    title: 'Teacher',
    overviewFile: path.join(siteDir, 'lens', 'teacher', 'index.html'),
  },
  'education-administrator': {
    title: 'Education Administrator',
    overviewFile: path.join(siteDir, 'lens', 'education-administrator', 'index.html'),
  },
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toDirPrefix(depth) {
  return '../'.repeat(depth);
}

function stageHref(depth, lensKey, stageKey) {
  return `${toDirPrefix(depth)}lens/${lensKey}/${stageKey}/`;
}

function lensHref(depth, lensKey) {
  return `${toDirPrefix(depth)}lens/${lensKey}/`;
}

function assetsPath(depth) {
  return `${toDirPrefix(depth)}assets`;
}

function renderStageTabs(depth, lensKey, lens, activeStage) {
  return `
    <div class="stage-tabs">
      <nav class="stage-tablist" aria-label="${escapeHtml(lens.title)} maturity stages">
        ${stageOrder.map((stageKey) => {
          const item = lens.stages[stageKey];
          const active = stageKey === activeStage;
          return `
            <a class="stage-tab" href="${stageHref(depth, lensKey, stageKey)}"${active ? ' aria-current="page"' : ''}>${escapeHtml(item.label)}</a>
          `;
        }).join('')}
      </nav>
    </div>
  `;
}

function renderRichLinks(links, depth) {
  if (!Array.isArray(links) || !links.length) return '';

  return `
    <div class="stage-links">
      ${links.map((link) => {
        const external = link.external || /^https?:\/\//i.test(link.href || '');
        const href = external ? link.href : `${toDirPrefix(depth)}${String(link.href || '').replace(/^\//, '')}`;
        return `
          <a class="stage-link" href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
            <span>${escapeHtml(link.label)}</span>
            ${link.description ? `<small>${escapeHtml(link.description)}</small>` : ''}
          </a>
        `;
      }).join('')}
    </div>
  `;
}

function renderRichImage(image, depth) {
  if (!image || !image.src) return '';
  const src = /^https?:\/\//i.test(image.src) ? image.src : `${toDirPrefix(depth)}${String(image.src).replace(/^\//, '')}`;
  return `
    <figure class="stage-media">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(image.alt || '')}" loading="lazy">
      ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ''}
    </figure>
  `;
}

function renderRichBlocks(blocks, depth) {
  if (!Array.isArray(blocks) || !blocks.length) return '';

  return `
    <div class="stage-blocks">
      ${blocks.map((block) => {
        if (!block || !block.type) return '';
        if (block.type === 'html') {
          return `<div class="stage-block stage-block-html">${block.html || ''}</div>`;
        }
        if (block.type === 'paragraph') {
          return `<p class="stage-block stage-block-paragraph">${escapeHtml(block.text)}</p>`;
        }
        if (block.type === 'quote') {
          return `
            <blockquote class="stage-block stage-block-quote">
              <p>${escapeHtml(block.text)}</p>
              ${block.source ? `<cite>${escapeHtml(block.source)}</cite>` : ''}
            </blockquote>
          `;
        }
        if (block.type === 'list') {
          const items = Array.isArray(block.items) ? block.items : [];
          return `
            <div class="stage-block stage-block-list">
              ${block.title ? `<p class="card-kicker">${escapeHtml(block.title)}</p>` : ''}
              <ul>
                ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
              </ul>
            </div>
          `;
        }
        if (block.type === 'image') {
          return renderRichImage(block, depth);
        }
        if (block.type === 'links') {
          return `
            <div class="stage-block stage-block-links">
              ${block.title ? `<p class="card-kicker">${escapeHtml(block.title)}</p>` : ''}
              ${renderRichLinks(block.items, depth)}
            </div>
          `;
        }
        if (block.type === 'cta') {
          const href = /^https?:\/\//i.test(block.href || '')
            ? block.href
            : `${toDirPrefix(depth)}${String(block.href || '').replace(/^\//, '')}`;
          const external = block.external || /^https?:\/\//i.test(block.href || '');
          return `
            <div class="stage-block stage-block-cta">
              ${block.label ? `<p class="card-kicker">${escapeHtml(block.label)}</p>` : ''}
              <a class="button" href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(block.text || block.href)}</a>
            </div>
          `;
        }
        return '';
      }).join('')}
    </div>
  `;
}

function renderGridCardBody(content, depth) {
  if (content === null || content === undefined) return '';

  if (typeof content === 'string') {
    return `<p>${escapeHtml(content)}</p>`;
  }

  if (Array.isArray(content)) {
    return `<ul>${content.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  }

  if (typeof content === 'object') {
    if (content.type === 'html') {
      return content.html || '';
    }
    if (content.type === 'list') {
      const items = Array.isArray(content.items) ? content.items : [];
      return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    }
    if (content.type === 'links') {
      return renderRichLinks(content.items, depth);
    }
    if (content.type === 'paragraph') {
      return `<p>${escapeHtml(content.text)}</p>`;
    }
  }

  return `<p>${escapeHtml(String(content))}</p>`;
}

function renderSimpleText(content) {
  if (content === null || content === undefined) return '';
  if (typeof content === 'string') return content;
  if (typeof content === 'object') {
    if (content.type === 'paragraph') return content.text || '';
    if (content.type === 'list' && Array.isArray(content.items)) return content.items.join(', ');
    if (content.type === 'html') return content.html || ''; // Use with caution
  }
  return String(content);
}

function renderStagePage({ lensKey, lens, stageKey, stage, depth }) {
  const lensLabel = lens.title;
  const title = `${lensLabel} ${stage.label} Level | AI-Augmented Maturity`;
  const description = `AI-Augmented guidance for the ${lensLabel} lens at the ${stage.label} level of AI augmentation maturity. ${stage.summary}`;
  const assets = assetsPath(depth);
  const backHref = lensHref(depth, lensKey);
  const assessmentHref = `${toDirPrefix(depth)}assessment/`;
  const aaosHref = `${toDirPrefix(depth)}aaos/`;
  const aaosLensHref = `${toDirPrefix(depth)}lens/${lensKey}/aaos/`;

  const currentIndex = stageOrder.indexOf(stageKey);
  const nextStageKey = stageOrder[currentIndex + 1];
  const nextStage = nextStageKey ? lens.stages[nextStageKey] : null;
  const nextStageLabel = nextStage ? nextStage.label : 'Sustained Augmentation';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="https://aiaugmented.ai/lens/${lensKey}/${stageKey}/">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://aiaugmented.ai/lens/${lensKey}/${stageKey}/">
  <meta property="og:site_name" content="AI-Augmented">
  <meta property="og:image" content="https://aiaugmented.ai/assets/img/aaos.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="https://aiaugmented.ai/assets/img/aaos.svg">
  <meta name="theme-color" content="#123B66">
  <link rel="icon" href="${assets}/img/ai-augmented/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${assets}/site.css">
  <script src="${assets}/site.js" defer></script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://aiaugmented.ai/lens/${lensKey}/${stageKey}/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aiaugmented.ai/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${escapeHtml(lensLabel)}",
            "item": "https://aiaugmented.ai/lens/${lensKey}/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${escapeHtml(stage.label)}",
            "item": "https://aiaugmented.ai/lens/${lensKey}/${stageKey}/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://aiaugmented.ai/lens/${lensKey}/${stageKey}/#webpage",
        "url": "https://aiaugmented.ai/lens/${lensKey}/${stageKey}/",
        "name": "${escapeHtml(title)}",
        "isPartOf": {
          "@id": "https://aiaugmented.ai/#website"
        },
        "description": "${escapeHtml(description)}",
        "breadcrumb": {
          "@id": "https://aiaugmented.ai/lens/${lensKey}/${stageKey}/#breadcrumb"
        }
      }
    ]
  }
  </script>
</head>
<body data-lens="${escapeHtml(lensKey)}" data-stage="${escapeHtml(stageKey)}">
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="shell header-row">
    <a class="brand" href="${toDirPrefix(depth)}index.html">
      <img src="${assets}/img/ai-augmented/logo-dark.svg" alt="" aria-hidden="true">
      <span><strong>AI-Augmented</strong><span>Movement site</span></span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a href="${toDirPrefix(depth)}index.html">Home</a>
      <a href="${toDirPrefix(depth)}movement/">The Movement</a>
      <a href="${toDirPrefix(depth)}find-your-path/">Find Your Path</a>
      <a href="${toDirPrefix(depth)}resources/">Resources</a>
      <a href="${toDirPrefix(depth)}about/">About</a>
    </nav>
    <a class="button nav-cta" href="${assessmentHref}">Take The Assessment</a>
  </div>
</header>
<main id="main">
  <section class="band hero-band">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(lensLabel)} &middot; ${escapeHtml(stage.label)}</p>
        <h1>${escapeHtml(stage.headline)}</h1>
        <p class="lede"><strong>${escapeHtml(stage.summary)}</strong></p>
        <p>${escapeHtml(stage.looksLike)}</p>
        <div class="cta-row">
          <a class="button" href="${assessmentHref}">Take The Assessment</a>
          <a class="button secondary" href="${backHref}">Back to ${escapeHtml(lensLabel)}</a>
        </div>
      </div>
      <aside class="hero-visual panel">
        <div class="journey-map">
          <div class="journey-map-header">
            <p class="card-kicker">Current level</p>
            <h2>${escapeHtml(stage.label)}</h2>
          </div>
          <div class="journey-rail">
            <article class="journey-node"><span>Focus</span><div><p>${escapeHtml(renderSimpleText(stage.focus))}</p></div></article>
            <article class="journey-node"><span>Watch</span><div><p>${escapeHtml(renderSimpleText(stage.watchOut))}</p></div></article>
            <article class="journey-node final"><span>Next</span><div><strong>Move toward ${escapeHtml(nextStageLabel)}</strong><p>${escapeHtml(renderSimpleText(stage.progression))}</p></div></article>
          </div>
        </div>
      </aside>
    </div>
  </section>
  <section class="band alt">
    <div class="shell">
      <div class="section-title">
        <p class="eyebrow">${escapeHtml(lensLabel)}</p>
        <h2>Choose a level</h2>
        <p>Each level has a dedicated static page so people, search engines, and AI systems can discover the full content directly.</p>
      </div>
      ${renderStageTabs(depth, lensKey, lens, stageKey)}
    </div>
  </section>
  <section class="band">
    <div class="shell">
      <div class="section-title">
        <p class="eyebrow">${escapeHtml(stage.label)}</p>
        <h2>${escapeHtml(stage.headline)}</h2>
      </div>
      <div class="stage-detail-grid">
        <article class="card"><p class="card-kicker">What it looks like</p>${renderGridCardBody(stage.looksLike, depth)}</article>
        <article class="card"><p class="card-kicker">Recommended Tools</p>${renderGridCardBody(stage.tools, depth)}</article>
        <article class="card"><p class="card-kicker">Example Scenario</p><blockquote style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 1rem; margin: 0.5rem 0; font-size: 0.9rem;">"${escapeHtml(stage.example || 'Coming soon...')}"</blockquote></article>
        <article class="card"><p class="card-kicker">Focus next</p>${renderGridCardBody(stage.focus, depth)}</article>
        <article class="card"><p class="card-kicker">Progression</p>${renderGridCardBody(stage.progression, depth)}</article>
        <article class="card"><p class="card-kicker">Watch out for</p>${renderGridCardBody(stage.watchOut, depth)}</article>
        <article class="card"><p class="card-kicker">AI posture</p>${renderGridCardBody(stage.posture, depth)}</article>
      </div>
      ${renderRichImage(stage.image, depth)}
      ${renderRichLinks(stage.links, depth)}
      ${renderRichBlocks(stage.blocks, depth)}
      <div class="cta-row" style="margin-top: 1rem;">
        <a class="button" href="${aaosLensHref}">Explore AAOS Overview</a>
        <a class="button secondary" href="${backHref}">Return to the lens</a>
      </div>
    </div>
  </section>
</main>
<footer class="footer">
  <div class="shell footer-grid">
    <div>
      <strong>AI-Augmented</strong>
      <p class="muted">A movement site for people building practical capability with AI.</p>
    </div>
    <div>
      <strong>Explore</strong>
      <p><a href="${toDirPrefix(depth)}index.html">Home</a></p>
      <p><a href="${toDirPrefix(depth)}movement/">The Movement</a></p>
      <p><a href="${toDirPrefix(depth)}find-your-path/">Find Your Path</a></p>
      <p><a href="${toDirPrefix(depth)}resources/">Resources</a></p>
      <p><a href="${toDirPrefix(depth)}about/">About</a></p>
    </div>
    <div>
      <strong>Paths</strong>
      <p><a href="${toDirPrefix(depth)}find-your-path/#individual">Individual</a></p>
      <p><a href="${toDirPrefix(depth)}find-your-path/#team-leader">Team Leader</a></p>
      <p><a href="${toDirPrefix(depth)}find-your-path/#organization-leader">Organization Leader</a></p>
      <p><a href="${assessmentHref}">Assessment</a></p>
    </div>
    <div>
      <strong>More</strong>
      <p><a href="${toDirPrefix(depth)}books/">Books</a></p>
      <p><a href="${toDirPrefix(depth)}movement/">Launch</a></p>
    </div>
  </div>
</footer>
</body>
</html>
`;
}

function renderOverviewStageLinks(depth, lensKey, lens) {
  return `
    <section class="band alt">
      <div class="shell">
        <div class="section-title">
          <p class="eyebrow">${escapeHtml(lens.title)}</p>
          <h2>Choose a stage</h2>
          <p>Each stage opens its own static page so the lens can behave like tabs without hiding the content from search engines or AI tools.</p>
        </div>
        <div class="stage-tabs">
          <nav class="stage-tablist" aria-label="${escapeHtml(lens.title)} maturity stages">
            ${stageOrder.map((stageKey) => {
              const item = lens.stages[stageKey];
              return `
                <a class="stage-tab" href="${stageHref(depth, lensKey, stageKey)}">${escapeHtml(item.label)}</a>
              `;
            }).join('')}
          </nav>
        </div>
      </div>
    </section>
  `;
}

async function main() {
  const source = await fs.readFile(lensDataPath, 'utf8');
  const context = { window: {} };
  vm.runInNewContext(source, context, { filename: lensDataPath });
  const lensData = context.window.AA_LENS_DATA;

  if (!lensData) {
    throw new Error('AA_LENS_DATA was not found in site/assets/lens-data.js');
  }

  for (const [lensKey, meta] of Object.entries(lensMeta)) {
    const lens = lensData[lensKey];
    if (!lens) {
      throw new Error(`Missing lens data for ${lensKey}`);
    }

    const overviewFile = meta.overviewFile;
    const overviewHtml = await fs.readFile(overviewFile, 'utf8');
    const overviewDepth = 2;
    const overviewReplacement = renderOverviewStageLinks(overviewDepth, lensKey, lens);
    const stageSectionPattern = /<section class="band alt">[\s\S]*?<h2>Choose a stage<\/h2>[\s\S]*?<div class="stage-tabs">[\s\S]*?<\/section>/;

    let updatedOverview = overviewHtml;
    if (stageSectionPattern.test(updatedOverview)) {
      updatedOverview = updatedOverview.replace(stageSectionPattern, overviewReplacement);
    } else {
      const legacyStageLinkPattern = new RegExp(`href="\\.\\.\\/\\.\\.\\/${lensKey}\\/`, 'g');
      updatedOverview = updatedOverview.replace(legacyStageLinkPattern, `href="../../lens/${lensKey}/`);
    }
    updatedOverview = updatedOverview.replace(/\s*<script src="\.\.\/\.\.\/assets\/lens-data\.js" defer><\/script>\r?\n/, '\n');
    await fs.writeFile(overviewFile, updatedOverview, 'utf8');

    for (const stageKey of stageOrder) {
      const stage = lens.stages[stageKey];
      if (!stage) {
        throw new Error(`Missing stage ${stageKey} for lens ${lensKey}`);
      }

      const stageDir = path.join(siteDir, 'lens', lensKey, stageKey);
      await fs.mkdir(stageDir, { recursive: true });
      const stageFile = path.join(stageDir, 'index.html');
      const html = renderStagePage({
        lensKey,
        lens,
        stageKey,
        stage,
        depth: 3,
      });
      await fs.writeFile(stageFile, html, 'utf8');
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
