import { v2 as cloudinary } from "cloudinary";
import { unstable_cache } from "next/cache";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key:     process.env.CLOUDINARY_API_KEY!,
  api_secret:  process.env.CLOUDINARY_API_SECRET!,
  secure:      true,
});

export interface GalleryImage {
  id:          string;
  publicId:    string;
  width:       number;
  height:      number;
  filename:    string;
  downloadUrl: string;
}

// Cached for 1 hour — re-upload triggers revalidation on next request
export const getGalleryImages = unstable_cache(
  async (folder: string): Promise<GalleryImage[]> => {
    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "asc")   // upload order
      .max_results(500)
      .execute();

    return result.resources.map((r: any) => ({
      id:       r.asset_id,
      publicId: r.public_id,
      width:    r.width,
      height:   r.height,
      filename: `${r.public_id.split("/").pop()}.${r.format}`,

      // fl_attachment serves the original file as a download — no re-encoding
      downloadUrl: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/fl_attachment/${r.public_id}.${r.format}`,
    }));
  },
  ["gallery-images"],
  { revalidate: 3600 }
);

export default cloudinary;