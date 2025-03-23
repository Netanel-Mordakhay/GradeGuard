import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";

export async function getUserStats() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const courses = await prisma.course.findMany({
    where: { userId: session.user.id },
  });

  const gradedCourses = courses.filter(
    (c) => typeof c.grade === "number" && !c.isBinary
  );

  const totalWeighted = gradedCourses.reduce((acc, c) => {
    const credits = c.credits ?? 0;
    const grade = c.grade ?? 0;
    return acc + grade * credits;
  }, 0);

  const totalCreditsForAverage = gradedCourses.reduce(
    (acc, c) => acc + (c.credits ?? 0),
    0
  );

  const average =
    totalCreditsForAverage === 0 ? 0 : totalWeighted / totalCreditsForAverage;

  const allGraded = courses.filter((c) => typeof c.grade === "number");
  const latest = allGraded.at(-1)?.grade ?? null;

  const totalCredits = courses.reduce((acc, c) => acc + (c.credits ?? 0), 0);

  return {
    totalCourses: courses.length,
    totalCredits,
    averageGrade: Number(average.toFixed(1)),
    latestGrade: latest,
  };
}
