import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/ourstory.module.scss";

const OurStory = () => {
  return (
    <div className={styles.ourstory}>
      <div className={`container ${styles.os__container}`}>
        <div className={styles.os__wrapper}>
          <div className={styles.osw__top}>
            <h3 className={styles.osw__h3}>Our Story</h3>
            <p className={styles.osw__p}>
              When we first met in Buea in 2016 through a mutual friend, neither
              of us imagined the story God was beginning to write.
            </p>
          </div>
          <div className={styles.os__box}>
            <div className={styles.osb__top}>
              <div className={styles.os__image}>
                <CldImage
                  fill
                  quality={100}
                  src=""
                  alt="La FaMi"
                  sizes="10vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
