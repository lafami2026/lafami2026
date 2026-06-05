import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

interface InviteOptions {
  name: string;
  guestName?: string;
}

export const generateInvite = async ({
  name,
  guestName,
}: InviteOptions): Promise<Uint8Array> => {
  const templatePath = path.join(process.cwd(), 'public', 'invite-template.pdf');
  const templateBytes: Buffer = fs.readFileSync(templatePath);

  const pdfDoc = await PDFDocument.load(templateBytes);
  const page = pdfDoc.getPages()[0];
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const nameText: string = guestName ? `${name} & ${guestName}` : name;
  const nameSize = 26;
  const nameWidth: number = font.widthOfTextAtSize(nameText, nameSize);

  page.drawText(nameText, {
    // x: (width - nameWidth) / 2,
    x: width * 0.,
    y: height * 0.27, // ← adjust to match your template
    size: nameSize,
    font,
    color: rgb(0.35, 0.18, 0.08),
  });

  return pdfDoc.save();
};