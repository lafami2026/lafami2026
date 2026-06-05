import React, { RefObject } from "react";
import Menu from "@/utils/Icons/Menu";
import Lenis from "lenis";
import DoubleLove from "@/utils/Icons/DoubleLove";
import styles from "../styles/HomePage/navigation.module.scss";

const Navigation = ({
  ref,
  lenis,
}: {
  ref: RefObject<HTMLDivElement | null>;
  lenis: Lenis | null;
}) => {
  return (
    <div className={styles.navigation}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.nav__wrapper}>
          <div className={styles.menu}>
            <span>Menu</span>
            <Menu />
          </div>
          <div className={styles.rsvper}>
            <span>27th June 2026</span>
            <div className={styles.button}>
              <span className={styles.rsvp}>RSVP</span>
              <span className={styles.svg}>
                <DoubleLove />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
