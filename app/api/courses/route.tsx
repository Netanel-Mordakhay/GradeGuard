import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createCourseSchema } from "../../validationSchemas";

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
      credits: body.credits,
      isBinary: body.isBinary,
      year: body.year,
      semester: body.semester,
    },
  });

  // Return response 201 created
  return NextResponse.json(newCourse, { status: 201 }); // Object created
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const updatedCourse = await prisma.course.update({
    where: { id: Number(params.id) },
    data: {
      title: body.title,
      grade: body.grade,
      credits: body.credits,
      isBinary: body.isBinary,
      year: body.year,
      semester: body.semester,
    },
  });

  return NextResponse.json(updatedCourse);
}
