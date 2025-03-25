"use client";
import React, { useMemo, useState } from "react";
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
  // Filtering stats
  const [filters, setFilters] = useState<{
    category: string;
    importance: string;
    courseId: number | "ALL";
  }>({
    category: "ALL",
    importance: "ALL",
    courseId: "ALL",
  });

  // Filter todos
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchCategory =
        filters.category === "ALL" || todo.category === filters.category;
      const matchImportance =
        filters.importance === "ALL" ||
        String(todo.importance) === filters.importance;
      const matchCourse =
        filters.courseId === "ALL" || todo.courseId === filters.courseId;

      return matchCategory && matchImportance && matchCourse;
    });
  }, [todos, filters]);

  return (
    <Stack>
      <FilterTodos
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />

      <Divider my="md" />
      <TodosTable todos={filteredTodos} courses={courses} />
    </Stack>
  );
};

export default ClientTodosManager;
