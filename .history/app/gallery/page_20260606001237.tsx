import Image from "next/image";
import { getGalleryImages } from "@/lib/cloudinary";
import { GalleryPageWrapper } from "@/components";

export default function Home() {
  // Change "wedding" to your actual Cloudinary folder name
  const images = await getGalleryImages("wedding-gallery");
  return <GalleryPageWrapper />;
}
