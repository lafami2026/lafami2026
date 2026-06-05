import { NextRequest } from "next/server";

const TITLE = "Fanny & Michael - Reception";
const LOCATION = "Etougebe Baptist Church";
const DESCRIPTION =
  "As Christians, we want our wedding to be blessed before God and His Church.";
const START = new Date("2026-06-27T13:00:00+01:00");
const END = new Date("2026-06-27T15:00:00+01:00");

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
