import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import CoursesTable from "./CourseTable";
import { normalizeCourse } from "@/app/validationSchemas";
import { getUserCourses } from "@/lib/getUserCourses";

const CoursesList = async () => {
  // Get user's session
  /*
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }

  // Logged user courses
  // TODO: Replace with useCourses() hook later
  const coursesFromDB = await prisma.course.findMany({
    where: { userId: session.user.id },
  });

  const courses = coursesFromDB.map(normalizeCourse);
  */

  const { courses, error } = await getUserCourses();

  if (error) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }

  return (
    <DefaultCard title="My Courses">
      <CoursesTable courses={courses} />
    </DefaultCard>
  );
};

export default CoursesList;
