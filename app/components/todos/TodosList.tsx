import { getUserTodos } from "@/lib/getUserTodos";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import ClientTodosManager from "./ClientTodosManager";

const TodosList = async () => {
  const { todos, error } = await getUserTodos();

  if (error) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }
  return (
    <DefaultCard title="My Assignments & Exams">
      <ClientTodosManager todos={todos} />
    </DefaultCard>
  );
};

export default TodosList;
