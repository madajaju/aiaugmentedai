import fs from 'fs/promises';
import path from 'path';
import vm from 'vm';

const rootDir = process.cwd();
const siteDir = path.join(rootDir, 'site');
const lensDataPath = path.join(siteDir, 'assets', 'lens-data-learning.js');

const stageOrder = ['aware', 'exploring', 'experimenting', 'integrating', 'leading', 'augmenting'];

const lensMeta = {
  individual: { title: 'Individual', overviewFile: path.join(siteDir, 'lens', 'individual', 'index.html') },
  'team-leader': { title: 'Team Leader', overviewFile: path.join(siteDir, 'lens', 'team-leader', 'index.html') },
  'organization-leader': { title: 'Organization Leader', overviewFile: path.join(siteDir, 'lens', 'organization-leader', 'index.html') },
  student: { title: 'Student', overviewFile: path.join(siteDir, 'lens', 'student', 'index.html') },
  teacher: { title: 'Teacher', overviewFile: path.join(siteDir, 'lens', 'teacher', 'index.html') },
  'education-administrator': { title: 'Education Administrator', overviewFile: path.join(siteDir, 'lens', 'education-administrator', 'index.html') },
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toDirPrefix(depth) { return '../'.repeat(depth); }
function stageHref(depth, lensKey, stageKey) { return `/lens/${lensKey}/${stageKey}/`; }
function lensHref(depth, lensKey) { return `/lens/${lensKey}/`; }
function assetsPath(depth) { return `/assets`; }
function localHref(depth, href = '') {
  const external = /^https?:\/\//i.test(href);
  if (external) return href;
  const path = String(href || '').replace(/^\//, '');
  return `/${path}${path && !path.includes('.') && !path.endsWith('/') ? '/' : ''}`;
}
function asArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'object' && Array.isArray(value.items)) return value.items;
  return [String(value)];
}
function simpleText(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object') {
    if (value.text) return value.text;
    if (Array.isArray(value.items)) return value.items.join(', ');
    if (value.description) return value.description;
  }
  return String(value);
}
function stageNumber(stageKey) { return stageOrder.indexOf(stageKey) + 1; }

function renderStageTabs(depth, lensKey, lens, activeStage) {
  return `<div class="stage-tabs"><nav class="stage-tablist" aria-label="${escapeHtml(lens.title)} maturity levels">
${stageOrder.map((stageKey) => {
  const item = lens.stages[stageKey];
  return `<a class="stage-tab" href="${stageHref(depth, lensKey, stageKey)}"${stageKey === activeStage ? ' aria-current="page"' : ''}>${escapeHtml(item.label)}</a>`;
}).join('\n')}
</nav></div>`;
}

function renderJourneyProgress(depth, lensKey, lens, activeStage) {
  return `<div class="stage-progress" aria-label="Journey progress">
${stageOrder.map((key, index) => {
  const stage = lens.stages[key];
  const active = key === activeStage;
  const complete = index < stageOrder.indexOf(activeStage);
  return `<a class="stage-progress-item${active ? ' is-active' : ''}${complete ? ' is-complete' : ''}" href="${stageHref(depth, lensKey, key)}"><span>${complete ? '✓' : active ? '●' : '○'}</span>${escapeHtml(stage.label)}</a>`;
}).join('\n')}
</div>`;
}

