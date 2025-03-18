import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

/* Validation object's schema */
const createCourseSchema = z.object({
  title: z.string().min(3).max(255),
  grade: z.number().min(0).max(100).optional(),
});

export async function POST(request: NextRequest) {
  // Parse the request body from JSON
  const body = await request.json();

  // Validate body
  const validation = createCourseSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  // Create a new course in the DB if valid
  const newCourse = await prisma.course.create({
    data: {
      title: body.title,
      grade: body.grade,
    },
  });

  // Return response 201 created
  return NextResponse.json(newCourse, { status: 201 }); // Object created
}
