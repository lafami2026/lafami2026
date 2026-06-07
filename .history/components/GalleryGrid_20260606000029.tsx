"use client";

import { useState, useEffect, useCallback } from "react";
import { CldImage } from "next-cloudinary";
import type { GalleryImage } from "@/lib/cloudinary";
import styles from "@/styles/gallery.module.scss";

interface Props {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );

  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      close();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const active = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <>
      {/* ── Grid ── */}
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div
            key={img.id}
            className={styles.item}
            style={{ aspectRatio: `${img.width} / ${img.height}` }}
            onClick={() => open(i)}
          >
            <CldImage
              src={img.publicId}
              fill
              alt="Wedding photo"
              className={styles.image}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality="auto"
              loading={i < 9 ? "eager" : "lazy"}
            />

            {/* Hover overlay */}
            <div className={styles.overlay}>
              
                href={img.downloadUrl}
                download={img.filename}
                className={styles.downloadBtn}
                onClick={(e) => e.stopPropagation()}
              >
                ↓ Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {active && (
        <div className={styles.lightbox} onClick={close}>
          <button className={styles.lbClose} onClick={close} aria-label="Close">✕</button>
          <button className={styles.lbPrev}  onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
          <button className={styles.lbNext}  onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>

          <div className={styles.lbContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lbImageWrap}>
              <CldImage
                src={active.publicId}
                width={active.width}
                height={active.height}
                alt="Wedding photo"
                quality={100}
                sizes="100vw"
                className={styles.lbImage}
                priority
              />
            </div>

            
              href={active.downloadUrl}
              download={active.filename}
              className={styles.lbDownload}
            >
              ↓ Download full quality
            </a>
          </div>
        </div>
      )}
    </>
  );
}