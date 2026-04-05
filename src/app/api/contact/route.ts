import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Sva polja su obavezna" },
        { status: 400 }
      );
    }

    // TODO: Integrisati sa Resend ili Formspree za slanje emaila
    // Za sada, samo logujemo poruku
    console.log("Nova poruka:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Greška pri slanju poruke" },
      { status: 500 }
    );
  }
}
