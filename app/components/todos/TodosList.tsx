import { getUserTodos } from "@/lib/getUserTodos";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import ClientTodosManager from "./ClientTodosManager";
import { Course } from "@/app/validationSchemas";

interface Props {
  courses: Course[];
}

const TodosList = async ({ courses }: Props) => {
  const { todos, error } = await getUserTodos();

  if (error) {
    return <DefaultCard title="My Courses">Unauthorized</DefaultCard>;
  }
  return (
    <DefaultCard title="My Assignments & Exams">
      <ClientTodosManager todos={todos} courses={courses} />
    </DefaultCard>
  );
};

export default TodosList;
