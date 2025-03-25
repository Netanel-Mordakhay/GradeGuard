import React from "react";
import { Course, TodoWithCourse } from "@/app/validationSchemas";
import TodosTable from "./TodosTable";
import { Divider, Stack } from "@mantine/core";
import FilterTodos from "./FilterTodos";

const ClientTodosManager = ({
  todos,
  courses,
}: {
  todos: TodoWithCourse[];
  courses: Course[];
}) => {
  return (
    <Stack>
      <FilterTodos />
      <Divider my="md" />
      <TodosTable todos={todos} courses={courses} />
    </Stack>
  );
};

export default ClientTodosManager;
