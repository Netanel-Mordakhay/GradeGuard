import prisma from "@/prisma/client";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import {} from "@mantine/core";
import CoursesTable from "./CourseTable";

const CoursesList = async () => {
  const courses = await prisma.course.findMany();

  return (
    <DefaultCard title="My Courses">
      <CoursesTable courses={courses} />
    </DefaultCard>
  );
};

export default CoursesList;
