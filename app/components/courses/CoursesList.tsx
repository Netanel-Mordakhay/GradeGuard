import React from "react";
import DefaultCard from "../global/DefaultCard";
import { getUserCourses } from "@/lib/getUserCourses";
import ClientCoursesManager from "./ClientCourseManager";
import { getLastCourse } from "@/lib/getLastCourse";

const CoursesList = async () => {
  const { courses, error } = await getUserCourses();
  const lastCourse = await getLastCourse();

  if (error) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }

  return (
    <DefaultCard title="My Courses">
      <ClientCoursesManager courses={courses} defaultFilters={lastCourse} />
    </DefaultCard>
  );
};

export default CoursesList;
