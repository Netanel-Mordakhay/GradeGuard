import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import CoursesTable from "./CourseTable";
import { normalizeCourse } from "@/app/validationSchemas";

const CoursesList = async () => {
  // קבלת סשן המשתמש המחובר
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }

  // שליפת קורסים של המשתמש המחובר בלבד
  const coursesFromDB = await prisma.course.findMany({
    where: { userId: session.user.id },
  });

  const courses = coursesFromDB.map(normalizeCourse);

  return (
    <DefaultCard title="My Courses">
      <CoursesTable courses={courses} />
    </DefaultCard>
  );
};

export default CoursesList;
