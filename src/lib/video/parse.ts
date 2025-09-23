export type Video =
  | { kind: 'youtube'; id: string }
  | { kind: 'vimeo'; id: string }
  | { kind: 'mp4'; url: string };

export function parseVideo(url?: string | null): Video | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');

    // YouTube
    if (host === 'youtu.be') return { kind: 'youtube', id: u.pathname.slice(1) };
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = u.searchParams.get('v');
      if (id) return { kind: 'youtube', id };
      // /embed/ID
      const m = u.pathname.match(/\/embed\/([^/]+)/);
      if (m) return { kind: 'youtube', id: m[1] };
    }

    // Vimeo
    if (host === 'vimeo.com' || host.endsWith('.vimeo.com')) {
      const m = u.pathname.match(/\/(\d+)/);
      if (m) return { kind: 'vimeo', id: m[1] };
    }

    // MP4 (or other direct file)
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(u.pathname)) {
      return { kind: 'mp4', url };
    }

    return null;
  } catch {
    return null;
  }
}
