"use client";

import React from "react";

const EVENT_TITLE = "Fanny & Michael - Church Ceremony";
const LOCATION = "Etougebe Baptist Church";
const DESCRIPTION = "Church ceremony for Fanny & Michael.";
const START = new Date("2026-06-27T13:00:00+01:00"); // 1:00 PM Douala time
const END = new Date("2026-06-27T15:00:00+01:00"); // 2-hour window

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

export default function AddToCalendarButtons() {
  const googleUrl = buildGoogleCalendarUrl();

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={googleUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full px-5 py-3 text-sm font-medium bg-black text-white"
      >
        Google Calendar
      </a>

      <a
        href="/api/calendar?type=apple"
        download="fanny-michael-ceremony.ics"
        className="rounded-full px-5 py-3 text-sm font-medium bg-gray-200 text-black"
      >
        Apple Calendar
      </a>

      <a
        href="/api/calendar?type=outlook"
        download="fanny-michael-ceremony.ics"
        className="rounded-full px-5 py-3 text-sm font-medium bg-gray-200 text-black"
      >
        Outlook
      </a>
    </div>
  );
}
