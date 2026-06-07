import Image from "next/image";
import { getGalleryImages } from "@/lib/cloudinary";
import { GalleryPageWrapper } from "@/components";

export default async function Home() {
  // Change "wedding" to your actual Cloudinary folder name
  const images = await getGalleryImages("wedding-gallery");
  console.log(images)

  return <GalleryPageWrapper images={images} />;
}
