import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import { normalizeCourse } from "@/app/validationSchemas";

export async function getUserCourses() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return { error: "Unauthorized", courses: [] };

  const coursesFromDB = await prisma.course.findMany({
    where: { userId: session.user.id },
  });

  const courses = coursesFromDB.map(normalizeCourse);

  return { courses, userId: session.user.id };
}
