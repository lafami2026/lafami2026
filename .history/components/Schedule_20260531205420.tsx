import React from "react";
import DoubleLove from "@/utils/Icons/DoubleLove";
import styles from "../styles/HomePage/schedule.module.scss";

const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <div className={`container ${styles.ss__container}`}>
        <div className={styles.ss__wrapper}>
          <h3 className={styles.osw__h3}>Schedule</h3>
          <div className={styles.ssw__content}>
            <div className={styles.ssw__top}>
              <div className={styles.stop__one}>
                <div className={styles.love__circle}>
                  <span className={styles.svgone}>
                    <DoubleLove />
                  </span>
                </div>
                <p className={styles.pdate}>June, 2026</p>
                <div className={styles.love__circle}>
                  <span className={styles.svgone}>
                    <DoubleLove />
                  </span>
                </div>
              </div>
              <div className={styles.stop__two}>
                <div className={styles.dateday}>
                  <div className={styles.}>

                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ssw__bottom}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
