import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";

export async function getUserChartData() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const courses = await prisma.course.findMany({
    where: { userId: session.user.id },
  });

  const gradedCourses = courses.filter(
    (c) => typeof c.grade === "number" && !c.isBinary
  );

  const bySemester: Record<string, { sum: number; credits: number }> = {};

  for (const course of gradedCourses) {
    const semesterKey = `${course.year}-${course.semester}`;
    const credits = course.credits ?? 0;
    const grade = course.grade ?? 0;

    if (!bySemester[semesterKey]) {
      bySemester[semesterKey] = { sum: 0, credits: 0 };
    }

    bySemester[semesterKey].sum += grade * credits;
    bySemester[semesterKey].credits += credits;
  }

  const semesters = Object.keys(bySemester).sort();
  const chartData: {
    semester: string;
    semesterAverage: number;
    overallAverage: number;
  }[] = [];

  let totalSum = 0;
  let totalCredits = 0;

  for (const sem of semesters) {
    const { sum, credits } = bySemester[sem];
    const semAvg = credits === 0 ? 0 : sum / credits;

    totalSum += sum;
    totalCredits += credits;

    const overallAvg = totalCredits === 0 ? 0 : totalSum / totalCredits;

    chartData.push({
      semester: sem,
      semesterAverage: Number(semAvg.toFixed(1)),
      overallAverage: Number(overallAvg.toFixed(1)),
    });
  }

  return chartData;
}
