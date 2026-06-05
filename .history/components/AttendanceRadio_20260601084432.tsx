"use client";

import React from "react";
import styles from "../styles/HomePage/rsvp.module.scss";

type AttendanceChoice = "yes" | "no" | null;

interface AttendanceRadioProps {
  attending: AttendanceChoice;
  setAttending: React.Dispatch<React.SetStateAction<AttendanceChoice>>;
  showError: boolean;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  name: string;
}

export default function AttendanceRadio({
  attending,
  setAttending,
  showError,
  setShowError,
  text,
  name
}: AttendanceRadioProps) {
  const handleSelect = (value: "yes" | "no") => {
    setAttending(value);
    setShowError(false);
  };

  return (
    <div className={styles.attending}>
      <span className={styles.label}>{text}</span>

      <div className={styles.ticking}>
        <label
          className={`${styles.option} ${
            attending === "yes" ? styles.active : ""
          }`}
        >
          <input
            type="radio"
            name={name}
            value="yes"
            checked={attending === "yes"}
            onChange={() => handleSelect("yes")}
            className={styles.hiddenInput}
          />
          <span>Yes</span>
        </label>

        <label
          className={`${styles.option} ${
            attending === "no" ? styles.active : ""
          }`}
        >
          <input
            type="radio"
            name={name}
            value="no"
            checked={attending === "no"}
            onChange={() => handleSelect("no")}
            className={styles.hiddenInput}
          />
          <span>No</span>
        </label>
      </div>

      {!showError && (
        <span className={styles.error}>
          Please check one of the boxes above
        </span>
      )}
    </div>
  );
}
