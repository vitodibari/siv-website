import { getLocalGalleryImages } from "./local";
import { getGCSGalleryImages } from "./gcs";
import type { GalleryDayGroup } from "./types";

export type { GalleryDayGroup, GalleryPhoto } from "./types";

export async function getGalleryImages(): Promise<GalleryDayGroup[]> {
  const source = process.env.GALLERY_SOURCE || import.meta.env.GALLERY_SOURCE || "local";

  if (source.toLowerCase() === "gcs") {
    try {
      console.log("Loading gallery images from Google Cloud Storage...");
      return await getGCSGalleryImages();
    } catch (e) {
      console.error("Error fetching images from GCS, falling back to local photos:", e);
      return await getLocalGalleryImages();
    }
  }

  console.log("Loading gallery images from local assets...");
  return await getLocalGalleryImages();
}
