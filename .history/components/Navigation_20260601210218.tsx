import React from "react";
import Menu from "@/utils/Icons/Menu";
import styles from "../styles/HomePage/navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.rsvper}>
          <span>27th June 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
