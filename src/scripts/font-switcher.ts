// /src/scripts/font-switcher.ts
const ROOT = document.documentElement;
const STORAGE_ED = 'fontset:editorial';
const STORAGE_MAG = 'fontset:mag';

console.log('[font-switcher] loaded');

function applyEditorial(v: string) {
  if (v) ROOT.setAttribute('data-editorial', v);
  else ROOT.removeAttribute('data-editorial');
  try { localStorage.setItem(STORAGE_ED, v); } catch {}
  console.log('[font-switcher] applied editorial ->', ROOT.dataset.editorial);
}

function applyMag(v: string) {
  if (v) ROOT.setAttribute('data-mag', v);
  else ROOT.removeAttribute('data-mag');
  try { localStorage.setItem(STORAGE_MAG, v); } catch {}
  console.log('[font-switcher] applied mag ->', ROOT.dataset.mag);
}

function hydrateInitialValues(scope: ParentNode = document) {
  const nodes = scope.querySelectorAll('[data-fontswitcher]');
  console.log('[font-switcher] hydrate in scope; nodes=', nodes.length);
  nodes.forEach((root) => {
    const ed = root.querySelector<HTMLSelectElement>('[data-ed]');
    const mag = root.querySelector<HTMLSelectElement>('[data-mag]');
    if (ed) {
      ed.value = (localStorage.getItem(STORAGE_ED) ?? ROOT.dataset.editorial ?? '');
      console.log('[font-switcher] set ed select to', ed.value);
    }
    if (mag) {
      mag.value = (localStorage.getItem(STORAGE_MAG) ?? ROOT.dataset.mag ?? '');
      console.log('[font-switcher] set mag select to', mag.value);
    }
  });
}

function bindDelegation() {
  document.addEventListener('change', (e) => {
    const t = e.target as HTMLElement;
    if (!(t instanceof HTMLSelectElement)) return;
    const container = t.closest('[data-fontswitcher]');
    if (!container) return;

    if (t.matches('[data-ed]')) applyEditorial(t.value);
    if (t.matches('[data-mag]')) applyMag(t.value);
  });
  console.log('[font-switcher] change delegation bound');
}

function observeHtmlAttrChanges() {
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.attributeName === 'data-editorial' || m.attributeName === 'data-mag') {
        console.log('[font-switcher] html dataset now ->', ROOT.dataset);
      }
    }
  });
  mo.observe(ROOT, { attributes: true, attributeFilter: ['data-editorial', 'data-mag'] });
}

function boot() {
  console.log('[font-switcher] boot');
  hydrateInitialValues();
  bindDelegation();
  observeHtmlAttrChanges();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

// Re-hydrate after Astro View Transitions
document.addEventListener('astro:after-swap', () => {
  console.log('[font-switcher] after-swap rehydrate');
  hydrateInitialValues();
});

// Expose quick debug helpers
// @ts-ignore
(window as any).__fontSwitcher = { applyEditorial, applyMag };
