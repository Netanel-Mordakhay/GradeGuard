import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"; // Import הגדרות האימות
import prisma from "@/prisma/client";
import { createCourseSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  try {
    // קבלת הסשן של המשתמש
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // קבלת הנתונים מהבקשה
    const body = await request.json();

    // אימות הנתונים
    const validation = createCourseSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    // יצירת קורס חדש עם userId
    const newCourse = await prisma.course.create({
      data: {
        title: body.title,
        grade: body.grade,
        credits: body.credits,
        isBinary: body.isBinary,
        year: body.year,
        semester: body.semester,
        userId: session.user.id, // קישור לקורס ליוזר המחובר
      },
    });

    return NextResponse.json(newCourse, { status: 201 }); // קורס נוצר בהצלחה
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Internal server error while creating course" },
      { status: 500 }
    );
  }
}
