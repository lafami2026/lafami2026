import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

interface InviteOptions {
  name: string;
  guestName?: string;
}

export const generateInvite = async ({
  name,
  guestName,
}: InviteOptions): Promise<Uint8Array> => {
  const templatePath = path.join(process.cwd(), "public", "wedding-invite.pdf");
  const templateBytes: Buffer = fs.readFileSync(templatePath);

  const pdfDoc = await PDFDocument.load(templateBytes);
  const page = pdfDoc.getPages()[3];
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const nameText: string = guestName ? `${name} & ${guestName}` : name;
  const nameSize = 10;
  const nameWidth: number = font.widthOfTextAtSize(nameText, nameSize);

  page.drawText(nameText, {
    // x: (width - nameWidth) / 2,
    x: width * 0.12,
    y: height * 0.56, // ← adjust to match your template
    size: nameSize,
    font,
    color: rgb(0.52, 0.27, 0.12),
  });

  return pdfDoc.save();
};