function renderList(items, className = '') {
  const values = asArray(items);
  if (!values.length) return '';
  return `<ul${className ? ` class="${className}"` : ''}>${values.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderResourceCards(resources, depth, kind = 'available') {
  const items = asArray(resources);
  if (!items.length) return `<p class="muted">More content will be added here as it is released.</p>`;
  return `<div class="resource-grid ${escapeHtml(kind)}">
${items.map((item) => {
  let label = typeof item === 'string' ? item : (item.label || item.title || 'Resource');
  let description = typeof item === 'string' ? '' : (item.description || '');
  let href = typeof item === 'string' ? '' : (item.href ? localHref(depth, item.href) : '');
  let external = typeof item === 'string' ? false : (item.external || /^https?:\/\//i.test(item.href || ''));
  let status = typeof item === 'string' 
    ? (kind === 'premium' ? 'Locked' : kind === 'coming-soon' ? 'Coming soon' : 'Available')
    : (item.status || (kind === 'premium' ? 'Locked' : kind === 'coming-soon' ? 'Coming soon' : 'Available'));

  const content = `<span class="resource-status">${escapeHtml(status)}</span><h3>${escapeHtml(label)}</h3>${description ? `<p>${escapeHtml(description)}</p>` : ''}`;
  const classes = `card resource-card ${kind}`;
  
  return href
    ? `<a class="${classes}" href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${content}</a>`
    : `<article class="${classes}">${content}</article>`;
}).join('\n')}
</div>`;
}

function renderTools(tools, depth) {
  if (!tools) return '';
  if (tools.type === 'links') return renderResourceCards(tools.items, depth, 'tools');
  return renderList(tools.items || tools);
}

function renderInjectionBlocks(blocks, depth) {
  if (!Array.isArray(blocks) || !blocks.length) return '';
  return blocks.map((block) => {
    if (!block) return '';
    if (block.type === 'html') return `<div class="injection-block">${block.html || ''}</div>`;
    if (block.type === 'paragraph') return `<div class="injection-block"><p>${escapeHtml(block.text)}</p></div>`;
    if (block.type === 'list') return `<div class="injection-block">${block.title ? `<h3>${escapeHtml(block.title)}</h3>` : ''}${renderList(block.items)}</div>`;
    if (block.type === 'cta') {
      const href = localHref(depth, block.href || '#');
      const external = block.external || /^https?:\/\//i.test(block.href || '');
      return `<div class="injection-block"><a class="button" href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(block.text || block.label || 'Continue')}</a></div>`;
    }
    return '';
  }).join('\n');
}

function normalizeStage(stage, stageKey) {
  return {
    ...stage,
    stageNumber: stage.stageNumber || stageNumber(stageKey),
    duration: stage.duration || '2–4 weeks',
    summary: stage.summary || 'Build practical capability for this stage.',
    diagnosis: stage.diagnosis || { title: 'Is this really you?', items: asArray(stage.looksLike) },
    mission: stage.mission || { title: 'Your mission this week', description: simpleText(stage.summary), steps: asArray(stage.focus) },
    mistakes: stage.mistakes || asArray(stage.watchOut),
    resources: stage.resources || { available: [], comingSoon: ['Video lesson', 'Worksheet', 'Guided exercise'], premium: ['Complete stage curriculum', 'Prompt library', 'AI coach', 'Community'] },
    readyForNext: stage.readyForNext || asArray(stage.progression),
  };
}

function renderStagePage({ lensKey, lens, stageKey, stage: rawStage, depth }) {
  const stage = normalizeStage(rawStage, stageKey);
  const lensLabel = lens.title;
  const title = `${lensLabel} ${stage.label} Level | AI-Augmented Maturity`;
  const description = `AI-Augmented guidance for the ${lensLabel} lens at the ${stage.label} level. ${simpleText(stage.summary)}`;
  const assets = assetsPath(depth);
  const assessmentHref = `${toDirPrefix(depth)}assessment/`;
  const backHref = lensHref(depth, lensKey);
  const aaosHref = `${toDirPrefix(depth)}aaos/`;
  const aaosLensHref = `${toDirPrefix(depth)}lens/${lensKey}/aaos/`;
  const nextStageKey = stageOrder[stageOrder.indexOf(stageKey) + 1];
  const nextStage = stage.nextStage || (nextStageKey ? lens.stages[nextStageKey] : { label: 'Sustained Augmentation', description: 'Keep improving your AI-Augmented operating model.' });

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="https://ai-augmented.ai/lens/${lensKey}/${stageKey}/">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ai-augmented.ai/lens/${lensKey}/${stageKey}/">
  <meta property="og:site_name" content="AI-Augmented">
  <meta property="og:image" content="https://ai-augmented.ai/assets/img/aaos.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="https://ai-augmented.ai/assets/img/aaos.svg">
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
        "@id": "https://ai-augmented.ai/lens/${lensKey}/${stageKey}/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ai-augmented.ai/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${escapeHtml(lensLabel)}",
            "item": "https://ai-augmented.ai/lens/${lensKey}/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${escapeHtml(stage.label)}",
            "item": "https://ai-augmented.ai/lens/${lensKey}/${stageKey}/"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://ai-augmented.ai/#organization",
        "name": "AI-Augmented",
        "url": "https://ai-augmented.ai/",
        "description": "A movement site that helps people become AI-Augmented through readiness guidance, augmentation maturity, and role-based learning paths.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ai-augmented.ai/assets/img/ai-augmented/logo.svg"
        },
        "founder": {
          "@id": "https://ai-augmented.ai/#drdarren"
        }
      },
    {
      "@type": "Person",
      "@id": "https://ai-augmented.ai/#drdarren",
      "name": "Dr. Darren Pulsipher",
      "jobTitle": "Founder",
      "url": "https://drdarrenspeaks.com/",
      "image": "https://ai-augmented.ai/assets/img/darren-pulsipher.jpg",
      "sameAs": [
        "https://www.amazon.com/Becoming-AI-Augmented-Dr-Darren-Pulsipher/dp/B0D1N9N9X6",
        "https://embracingdigital.org/",
        "https://paidar.ai/",
        "https://www.linkedin.com/in/dpulsipher/"
      ],
      "description": "Dr. Darren Pulsipher is a digital transformation leader, author of 'Becoming AI-Augmented', host of the 'Embracing Digital Transformation' podcast, and the founder of the AI-Augmented movement.",
      "knowsAbout": ["AI-Augmented Operating System", "AI Augmentation Maturity", "Digital Transformation", "AI Governance"]
    },
    {
      "@type": "WebPage",
      "@id": "https://ai-augmented.ai/lens/${lensKey}/${stageKey}/#webpage",
      "url": "https://ai-augmented.ai/lens/${lensKey}/${stageKey}/",
      "name": "${escapeHtml(title)}",
      "isPartOf": {
        "@id": "https://ai-augmented.ai/#website"
      },
      "author": {
        "@id": "https://ai-augmented.ai/#drdarren"
      },
      "description": "${escapeHtml(description)}",
      "breadcrumb": {
        "@id": "https://ai-augmented.ai/lens/${lensKey}/${stageKey}/#breadcrumb"
      },
      "dateModified": "2026-07-03"
    }
  ]
}
  </script>
</head>
<body data-lens="${escapeHtml(lensKey)}" data-stage="${escapeHtml(stageKey)}">
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="shell header-row">
    <a class="brand" href="/">
      <img src="/assets/img/ai-augmented/logo-dark.svg" alt="" aria-hidden="true">
      <span><strong>AI-Augmented</strong><span>Movement site</span></span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a href="/">Home</a>
      <a href="/movement/">The Movement</a>
      <a href="/find-your-path/">Find Your Path</a>
      <a href="/resources/">Resources</a>
      <a href="/about/">About</a>
      <a href="/newsletter/">Newsletter</a>
    </nav>
    <a class="button nav-cta" href="/assessment/">Take The Assessment</a>
  </div>
</header>
<main id="main">
  <section class="band hero-band">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(lensLabel)} Journey &middot; Level ${stage.stageNumber} of ${stageOrder.length} | v1.2</p>
        <h1>${escapeHtml(stage.headline)}</h1>
        <p class="lede"><strong>${escapeHtml(simpleText(stage.summary))}</strong></p>
        <p>${escapeHtml(stage.heroText || simpleText(stage.looksLike || stage.diagnosis?.items?.[0] || 'This stage helps you move from awareness to action.'))}</p>
        <p class="muted" style="font-size: 0.8rem; margin-bottom: 1.5rem;">Author: Dr. Darren Pulsipher, <em>Becoming AI-Augmented</em> &middot; Last Updated: July 2026</p>
        <div class="cta-row">
          <a class="button" href="${assessmentHref}">Take The Assessment</a>
          <a class="button secondary" href="#mission">Start This Stage</a>
        </div>
      </div>
      <aside class="hero-visual panel">
        <p class="card-kicker">Current level</p>
        <h2>${escapeHtml(stage.label)}</h2>
        <p><strong>Estimated time:</strong> ${escapeHtml(stage.duration)}</p>
        <p><strong>Next milestone:</strong> ${escapeHtml(simpleText(stage.nextMilestone || stage.progression || nextStage.description))}</p>
        ${renderJourneyProgress(depth, lensKey, lens, stageKey)}
      </aside>
    </div>
  </section>

  <section class="band alt">
    <div class="shell">
      <div class="section-title">
        <p class="eyebrow">${escapeHtml(lensLabel)}</p>
        <h2>Choose a level</h2>
        <p>Each level has its own page now, and more lessons, worksheets, and premium resources can be added over time.</p>
      </div>
      ${renderStageTabs(depth, lensKey, lens, stageKey)}
    </div>
  </section>

  <section class="band" id="diagnosis">
    <div class="shell split-grid">
      <div class="section-title align-left">
        <p class="eyebrow">Diagnosis</p>
        <h2>${escapeHtml(stage.diagnosis.title || 'Is this really you?')}</h2>
        <p>${escapeHtml(stage.diagnosis.description || 'Use this section to help visitors recognize themselves and trust the path.')}</p>
      </div>
      <article class="card checklist-card">${renderList(stage.diagnosis.items, 'check-list')}</article>
    </div>
  </section>

  <section class="band alt" id="mission">
    <div class="shell split-grid">
      <div class="section-title align-left">
        <p class="eyebrow">This week</p>
        <h2>${escapeHtml(stage.mission.title || 'Your mission this week')}</h2>
        <p>${escapeHtml(stage.mission.description || 'Give the visitor one practical action before they leave.')}</p>
      </div>
      <article class="card mission-card">${renderList(stage.mission.steps, 'numbered-list')}</article>
    </div>
  </section>

  <section class="band">
    <div class="shell">
      <div class="section-title">
        <p class="eyebrow">Practical help</p>
        <h2>Use these tools and avoid these traps</h2>
      </div>
      <div class="stage-detail-grid">
        <article class="card"><p class="card-kicker">Recommended tools</p>${renderTools(stage.tools, depth)}</article>
        <article class="card"><p class="card-kicker">Example Scenario</p><blockquote style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 1rem; margin: 0.5rem 0; font-size: 0.9rem;">"${escapeHtml(stage.example || 'Coming soon...')}"</blockquote></article>
        <article class="card"><p class="card-kicker">Common mistakes</p>${renderList(stage.mistakes)}</article>
        <article class="card"><p class="card-kicker">AI posture</p><p>${escapeHtml(simpleText(stage.posture || 'Use AI intentionally, validate important outputs, and keep human accountability visible.'))}</p></article>
      </div>
    </div>
  </section>

  <section class="band alt" id="resources">
    <div class="shell">
      <div class="section-title">
        <p class="eyebrow">Learning hub</p>
        <h2>Start now. More content is being added.</h2>
        <p>This page is designed as a placeholder today and a full learning hub tomorrow.</p>
      </div>
      <div class="resource-section">
        <h3>Available now</h3>
        ${renderResourceCards(stage.resources.available, depth, 'available')}
      </div>
      ${stage.resources.deepDive ? `
      <div class="resource-section">
        <h3>Deep dive resources</h3>
        ${renderResourceCards(stage.resources.deepDive, depth, 'deep-dive')}
      </div>
      ` : ''}
      <div class="resource-section">
        <h3>Coming soon</h3>
        ${renderResourceCards(stage.resources.comingSoon, depth, 'coming-soon')}
      </div>
      ${renderInjectionBlocks(stage.blocks, depth)}
    </div>
  </section>

  <section class="band member-band" id="member">
    <div class="shell split-grid">
      <div class="section-title align-left">
        <p class="eyebrow">Member path</p>
        <h2>${escapeHtml(stage.memberTitle || 'Unlock the full level experience')}</h2>
        <p>${escapeHtml(stage.memberDescription || 'Free visitors get orientation and a practical next step. Members get the guided transformation path.')}</p>
        <div class="cta-row"><a class="button" href="${toDirPrefix(depth)}movement/">Become AI-Augmented</a><a class="button secondary" href="${aaosLensHref}">Learn about AAOS</a></div>
      </div>
      <article class="card premium-card">
        <p class="card-kicker">Included for members</p>
        ${renderResourceCards(stage.resources.premium, depth, 'premium')}
      </article>
    </div>
  </section>

  <section class="band" id="ready">
    <div class="shell split-grid">
      <div class="section-title align-left">
        <p class="eyebrow">Progression</p>
        <h2>Ready for ${escapeHtml(nextStage.label || 'the next level')}?</h2>
        <p>${escapeHtml(nextStage.description || 'Move forward when the evidence below is true.')}</p>
      </div>
      <article class="card checklist-card">
        ${renderList(stage.readyForNext, 'check-list')}
        <div class="cta-row" style="margin-top:1rem;"><a class="button" href="${nextStageKey ? stageHref(depth, lensKey, nextStageKey) : aaosLensHref}">Continue the Journey</a><a class="button secondary" href="${backHref}">Back to ${escapeHtml(lensLabel)}</a></div>
      </article>
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
      <p><a href="/">Home</a></p>
      <p><a href="/movement/">The Movement</a></p>
      <p><a href="/find-your-path/">Find Your Path</a></p>
      <p><a href="/resources/">Resources</a></p>
      <p><a href="/about/">About</a></p>
    </div>
    <div>
      <strong>Paths</strong>
      <p><a href="/find-your-path/#individual">Individual</a></p>
      <p><a href="/find-your-path/#team-leader">Team Leader</a></p>
      <p><a href="/find-your-path/#organization-leader">Organization Leader</a></p>
      <p><a href="/assessment/">Assessment</a></p>
    </div>
    <div>
      <strong>More</strong>
      <p><a href="/books/">Books</a></p>
      <p><a href="/newsletter/">Newsletter</a></p>
      <p><a href="/articles/">Articles</a></p>
    </div>
  </div>
</footer>
</body>
</html>`;
}

