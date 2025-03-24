import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import {
  createCourseSchema,
  normalizeCourseForExport,
} from "@/app/validationSchemas";
const { Parser } = require("json2csv");

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dbCourses = await prisma.course.findMany({
    where: { userId: session.user.id },
    orderBy: { title: "asc" },
  });

  const cleanCourses = dbCourses.map(normalizeCourseForExport);

  const validCourses = cleanCourses.filter(
    (course) => createCourseSchema.safeParse(course).success
  );

  const parser = new Parser();
  const csv = parser.parse(validCourses);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=courses.csv",
    },
  });
}
