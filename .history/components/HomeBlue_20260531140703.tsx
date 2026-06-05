import React from "react";
import styles from "../styles/HomePage/homeblue.module.scss";

const HomeBlue = () => {
  return (
    <div className={styles.homeblue}>
      <div className={`container ${styles.hb__container}`}>
        <div className={styles.hb__wrapp}>
          <div className={styles.calendar}>
            <div className={styles.iw__top}>
              <span className={styles.iw__span}>DEAR FAMILY & FRIENDS</span>
              <h3 className={styles.iw__h3}>You are Invited</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlue;
