import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactSchema } from "@/app/validationSchemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    const subjectLine =
      subject === "bug"
        ? "Bug Report from Contact Form"
        : "New Message from Contact Form";

    await resend.emails.send({
      from: "GradeGuard Contact <onboarding@resend.dev>",
      to: "gradeguard.app@gmail.com",
      replyTo: email,
      subject: subjectLine,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
