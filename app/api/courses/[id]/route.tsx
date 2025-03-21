import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createCourseSchema } from "@/app/validationSchemas";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Parse the request body from JSON
    const body = await request.json();

    // Validate body
    const validation = createCourseSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    // Gather updated course data
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

    // Return response
    return NextResponse.json(updatedCourse, { status: 200 });

    // Return error
  } catch (error) {
    return NextResponse.json(
      { error: "Course not found or update failed" },
      { status: 404 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Request
    await prisma.course.delete({
      where: { id: Number(params.id) },
    });

    // Response
    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );

    // Error
  } catch (error) {
    return NextResponse.json(
      { error: "Course not found or delete failed" },
      { status: 404 }
    );
  }
}
