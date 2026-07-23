import type { GalleryDayGroup, GalleryPhoto } from "./types";
import type { ImageMetadata } from "astro";

export async function getLocalGalleryImages(): Promise<GalleryDayGroup[]> {
  const matches = import.meta.glob(
    "/src/assets/gallery/**/*.{jpeg,jpg,png,JPG}",
    { eager: true }
  ) as Record<string, { default: ImageMetadata }>;

  const matchesGroupedByDay = Object.groupBy(
    Object.entries(matches),
    ([path]) => path.split("/")[4]
  );

  const groups = Object.entries(matchesGroupedByDay).map(([date, entries]) => {
    const photos: GalleryPhoto[] = (entries || []).map(([_, mod]) => {
      const img = mod.default;
      return {
        src: img,
        width: img.width,
        height: img.height,
        alt: `SIV Match Image - ${date}`,
      };
    });

    return {
      date,
      photos,
    };
  });

  return groups.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
