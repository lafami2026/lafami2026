import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/GalleryPage/galleryhero.module.scss";

const GalleryHero = () => {
  return (
    <div className={styles.gallery__hero}>
      <div className={styles.gallery__content}>
        <div className={styles.lafami}>
          <span>La FaMi</span>
        </div>
        <div className={styles.fandm}>
          <p>Our Gallery</p>
          <p className={styles.date}>27.06.2026</p>
        </div>
      </div>
      <div className={styles.gallery__image}>
        <CldImage
          fill
          quality={100}
          src=""
          alt="La FaMi"
          sizes="100vw"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default GalleryHero;
