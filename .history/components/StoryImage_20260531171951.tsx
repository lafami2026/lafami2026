import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/homeinvite.module.scss";

const StoryImage = () => {
  return (
    <div className={styles.image__wrapper}>
      <CldImage
        fill
        quality={100}
        src={data.link}
        alt="La FaMi"
        sizes="100vw"
      />
    </div>
  );
};

export default StoryImage;
