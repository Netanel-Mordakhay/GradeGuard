import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";

const yearOrder = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  SIXTH: 6,
};

const semesterOrder = {
  A: 1,
  B: 2,
  SUMMER: 3,
};

export async function getLastCourse() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const courses = await prisma.course.findMany({
    where: { userId: session.user.id },
    select: { year: true, semester: true },
  });

  const sorted = [...courses].sort((a, b) => {
    const yearA = a.year && yearOrder[a.year] ? yearOrder[a.year] : 0;
    const yearB = b.year && yearOrder[b.year] ? yearOrder[b.year] : 0;
    if (yearA !== yearB) return yearB - yearA;

    const semA =
      a.semester && semesterOrder[a.semester] ? semesterOrder[a.semester] : 0;
    const semB =
      b.semester && semesterOrder[b.semester] ? semesterOrder[b.semester] : 0;
    return semB - semA;
  });

  const last = sorted[0];
  return last
    ? { year: last.year ?? "ALL", semester: last.semester ?? "ALL" }
    : { year: "ALL", semester: "ALL" };
}
