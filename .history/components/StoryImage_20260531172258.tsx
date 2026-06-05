import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/homeinvite.module.scss";

const StoryImage = ({ image }: { image: string }) => {
  return (
    <div className={styles.image__wrapper}>
      <div className={styles.imager}>
        <CldImage fill quality={100} src={image} alt="La FaMi" sizes="100vw" />
      </div>
    </div>
  );
};

export default StoryImage;
