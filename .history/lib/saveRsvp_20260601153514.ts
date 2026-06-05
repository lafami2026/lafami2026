import { google } from "googleapis";


export type SheetForm = {
  firstname: string;
  lastname: string;
  email: string;
  attendingValue: string;
  gattendingValue: string;
  gfirstname?: string;
  glastname?: string;
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
      body.gattendingValue,
      body.gfirstname || "—",
      body.glastname || "—",
      new Date().toISOString(),
    ],
  ];

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });

  return res.data;
}
