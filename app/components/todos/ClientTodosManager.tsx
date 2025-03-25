import React from "react";
import { Course, TodoWithCourse } from "@/app/validationSchemas";
import TodosTable from "./TodosTable";

const ClientTodosManager = ({
  todos,
  courses,
}: {
  todos: TodoWithCourse[];
  courses: Course[];
}) => {
  return <TodosTable todos={todos} courses={courses} />;
};

export default ClientTodosManager;
