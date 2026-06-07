import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.scss";

const regular = localFont({
  src: "./fonts/HelveticaNowDisplay-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "./fonts/HelveticaNowDisplay-Medium.ttf",
  variable: "--medium-font",
});

const bold = localFont({
  src: "./fonts/HelveticaNowDisplay-Bold.ttf",
  variable: "--bold-font",
});

const garamond = localFont({
  src: "./fonts/AppleGaramond-LightItalic.ttf",
  variable: "--garamond-font",
});

const corsiva = localFont({
  src: "./fonts/Monotype-Corsiva-Regular.ttf",
  variable: "--corsiva-font",
});

export const metadata: Metadata = {
  title: "La FaMi - 27.06.2026",
  description:
    "Dear friends & family members, we’re so excited to share this special moment with you! As we begin our journey together, we’d love for you to join us in celebrating our big day. Here, you’ll find all the details you need - our story, event schedule, venue information, RSVP and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${regular.variable} ${medium.variable} ${bold.variable} ${garamond.variable} ${corsiva.variable}`}
    >
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
