import React from "react";
import TwoColumns from "../../components/layout/TwoColumns";
import NewCourse from "../../components/courses/CourseForm";
import CoursesList from "../../components/courses/CoursesList";

export const metadata = {
  title: "GradeGuard - Courses",
  description: "Manage your courses efficiently with GradeGuard",
};

const CoursesPage = () => {
  return (
    <TwoColumns>
      <CoursesList />
      <NewCourse />
    </TwoColumns>
  );
};

export default CoursesPage;
