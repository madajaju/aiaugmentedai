document.documentElement.classList.add('js');

const domainTabs = document.querySelectorAll('.domain-tab');
const normalizePath = (path) => {
  const siteMarker = path.lastIndexOf('/sitenew/');
  const sitePath = siteMarker >= 0 ? path.slice(siteMarker + '/sitenew'.length) : path;
  return sitePath.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
};
const currentPath = normalizePath(window.location.pathname);
const exactTab = [...domainTabs].find((tab) => {
  const tabPath = normalizePath(new URL(tab.href, window.location.href).pathname);
  return tabPath === currentPath;
});
const domainTab = exactTab || [...domainTabs]
  .filter((tab) => normalizePath(new URL(tab.href, window.location.href).pathname) !== '/')
  .filter((tab) => currentPath.startsWith(`${normalizePath(new URL(tab.href, window.location.href).pathname)}/`))
  .sort((a, b) => b.href.length - a.href.length)[0]
  || [...domainTabs].find((tab) => normalizePath(new URL(tab.href, window.location.href).pathname) === '/');
domainTab?.setAttribute('aria-current', 'page');

const domainRoute = [
  ['business', '/business/'],
  ['education', '/education/'],
  ['legal', '/legal/'],
  ['medical', '/medical/'],
].find(([, path]) => currentPath === path.slice(0, -1) || currentPath.startsWith(path));
if (domainRoute) document.body.classList.add(`domain-${domainRoute[0]}`);

const assetList = document.querySelector('[data-asset-list]');

if (assetList) {
  const assetUrl = assetList.dataset.assetUrl
    || document.querySelector('meta[name="domain-assets-json"]')?.content
    || window.AI_AUGMENTED_ASSETS_URL
    || '/assets/data/domain-assets.json';
  const contextKey = [assetList.dataset.domain, assetList.dataset.category, assetList.dataset.level].join('/');

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const isSafeUrl = (value) => {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol);
    } catch {
      return false;
    }
  };

  const findAssets = (data) => {
    if (Array.isArray(data)) return data;
    const source = data?.assets || data;
    const [domain, category, level] = contextKey.split('/');
    const nested = source?.[domain]?.[category]?.[level];
    return nested ?? source?.[contextKey] ?? [];
  };

  const normalizeAssets = (value) => {
    const items = Array.isArray(value) ? value : value?.items;
    if (!Array.isArray(items)) return [];
    return items.filter((item) => item && typeof item === 'object')
      .map((item) => ({
        title: String(item.title ?? '').trim(),
        url: String(item.url ?? '').trim(),
        description: String(item.description ?? '').trim(),
      }))
      .filter((item) => item.title && item.url && isSafeUrl(item.url));
  };

  const renderAssets = (items) => {
    if (!items.length) return;
    assetList.innerHTML = `<div class="container prose">
      <h2>Available resources</h2>
      <div class="asset-list">${items.map((item) => {
        const external = /^https?:\/\//i.test(item.url)
          && new URL(item.url, window.location.href).origin !== window.location.origin;
        return `<article class="card asset-card">
          <h3><a href="${escapeHtml(item.url)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(item.title)}</a></h3>
          ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ''}
        </article>`;
      }).join('')}</div>
    </div>`;
    assetList.hidden = false;
  };

  const loadAssets = async () => {
    try {
      const data = window.AI_AUGMENTED_ASSETS || await fetch(assetUrl, { credentials: 'same-origin' }).then((response) => {
        if (!response.ok) throw new Error(`Asset data request failed: ${response.status}`);
        return response.json();
      });
      renderAssets(normalizeAssets(findAssets(data)));
    } catch (error) {
      console.warn(`Could not load domain assets for ${contextKey}:`, error);
    }
  };

  loadAssets();
}

// Render the role-specific maturity explorer when a role page opts in.
(() => {
  const root = document.querySelector('[data-lens-stage-root]');
  const lensKey = document.body?.getAttribute('data-lens');
  const lens = lensKey && window.AA_LENS_DATA?.[lensKey];
  if (!root || !lens) return;

  const escape = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  const valueText = (value) => {
    if (Array.isArray(value)) return `<ul>${value.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;
    if (value && typeof value === 'object') {
      const items = value.items || value.steps || [];
      return Array.isArray(items) ? `<ul>${items.map((item) => `<li>${escape(typeof item === 'object' ? (item.label || item.title || '') : item)}</li>`).join('')}</ul>` : escape(value.title || '');
    }
    return escape(value);
  };
  const stages = ['aware', 'exploring', 'experimenting', 'integrating', 'leading', 'augmenting'];
  const defaultStage = 'aware';
  const data = lens.stages || {};

  root.innerHTML = `<div class="container prose lens-stage-explorer">
    <p class="eyebrow">${escape(lens.title || 'Role')} maturity</p>
    <h2>Explore your maturity stages</h2>
    <p>Use live work to identify the current condition, then choose the next improvement. Maturity describes where the capability is; AAOS describes how to improve it.</p>
    <div class="lens-stage-tabs" role="tablist" aria-label="${escape(lens.title || 'Role')} maturity stages">
      ${stages.map((stage) => `<button class="lens-stage-tab" type="button" role="tab" data-lens-stage="${stage}" aria-selected="${stage === defaultStage}">${escape(data[stage]?.label || stage)}</button>`).join('')}
    </div>
    <div class="lens-stage-panels">
      ${stages.map((stage) => {
        const item = data[stage] || {};
        return `<section class="lens-stage-panel" data-lens-stage-panel="${stage}"${stage === defaultStage ? '' : ' hidden'}>
          <p class="card-kicker">${escape(item.label || stage)}</p>
          <h3>${escape(item.headline || '')}</h3>
          <p>${escape(item.summary || '')}</p>
          <div class="grid-3 lens-stage-detail-grid">
            <article class="card"><h4>What it looks like</h4><p>${escape(item.looksLike || '')}</p></article>
            <article class="card"><h4>Tools and practices</h4>${valueText(item.tools)}</article>
            <article class="card"><h4>Focus next</h4><p>${escape(item.focus || '')}</p></article>
            <article class="card"><h4>Watch out for</h4><p>${escape(item.watchOut || '')}</p></article>
            <article class="card"><h4>Human checkpoint</h4><p>${escape(item.posture || '')}</p></article>
          </div>
          <div class="grid-3 lens-stage-action-grid">
            <article class="card"><h4>Check your current pattern</h4>${valueText(item.diagnosis?.items || item.looksLike)}</article>
            <article class="card"><h4>Mission for this stage</h4>${valueText(item.mission?.steps || item.focus)}</article>
            <article class="card"><h4>Next milestone</h4><p>${escape(item.nextMilestone || item.progression || item.focus || '')}</p></article>
          </div>
        </section>`;
      }).join('')}
    </div>
  </div>`;

  const tabs = [...root.querySelectorAll('[data-lens-stage]')];
  const panels = [...root.querySelectorAll('[data-lens-stage-panel]')];
  const activate = (stage) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.lensStage === stage;
      tab.setAttribute('aria-selected', String(active));
    });
    panels.forEach((panel) => { panel.hidden = panel.dataset.lensStagePanel !== stage; });
  };
  tabs.forEach((tab) => tab.addEventListener('click', () => activate(tab.dataset.lensStage)));
  activate(defaultStage);
})();
