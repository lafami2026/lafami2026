import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.mask__image}>
          <CldImage
            fill
            quality={100}
            src="DSC09943_gib6mo.jpg"
            sizes="(max-width: 50px) 100vw, 750px"
            alt="La FaMi"
          />
        </div>
        <div className={styles.withlove}>
          <span>{"("}</span>
          <span className={styles.with}>With Love. FM 07.07</span>
          <span>{")"}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
