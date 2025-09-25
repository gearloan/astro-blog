// src/data/heroLayouts.ts

// -----------------------------
// Types
// -----------------------------
export type HeroLayout = {
  // Headline/badge positioning (used by getHeroStyles)
  align?: 'left' | 'center' | 'right';
  x?: string;        // e.g. "2rem" or "15%"
  y?: string;        // e.g. "-1rem" or "10%"
  maxW?: string;     // e.g. "36ch" or "640px"
  badgeX?: string;
  badgeY?: string;
  accentColor?: string; // legacy accent for hero underline etc.
  accentW?: string;

  // Media / theming
  coverImg?: string;  // explicit cover for this issue/slug

  // New preferred theme fields
  primary?: string;   // issue primary color, e.g. "#003440"
  accent?: string;    // issue accent color, e.g. "#14c682"

  // Legacy bg (kept for compat; if absent we derive from primary)
  bgColor?: string;
};

export type Pub = 'pilot' | 'turbine';
type Key = `${Pub}:${string}`;

// -----------------------------
// Registry & defaults
// -----------------------------
const ISSUE_KEY_RE = /^\d{4}-\d{2}$/; // "YYYY-MM"

export const HERO_LAYOUTS: Record<Key, HeroLayout> = {
  // Examples — replace with real entries:
  // 'pilot:2024-07':   { primary: '#0a2f3a', accent: '#18c07a', x: '2rem', y: '0', align: 'right', maxW: '40ch' },
  // 'turbine:2025-07': { primary: '#0b3d8f', accent: '#0aa7b7', x: '5%',  y: '8%', align: 'left',  maxW: '42ch' },
  // 'pilot:around-the-world-in-a-cub': { x: '1.5rem', y: '-0.5rem', align: 'right', maxW: '38ch' },
  // Optional pub defaults:
  // 'pilot:__default':   { primary: '#003440', accent: '#14c682' },
  // 'turbine:__default': { primary: '#00478c', accent: '#0aa7b7' },
  'pilot:2025-07': { primary: '#1b9098ff', accent: '#9318c0ff', align: 'left', x: '0rem', y: '0%', maxW: '45ch', badgeX: '80%', badgeY: '80%', coverImg: '/images/covers/pilot-2025-07.jpg' }, //bottom right
  'turbine:2025-07': { primary: '#0e559cff', accent: '#b70a0aff', align: 'right', x: '100%', y: '90%', maxW: '45ch', badgeX: '1rem', badgeY: '1rem' }, // top left
};

// -----------------------------
// Utils
// -----------------------------
function cssVarsFromRecord(rec?: Record<string, string | undefined | null>) {
  if (!rec) return '';
  return Object.entries(rec)
    .filter(([, v]) => typeof v === 'string' && v.trim() !== '')
    .map(([k, v]) => `--${k}:${v as string}`)
    .join(';');
}

// Build the original headline/badge variable strings from a layout
function buildHeadlineBadge(layout?: HeroLayout) {
  if (!layout) return { headline: '', badge: '' };

  const headline = cssVarsFromRecord({
    'hero-align': layout.align,
    'hero-x': layout.x,
    'hero-y': layout.y,
    'hero-max-w': layout.maxW,
    'accent-color': layout.accentColor,
    'accent-w': layout.accentW,
  });

  const badge = cssVarsFromRecord({
    'badge-x': layout.badgeX,
    'badge-y': layout.badgeY,
  });

  return { headline, badge };
}

// Color helpers
function hexToRgb(hex: string) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null;
}
function rgbToHex(r: number, g: number, b: number) {
  const h = (n: number) => n.toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}
// mix toward black (t<0) or white (t>0); t ∈ [-1,1]
function shade(hex: string, t: number) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const target = t < 0 ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 };
  const a = Math.min(1, Math.max(0, Math.abs(t)));
  const r = Math.round(rgb.r + (target.r - rgb.r) * a);
  const g = Math.round(rgb.g + (target.g - rgb.g) * a);
  const b = Math.round(rgb.b + (target.b - rgb.b) * a);
  return rgbToHex(r, g, b);
}
// Rough contrast picker for title text
function pickTextOn(bg: string) {
  const rgb = hexToRgb(bg);
  if (!rgb) return '#ffffff';
  const toLinear = (v: number) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  };
  const L = 0.2126 * toLinear(rgb.r) + 0.7152 * toLinear(rgb.g) + 0.0722 * toLinear(rgb.b);
  return L > 0.35 ? '#0b1220' : '#ffffff';
}

// -----------------------------
// Public helpers (exports)
// -----------------------------
export function issueKeyFromDate(date?: string | null) {
  if (!date || date.length < 7) return null;
  const key = date.slice(0, 7);
  return ISSUE_KEY_RE.test(key) ? key : null;
}

export function labelFromIssueKey(key?: string | null) {
  if (!key || !ISSUE_KEY_RE.test(key)) return '';
  const [y, m] = key.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function getHeroStyles(
  pub: Pub,
  opts: { slug?: string | null; issueKey?: string | null }
) {
  const { slug, issueKey } = opts;
  const bySlug  = slug     ? HERO_LAYOUTS[`${pub}:${slug}` as Key]     : undefined;
  const byMonth = issueKey ? HERO_LAYOUTS[`${pub}:${issueKey}` as Key] : undefined;
  const byPub   = HERO_LAYOUTS[`${pub}:__default` as Key];

  return buildHeadlineBadge(bySlug ?? byMonth ?? byPub);
}

/** Returns cover, bg (legacy), primary, accent from registry (slug > month > pub default). */
export function getIssueOverrides(
  pub: Pub,
  opts: { slug?: string | null; issueKey?: string | null }
) {
  const { slug, issueKey } = opts;
  const bySlug  = slug     ? HERO_LAYOUTS[`${pub}:${slug}` as Key]     : undefined;
  const byMonth = issueKey ? HERO_LAYOUTS[`${pub}:${issueKey}` as Key] : undefined;
  const byPub   = HERO_LAYOUTS[`${pub}:__default` as Key];
  const picked  = bySlug ?? byMonth ?? byPub;

  return {
    coverImg: picked?.coverImg ?? null,
    bgColor:  picked?.bgColor  ?? null, // legacy
    primary:  picked?.primary  ?? null,
    accent:   picked?.accent   ?? (picked?.accentColor ?? null),
  };
}

/** Derive a per-issue theme and expose CSS vars you can inline on a container. */
export function getIssueTheme(
  pub: Pub,
  opts: { slug?: string | null; issueKey?: string | null }
) {
  const overrides = getIssueOverrides(pub, opts);

  // Pub fallbacks if registry doesn’t provide colors
  const pubDefault = HERO_LAYOUTS[`${pub}:__default` as Key] ?? {
    primary: pub === 'turbine' ? '#00478c' : '#003440',
    accent:  pub === 'turbine' ? '#0aa7b7' : '#14c682',
  };

  const primary = (overrides.primary || pubDefault.primary)!;
  const accent  = (overrides.accent  || pubDefault.accent)!;

  // bg: explicit legacy bgColor, else darkened primary
  const bg     = (overrides.bgColor && overrides.bgColor.trim() !== '')
    ? overrides.bgColor
    : shade(primary, -0.82);

  const title  = pickTextOn(bg);
  const badge  = accent || primary;

  const vars = cssVarsFromRecord({
    'issue-primary': primary,
    'issue-accent':  accent,
    'issue-bg':      bg,
    'issue-title':   title,
    'badge-color':   badge,
  });

  return { primary, accent, bg, title, badge, vars };
}
