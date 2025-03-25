import TwoColumns from "@/app/components/layout/TwoColumns";
import TodoForm from "@/app/components/todos/TodoForm";
import TodosList from "@/app/components/todos/TodosList";
import { getUserCourses } from "@/lib/getUserCourses";
import React from "react";

export const metadata = {
  title: "GradeGuard - Assignments",
  description: "Manage your assignments efficiently with GradeGuard",
};

const AssignmentsPage = async () => {
  const { courses } = await getUserCourses();
  return (
    <TwoColumns>
      <TodosList />
      <TodoForm courses={courses} />
    </TwoColumns>
  );
};

export default AssignmentsPage;
