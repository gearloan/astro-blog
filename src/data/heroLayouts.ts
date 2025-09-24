// src/data/heroLayouts.ts
export type HeroLayout = {
  align?: 'left' | 'center' | 'right';
  x?: string;      // "2rem" or "15%"
  y?: string;      // "-1rem" or "10%"
  maxW?: string;   // "36ch" or "640px"
  badgeX?: string; // optional (if you add a badge later)
  badgeY?: string;
  accentColor?: string;
  accentW?: string;
};

// Registry keys can be either hero slug or issue month: `${pub}:${slug}` or `${pub}:YYYY-MM`
type Pub = 'pilot' | 'turbine';
type Key = `${Pub}:${string}`;

export const HERO_LAYOUTS: Record<Key, HeroLayout> = {
  // Examples — replace with real slugs/months when you tune a layout:
  // 'pilot:around-the-world-in-a-cub': { align: 'right', x: '1.5rem', y: '-0.5rem', maxW: '38ch' },
  // 'pilot:2025-02': { align: 'right', x: '2rem', y: '-1rem', maxW: '36ch' },
  // 'turbine:2025-02': { align: 'left', x: '5%', y: '10%', maxW: '40ch' },
};

function styleFrom(layout?: HeroLayout) {
  if (!layout) return { headline: '', badge: '' };
  const h = [
    layout.align       && `--hero-align:${layout.align}`,
    layout.x           && `--hero-x:${layout.x}`,
    layout.y           && `--hero-y:${layout.y}`,
    layout.maxW        && `--hero-max-w:${layout.maxW}`,
    layout.accentColor && `--accent-color:${layout.accentColor}`,
    layout.accentW     && `--accent-w:${layout.accentW}`,
  ].filter(Boolean).join(';');

  const b = [
    layout.badgeX && `--badge-x:${layout.badgeX}`,
    layout.badgeY && `--badge-y:${layout.badgeY}`,
  ].filter(Boolean).join(';');

  return { headline: h, badge: b };
}

export function issueKeyFromDate(date?: string | null) {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d.getTime())) return null;
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `${y}-${m}`; // e.g., "2025-02"
}

export function getHeroStyles(
  pub: Pub,
  opts: { slug?: string | null; issueKey?: string | null }
) {
  const { slug, issueKey } = opts;
  // priority: slug override > month override
  const bySlug = slug ? HERO_LAYOUTS[`${pub}:${slug}` as Key] : undefined;
  const byMonth = issueKey ? HERO_LAYOUTS[`${pub}:${issueKey}` as Key] : undefined;
  return styleFrom(bySlug ?? byMonth);
}
