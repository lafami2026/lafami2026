import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/homeinvite.module.scss";

const StoryImage = () => {
  return <div className={styles.image__wrapper}>
    <CldImage/>
  </div>;
};

export default StoryImage;
