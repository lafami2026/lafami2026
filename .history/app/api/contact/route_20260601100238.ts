import { google } from "googleapis";

// Define your type for clarity
type SheetForm = {
  firstname: string;
  lastname: string;
  email: string;
  attendingValue: string;
  gattendingValue: string;
  gfirstname?: string;
  glastname?: string;
};

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the incoming request
    const body: SheetForm = await request.json();

    // 2. Robust private key cleaning (fixes deployment issues)
    const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, "")
      : undefined;
      
    // Prepare authentication with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Append values to your Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.firstname,
            body.lastname,
            body.email,
            body.attendingValue,
            body.gattendingValue,
            body.gfirstname || "",
            body.glastname || "",
          ],
        ],
      },
    });

    // Return a successful response with JSON
    return new Response(JSON.stringify({ data: response.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : "Something went wrong";
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
