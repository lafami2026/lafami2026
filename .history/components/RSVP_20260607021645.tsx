"use client";

import React, { useState, useEffect, RefObject } from "react";
import RSVPBox from "./RSVPBox";
import PasswordGate from "./PasswordGate";
import { AnimatePresence } from "framer-motion";
import { rsvpAnim } from "@/animations";
import { motion } from "framer-motion";
import styles from "../styles/HomePage/rsvp.module.scss";

const RSVP = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  const [unlocked, setUnlocked] = useState<boolean>(false);

  useEffect(() => {
    if (sessionStorage.getItem("rsvp_unlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  return (
    <div className={styles.rsvp} ref={ref} id="">
      <div className={`container ${styles.rsvp__container}`}>
        <div className={styles.rsvp__wrapper}>
          <h3 className={styles.osw__h3}>RSVP</h3>
          <AnimatePresence mode="wait">
            {unlocked ? (
              <motion.div
                variants={rsvpAnim}
                animate={unlocked ? "entry" : "initial"}
                exit="exit"
                className={styles.contact}
              >
                <RSVPBox />
              </motion.div>
            ) : (
              <PasswordGate
                onUnlock={() => setUnlocked(true)}
                unlocked={unlocked}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
