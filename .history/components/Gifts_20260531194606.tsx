import React from "react";
import Link from "next/link";
import styles from "../styles/HomePage/ourstory.module.scss";

const Gifts = () => {
  return (
    <div className={styles.gifts__section}>
      <div className={`container ${styles.gs__container}`}>
        <div className={styles.os__wrapper}>
          <div className={styles.osw__top}>
            <h3 className={styles.osw__h3}>Gifts</h3>
            <p className={styles.osw__p}>
              Your presence is truly the greatest gift we could ask for. Any
              additional gesture is entirely optional. For those who would still
              like to bless us with a cash gift, digital giving is available via
              the QR code or by <Link className={styles.click} href="/" target="_blank">clicking here.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