function renderOverviewStageLinks(depth, lensKey, lens) {
  return `<section class="band alt"><div class="shell"><div class="section-title"><p class="eyebrow">${escapeHtml(lens.title)}</p><h2>Choose a level</h2><p>Each level opens its own static page and can grow from placeholder into full curriculum.</p></div>${renderStageTabs(depth, lensKey, lens, '')}</div></section>`;
}

async function main() {
  const source = await fs.readFile(lensDataPath, 'utf8');
  const context = { window: {} };
  vm.runInNewContext(source, context, { filename: lensDataPath });
  const lensData = context.window.AA_LENS_DATA;
  if (!lensData) throw new Error('AA_LENS_DATA was not found in site/assets/lens-data-learning.js');

  for (const [lensKey, meta] of Object.entries(lensMeta)) {
    const lens = lensData[lensKey];
    if (!lens) throw new Error(`Missing lens data for ${lensKey}`);

    try {
      const overviewHtml = await fs.readFile(meta.overviewFile, 'utf8');
      const overviewReplacement = renderOverviewStageLinks(2, lensKey, lens);
      const stageSectionPattern = /<section class="band alt">[\s\S]*?<h2>Choose a stage<\/h2>[\s\S]*?<div class="stage-tabs">[\s\S]*?<\/section>/;
      const updatedOverview = stageSectionPattern.test(overviewHtml)
        ? overviewHtml.replace(stageSectionPattern, overviewReplacement)
        : overviewHtml;
      await fs.writeFile(meta.overviewFile, updatedOverview, 'utf8');
    } catch (error) {
      console.warn(`Could not update overview for ${lensKey}: ${error.message}`);
    }

    for (const stageKey of stageOrder) {
      const stage = lens.stages[stageKey];
      if (!stage) throw new Error(`Missing stage ${stageKey} for lens ${lensKey}`);
      const stageDir = path.join(siteDir, 'lens', lensKey, stageKey);
      await fs.mkdir(stageDir, { recursive: true });
      await fs.writeFile(path.join(stageDir, 'index.html'), renderStagePage({ lensKey, lens, stageKey, stage, depth: 3 }), 'utf8');
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

