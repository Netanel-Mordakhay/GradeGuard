import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    // Check if user with same mail already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password lvl 10
    const hashedPassword = await hash(password, 10);

    // create new account
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword, // Hashed
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
