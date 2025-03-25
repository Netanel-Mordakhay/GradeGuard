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
  const [category, setCategory] = useState("ALL");
  const [importance, setImportance] = useState("ALL");
  const [courseId, setCourseId] = useState<number | "ALL">("ALL");

  // Filter todos
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchCategory = category === "ALL" || todo.category === category;

      const matchImportance =
        importance === "ALL" || String(todo.importance) === importance;

      const matchCourse = courseId === "ALL" || todo.courseId === courseId;

      return matchCategory && matchImportance && matchCourse;
    });
  }, [todos, category, importance, courseId]);

  return (
    <Stack>
      <FilterTodos
        category={category}
        setCategory={setCategory}
        importance={importance}
        setImportance={setImportance}
        courseId={courseId}
        setCourseId={setCourseId}
        courses={courses}
      />
      <Divider my="md" />
      <TodosTable todos={filteredTodos} courses={courses} />
    </Stack>
  );
};

export default ClientTodosManager;
