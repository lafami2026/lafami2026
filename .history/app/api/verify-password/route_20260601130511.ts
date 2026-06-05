import { NextRequest, NextResponse } from 'next/server';

interface PasswordRequestBody {
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { password } = (await req.json()) as PasswordRequestBody;

  if (!password) {
    return NextResponse.json(
      { success: false, message: 'Password is required.' },
      { status: 400 }
    );
  }

  if (password === process.env.RSVP_PASSWORD) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, message: 'Incorrect invitation code.' },
    { status: 401 }
  );
}