import { saveRsvpToSheet, SheetForm } from "@/lib/saveRsvp";
import { generateInvite } from "@/lib/generateInvite";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SheetForm;

    // Basic validation
    if (!body.firstname || !body.lastname || !body.phone || !body.phone) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Run both tasks in parallel
    const [sheetResult, pdfBytes] = await Promise.all([
      saveRsvpToSheet(body),
      generateInvite({
        name: `${body.firstname} ${body.lastname}`,
        // guestName: body.gfirstname
        //   ? `${body.gfirstname} ${body.glastname ?? ""}`
        //   : undefined,
      }),
    ]);

    // Return PDF as downloadable response
    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="invite-${body.firstname}.pdf"`,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("RSVP route error:", err);
    return new Response(JSON.stringify({ message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
