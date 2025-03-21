import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { hash } from "bcryptjs";
import { registerSchema } from "../../../validationSchemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validate
    const validatedData = registerSchema.parse(body);

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
