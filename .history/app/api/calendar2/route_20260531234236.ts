import { NextRequest } from "next/server";

const TITLE = "Fanny & Michael - Reception";
const LOCATION = "Blessings Hall — EEC Montée Jouvence, Yaoundé";
const DESCRIPTION =
  "We want to share a few words with everyone. Dinner, drinks, and dancing to follow!";
const START = new Date("2026-06-27T18:30:00+01:00");
const END = new Date("2026-06-2T:00:00+01:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toICSDate(date: Date) {
  // UTC format: YYYYMMDDTHHMMSSZ
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

function escapeICS(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type") ?? "calendar";

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Site//Add to Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${crypto.randomUUID()}@wedding-site`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(START)}`,
    `DTEND:${toICSDate(END)}`,
    `SUMMARY:${escapeICS(TITLE)}`,
    `LOCATION:${escapeICS(LOCATION)}`,
    `DESCRIPTION:${escapeICS(DESCRIPTION)}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="FaMi-churchceremony-${type}.ics"`,
    },
  });
}
