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
                  src="DSC09620crop_riayvc.jpg"
                  alt="La FaMi"
                  sizes="10vw"
                />
              </div>
              <p className={styles.p__name}>Fanny</p>
            </div>
            <p className={styles.p__quote}>
              “ I still laugh about how passionately our friend introduced
              Michael that day. The way he spoke about him, I honestly wondered
              how someone could sound so important and yet I had never heard of
              him before. I remember thinking, I must really be living under a
              rock not to know this person. ”
            </p>
          </div>
          <div className={styles.osw__}>

          </div>
          <div className={styles.os__box}>
            <div className={styles.osb__top}>
              <div className={styles.os__image}>
                <CldImage
                  fill
                  quality={100}
                  src="DSC09631crop_vkjxzu.jpg"
                  alt="La FaMi"
                  sizes="10vw"
                />
              </div>
              <p className={styles.p__name}>Michael</p>
            </div>
            <p className={styles.p__quote}>
              “ I began to see Fanny differently. What had always felt safe and
              familiar suddenly felt deeply intentional. In her, I saw wisdom,
              gentleness, strength, and a kind of peace that drew me closer to
              God. What had grown quietly over the years became impossible to
              ignore. As we served and taught together, I slowly realized that
              God had been leading me to my "fountain" all along. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
