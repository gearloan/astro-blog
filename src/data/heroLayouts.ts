// src/data/heroLayouts.ts
export type HeroLayout = {
  align?: 'left' | 'center' | 'right';
  x?: string;        // e.g. "2rem" or "15%"
  y?: string;        // e.g. "-1rem" or "10%"
  maxW?: string;     // e.g. "36ch" or "640px"
  badgeX?: string;   // optional (if you add a badge later)
  badgeY?: string;
  accentColor?: string;
  accentW?: string;
  
  coverImg?: string;  // explicit cover for this issue/slug
  bgColor?: string;   // issue master color (used in step 4)
};

export type Pub = 'pilot' | 'turbine';
type Key = `${Pub}:${string}`;

const ISSUE_KEY_RE = /^\d{4}-\d{2}$/; // "YYYY-MM"

/** Registry keys can be either hero slug or issue month: `${pub}:${slug}` or `${pub}:YYYY-MM`
 *  (Optional) You can also add per-pub defaults like 'pilot:__default'.
 */
export const HERO_LAYOUTS: Record<Key, HeroLayout> = {
  // Examples — replace with real slugs/months:
  // 'pilot:around-the-world-in-a-cub': { align: 'right', x: '1.5rem', y: '-0.5rem', maxW: '38ch' },
  'pilot:2025-07': { align: 'left', x: '0rem', y: '0%', maxW: '45ch', badgeX: '80%', badgeY: '80%', coverImg: '/images/covers/pilot-2025-07.jpg' }, //bottom right
  'turbine:2025-07': { align: 'right', x: '100%', y: '90%', maxW: '45ch', badgeX: '1rem', badgeY: '1rem' }, // top left

  // Optional per-pub fallbacks:
  // 'pilot:__default': { align: 'right', x: '0', y: '0', maxW: '36ch' },
  // 'turbine:__default': { align: 'left', x: '0', y: '0', maxW: '36ch' },
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

/** Safest way with WPGraphQL ISO strings: slice "YYYY-MM" to avoid TZ shifts. */
export function issueKeyFromDate(date?: string | null) {
  if (!date || date.length < 7) return null;
  const key = date.slice(0, 7);
  return ISSUE_KEY_RE.test(key) ? key : null;
}

/** Nice label like "Feb 2025" from "YYYY-MM" (optional helper). */
export function labelFromIssueKey(key?: string | null) {
  if (!key || !ISSUE_KEY_RE.test(key)) return '';
  const [y, m] = key.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleString('en-US', { month: 'long', year: 'numeric' });
}

/** Resolve CSS vars with priority: per-slug > per-month > per-pub default (optional). */
export function getHeroStyles(
  pub: Pub,
  opts: { slug?: string | null; issueKey?: string | null }
) {
  const { slug, issueKey } = opts;
  const bySlug  = slug      ? HERO_LAYOUTS[`${pub}:${slug}` as Key]      : undefined;
  const byMonth = issueKey  ? HERO_LAYOUTS[`${pub}:${issueKey}` as Key]  : undefined;
  const byPub   =            HERO_LAYOUTS[`${pub}:__default` as Key]; // optional fallback
  return styleFrom(bySlug ?? byMonth ?? byPub);
}

/** Return overrides (coverImg, bgColor) with priority: slug > month. */
export function getIssueOverrides(
  pub: Pub,
  opts: { slug?: string | null; issueKey?: string | null }
) {
  const { slug, issueKey } = opts;
  const bySlug  = slug     ? HERO_LAYOUTS[`${pub}:${slug}` as Key]     : undefined;
  const byMonth = issueKey ? HERO_LAYOUTS[`${pub}:${issueKey}` as Key] : undefined;
  const picked = bySlug ?? byMonth;
  return {
    coverImg: picked?.coverImg ?? null,
    bgColor:  picked?.bgColor  ?? null,
  };
}