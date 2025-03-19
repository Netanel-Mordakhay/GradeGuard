import React from "react";
import TwoColumns from "../components/layout/TwoColumns";
import NewCourseForm from "../components/courses/NewCourseForm";
import CoursesList from "../components/courses/CoursesList";

export const metadata = {
  title: "GradeGuard - Courses",
  description: "Manage your courses efficiently with GradeGuard",
};

const CoursesPage = () => {
  return (
    <TwoColumns>
      <CoursesList />
      <NewCourseForm />
    </TwoColumns>
  );
};

export default CoursesPage;
