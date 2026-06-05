"use client";

import { useEffect, useState } from "react";
import styles from "../"

const WEDDING_DATE = new Date("2026-06-27T00:00:00");

type TimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountDown() {
  const [time, setTime] = useState<TimeData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [status, setStatus] = useState<
    "countdown" | "today" | "passed"
  >("countdown");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      const weddingDayStart = new Date(
        WEDDING_DATE.getFullYear(),
        WEDDING_DATE.getMonth(),
        WEDDING_DATE.getDate()
      );

      const weddingDayEnd = new Date(
        WEDDING_DATE.getFullYear(),
        WEDDING_DATE.getMonth(),
        WEDDING_DATE.getDate() + 1
      );

      // Wedding day itself
      if (now >= weddingDayStart && now < weddingDayEnd) {
        setStatus("today");
        return;
      }

      let difference: number;

      if (now < weddingDayStart) {
        setStatus("countdown");
        difference = weddingDayStart.getTime() - now.getTime();
      } else {
        setStatus("passed");
        difference = now.getTime() - weddingDayEnd.getTime();
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (status === "today") {
    return (
      <div className="event-day">
        <h2>Today is the day.</h2>
        <p>
          We can't wait to celebrate this special moment
          with you.
        </p>
      </div>
    );
  }

  if (status === "passed") {
    return (
      <div className="passed">
        <h2>
          {time.days} Days, {time.hours} Hours Ago
        </h2>
      </div>
    );
  }

  return (
    <div className="countdown">
      <div className="unit">
        <span>{time.days}</span>
        <small>Days</small>
      </div>

      <div className="unit">
        <span>{time.hours}</span>
        <small>Hours</small>
      </div>

      <div className="unit">
        <span>{time.minutes}</span>
        <small>Minutes</small>
      </div>

      <div className="unit">
        <span>{time.seconds}</span>
        <small>Seconds</small>
      </div>
    </div>
  );
}