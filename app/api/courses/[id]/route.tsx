import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createCourseSchema } from "@/app/validationSchemas";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validation = createCourseSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

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

    return NextResponse.json(updatedCourse, { status: 200 });
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
    await prisma.course.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Course not found or delete failed" },
      { status: 404 }
    );
  }
}
