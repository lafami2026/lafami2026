import React from "react";
import styles from "../styles/HomePage/homeblue.module.scss";

const HomeBlue = () => {
  return (
    <div className={styles.homeblue}>
      <div className={`container ${styles.hb__container}`}>
        <div className={styles.hb__wrapp}>
          <div className={styles.hb__calendar}>
            <div className={styles.iw__top}>
              <span className={styles.iw__span}>DATE</span>
              <h3 className={styles.iw__h3}>June 2026</h3>
            </div>
            <div className={styles.calendar}>
              <div className={styles.date__day}>
                <span className={styles.day}>SUN</span>
                <span className={styles.da}>21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlue;
