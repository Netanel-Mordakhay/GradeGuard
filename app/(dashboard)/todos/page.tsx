import TwoColumns from "@/app/components/layout/TwoColumns";
import TodoForm from "@/app/components/todos/TodoForm";
import TodosList from "@/app/components/todos/TodosList";
import React from "react";

export const metadata = {
  title: "GradeGuard - Assignments",
  description: "Manage your assignments efficiently with GradeGuard",
};

const AssignmentsPage = () => {
  return (
    <TwoColumns>
      <TodosList />
      <TodoForm />
    </TwoColumns>
  );
};

export default AssignmentsPage;
