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
