import React from "react";
import { TodoWithCourse } from "@/app/validationSchemas";
import TodosTable from "./TodosTable";

const ClientTodosManager = ({ todos }: { todos: TodoWithCourse[] }) => {
  return <TodosTable todos={todos} />;
};

export default ClientTodosManager;
