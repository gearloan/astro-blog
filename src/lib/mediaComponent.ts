// src/lib/mediaComponent.ts
import VideoHero from '@/components/articles/VideoHero.astro';
import ImageHero from '@/components/articles/ImageHero.astro';

export const mediaForFormat: Record<string, any> = {
  video: VideoHero,
  // podcast: PodcastHero,   // when you add it
  // gallery: GalleryHero,
  longform: ImageHero,
  feature: ImageHero,
};

export function pickMediaComponent(format?: string | null) {
  return (format && mediaForFormat[format]) || ImageHero;
}
