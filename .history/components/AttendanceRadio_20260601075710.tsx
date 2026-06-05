"use client";

import React from "react";
import styles from "../styles/HomePage/rsvp.module.scss";

type AttendanceChoice = "yes" | "no" | null;

interface AttendanceRadioProps {
  attending: AttendanceChoice;
  setAttending: React.Dispatch<React.SetStateAction<AttendanceChoice>>;
  showError: boolean;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AttendanceRadio({
  attending,
  setAttending,
  showError,
  setShowError,
}: AttendanceRadioProps) {
  const handleSelect = (value: "yes" | "no") => {
    setAttending(value);
    setShowError(false);
  };

  return (
    <div className={styles.attending}>
      <span className={styles.label}>Will you be attending ?*</span>

      <div className={styles.ticking}>
        <label
          className={`${styles.option} ${
            attending === "yes" ? styles.active : ""
          }`}
        >
          <input
            type="radio"
            name="attending"
            value="yes"
            checked={attending === "yes"}
            onChange={() => handleSelect("yes")}
            className={styles.hiddenInput}
          />
          <div className={styles.ticker}>
            <span className={styles.tick}></span>
          </div>
          <span>Yes</span>
        </label>

        <label
          className={`${styles.option} ${
            attending === "no" ? styles.active : ""
          }`}
        >
          <input
            type="radio"
            name="attending"
            value="no"
            checked={attending === "no"}
            onChange={() => handleSelect("no")}
            className={styles.hiddenInput}
          />
          <div className={styles.ticker}>
            <span className={styles.tick}></span>
          </div>
          <span>No</span>
        </label>
      </div>

      {showError && (
        <span className={styles.error}>
          Please check one of the boxes above
        </span>
      )}
    </div>
  );
}
