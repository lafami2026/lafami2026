import React from "react";
import styles from "../styles/HomePage/ourstory.module.scss";

const Gifts = () => {
  return (
    <div className={styles.gifts__section}>
      <div className={`container ${styles.gs__container}`}>
        <div className={styles.os__wrapper}>
          <div className={styles.osw__top}>
            <h3 className={styles.osw__h3}>Gifts</h3>
            <p className={styles.osw__p}>
              Your presence is truly the best gift we could ask for! But for
              those who insist on giving something extra, a little financial
              contribution would be most appreciated — either in cash, or
              digitally via the QR Code or by clicking here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
