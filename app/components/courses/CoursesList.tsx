import prisma from "@/prisma/client";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import {} from "@mantine/core";
import CoursesTable from "./CourseTable";
import { normalizeCourse } from "@/app/validationSchemas";

const CoursesList = async () => {
  // Get courses from db and normalize
  const coursesFromDB = await prisma.course.findMany();
  const courses = coursesFromDB.map(normalizeCourse);

  return (
    // Card and sending courses to courses's table
    <DefaultCard title="My Courses">
      <CoursesTable courses={courses} />
    </DefaultCard>
  );
};

export default CoursesList;
