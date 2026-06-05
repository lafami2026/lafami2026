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
            sizes="100vw"
            alt="La FaMi"
          />
        </div>
        <div className={styles.withlove}>
          <span>{"("}</span>
          <span>With Love</span>
          <span>{")"}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
