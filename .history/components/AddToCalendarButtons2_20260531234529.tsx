"use client";

import React from "react";
import styles from "../styles/HomePage/schedule.module.scss";

const EVENT_TITLE = "Fanny & Michael - Reception";
const LOCATION = "Blessings Hall — EEC Montée Jouvence, Yaoundé";
const DESCRIPTION =
  "We want to share a few words with everyone. Dinner, drinks, and dancing to follow!";
const START = new Date("2026-06-27T18:30:00+01:00");
const END = new Date("2026-06-28T00:00:00+01:00");

function formatGoogleDate(date: Date) {
  // Google accepts ISO-style UTC timestamps in template links
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${formatGoogleDate(START)}/${formatGoogleDate(END)}`,
    details: DESCRIPTION,
    location: LOCATION,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function AddToCalendarButtons2({
  activeButton,
  setActive,
}: {
  activeButton: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const googleUrl = buildGoogleCalendarUrl();

  return (
    <div
      className={`${styles.button__wrapper} ${
        activeButton ? styles.activer : ""
      }`}
    >
      <a
        href={googleUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.cbutton}
        onClick={() => setActive(false)}
      >
        Google Calendar
      </a>

      <a
        href="/api/calendar?type=apple"
        download="fanny-michael-ceremony.ics"
        className={styles.cbutton}
        onClick={() => setActive(false)}
      >
        Apple Calendar
      </a>

      <a
        href="/api/calendar?type=outlook"
        download="fanny-michael-ceremony.ics"
        className={styles.cbutton}
        onClick={() => setActive(false)}
      >
        Outlook
      </a>
    </div>
  );
}
