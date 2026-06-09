import { google } from "googleapis";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}
//Date Formating
function formatAsDDMMYYYY_HHMM(date: Date): string {
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1); // months are 0-based
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return `${day}/${month}/${year} at ${hours}:${minutes}`;
}

export type SheetForm = {
  firstname: string;
  lastname: string;
  email: string;
  attendingValue: string;
  phone:
  // gattendingValue: string;
  // gfirstname?: string;
  // glastname?: string;
};

const getSheetsClient = () => {
  const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY
    ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, "")
    : undefined;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: formattedPrivateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ auth, version: "v4" });
};

export async function saveRsvpToSheet(body: SheetForm) {
  if (!process.env.GOOGLE_SPREADSHEET_ID) {
    throw new Error("Missing GOOGLE_SPREADSHEET_ID");
  }

  const sheets = getSheetsClient();

  const values = [
    [
      body.firstname,
      body.lastname,
      body.email,
      body.attendingValue,
      "—",
      "—",
      "—",
      // body.gattendingValue,
      // body.gfirstname || "—",
      // body.glastname || "—",
      formatAsDDMMYYYY_HHMM(new Date()),
    ],
  ];

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "Sheet1!A:H",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });

  return res.data;
}
