"use client";

import React, { useState, useEffect } from "react";
import RSVPBox from "./RSVPBox";
import PasswordGate from "./PasswordGate";
import { AnimatePresence } from "framer-motion";
import styles from "../styles/HomePage/rsvp.module.scss";

const RSVP = () => {
  const [unlocked, setUnlocked] = useState<boolean>(false);

  useEffect(() => {
    if (sessionStorage.getItem("rsvp_unlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  return (
    <div className={styles.rsvp}>
      <div className={`container ${styles.rsvp__container}`}>
        <div className={styles.rsvp__wrapper}>
          <h3 className={styles.osw__h3}>RSVP</h3>
          <AnimatePresence>
            
          </AnimatePresence>
          {unlocked ? (
            <div className={styles.contact}>
              <RSVPBox />
            </div>
          ) : (
            <PasswordGate onUnlock={() => setUnlocked(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVP;
