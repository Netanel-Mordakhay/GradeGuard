import React from "react";
import DefaultCard from "../global/DefaultCard";
import CoursesTable from "./CourseTable";
import { getUserCourses } from "@/lib/getUserCourses";
import FilterCourses from "./FilterCourses";
import { Divider } from "@mantine/core";
import ClientCoursesManager from "./ClientCourseManager";

const CoursesList = async () => {
  const { courses, error } = await getUserCourses();

  if (error) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }

  return (
    <DefaultCard title="My Courses">
      <ClientCoursesManager courses={courses} />
    </DefaultCard>
  );
};

export default CoursesList;
