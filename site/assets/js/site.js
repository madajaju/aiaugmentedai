document.documentElement.classList.add('js');

const domainTabs = document.querySelectorAll('.domain-tab');
const normalizePath = (path) => {
  const siteMarker = path.lastIndexOf('/sitenew/');
  const sitePath = siteMarker >= 0 ? path.slice(siteMarker + '/sitenew'.length) : path;
  return sitePath.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
};
const currentPath = normalizePath(window.location.pathname);
domainTabs.forEach((tab) => {
  const tabPath = normalizePath(new URL(tab.href, window.location.href).pathname);
  if (tabPath === currentPath) {
    tab.setAttribute('aria-current', 'page');
  }
});

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
