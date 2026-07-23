import type { ImageMetadata } from "astro";

export interface GalleryPhoto {
  src: ImageMetadata | string;
  thumbnailSrc?: string;
  width: number;
  height: number;
  alt: string;
}

export interface GalleryDayGroup {
  date: string; // YYYY-MM-DD
  photos: GalleryPhoto[];
}
