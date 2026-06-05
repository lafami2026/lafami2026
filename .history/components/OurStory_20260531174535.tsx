import React from "react";
import styles from "../styles/HomePage/ourstory.module.scss";

const OurStory = () => {
  return (
    <div className={styles.ourstory}>
      <div className={`container ${styles.os__container}`}>
        <div className={styles.os__wrapper}>
          <div className={styles.osw__top}>
            <h3>Our Story</h3>
            <p>
              When we first met in Buea in 2016 through a mutual friend, neither
              of us imagined the story God was beginning to write.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
