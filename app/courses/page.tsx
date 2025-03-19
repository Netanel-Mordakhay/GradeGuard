import React from "react";
import TwoColumns from "../components/layout/TwoColumns";
import NewCourseForm from "../components/courses/NewCourseForm";
import CoursesList from "../components/courses/CoursesList";

const CoursesPage = () => {
  return (
    <TwoColumns>
      <CoursesList />
      <NewCourseForm />
    </TwoColumns>
  );
};

export default CoursesPage;
