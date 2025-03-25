import { getServerSession } from "next-auth";
import prisma from "@/prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const courses = await prisma.course.findMany({
    where: { userId: session.user.id },
  });

  const random = Math.random() * 10 - 5;
  let totalGrades = 0;
  let totalEligibleCourses = 0;

  for (let i = 0; i < courses.length; i++) {
    const currentCourse = courses[i].grade;
    if (currentCourse) {
      totalEligibleCourses += 1;
      totalGrades += currentCourse;
    }
  }

  const anticipatedGrade = totalGrades / totalEligibleCourses + random;

  return NextResponse.json({ anticipatedGrade });
}
