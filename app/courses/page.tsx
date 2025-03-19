import React from "react";
import TwoColumns from "../components/layout/TwoColumns";
import NewCourseForm from "../components/courses/NewCourseForm";
import CoursesList from "../components/courses/CoursesList";
import delay from "delay";

const CoursesPage = async () => {
  await delay(2000);
  return (
    <TwoColumns>
      <CoursesList />
      <NewCourseForm />
    </TwoColumns>
  );
};

export default CoursesPage;
