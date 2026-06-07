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
      </div>
      <div className={styles.gallery__image}></div>
    </div>
  );
};

export default GalleryHero;
