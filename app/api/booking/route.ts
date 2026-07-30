import { NextResponse } from "next/server";
import { Resend } from "resend";

type BookingPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const { name, email, message }: BookingPayload = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Informed Family Booking <booking@tifbhub.com>",
    to: process.env.JULIET_EMAIL as string,
    reply_to: email,
    subject: `New booking request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
