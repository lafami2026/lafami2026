import React from "react";
import styles from "../styles/HomePage/homeinvite.module.scss";

const HomeInvite = () => {
  return (
    <div className={`section ${styles.invite__section}`}>
      <div className={`container ${styles.invite__container}`}>
        <div className={styles.invite__wrapper}>
          <div className={styles.iw__top}>
            <span className={styles.iw__span}>DEAR FAMILY & FRIENDS</span>
            <h3 className={styles.iw__h3}>You are Invited</h3>
          </div>
          <div className={styles.iw__mid}>
            We’re so excited to share this special moment with you! As we begin
            our journey together, we’d love for you to join us in celebrating
            our big day. Here, you’ll find all the details you need - our story,
            event schedule, venue information, RSVP and more.
          </div>
          <div className={styles.iw__mid}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeInvite;
