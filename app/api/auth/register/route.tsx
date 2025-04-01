import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { hash } from "bcryptjs";
import { registerSchema } from "../../../validationSchemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { captchaToken, ...formData } = body;

    // Check CAPTCHA
    if (!captchaToken) {
      return NextResponse.json({ error: "Missing captcha" }, { status: 400 });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

    const captchaRes = await fetch(verificationUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${captchaToken}`,
    });

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // validate
    const validatedData = registerSchema.parse(formData);
    const { firstName, lastName, email, password } = validatedData;

    // Check if already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password lvl 10
    const hashedPassword = await hash(password, 10);

    // new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { id: newUser.id, email: newUser.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { error: "Invalid input or internal server error" },
      { status: 400 }
    );
  }
}
