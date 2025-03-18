import React from "react";
import TwoColumns from "../components/layout/TwoColumns";
import NewCourseForm from "../components/courses/NewCourseForm";

const CoursesPage = () => {
  return (
    <TwoColumns>
      <NewCourseForm />
    </TwoColumns>
  );
};

export default CoursesPage;
