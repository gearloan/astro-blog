// Map key = `${pub}:${heroSlug}`
export type HeroLayout = {
  align?: 'left' | 'center' | 'right'; // text-align of headline
  x?: string;      // e.g. "2rem" or "15%"
  y?: string;      // e.g. "-1rem" or "10%"
  maxW?: string;   // e.g. "36ch" or "640px"
  badgeX?: string; // offset for magazine badge/lockup (optional)
  badgeY?: string;
  accentColor?: string; // underline / accent color
  accentW?: string;     // underline width, e.g. "8rem"
};

export const HERO_LAYOUTS: Record<string, HeroLayout> = {
  // EXAMPLES — replace with your actual slugs
  'pilot:my-hero-slug':    { align: 'right', x: '2rem',  y: '-1rem', maxW: '36ch', accentColor: '#368bc4', accentW: '8rem' },
  'turbine:another-hero':  { align: 'left',  x: '5%',    y: '10%',   maxW: '40ch', accentColor: '#0aa7b7', accentW: '6rem' },
};

function styleFrom(layout?: HeroLayout) {
  if (!layout) return { headline: '', badge: '' };
  const h = [
    layout.align      && `--hero-align:${layout.align}`,
    layout.x          && `--hero-x:${layout.x}`,
    layout.y          && `--hero-y:${layout.y}`,
    layout.maxW       && `--hero-max-w:${layout.maxW}`,
    layout.accentColor&& `--accent-color:${layout.accentColor}`,
    layout.accentW    && `--accent-w:${layout.accentW}`,
  ].filter(Boolean).join(';');

  const b = [
    layout.badgeX && `--badge-x:${layout.badgeX}`,
    layout.badgeY && `--badge-y:${layout.badgeY}`,
  ].filter(Boolean).join(';');

  return { headline: h, badge: b };
}

export function getHeroStyles(pub: 'pilot'|'turbine', heroSlug?: string) {
  const key = heroSlug ? `${pub}:${heroSlug}` : '';
  return styleFrom(key ? HERO_LAYOUTS[key] : undefined);
}
